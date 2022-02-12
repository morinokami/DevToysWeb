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
        <SectionHeader title="Configuration" />
        <VSpacerS />
        <Configuration
          icon={IconBeerMini}
          title="Input type"
          subtitle="Select which conversion mode you want to use"
        >
          <Toggle
            on={encode}
            onChange={setEncode}
            desc="Encode the input"
            onText="Encode"
            offText="Decode"
          />
        </Configuration>
      </div>
      <VSpacerL />
      <div>
        <SectionHeader title="Input">
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
        <SectionHeader title="Output">
          <CopyButton text={output} />
        </SectionHeader>
        <VSpacerS />
        <TextArea value={output} />
      </div>
    </MainLayout>
  );
};

export default Url;
