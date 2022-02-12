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

// https://stackoverflow.com/a/30106551/8448791

const encode = (str: string) => {
  if (typeof window !== "undefined") {
    return window.btoa(
      encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (match, p1) => {
        return String.fromCharCode(parseInt(p1, 16));
      })
    );
  }
  return "";
};

const decode = (str: string) => {
  try {
    return decodeURIComponent(
      Array.prototype.map
        .call(window.atob(str), (c) => {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
  } catch {
    return "";
  }
};

const Base64: NextPage = () => {
  const router = useRouter();
  const title = getTitle(router.asPath);

  const [input, setInput] = useState("");
  const [doEncode, setDoEncode] = useState(true);

  const output = doEncode ? encode(input) : decode(input);

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
            on={doEncode}
            onChange={setDoEncode}
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
        <TextArea value={input} onChange={setInput} rows={7} />
      </div>
      <Spacer y={12} />
      <div>
        <SectionHeader title="Output">
          <CopyButton text={output} />
        </SectionHeader>
        <Spacer y={6} />
        <TextArea value={output} rows={7} />
      </div>
    </MainLayout>
  );
};

export default Base64;
