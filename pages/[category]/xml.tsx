import { NextPage } from "next";
import { useState } from "react";

import {
  Configuration,
  SectionConfiguration,
  SectionMain,
} from "../../components/section";
import Select from "../../components/Select";
import { VSpacerM } from "../../components/Spacer";
import SplitEditor from "../../components/SplitEditor";
import { IconIndentation } from "../../data/icon";
import { useLocale } from "../../hooks/useLocale";
import MainLayout from "../../layouts/MainLayout";
import { formatXml } from "../../lib/format";

const Xml: NextPage = () => {
  const { t } = useLocale();

  const [input, setInput] = useState("");
  const [indent, setIndent] = useState(t.xml.indentOptions[0]);

  const output = formatXml(input, indent.value);

  return (
    <MainLayout title={t.xml.title}>
      <SectionConfiguration title={t.common.configTitle}>
        <Configuration icon={IconIndentation} title={t.xml.indentTitle}>
          <div className="w-32">
            <Select
              options={t.xml.indentOptions}
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
          inputLanguage="xml"
          outputLanguage="xml"
        />
      </SectionMain>
    </MainLayout>
  );
};

export default Xml;
