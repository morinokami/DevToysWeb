import {
  IconAllTools,
  IconBase64,
  IconChecksum,
  IconConverters,
  IconEncodersDecoders,
  IconFormatters,
  IconGenerators,
  IconGZip,
  IconHash,
  IconHtml,
  IconJson,
  IconJWT,
  IconLoremIpsum,
  IconNumberBase,
  IconSettings,
  IconSql,
  IconUrl,
  IconUuid,
  IconXml,
} from "../../icon";
import { Nav } from "../types";

const localePath = "";

export const nav: Nav = [
  {
    title: "All tools",
    href: `${localePath}/`,
    icon: IconAllTools,
  },
  {
    title: "Converters",
    href: `${localePath}/converters`,
    icon: IconConverters,
    items: [
      {
        title: "JSON <> YAML",
        longTitle: "JSON <> YAML Converter",
        href: `${localePath}/converters/json-yaml`,
        icon: IconConverters,
        desc: "Convert JSON data to YAML and vice versa",
      },
      {
        title: "Number Base",
        longTitle: "Number Base Converter",
        href: `${localePath}/converters/number-base`,
        icon: IconNumberBase,
        desc: "Convert numbers from one base to another",
      },
    ],
  },
  {
    title: "Encoders / Decoders",
    href: `${localePath}/encoders-decoders`,
    icon: IconEncodersDecoders,
    items: [
      {
        title: "HTML",
        longTitle: "HTML Encoder / Decoder",
        href: `${localePath}/encoders-decoders/html`,
        icon: IconHtml,
        desc: "Encode or decode all the applicable characters to their corresponding HTML entities",
      },
      {
        title: "URL",
        longTitle: "URL Encoder / Decoder",
        href: `${localePath}/encoders-decoders/url`,
        icon: IconUrl,
        desc: "Encode or decode all the applicable characters to their corresponding URL entities",
      },
      {
        title: "Base 64",
        longTitle: "Base 64 Encoder / Decoder",
        href: `${localePath}/encoders-decoders/base64`,
        icon: IconBase64,
        desc: "Encode and decode Base64 data",
      },
      {
        title: "GZip",
        longTitle: "GZip Compress / Decompress",
        href: `${localePath}/encoders-decoders/gzip`,
        icon: IconGZip,
        desc: "Compress or decompress strings",
      },
      {
        title: "JWT Decoder",
        longTitle: "JWT Decoder",
        href: `${localePath}/encoders-decoders/jwt-decoder`,
        icon: IconJWT,
        desc: "Decode a JWT header, payload and signature",
      },
    ],
  },
  {
    title: "Formatters",
    href: `${localePath}/formatters`,
    icon: IconFormatters,
    items: [
      {
        title: "JSON",
        longTitle: "JSON Formatter",
        href: `${localePath}/formatters/json`,
        icon: IconJson,
        desc: "Indent or minify JSON data",
      },
      {
        title: "SQL",
        longTitle: "SQL Formatter",
        href: `${localePath}/formatters/sql`,
        icon: IconSql,
        desc: "Indent SQL queries",
      },
      {
        title: "XML",
        longTitle: "XML Formatter",
        href: `${localePath}/formatters/xml`,
        icon: IconXml,
        desc: "Indent or minify XML data",
      },
    ],
  },
  {
    title: "Generators",
    href: `${localePath}/generators`,
    icon: IconGenerators,
    items: [
      {
        title: "Hash",
        longTitle: "Hash Generator",
        href: `${localePath}/generators/hash`,
        icon: IconHash,
        desc: "Calculate MD5, SHA1, SHA256 and SHA512 hash from text data",
      },
      {
        title: "UUID",
        longTitle: "UUID Generator",
        href: `${localePath}/generators/uuid`,
        icon: IconUuid,
        desc: "Generate UUIDs version 1 and 4",
      },
      {
        title: "Lorem Ipsum",
        longTitle: "Lorem Ipsum Generator",
        href: `${localePath}/generators/lorem-ipsum`,
        icon: IconLoremIpsum,
        desc: "Generate Lorem Ipsum placeholder text",
      },
      {
        title: "Checksum",
        longTitle: "Checksum Generator",
        href: `${localePath}/generators/checksum`,
        icon: IconChecksum,
        desc: "Generate an hash with CheckSum based on a file",
      },
    ],
  },
  {
    title: "Text",
    href: `${localePath}/text`,
    items: [
      {
        title: "Markdown Preview",
        longTitle: "Markdown Preview",
        href: `${localePath}/text/markdown-preview`,
        desc: "Preview a Markdown document with a GitHub-like render",
      },
    ],
  },
  {
    title: "Settings",
    href: `${localePath}/settings`,
    icon: IconSettings,
    desc: "Customize DevToysWeb look & feel",
  },
];
