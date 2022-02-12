import { escape, unescape } from "html-escaper";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";

import ClearButton from "../../components/ClearButton";
import Configuration from "../../components/Configuration";
import CopyButton from "../../components/CopyButton";
import PasteButton from "../../components/PasteButton";
import SectionHeader from "../../components/SectionHeader";
import Spacer from "../../components/Spacer";
import TextArea from "../../components/TextArea";
import Toggle from "../../components/Toggle";
import { IconBeerMini } from "../../data/icon";
import { getTitle } from "../../data/nav";
import MainLayout from "../../layouts/MainLayout";

const Html: NextPage = () => {
  const router = useRouter();
  const title = getTitle(router.asPath);

  const [input, setInput] = useState("");
  const [encode, setEncode] = useState(true);

  const output = encode ? escape(input) : unescape(input);

  return (
    <MainLayout title={title}>
      <div>
        <SectionHeader title="Configuration" />
        <Spacer y={6} />
        <Configuration
          icon={IconBeerMini}
          title="Conversion"
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
      <Spacer y={24} />
      <div>
        <SectionHeader title="Input">
          <div className="flex">
            <PasteButton setter={setInput} />
            <Spacer x={6} />
            <ClearButton setter={setInput} />
          </div>
        </SectionHeader>
        <Spacer y={6} />
        <TextArea value={input} onChange={setInput} />
      </div>
      <Spacer y={12} />
      <div>
        <SectionHeader title="Output">
          <CopyButton text={output} />
        </SectionHeader>
        <Spacer y={6} />
        <TextArea value={output} />
      </div>
    </MainLayout>
  );
};

export default Html;
