import * as changeCase from "change-case";
import { NextPage } from "next";
import { useState } from "react";

import { ClearButton, PasteButton, TextButton } from "../../components/button";
import { FileInputButton, TextArea } from "../../components/io";
import { SectionHeader, SectionMain } from "../../components/section";
import Spacer, { VSpacerM } from "../../components/Spacer";
import { useLocale } from "../../hooks/useLocale";
import MainLayout from "../../layouts/MainLayout";

type Case = "original" | "sentence" | "lower";

const InspectorCaseConverter: NextPage = () => {
  const { t } = useLocale();

  const [input, setInput] = useState("");
  const [mode, setMode] = useState<Case>("original");

  let output = "";
  switch (mode) {
    case "sentence":
      output = changeCase.sentenceCase(input);
      break;
    case "lower":
      output = changeCase.capitalCase(input);
      break;
    default:
      output = input;
      break;
  }

  const characters = output.split("").length;
  const words = output.split(" ").length;
  const lines = output.split("\n").length;
  const sentences = output.split(/[.!?]/).length;
  const paragraphs = output.split("\n\n").length;
  const bytes = new TextEncoder().encode(output).length;

  return (
    <MainLayout title={t.inspectorCaseConverter.title}>
      <SectionMain>
        <SectionHeader title={t.inspectorCaseConverter.convertTitle} />
        <div className="flex">
          <TextButton
            text={t.inspectorCaseConverter.originalTextTitle}
            onClick={() => setMode("original")}
          />
          <Spacer x={4} />
          <TextButton
            text={t.inspectorCaseConverter.sentenceCaseTitle}
            onClick={() => setMode("sentence")}
          />
          <Spacer x={4} />
          <TextButton
            text={t.inspectorCaseConverter.lowerCaseTitle}
            onClick={() => setMode("lower")}
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
            <ClearButton onClick={() => setInput("")} />
          </SectionHeader>
          <TextArea
            id="input"
            value={output}
            onChange={(input) => {
              setMode("original");
              setInput(input);
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
                <td>0</td>
              </tr>
              <tr>
                <td>{t.inspectorCaseConverter.columnTitle}</td>
                <td>0</td>
              </tr>
              <tr>
                <td>{t.inspectorCaseConverter.positionTitle}</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>

          <VSpacerM />
          <SectionHeader title={t.inspectorCaseConverter.statisticsTitle} />
          <table className="w-full text-sm">
            <tbody>
              <tr>
                <td>{t.inspectorCaseConverter.charactersTitle}</td>
                <td>{characters}</td>
              </tr>
              <tr>
                <td>{t.inspectorCaseConverter.wordsTitle}</td>
                <td>{words}</td>
              </tr>
              <tr>
                <td>{t.inspectorCaseConverter.linesTitle}</td>
                <td>{lines}</td>
              </tr>
              <tr>
                <td>{t.inspectorCaseConverter.sentencesTitle}</td>
                <td>{sentences}</td>
              </tr>
              <tr>
                <td>{t.inspectorCaseConverter.paragraphsTitle}</td>
                <td>{paragraphs}</td>
              </tr>
              <tr>
                <td>{t.inspectorCaseConverter.bytesTitle}</td>
                <td>{bytes}</td>
              </tr>
            </tbody>
          </table>

          <VSpacerM />
          <SectionHeader
            title={t.inspectorCaseConverter.wordDistributionTitle}
          />
          <TextArea value="hoge" />

          <VSpacerM />
          <SectionHeader
            title={t.inspectorCaseConverter.characterDistributionTitle}
          />
          <TextArea value="hoge" />
        </div>
      </SectionMain>
    </MainLayout>
  );
};

export default InspectorCaseConverter;
