import { NextPage } from "next";
import { useState } from "react";
import { ReflexContainer, ReflexElement, ReflexSplitter } from "react-reflex";

import ClearButton from "../../components/ClearButton";
import CodeEditor from "../../components/CodeEditor";
import Configuration from "../../components/Configuration";
import CopyButton from "../../components/CopyButton";
import PasteButton from "../../components/PasteButton";
import SectionContainer from "../../components/SectionContainer";
import SectionHeader from "../../components/SectionHeader";
import Select from "../../components/Select";
import Spacer, { VSpacerM, VSpacerS } from "../../components/Spacer";
import { IconBeerMini } from "../../data/icon";
import { useLocale } from "../../hooks/useLocale";
import MainLayout from "../../layouts/MainLayout";

const format = (value: string, indentType: string) => {
  try {
    let indent: string | undefined;
    switch (indentType) {
      case "2-spaces":
        indent = "  ";
        break;
      case "4-spaces":
        indent = "    ";
        break;
      case "1-tab":
        indent = "\t";
        break;
      default:
        indent = undefined;
        break;
    }
    return JSON.stringify(JSON.parse(value), null, indent);
  } catch {
    return "";
  }
};

const Json: NextPage = () => {
  const { t } = useLocale();

  const [input, setInput] = useState("");
  const [indent, setIndent] = useState(t.json.indentOptions[0]);

  const output = format(input, indent.value);

  return (
    <MainLayout title={t.json.title}>
      <SectionContainer>
        <SectionHeader title={t.common.configTitle} />
        <VSpacerS />
        <Configuration icon={IconBeerMini} title={t.json.indentTitle}>
          <div className="w-28">
            <Select
              options={t.json.indentOptions}
              value={indent}
              onChange={setIndent}
            />
          </div>
        </Configuration>
      </SectionContainer>

      <VSpacerM />
      <SectionContainer className="grow">
        <ReflexContainer orientation="vertical">
          <ReflexElement minSize={200}>
            <div className="flex h-full flex-col">
              <SectionHeader title={t.common.inputTitle}>
                <div className="flex">
                  <PasteButton onClick={setInput} />
                  <Spacer x={6} />
                  <ClearButton onClick={() => setInput("")} />
                </div>
              </SectionHeader>
              <VSpacerS />
              <div className="grow">
                <CodeEditor
                  height="95%"
                  value={input}
                  onChange={(value) => setInput(value ?? "")}
                  language="json"
                />
              </div>
            </div>
          </ReflexElement>
          <ReflexSplitter
            style={{ width: "10px", border: "none", background: "transparent" }}
          />
          <ReflexElement minSize={200}>
            <div className="flex h-full flex-col">
              <SectionHeader title={t.common.outputTitle}>
                <div className="flex">
                  <CopyButton text={output} />
                </div>
              </SectionHeader>
              <VSpacerS />
              <div className="grow">
                <CodeEditor
                  height="95%"
                  value={output}
                  language="json"
                  readOnly={true}
                />
              </div>
            </div>
          </ReflexElement>
        </ReflexContainer>
      </SectionContainer>
    </MainLayout>
  );
};

export default Json;
