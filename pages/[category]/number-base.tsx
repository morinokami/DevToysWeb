import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";

import Configuration from "../../components/Configuration";
import CopyButton from "../../components/CopyButton";
import ErrorMessage from "../../components/ErrorMessage";
import Input from "../../components/Input";
import PasteButton from "../../components/PasteButton";
import SectionHeader from "../../components/SectionHeader";
import Select from "../../components/Select";
import { VSpacerL, VSpacerM, VSpacerS } from "../../components/Spacer";
import Toggle from "../../components/Toggle";
import { IconBeerMini } from "../../data/icon";
import { getTitle } from "../../data/nav";
import MainLayout from "../../layouts/MainLayout";

type BaseName = "Binary" | "Octal" | "Decimal" | "Hexadecimal";

const bases: { name: BaseName }[] = [
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

const getBase = (base: BaseName) => {
  switch (base) {
    case "Binary":
      return 2;
    case "Octal":
      return 8;
    case "Decimal":
      return 10;
    case "Hexadecimal":
      return 16;
  }
};

const isValidInput = (str: string, base: BaseName) => {
  switch (base) {
    case "Binary":
      return isBinaryString(str);
    case "Octal":
      return isOctalString(str);
    case "Decimal":
      return isIntegerString(str);
    case "Hexadecimal":
      return isHexString(str);
  }
};

const NumberBase: NextPage = () => {
  const router = useRouter();
  const title = getTitle(router.asPath);

  const [input, setInput] = useState("");
  const [format, setFormat] = useState(true);
  const [base, setBase] = useState(bases[2]);

  // TODO: Number.MAX_SAFE_INTEGER
  const valid = isValidInput(input, base.name);
  const inputNumber = valid ? parseInt(input, getBase(base.name)) : NaN;
  const binary = valid ? inputNumber.toString(2) : "";
  const octal = valid ? inputNumber.toString(8) : "";
  const decimal = valid ? inputNumber.toString(10) : "";
  const hex = valid ? inputNumber.toString(16) : "";

  return (
    <MainLayout title={title}>
      <div>
        <SectionHeader title="Configuration" />
        <VSpacerS />
        <Configuration icon={IconBeerMini} title="Format number">
          <Toggle on={format} onChange={setFormat} desc="Format the result" />
        </Configuration>
        <VSpacerS />
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
      <VSpacerL />
      <div>
        <SectionHeader title="Input">
          <PasteButton onClick={setInput} />
        </SectionHeader>
        <VSpacerS />
        <Input value={input} onChange={setInput} />
        <VSpacerS />
        {input.length > 0 && !valid && (
          <ErrorMessage
            message={`The current value isn't a valid ${base.name}`}
          />
        )}
      </div>
      <VSpacerM />
      <div>
        <SectionHeader title="Hexadecimal" />
        <VSpacerS />
        <Input value={hex}>
          <CopyButton text={hex} showTitle={true} />
        </Input>
      </div>
      <VSpacerM />
      <div>
        <SectionHeader title="Decimal" />
        <VSpacerS />
        <Input value={decimal}>
          <CopyButton text={decimal} showTitle={true} />
        </Input>
      </div>
      <VSpacerM />
      <div>
        <SectionHeader title="Octal" />
        <VSpacerS />
        <Input value={octal}>
          <CopyButton text={octal} showTitle={true} />
        </Input>
      </div>
      <VSpacerM />
      <div>
        <SectionHeader title="Binary" />
        <VSpacerS />
        <Input value={binary}>
          <CopyButton text={binary} showTitle={true} />
        </Input>
      </div>
    </MainLayout>
  );
};

export default NumberBase;
