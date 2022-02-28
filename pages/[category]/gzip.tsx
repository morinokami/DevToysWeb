import { NextPage } from "next";
import { useState } from "react";

import { ClearButton, CopyButton, PasteButton } from "../../components/button";
import { FileInputButton, TextArea, Toggle } from "../../components/io";
import {
  Configuration,
  SectionConfiguration,
  SectionHeader,
  SectionMain,
} from "../../components/section";
import Spacer, { VSpacerL, VSpacerM } from "../../components/Spacer";
import { IconConversion } from "../../data/icon";
import { useLocale } from "../../hooks/useLocale";
import MainLayout from "../../layouts/MainLayout";
import { compress, decompress } from "../../lib/encode-decode";

const GZip: NextPage = () => {
  const { t } = useLocale();

  const [input, setInput] = useState("");
  const [doCompress, setDoCompress] = useState(true);

  const output =
    doCompress && input.length > 0 ? compress(input) : decompress(input);

  return (
    <MainLayout title={t.gzip.title}>
      <SectionConfiguration title={t.common.configTitle}>
        <Configuration
          icon={IconConversion}
          title={t.gzip.compressTitle}
          desc={t.gzip.compressDesc}
        >
          <Toggle
            on={doCompress}
            onChange={setDoCompress}
            desc={t.gzip.compressDesc}
            onText={t.gzip.compressText}
            offText={t.gzip.decompressText}
          />
        </Configuration>
      </SectionConfiguration>

      <VSpacerL />
      <SectionMain className="flex grow flex-col">
        <SectionHeader title={t.common.inputTitle} label="input">
          <PasteButton onClick={(text) => setInput(text)} />
          <Spacer x={6} />
          <FileInputButton onFileRead={setInput} />
          <Spacer x={6} />
          <ClearButton onClick={() => setInput("")} />
        </SectionHeader>
        <TextArea id="input" value={input} onChange={setInput} />
      </SectionMain>

      <VSpacerM />
      <SectionMain className="flex grow flex-col">
        <SectionHeader title={t.common.outputTitle} label="output">
          <CopyButton text={output} />
        </SectionHeader>
        <TextArea id="output" value={output} />
      </SectionMain>
    </MainLayout>
  );
};

export default GZip;
