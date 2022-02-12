import { NextPage } from "next";
import { useState } from "react";

import ClearButton from "../../components/ClearButton";
import Configuration from "../../components/Configuration";
import CopyButton from "../../components/CopyButton";
import PasteButton from "../../components/PasteButton";
import SectionHeader from "../../components/SectionHeader";
import Spacer, { VSpacerL, VSpacerM, VSpacerS } from "../../components/Spacer";
import TextArea from "../../components/TextArea";
import Toggle from "../../components/Toggle";
import { IconBeerMini } from "../../data/icon";
import { useLocale } from "../../hooks/useLocale";
import MainLayout from "../../layouts/MainLayout";

const Url: NextPage = () => {
  const { t } = useLocale();

  const [input, setInput] = useState("");
  const [encode, setEncode] = useState(true);

  // TODO: Handle invalid input
  const output = encode ? encodeURIComponent(input) : decodeURIComponent(input);

  return (
    <MainLayout title={t.url.title}>
      <div>
        <SectionHeader title={t.common.configTitle} />
        <VSpacerS />
        <Configuration
          icon={IconBeerMini}
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
      </div>
      <VSpacerL />
      <div>
        <SectionHeader title={t.common.inputTitle}>
          <div className="flex">
            <PasteButton onClick={setInput} />
            <Spacer x={6} />
            <ClearButton onClick={() => setInput("")} />
          </div>
        </SectionHeader>
        <VSpacerS />
        <TextArea value={input} onChange={setInput} />
      </div>
      <VSpacerM />
      <div>
        <SectionHeader title={t.common.outputTitle}>
          <CopyButton text={output} />
        </SectionHeader>
        <VSpacerS />
        <TextArea value={output} />
      </div>
    </MainLayout>
  );
};

export default Url;
