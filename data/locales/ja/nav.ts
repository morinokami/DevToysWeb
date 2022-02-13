import {
  IconAllTools,
  IconConverters,
  IconEncodersDecoders,
  IconFormatters,
  IconGZip,
  IconHash,
  IconHtml,
  IconJson,
  IconSettings,
  IconSql,
  IconUrl,
  IconXml,
} from "../../icon";
import { Nav } from "../types";

const localePath = "/ja";

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
        desc: "Convert JSON data to YAML and vice versa",
      },
      {
        title: "Number Base",
        longTitle: "Number Base Converter",
        href: `${localePath}/converters/number-base`,
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
        desc: "Generate UUIDs version 1 and 4",
      },
      {
        title: "Lorem Ipsum",
        longTitle: "Lorem Ipsum Generator",
        href: `${localePath}/generators/lorem-ipsum`,
        desc: "Generate Lorem Ipsum placeholder text",
      },
      {
        title: "Checksum",
        longTitle: "Checksum",
        href: `${localePath}/generators/checksum`,
        desc: "Generate an hash with CheckSum based on a file",
      },
    ],
  },
  {
    title: "設定",
    href: `${localePath}/settings`,
    icon: IconSettings,
    desc: "Customize DevToysWeb look & feel",
  },
];

export const getTitle = (pathWithoutLocale: string): string => {
  if (pathWithoutLocale === "/settings") {
    const settings = nav[nav.length - 1];
    return settings.title;
  }
  const category = nav
    .slice(1)
    .find(({ href }) => `${localePath}${pathWithoutLocale}`.startsWith(href));
  if (category) {
    return (
      category.items?.find(({ href }) => href === pathWithoutLocale)
        ?.longTitle ?? ""
    );
  }
  return "";
};
