import { NextPage } from "next";
import { useState } from "react";

import { ClearButton, CopyButton, PasteButton } from "../../components/button";
import { TextArea, Toggle } from "../../components/io";
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
import { decodeUrl, encodeUrl } from "../../lib/encode-decode";

const Url: NextPage = () => {
  const { t } = useLocale();

  const [input, setInput] = useState("");
  const [encode, setEncode] = useState(true);

  const output = encode ? encodeUrl(input) : decodeUrl(input);

  return (
    <MainLayout title={t.url.title}>
      <SectionConfiguration title={t.common.configTitle}>
        <Configuration
          icon={IconConversion}
          title={t.url.conversionTitle}
          subtitle={t.url.conversionSubtitle}
        >
          <Toggle
            on={encode}
            onChange={setEncode}
            desc={t.url.encodeDesc}
            onText={t.url.encodeText}
            offText={t.url.decodeText}
          />
        </Configuration>
      </SectionConfiguration>

      <VSpacerL />
      <SectionMain>
        <SectionHeader title={t.common.inputTitle} label="input">
          <div className="flex">
            <PasteButton onClick={setInput} />
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

export default Url;
