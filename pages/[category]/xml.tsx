import { NextPage } from "next";
import { useState } from "react";

import Configuration from "../../components/Configuration";
import SectionContainer from "../../components/SectionContainer";
import SectionHeader from "../../components/SectionHeader";
import Select from "../../components/Select";
import { VSpacerM, VSpacerS } from "../../components/Spacer";
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
      <SectionContainer>
        <SectionHeader title={t.common.configTitle} />
        <VSpacerS />
        <Configuration icon={IconIndentation} title={t.xml.indentTitle}>
          <div className="w-28">
            <Select
              options={t.xml.indentOptions}
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
          inputLanguage="xml"
          outputLanguage="xml"
        />
      </SectionContainer>
    </MainLayout>
  );
};

export default Xml;
