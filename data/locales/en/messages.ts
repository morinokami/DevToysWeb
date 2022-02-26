import { FormatOptions } from "sql-formatter";

export const t = {
  common: {
    configTitle: "Configuration",
    inputTitle: "Input",
    outputTitle: "Output",
    copyTitle: "Copy",
    pasteTitle: "Paste",
    clearTitle: "Clear",
    openFiletitle: "Load a file",
  },
  base64: {
    title: "Base 64 Encoder / Decoder",
    conversionTitle: "Conversion",
    conversionSubtitle: "Select which conversion mode you want to use",
    encodeDesc: "Encode the input",
    encodeText: "Encode",
    decodeText: "Decode",
  },
  checksum: {
    title: "Checksum",
  },
  gzip: {
    title: "GZip Compress / Decompress",
    compressTitle: "GZip Compress/Decompress",
    compressDesc:
      "Select whether the input should be compressed or decompressed",
    compressText: "Compress",
    decompressText: "Decompress",
  },
  hash: {
    title: "Hash Generator",
    uppercaseTitle: "Uppercase",
    uppercaseDesc: "Convert the output to uppercase",
    md5Title: "MD5",
    sha1Title: "SHA1",
    sha256Title: "SHA256",
    sha512Title: "SHA512",
  },
  html: {
    title: "HTML Encoder / Decoder",
    conversionTitle: "Conversion",
    conversionSubtitle: "Select which conversion mode you want to use",
    encodeDesc: "Encode the input",
    encodeText: "Encode",
    decodeText: "Decode",
  },
  json: {
    title: "JSON Formatter",
    indentTitle: "Indentation",
    indentOptions: [
      { name: "2 spaces", value: "  " },
      { name: "4 spaces", value: "    " },
      { name: "1 tab", value: "\t" },
      { name: "minified", value: undefined },
    ],
  },
  jsonYaml: {
    title: "JSON <> YAML Converter",
    conversionTitle: "Conversion",
    conversionSubtitle: "Select which conversion mode you want to use",
    conversionOptions: [
      { name: "JSON to YAML", value: "json-to-yaml" },
      { name: "YAML to JSON", value: "yaml-to-json" },
    ],
    indentTitle: "Indentation",
    indentOptions: [
      { name: "2 spaces", value: 2 },
      { name: "4 spaces", value: 4 },
    ],
  },
  jwtDecoder: {
    title: "JWT Decoder",
    jwtTokenTitle: "JWT Token",
    headerTitle: "Header",
    payloadTitle: "Payload",
  },
  loremIpsum: {
    title: "Lorem Ipsum Generator",
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
    title: "Number Base Converter",
    formatNumberTitle: "Format number",
    formatNumberDesc: "Format the result",
    inputTypeTitle: "Input type",
    inputTypeSubtitle: "Select which Input type you want to use",
    hexTitle: "Hexadecimal",
    decimalTitle: "Decimal",
    octalTitle: "Octal",
    binaryTitle: "Binary",
    baseOptions: [
      { name: "Octal", value: 8 },
      { name: "Binary", value: 2 },
      { name: "Decimal", value: 10 },
      { name: "Hexadecimal", value: 16 },
    ],
  },
  settings: {
    title: "Settings",
    languageTitle: "Language",
    themeTitle: "App Theme",
    themeSubtitle: "Select which app theme to display",
    themeOptions: [
      { name: "Light", value: "light" },
      { name: "Dark", value: "dark" },
    ],
  },
  sql: {
    title: "SQL Formatter",
    languageTitle: "Language",
    languageOptions: [
      { name: "Db2", value: "db2" },
      { name: "MariaDB", value: "mariadb" },
      { name: "MySQL", value: "mysql" },
      { name: "N1QL", value: "n1ql" },
      { name: "PL/SQL", value: "plsql" },
      { name: "PostgreSQL", value: "postgresql" },
      { name: "AmazonRedshift", value: "redshift" },
      { name: "Spark SQL", value: "spark" },
      { name: "Standard SQL", value: "sql" },
      { name: "Transact-SQL", value: "tsql" },
    ] as { name: string; value: FormatOptions["language"] }[],
    indentTitle: "Indentation",
    indentOptions: [
      { name: "2 spaces", value: "  " },
      { name: "4 spaces", value: "    " },
    ],
  },
  url: {
    title: "URL Encoder / Decoder",
    conversionTitle: "Conversion",
    conversionSubtitle: "Select which conversion mode you want to use",
    encodeDesc: "Encode the input",
    encodeText: "Encode",
    decodeText: "Decode",
  },
  uuid: {
    title: "UUID Generator",
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
  xml: {
    title: "XML Formatter",
    indentTitle: "Indentation",
    indentOptions: [
      { name: "2 spaces", value: "  " },
      { name: "4 spaces", value: "    " },
    ],
  },
};
