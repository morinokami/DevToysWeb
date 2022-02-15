import { NextPage } from "next";
import { useState } from "react";

import Configuration from "../../components/Configuration";
import SectionContainer from "../../components/SectionContainer";
import SectionHeader from "../../components/SectionHeader";
import Select from "../../components/Select";
import { VSpacerM, VSpacerS } from "../../components/Spacer";
import SplitEditor from "../../components/SplitEditor";
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
        <SplitEditor
          input={input}
          setInput={setInput}
          output={output}
          inputLanguage="json"
          outputLanguage="json"
        />
      </SectionContainer>
    </MainLayout>
  );
};

export default Json;
