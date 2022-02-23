import { NextPage } from "next";
import { useState } from "react";

import ClearButton from "../../components/ClearButton";
import Configuration from "../../components/Configuration";
import CopyButton from "../../components/CopyButton";
import PasteButton from "../../components/PasteButton";
import SectionConfiguration from "../../components/SectionConfiguration";
import SectionContainer from "../../components/SectionContainer";
import SectionHeader from "../../components/SectionHeader";
import Spacer, { VSpacerL, VSpacerM, VSpacerS } from "../../components/Spacer";
import TextArea from "../../components/TextArea";
import Toggle from "../../components/Toggle";
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
      <SectionContainer>
        <SectionHeader title={t.common.inputTitle} label="input">
          <div className="flex">
            <PasteButton onClick={setInput} />
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

export default Url;
