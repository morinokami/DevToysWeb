import { NextPage } from "next";
import { useTheme } from "next-themes";
import { useState } from "react";

import CodeEditor from "../../components/CodeEditor";
import Configuration from "../../components/Configuration";
import SectionContainer from "../../components/SectionContainer";
import SectionHeader from "../../components/SectionHeader";
import Select from "../../components/Select";
import { VSpacerM, VSpacerS } from "../../components/Spacer";
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
  const { theme } = useTheme();

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
      <SectionContainer>
        <div className="flex">
          <CodeEditor
            height="50vh"
            value={input}
            onChange={(value) => setInput(value ?? "")}
            language="json"
            theme={theme}
          />
          <CodeEditor
            height="50vh"
            value={output}
            language="json"
            theme={theme}
            readOnly={true}
          />
        </div>
      </SectionContainer>
    </MainLayout>
  );
};

export default Json;
