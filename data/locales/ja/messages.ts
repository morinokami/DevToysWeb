import { getTitle } from "./nav";

export const t = {
  common: {
    configTitle: "設定",
    inputTitle: "インプット",
    outputTitle: "アウトプット",
  },
  base64: {
    title: getTitle("/encoderes-decoders/base64"),
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
  },
  numberBase: {
    title: getTitle("/converters/number-base"),
  },
  url: {
    title: getTitle("/encoders-decoders/url"),
  },
  uuid: {
    title: getTitle("/generators/uuid"),
  },
};
