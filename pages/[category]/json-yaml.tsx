import { NextPage } from "next";
import { useState } from "react";

import { SplitEditor } from "../../components/io";
import { SectionConfiguration, SectionMain } from "../../components/section";
import { VSpacerM } from "../../components/Spacer";
import { useLocale } from "../../hooks/useLocale";
import MainLayout from "../../layouts/MainLayout";
import { toYaml } from "../../lib/convert";

const JsonYaml: NextPage = () => {
  const { t } = useLocale();

  const [input, setInput] = useState("");
  // TODO: implemet
  const [from, setFrom] = useState();
  const [indent, setIndent] = useState();

  const output = toYaml(input, 2);

  return (
    <MainLayout title={t.jsonYaml.title}>
      <SectionConfiguration title={t.common.configTitle}></SectionConfiguration>

      <VSpacerM />
      <SectionMain className="grow">
        <SplitEditor
          input={input}
          setInput={setInput}
          output={output}
          inputLanguage="json"
          outputLanguage="yaml"
        />
      </SectionMain>
    </MainLayout>
  );
};

export default JsonYaml;
