import * as changeCase from "change-case";
import { lowerCase } from "lower-case";
import { titleCase } from "title-case";
import { upperCase } from "upper-case";

export type Case =
  | "original"
  | "sentence"
  | "lower"
  | "upper"
  | "title"
  | "camel"
  | "pascal"
  | "snake"
  | "constant"
  | "kebab"
  // TODO: COBOL
  | "train";
// TODO: Alternate
// TODO: Inverse

export const convertCase = (value: string, caseType: Case) => {
  return value
    .split("\n")
    .map((line) => {
      switch (caseType) {
        case "sentence":
          return changeCase.sentenceCase(line);
        case "lower":
          return lowerCase(line);
        case "upper":
          return upperCase(line);
        case "title":
          return titleCase(line);
        case "camel":
          return changeCase.camelCase(line);
        case "pascal":
          return changeCase.pascalCase(line);
        case "snake":
          return changeCase.snakeCase(line);
        case "constant":
          return changeCase.constantCase(line);
        case "kebab":
          return changeCase.paramCase(line);
        case "train":
          return changeCase.headerCase(line);
        default:
          return line;
      }
    })
    .join("\n");
};
