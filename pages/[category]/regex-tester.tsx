import { NextPage } from "next";
import { useState } from "react";

import { ClearButton, PasteButton } from "../../components/button";
import { FileInputButton, Input } from "../../components/io";
import { SectionHeader, SectionMain } from "../../components/section";
import Spacer, { VSpacerM } from "../../components/Spacer";
import { useLocale } from "../../hooks/useLocale";
import MainLayout from "../../layouts/MainLayout";

const RegexTester: NextPage = () => {
  const { t } = useLocale();

  const [regex, setRegex] = useState("");
  const [input, setInput] = useState("");

  const highlighted = input;

  return (
    <MainLayout title={t.regexTester.title}>
      <SectionMain>
        <SectionHeader
          title={t.regexTester.regularExpressionTitle}
          label="regex"
        >
          <PasteButton onClick={setRegex} />
        </SectionHeader>
        <Input id="regex" value={regex} onChange={setRegex} />
      </SectionMain>

      <VSpacerM />
      <SectionMain className="flex grow flex-col">
        <SectionHeader title={t.regexTester.textTitle} label="text">
          <PasteButton onClick={setInput} />
          <Spacer x={6} />
          <FileInputButton onFileRead={setInput} />
          <Spacer x={6} />
          <ClearButton onClick={() => setInput("")} />
        </SectionHeader>
        {/* TODO */}
        <div contentEditable>{highlighted}</div>
      </SectionMain>
    </MainLayout>
  );
};

export default RegexTester;
