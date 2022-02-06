import React from "react";

import {
  IconConverters,
  IconEncodersDecoders,
  IconFormatters,
  IconGZip,
  IconHash,
  IconHtml,
  IconJson,
  IconSql,
  IconUrl,
  IconXml,
} from "./icon";

export type Nav = NavCategory[];

export type NavCategory = {
  title: string;
  href: string;
  // TODO: update
  icon?: React.VFC;
  items?: NavItem[];
};

export type NavItem = {
  title: string;
  href: string;
  // TODO: update
  icon?: React.VFC;
  desc: string;
};

export const nav: Nav = [
  {
    title: "Converters",
    href: "/converters",
    icon: IconConverters,
    items: [
      {
        title: "JSON <> YAML",
        href: "/converters/json-yaml",
        desc: "Convert JSON data to YAML and vice versa",
      },
      {
        title: "Number Base",
        href: "/converters/number-base",
        desc: "Convert numbers from one base to another",
      },
    ],
  },
  {
    title: "Encoders / Decoders",
    href: "/encoders-decoders",
    icon: IconEncodersDecoders,
    items: [
      {
        title: "HTML",
        href: "/encoders-decoders/html",
        icon: IconHtml,
        desc: "Encode or decode all the applicable characters to their corresponding HTML entities",
      },
      {
        title: "URL",
        href: "/encoders-decoders/url",
        icon: IconUrl,
        desc: "Encode or decode all the applicable characters to their corresponding URL entities",
      },
      {
        title: "Base 64",
        href: "/encoders-decoders/base64",
        desc: "Encode and decode Base64 data",
      },
      {
        title: "GZip",
        href: "/encoders-decoders/gzip",
        icon: IconGZip,
        desc: "Compress or decompress strings",
      },
      {
        title: "JWT Decoder",
        href: "/encoders-decoders/jwt-decoder",
        desc: "Decode a JWT header, payload and signature",
      },
    ],
  },
  {
    title: "Formatters",
    href: "/formatters",
    icon: IconFormatters,
    items: [
      {
        title: "JSON",
        href: "/formatters/json",
        icon: IconJson,
        desc: "Indent or minify JSON data",
      },
      {
        title: "SQL",
        href: "/formatters/sql",
        icon: IconSql,
        desc: "Indent SQL queries",
      },
      {
        title: "XML",
        href: "/formatters/xml",
        icon: IconXml,
        desc: "Indent or minify XML data",
      },
    ],
  },
  {
    title: "Generators",
    href: "/generators",
    items: [
      {
        title: "Hash",
        href: "/generators/hash",
        icon: IconHash,
        desc: "Calculate MD5, SHA1, SHA256 and SHA512 hash from text data",
      },
      {
        title: "UUID",
        href: "/generators/uuid",
        desc: "Generate UUIDs version 1 and 4",
      },
      {
        title: "Lorem Ipsum",
        href: "/generators/lorem-ipsum",
        desc: "Generate Lorem Ipsum placeholder text",
      },
      {
        title: "Checksum",
        href: "/generators/checksum",
        desc: "Generate an hash with CheckSum based on a file",
      },
    ],
  },
];
