import { NextPage } from "next";
import React from "react";
import { useState } from "react";

import { CopyButton, PasteButton } from "../../components/button";
import ErrorMessage from "../../components/ErrorMessage";
import Input from "../../components/Input";
import {
  Configuration,
  SectionConfiguration,
  SectionHeader,
  SectionMain,
} from "../../components/section";
import Select from "../../components/Select";
import { VSpacerL, VSpacerM } from "../../components/Spacer";
import Toggle from "../../components/Toggle";
import { IconCase, IconConversion } from "../../data/icon";
import { useLocale } from "../../hooks/useLocale";
import MainLayout from "../../layouts/MainLayout";
import { convertRadix, isValidNumber } from "../../lib/convert";

const NumberBase: NextPage = () => {
  const { t } = useLocale();
  const { baseOptions } = t.numberBase;

  const [input, setInput] = useState("");
  const [format, setFormat] = useState(true);
  const [base, setBase] = useState(baseOptions[2]);

  // TODO: Number.MAX_SAFE_INTEGER
  // TODO: Use format
  const valid = isValidNumber(input, base.value);
  const decimal = convertRadix(input, base.value, 10);
  const binary = convertRadix(input, base.value, 2);
  const octal = convertRadix(input, base.value, 8);
  const hex = convertRadix(input, base.value, 16);

  return (
    <MainLayout title={t.numberBase.title}>
      <SectionConfiguration title={t.common.configTitle}>
        <Configuration icon={IconCase} title={t.numberBase.formatNumberTitle}>
          <Toggle
            on={format}
            onChange={setFormat}
            desc={t.numberBase.formatNumberDesc}
          />
        </Configuration>
        <Configuration
          icon={IconConversion}
          title={t.numberBase.inputTypeTitle}
          subtitle={t.numberBase.inputTypeSubtitle}
        >
          <div className="w-36">
            <Select options={baseOptions} value={base} onChange={setBase} />
          </div>
        </Configuration>
      </SectionConfiguration>

      <VSpacerL />
      <SectionMain>
        <SectionHeader title={t.common.inputTitle} label="input">
          <PasteButton onClick={setInput} />
        </SectionHeader>
        <Input id="input" value={input} onChange={setInput} />
        {input.length > 0 && !valid && (
          // TODO: Move to locales
          <ErrorMessage
            message={`The current value isn't a valid ${base.name}`}
          />
        )}
      </SectionMain>

      <VSpacerM />
      <SectionMain>
        <SectionHeader title={t.numberBase.hexTitle} label="hex" />
        <Input id="hex" value={hex}>
          <CopyButton text={hex} showTitle={true} />
        </Input>
      </SectionMain>

      <VSpacerM />
      <SectionMain>
        <SectionHeader title={t.numberBase.decimalTitle} label="decimal" />
        <Input id="decimal" value={decimal}>
          <CopyButton text={decimal} showTitle={true} />
        </Input>
      </SectionMain>

      <VSpacerM />
      <SectionMain>
        <SectionHeader title={t.numberBase.octalTitle} label="octal" />
        <Input id="octal" value={octal}>
          <CopyButton text={octal} showTitle={true} />
        </Input>
      </SectionMain>

      <VSpacerM />
      <SectionMain>
        <SectionHeader title={t.numberBase.binaryTitle} label="binary" />
        <Input id="binary" value={binary}>
          <CopyButton text={binary} showTitle={true} />
        </Input>
      </SectionMain>
    </MainLayout>
  );
};

export default NumberBase;
