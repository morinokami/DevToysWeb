import { NextPage } from "next";
import React from "react";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import Button from "../../components/Button";
import Configuration from "../../components/Configuration";
import Input from "../../components/Input";
import SectionHeader from "../../components/SectionHeader";
import Select from "../../components/Select";
import Spacer from "../../components/Spacer";
import Toggle from "../../components/Toggle";
import { IconBeerMini, IconCopy } from "../../data/icon";
import MainLayout from "../../layouts/MainLayout";

const bases = [
  { name: "Octal" },
  { name: "Binary" },
  { name: "Decimal" },
  { name: "Hexadecimal" },
];

const isIntegerString = (str: string) => {
  return /^[0-9]+$/.test(str);
};

const isHexString = (str: string) => {
  return /^[0-9a-f]+$/i.test(str);
};

const isOctalString = (str: string) => {
  return /^[0-7]+$/.test(str);
};

const isBinaryString = (str: string) => {
  return /^[01]+$/.test(str);
};

const NumberBase: NextPage = () => {
  const [input, setInput] = useState("");
  const [format, setFormat] = useState(true);
  const [base, setBase] = useState(bases[2]);

  const decimal = Number(input);
  const hex = Number(input).toString(16);
  const octal = Number(input).toString(8);
  const binary = Number(input).toString(2);

  return (
    <MainLayout title="Number Base Converter">
      <div>
        <SectionHeader title="Configuration" />
        <Spacer y={6} />
        <Configuration icon={IconBeerMini} title="Format number">
          <Toggle on={format} onChange={setFormat} desc="Format the result" />
        </Configuration>
        <Spacer y={6} />
        <Configuration
          icon={IconBeerMini}
          title="Input type"
          subtitle="Select which Input type you want to use"
        >
          <div className="w-36">
            <Select options={bases} value={base} onChange={setBase} />
          </div>
        </Configuration>
      </div>
      <Spacer y={24} />
      <div>
        <SectionHeader title="Input" />
        <Spacer y={6} />
        <Input value={input} onChange={setInput} />
      </div>
      <Spacer y={12} />
      <div>
        <SectionHeader title="Hexadecimal" />
        <Spacer y={6} />
        <Input value={hex}>
          <CopyToClipboard text={hex}>
            <Button icon={IconCopy} title="Copy" />
          </CopyToClipboard>
        </Input>
      </div>
      <Spacer y={12} />
      <div>
        <SectionHeader title="Decimal" />
        <Spacer y={6} />
        <Input value={decimal.toString()}>
          <CopyToClipboard text={hex}>
            <Button icon={IconCopy} title="Copy" />
          </CopyToClipboard>
        </Input>
      </div>
      <Spacer y={12} />
      <div>
        <SectionHeader title="Octal" />
        <Spacer y={6} />
        <Input value={octal}>
          <CopyToClipboard text={hex}>
            <Button icon={IconCopy} title="Copy" />
          </CopyToClipboard>
        </Input>
      </div>
      <Spacer y={12} />
      <div>
        <SectionHeader title="Binary" />
        <Spacer y={6} />
        <Input value={binary}>
          <CopyToClipboard text={hex}>
            <Button icon={IconCopy} title="Copy" />
          </CopyToClipboard>
        </Input>
      </div>
    </MainLayout>
  );
};

export default NumberBase;
