import { NextPage } from "next";
import { useState } from "react";

import { Select, SplitEditor } from "../../components/io";
import {
  Configuration,
  SectionConfiguration,
  SectionMain,
} from "../../components/section";
import { VSpacerM } from "../../components/Spacer";
import { IconConversion, IconIndentation } from "../../data/icon";
import { useLocale } from "../../hooks/useLocale";
import MainLayout from "../../layouts/MainLayout";
import { toJson, toYaml } from "../../lib/convert";

const JsonYaml: NextPage = () => {
  const { t } = useLocale();

  const [input, setInput] = useState("");
  const [conversion, setConversion] = useState(t.jsonYaml.conversionOptions[0]);
  const [indent, setIndent] = useState(t.jsonYaml.indentOptions[0]);

  const output =
    conversion.value === "json-to-yaml"
      ? toYaml(input, indent.value)
      : toJson(input, indent.value);
  const inputLanguage = conversion.value === "json-to-yaml" ? "json" : "yaml";
  const outputLanguage = conversion.value === "json-to-yaml" ? "yaml" : "json";

  return (
    <MainLayout title={t.jsonYaml.title}>
      <SectionConfiguration title={t.common.configTitle}>
        <Configuration
          icon={IconConversion}
          title={t.jsonYaml.conversionTitle}
          desc={t.jsonYaml.conversionSubtitle}
        >
          <div className="w-40">
            <Select
              options={t.jsonYaml.conversionOptions}
              value={conversion}
              onChange={setConversion}
            />
          </div>
        </Configuration>
        <Configuration icon={IconIndentation} title={t.jsonYaml.indentTitle}>
          <div className="w-32">
            <Select
              options={t.jsonYaml.indentOptions}
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
          inputLanguage={inputLanguage}
          outputLanguage={outputLanguage}
        />
      </SectionMain>
    </MainLayout>
  );
};

export default JsonYaml;
