import { NextPage } from "next";
import { useState } from "react";

import { ClearButton, PasteButton } from "../../components/button";
import { FileInputButton, TextArea } from "../../components/io";
import { SectionHeader, SectionMain } from "../../components/section";
import Spacer, { VSpacerM } from "../../components/Spacer";
import { useLocale } from "../../hooks/useLocale";
import MainLayout from "../../layouts/MainLayout";

const InspectorCaseConverter: NextPage = () => {
  const { t } = useLocale();

  const [input, setInput] = useState("");

  return (
    <MainLayout title={t.inspectorCaseConverter.title}>
      <SectionMain>
        <SectionHeader title={t.inspectorCaseConverter.convertTitle} />
      </SectionMain>

      <VSpacerM />
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
        <TextArea id="input" value={input} onChange={setInput} />
      </SectionMain>
    </MainLayout>
  );
};

export default InspectorCaseConverter;
