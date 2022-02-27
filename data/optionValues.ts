export const optionValues = {
  checksum: {
    hashingAlgorithm: {
      md5: "MD5",
      sha1: "SHA1",
      sha256: "SHA256",
      sha384: "SHA384",
      sha512: "SHA512",
    },
  },
  json: {
    indent: {
      twoSpaces: "  ",
      fourSpaces: "    ",
      oneTab: "\t",
      minify: undefined,
    },
  },
  jsonYaml: {
    conversion: {
      jsonToYaml: "json-to-yaml",
      yamlToJson: "yaml-to-json",
    },
    indent: {
      twoSpaces: 2,
      fourSpaces: 4,
    },
  },
  loremIpsum: {
    type: {
      words: "words",
      sentences: "sentences",
      paragraphs: "paragraphs",
    },
  },
  numberBase: {
    base: {
      binary: 2,
      octal: 8,
      decimal: 10,
      hex: 16,
    },
  },
  settings: {
    theme: {
      light: "light",
      dark: "dark",
    },
  },
  sql: {
    language: {
      db2: "db2",
      mariadb: "mariadb",
      mysql: "mysql",
      n1ql: "n1ql",
      plsql: "plsql",
      postgresql: "postgresql",
      redshift: "redshift",
      spark: "spark",
      standard: "sql",
      tsql: "tsql",
    },
    indent: {
      twoSpaces: "  ",
      fourSpaces: "    ",
    },
  },
  uuid: {
    version: {
      v1: 1,
      v4: 4,
    },
  },
  xml: {
    indent: {
      twoSpaces: "  ",
      fourSpaces: "    ",
    },
  },
};
