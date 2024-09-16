const path = require("path");
const fs = require("fs");
const validator = require('xsd-schema-validator');

function* listFiles() {
  for (const file of listFilesIn("good")) {
    yield {file, good: true};
  }
  for (const file of listFilesIn("bad")) {
    yield {file, good: false};
  }
}
function* listFilesIn(subdir)
{
    const dir = path.join(__dirname, subdir);
    for (const file of fs.readdirSync(dir)) {
        yield path.join(dir, file);
    }
}

async function check()
{
    const xsdPath = path.resolve(__dirname, "..", "wsb.xsd");
    let allOk = true;
    for (const {file, good} of listFiles()) {
        process.stdout.write(`Checking ${file.substring(__dirname.length + 1)}... `);
        const validating = validator.validateXML({file}, xsdPath);
        if (good) {
            try {
                const result = await validating;
                if (!result.valid) {
                    throw new Error(result.result || result.messages.join('\n'));
                }
                process.stdout.write('passed\n');
            } catch (e) {
                x = new Error();
                x.__toSring
                x.messages
                process.stdout.write((e.message || e.toString()).trim() + '\n');
                allOk = false;
            }
        } else {
            let result;
            try {
                result = await validating;
            } catch (e) {
                result = {valid: false}
            }
            if (result.valid) {
                process.stdout.write('FAILED!\n');
            } else {
                process.stdout.write('passed\n');
            }
        }
    }
    process.exit(allOk ? 0 : 1);
}
return check();
