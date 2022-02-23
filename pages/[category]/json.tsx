import { NextPage } from "next";
import { useState } from "react";

import { Select, SplitEditor } from "../../components/io";
import {
  Configuration,
  SectionConfiguration,
  SectionMain,
} from "../../components/section";
import { VSpacerM } from "../../components/Spacer";
import { IconIndentation } from "../../data/icon";
import { useLocale } from "../../hooks/useLocale";
import MainLayout from "../../layouts/MainLayout";
import { formatJson } from "../../lib/format";

const Json: NextPage = () => {
  const { t } = useLocale();

  const [input, setInput] = useState("");
  const [indent, setIndent] = useState(t.json.indentOptions[0]);

  const output = formatJson(input, indent.value);

  return (
    <MainLayout title={t.json.title}>
      <SectionConfiguration title={t.common.configTitle}>
        <Configuration icon={IconIndentation} title={t.json.indentTitle}>
          <div className="w-32">
            <Select
              options={t.json.indentOptions}
              value={indent}
              onChange={setIndent}
            />
          </div>
        </Configuration>
      </SectionConfiguration>

      <VSpacerM />
      <SectionMain className="grow">
        <SplitEditor
          input={input}
          setInput={setInput}
          output={output}
          inputLanguage="json"
          outputLanguage="json"
        />
      </SectionMain>
    </MainLayout>
  );
};

export default Json;
