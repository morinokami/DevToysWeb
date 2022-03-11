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

export const countChars = (value: string) => {
  const chars = Array.from(value);
  const counts = chars.reduce<Record<string, number>>((acc, char) => {
    if (/\s/.test(char)) {
      return acc;
    }
    acc[char] = (acc[char] ?? 0) + 1;
    return acc;
  }, {});

  return counts;
};

export const countWords = (value: string) => {
  const words = value.split(/\s+/);
  const counts = words.reduce<Record<string, number>>((acc, word) => {
    if (word.length === 0) {
      return acc;
    }
    acc[word] = (acc[word] ?? 0) + 1;
    return acc;
  }, {});

  return counts;
};

export const calculateStats = (value: string) => {
  const characters = Array.from(value).length;
  const words = value.trim().split(/\s+/).length;
  const lines = value.split("\n").length;
  const sentences = value.split(/[.?!][\s|$]*/).length - 1;
  const paragraphs = value.split(/\n+/).length;
  const bytes = new TextEncoder().encode(value).length;

  return {
    characters,
    words,
    lines,
    sentences,
    paragraphs,
    bytes,
  };
};
