import * as changeCase from "change-case";
import { lowerCase } from "lower-case";
import { NextPage } from "next";
import { useState } from "react";
import { titleCase } from "title-case";
import { upperCase } from "upper-case";

import { ClearButton, PasteButton, TextButton } from "../../components/button";
import { FileInputButton, TextArea } from "../../components/io";
import { SectionHeader, SectionMain } from "../../components/section";
import Spacer, { VSpacerM } from "../../components/Spacer";
import { useLocale } from "../../hooks/useLocale";
import MainLayout from "../../layouts/MainLayout";
import { Case, convertCase } from "../../lib/text";

// TODO: Support languages other than English

const countChars = (str: string) => {
  const chars = Array.from(str);
  const counts = chars.reduce<Record<string, number>>((acc, char) => {
    if (/\s/.test(char)) {
      return acc;
    }
    acc[char] = (acc[char] ?? 0) + 1;
    return acc;
  }, {});
  return counts;
};

const countWords = (str: string) => {
  const words = str.split(/\s+/);
  const counts = words.reduce<Record<string, number>>((acc, word) => {
    if (word.length === 0) {
      return acc;
    }
    acc[word] = (acc[word] ?? 0) + 1;
    return acc;
  }, {});
  return counts;
};

const sortObject = (obj: Record<string, number>) => {
  const entries = Object.entries(obj);
  return entries.sort((a, b) => b[1] - a[1]);
};

const CaseButton: React.FC<{ text: string; onClick: () => void }> = ({
  text,
  onClick,
}) => {
  return (
    <TextButton
      text={text}
      onClick={onClick}
      className="mr-1 mb-1 rounded border border-light-40 bg-light-20 hover:bg-light-10 dark:border-none dark:bg-dark-30 hover:dark:bg-dark-20"
    />
  );
};

const InspectorCaseConverter: NextPage = () => {
  const { t } = useLocale();

  const [input, setInput] = useState("");
  const [mode, setMode] = useState<Case>("original");

  const output = convertCase(input, mode);

  const [cursorPosition, setCursorPosition] = useState({
    line: 0,
    column: 0,
    position: 0,
  });

  const characters = Array.from(output).length;
  const words = output.trim().split(/\s+/).length;
  const lines = output.split("\n").length;
  const sentences = output.split(/[.?!][\s|$]*/).length - 1;
  const paragraphs = output.split(/\n+/).length;
  const bytes = new TextEncoder().encode(output).length;

  const charCounts = sortObject(countChars(output));
  const wordCounts = sortObject(countWords(output));

  return (
    <MainLayout title={t.inspectorCaseConverter.title}>
      <SectionMain>
        <SectionHeader title={t.inspectorCaseConverter.convertTitle} />
        <div className="flex flex-wrap">
          <CaseButton
            text={t.inspectorCaseConverter.originalTextTitle}
            onClick={() => setMode("original")}
          />
          <CaseButton
            text={t.inspectorCaseConverter.sentenceCaseTitle}
            onClick={() => setMode("sentence")}
          />
          <CaseButton
            text={t.inspectorCaseConverter.lowerCaseTitle}
            onClick={() => setMode("lower")}
          />
          <CaseButton
            text={t.inspectorCaseConverter.upperCaseTitle}
            onClick={() => setMode("upper")}
          />
          <CaseButton
            text={t.inspectorCaseConverter.titleCaseTitle}
            onClick={() => setMode("title")}
          />
          <CaseButton
            text={t.inspectorCaseConverter.camelCaseTitle}
            onClick={() => setMode("camel")}
          />
          <CaseButton
            text={t.inspectorCaseConverter.pascalCaseTitle}
            onClick={() => setMode("pascal")}
          />
          <CaseButton
            text={t.inspectorCaseConverter.snakeCaseTitle}
            onClick={() => setMode("snake")}
          />
          <CaseButton
            text={t.inspectorCaseConverter.constantCaseTitle}
            onClick={() => setMode("constant")}
          />
          <CaseButton
            text={t.inspectorCaseConverter.kebabCaseTitle}
            onClick={() => setMode("kebab")}
          />
          <CaseButton
            text={t.inspectorCaseConverter.trainCaseTitle}
            onClick={() => setMode("train")}
          />
        </div>
      </SectionMain>

      <VSpacerM />
      <SectionMain className="flex grow">
        <SectionMain className="flex grow flex-col">
          <SectionHeader
            title={t.inspectorCaseConverter.stringTitle}
            label="string"
          >
            <PasteButton onClick={setInput} />
            <Spacer x={6} />
            <FileInputButton onFileRead={setInput} />
            <Spacer x={6} />
            <ClearButton
              onClick={() => {
                setInput("");
                setCursorPosition({
                  line: 0,
                  column: 0,
                  position: 0,
                });
              }}
            />
          </SectionHeader>
          <TextArea
            id="input"
            value={output}
            onChange={(input) => {
              setMode("original");
              setInput(input);
            }}
            onCursorMove={(cursorPosition) => {
              setCursorPosition(cursorPosition);
            }}
          />
        </SectionMain>
        <Spacer x={10} />
        <div className="flex w-64 flex-col">
          <VSpacerM />
          <SectionHeader title={t.inspectorCaseConverter.selectionTitle} />
          <table className="w-full text-sm">
            <tbody>
              <tr>
                <td>{t.inspectorCaseConverter.lineTitle}</td>
                <td className="text-right">{cursorPosition.line + 1}</td>
              </tr>
              <tr>
                <td>{t.inspectorCaseConverter.columnTitle}</td>
                <td className="text-right">{cursorPosition.column}</td>
              </tr>
              <tr>
                <td>{t.inspectorCaseConverter.positionTitle}</td>
                <td className="text-right">{cursorPosition.position}</td>
              </tr>
            </tbody>
          </table>

          <VSpacerM />
          <SectionHeader title={t.inspectorCaseConverter.statisticsTitle} />
          <table className="w-full text-sm">
            <tbody>
              <tr>
                <td>{t.inspectorCaseConverter.charactersTitle}</td>
                <td className="text-right">{characters}</td>
              </tr>
              <tr>
                <td>{t.inspectorCaseConverter.wordsTitle}</td>
                <td className="text-right">{words}</td>
              </tr>
              <tr>
                <td>{t.inspectorCaseConverter.linesTitle}</td>
                <td className="text-right">{lines}</td>
              </tr>
              <tr>
                <td>{t.inspectorCaseConverter.sentencesTitle}</td>
                <td className="text-right">{sentences}</td>
              </tr>
              <tr>
                <td>{t.inspectorCaseConverter.paragraphsTitle}</td>
                <td className="text-right">{paragraphs}</td>
              </tr>
              <tr>
                <td>{t.inspectorCaseConverter.bytesTitle}</td>
                <td className="text-right">{bytes}</td>
              </tr>
            </tbody>
          </table>

          <VSpacerM />
          <SectionHeader
            title={t.inspectorCaseConverter.wordDistributionTitle}
          />
          <TextArea
            value={wordCounts
              .map((count) => `${count[0]}: ${count[1]}`)
              .join("\n")}
          />

          <VSpacerM />
          <SectionHeader
            title={t.inspectorCaseConverter.characterDistributionTitle}
          />
          <TextArea
            value={charCounts
              .map((count) => `${count[0]}: ${count[1]}`)
              .join("\n")}
          />
        </div>
      </SectionMain>
    </MainLayout>
  );
};

export default InspectorCaseConverter;
