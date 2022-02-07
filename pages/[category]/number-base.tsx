import { NextPage } from "next";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import Button from "../../components/Button";
import Configuration from "../../components/Configuration";
import SectionHeader from "../../components/SectionHeader";
import Spacer from "../../components/Spacer";
import { IconBeerMini, IconCopy } from "../../data/icon";
import MainLayout from "../../layouts/MainLayout";

const NumberBase: NextPage = () => {
  const [input, setInput] = useState("");

  const decimal = Number(input);
  const hex = Number(input).toString(16);
  const octal = Number(input).toString(8);
  const binary = Number(input).toString(2);

  return (
    <MainLayout title="Number Base Converter">
      <div>
        <SectionHeader title="Configuration" />
        <Configuration icon={IconBeerMini} title="Format number">
          On
        </Configuration>
        <Configuration
          icon={IconBeerMini}
          title="Input type"
          subtitle="Select which Input type you want to use"
        >
          Select
        </Configuration>
      </div>
      <div>
        <SectionHeader title="Input" />
        <Spacer y={5} />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div>
        <SectionHeader title="Hexadecimal" />
        <Spacer y={5} />
        <input type="text" value={hex} readOnly />
        <CopyToClipboard text={hex}>
          <Button icon={IconCopy} />
        </CopyToClipboard>
      </div>
      <div>
        <SectionHeader title="Decimal" />
        <Spacer y={5} />
        <input type="text" value={decimal} readOnly />
        <CopyToClipboard text={decimal.toString()}>
          <Button icon={IconCopy} />
        </CopyToClipboard>
      </div>
      <div>
        <SectionHeader title="Octal" />
        <Spacer y={5} />
        <input type="text" value={octal} readOnly />
        <CopyToClipboard text={octal}>
          <Button icon={IconCopy} />
        </CopyToClipboard>
      </div>
      <div>
        <SectionHeader title="Binary" />
        <Spacer y={5} />
        <input type="text" value={binary} readOnly />
        <CopyToClipboard text={binary}>
          <Button icon={IconCopy} />
        </CopyToClipboard>
      </div>
    </MainLayout>
  );
};

export default NumberBase;
