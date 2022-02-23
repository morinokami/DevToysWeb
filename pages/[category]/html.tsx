import { escape, unescape } from "html-escaper";
import { NextPage } from "next";
import { useState } from "react";

import { ClearButton, CopyButton, PasteButton } from "../../components/button";
import FileInput from "../../components/FileInput";
import {
  Configuration,
  SectionConfiguration,
  SectionHeader,
  SectionMain,
} from "../../components/section";
import Spacer, { VSpacerL, VSpacerM } from "../../components/Spacer";
import TextArea from "../../components/TextArea";
import Toggle from "../../components/Toggle";
import { IconConversion } from "../../data/icon";
import { useLocale } from "../../hooks/useLocale";
import MainLayout from "../../layouts/MainLayout";

const Html: NextPage = () => {
  const { t } = useLocale();

  const [input, setInput] = useState("");
  const [encode, setEncode] = useState(true);

  const output = encode ? escape(input) : unescape(input);

  return (
    <MainLayout title={t.html.title}>
      <SectionConfiguration title={t.common.configTitle}>
        <Configuration
          icon={IconConversion}
          title={t.html.conversionTitle}
          subtitle={t.html.conversionSubtitle}
        >
          <Toggle
            on={encode}
            onChange={setEncode}
            desc={t.html.encodeDesc}
            onText={t.html.encodeText}
            offText={t.html.decodeText}
          />
        </Configuration>
      </SectionConfiguration>

      <VSpacerL />
      <SectionMain>
        <SectionHeader title={t.common.inputTitle} label="input">
          <div className="flex">
            <PasteButton onClick={setInput} />
            <Spacer x={6} />
            <FileInput onFileRead={setInput} accept=".htm,.html" />
            <Spacer x={6} />
            <ClearButton onClick={() => setInput("")} />
          </div>
        </SectionHeader>
        <TextArea id="input" value={input} onChange={setInput} />
      </SectionMain>

      <VSpacerM />
      <SectionMain>
        <SectionHeader title={t.common.outputTitle} label="output">
          <CopyButton text={output} />
        </SectionHeader>
        <TextArea id="output" value={output} />
      </SectionMain>
    </MainLayout>
  );
};

export default Html;
