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
  json: {
    title: getTitle("/formatters/json"),
    indentTitle: "Indentation",
    indentOptions: [
      { name: "2 spaces", value: "2-spaces" },
      { name: "4 spaces", value: "4-spaces" },
      { name: "1 tab", value: "1-tab" },
      { name: "minified", value: "minified" },
    ],
  },
  jsonYaml: {
    title: getTitle("/converters/json-yaml"),
  },
  jwtDecoder: {
    title: getTitle("/encoders-decoders/jwt-decoder"),
    jwtTokenTitle: "JWT Token",
    headerTitle: "Header",
    payloadTitle: "Payload",
  },
  loremIpsum: {
    title: getTitle("/generators/lorem-ipsum"),
    typeTitle: "Type",
    typeSubtitle: "Generate words, sentences or paragraphs of Lorem Ipsum",
    lengthTitle: "Length",
    lengthSubtitle: "Number of words, sentences or paragraphs to generate",
    typeOptions: [
      { name: "Words", value: "words" },
      { name: "Sentences", value: "sentences" },
      { name: "Paragraphs", value: "paragraphs" },
    ],
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
    baseOptions: [
      { name: "Octal", value: "octal" },
      { name: "Binary", value: "binary" },
      { name: "Decimal", value: "decimal" },
      { name: "Hexadecimal", value: "hexadecimal" },
    ],
  },
  settings: {
    title: getTitle("/settings"),
    languageTitle: "Language",
    languageOptions: [
      { name: "English", value: "en" },
      { name: "Japanese", value: "ja" },
    ],
    themeTitle: "App Theme",
    themeSubtitle: "Select which app theme to display",
    themeOptions: [
      { name: "Light", value: "light" },
      { name: "Dark", value: "dark" },
    ],
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
    versionOptions: [
      { name: "1", value: 1 },
      { name: "4 (GUID)", value: 4 },
    ],
  },
};
