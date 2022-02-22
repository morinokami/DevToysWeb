import { NextPage } from "next";
import { useState } from "react";

import ClearButton from "../../components/ClearButton";
import Configuration from "../../components/Configuration";
import CopyButton from "../../components/CopyButton";
import PasteButton from "../../components/PasteButton";
import SectionContainer from "../../components/SectionContainer";
import SectionHeader from "../../components/SectionHeader";
import Spacer, { VSpacerL, VSpacerM, VSpacerS } from "../../components/Spacer";
import TextArea from "../../components/TextArea";
import Toggle from "../../components/Toggle";
import { IconConversion } from "../../data/icon";
import { useLocale } from "../../hooks/useLocale";
import MainLayout from "../../layouts/MainLayout";
import { compress, decompress } from "../../lib/encode-decode";

const GZip: NextPage = () => {
  const { t } = useLocale();

  const [input, setInput] = useState("");
  const [doCompress, setDoCompress] = useState(true);

  const output = doCompress ? compress(input) : decompress(input);

  return (
    <MainLayout title={t.gzip.title}>
      <SectionContainer>
        <SectionHeader title={t.common.configTitle} />
        <VSpacerS />
        <Configuration
          icon={IconConversion}
          title={t.gzip.compressTitle}
          subtitle={t.gzip.compressDesc}
        >
          <Toggle
            on={doCompress}
            onChange={setDoCompress}
            desc={t.gzip.compressDesc}
            onText={t.gzip.compressText}
            offText={t.gzip.decompressText}
          />
        </Configuration>
      </SectionContainer>

      <VSpacerL />
      <SectionContainer>
        <SectionHeader title={t.common.inputTitle} label="input">
          <div className="flex">
            <PasteButton onClick={(text) => setInput(text)} />
            <Spacer x={6} />
            <ClearButton onClick={() => setInput("")} />
          </div>
        </SectionHeader>
        <VSpacerS />
        <TextArea id="input" value={input} onChange={setInput} />
      </SectionContainer>

      <VSpacerM />
      <SectionContainer>
        <SectionHeader title={t.common.outputTitle} label="output">
          <CopyButton text={output} />
        </SectionHeader>
        <VSpacerS />
        <TextArea id="output" value={output} />
      </SectionContainer>
    </MainLayout>
  );
};

export default GZip;
