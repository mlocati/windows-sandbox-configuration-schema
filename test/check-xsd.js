const path = require("path");
var fs = require('fs');
const { XMLValidator } = require("fast-xml-parser");

const wsbPath = path.resolve(__dirname, "..", "wsb.xsd");
const wsbContents = fs.readFileSync(wsbPath).toString();
const result = XMLValidator.validate(wsbContents);
if (result !== true) {
    process.stdout.write(`The file wsb.xsd is NOT a valid XML file: ${result.err.msg}\nLine: ${result.err.line}\nColumn: ${result.err.col}\n`);
    process.exit(1);
}
process.stdout.write('The file wsb.xsd is a valid XML file\n');
