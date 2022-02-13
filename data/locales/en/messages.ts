import { getTitle } from "./nav";

export const t = {
  common: {
    configTitle: "Configuration",
    inputTitle: "Input",
    outputTitle: "Output",
  },
  base64: {
    title: getTitle("/encoders-decoders/base64"),
    conversionTitle: "Conversion",
    conversionSubtitle: "Select which conversion mode you want to use",
    encodeDesc: "Encode the input",
    encodeText: "Encode",
    decodeText: "Decode",
  },
  hash: {
    title: getTitle("/generators/hash"),
    uppercaseTitle: "Uppercase",
    uppercaseDesc: "Convert the output to uppercase",
    md5Title: "MD5",
    sha1Title: "SHA1",
    sha256Title: "SHA256",
    sha512Title: "SHA512",
  },
  html: {
    title: getTitle("/encoders-decoders/html"),
    conversionTitle: "Conversion",
    conversionSubtitle: "Select which conversion mode you want to use",
    encodeDesc: "Encode the input",
    encodeText: "Encode",
    decodeText: "Decode",
  },
  numberBase: {
    title: getTitle("/converters/number-base"),
    formatNumberTitle: "Format number",
    formatNumberDesc: "Format the result",
    inputTypeTitle: "Input type",
    inputTypeSubtitle: "Select which Input type you want to use",
    hexTitle: "Hexadecimal",
    decimalTitle: "Decimal",
    octalTitle: "Octal",
    binaryTitle: "Binary",
  },
  settings: {
    title: getTitle("/settings"),
    lightTitle: "Light",
    darkTitle: "Dark",
  },
  url: {
    title: getTitle("/encoders-decoders/url"),
    conversionTitle: "Conversion",
    conversionSubtitle: "Select which conversion mode you want to use",
    encodeDesc: "Encode the input",
    encodeText: "Encode",
    decodeText: "Decode",
  },
  uuid: {
    title: getTitle("/generators/uuid"),
    hyphenateTitle: "Hyphens",
    hyphenateDesc: "Add hyphens to the output",
    uppercaseTitle: "Uppercase",
    uppercaseDesc: "Convert the output to uppercase",
    uuidVersionTitle: "UUID Version",
    uuidVersionSubtitle: "Choose the version of UUID to generate",
    generateTitle: "Generate",
    generateButtonText: "Generate UUID(s)",
  },
};
