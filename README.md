## Configuring Windows Sandbox

Microsoft Windows comes with [Sandbox](https://learn.microsoft.com/en-us/windows/security/application-security/application-isolation/windows-sandbox/windows-sandbox-overview), a really useful tool that helps you test something on Windows in an isolated environment.

You can configure Sandbox by launching it with a configuration file, which is an XML file with the `.wsb` file extension.

This repository contains an XML Schema that assists you creating such `.wsb` files.

Simply create a file with this content:

```xml
<Configuration
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:noNamespaceSchemaLocation="https://github.com/mlocati/windows-sandbox-configuration-schema/releases/latest/download/wsb.xsd"
>
</Configuration>
```

If you edit that file with a editor that understands XML and XSD (for example, Visual Studio Code), it will suggest you all the possible configuration values [accordingly to the documentation](https://learn.microsoft.com/en-us/windows/security/application-security/application-isolation/windows-sandbox/windows-sandbox-configure-using-wsb-file).


## Do you really want to say thank you?

You can offer me a [monthly coffee](https://github.com/sponsors/mlocati) or a [one-time coffee](https://paypal.me/mlocati) :wink:
