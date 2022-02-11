import { NextPage } from "next";
import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

import Button from "../../components/Button";
import Configuration from "../../components/Configuration";
import PasteButton from "../../components/PasteButton";
import SectionHeader from "../../components/SectionHeader";
import Select from "../../components/Select";
import Spacer from "../../components/Spacer";
import TextArea from "../../components/TextArea";
import { IconBeerMini, IconCopy, IconDelete, IconPaste } from "../../data/icon";
import MainLayout from "../../layouts/MainLayout";

const modes = [{ name: "Encode" }, { name: "Decode" }];

const Url: NextPage = () => {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState(modes[0]);

  // TODO: Handle invalid input
  const output =
    mode.name === "Encode"
      ? encodeURIComponent(input)
      : decodeURIComponent(input);

  return (
    <MainLayout title="URL Encoder / Decoder">
      <div>
        <SectionHeader title="Configuration" />
        <Spacer y={6} />
        <Configuration
          icon={IconBeerMini}
          title="Input type"
          subtitle="Select which conversion mode you want to use"
        >
          <div className="w-28">
            <Select options={modes} value={mode} onChange={setMode} />
          </div>
        </Configuration>
      </div>
      <Spacer y={24} />
      <div>
        <SectionHeader title="Input">
          <div className="flex">
            <PasteButton onClick={setInput} />
            <Spacer x={6} />
            <Button
              icon={IconDelete}
              title="Clear"
              onClick={() => setInput("")}
            />
          </div>
        </SectionHeader>
        <Spacer y={6} />
        <TextArea value={input} onChange={setInput} />
      </div>
      <Spacer y={12} />
      <div>
        <SectionHeader title="Output">
          <CopyToClipboard text={output}>
            <Button icon={IconCopy} text="Copy" />
          </CopyToClipboard>
        </SectionHeader>
        <Spacer y={6} />
        <TextArea value={output} />
      </div>
    </MainLayout>
  );
};

export default Url;
