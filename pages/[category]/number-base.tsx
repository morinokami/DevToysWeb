import { NextPage } from "next";
import React from "react";
import { useState } from "react";

import Configuration from "../../components/Configuration";
import CopyButton from "../../components/CopyButton";
import ErrorMessage from "../../components/ErrorMessage";
import Input from "../../components/Input";
import PasteButton from "../../components/PasteButton";
import SectionContainer from "../../components/SectionContainer";
import SectionHeader from "../../components/SectionHeader";
import Select from "../../components/Select";
import { VSpacerL, VSpacerM, VSpacerS } from "../../components/Spacer";
import Toggle from "../../components/Toggle";
import { IconBeerMini } from "../../data/icon";
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
      <SectionContainer>
        <SectionHeader title={t.common.configTitle} />
        <VSpacerS />
        <Configuration
          icon={IconBeerMini}
          title={t.numberBase.formatNumberTitle}
        >
          <Toggle
            on={format}
            onChange={setFormat}
            desc={t.numberBase.formatNumberDesc}
          />
        </Configuration>
        <VSpacerS />
        <Configuration
          icon={IconBeerMini}
          title={t.numberBase.inputTypeTitle}
          subtitle={t.numberBase.inputTypeSubtitle}
        >
          <div className="w-36">
            <Select options={baseOptions} value={base} onChange={setBase} />
          </div>
        </Configuration>
      </SectionContainer>

      <VSpacerL />
      <SectionContainer>
        <SectionHeader title={t.common.inputTitle}>
          <PasteButton onClick={setInput} />
        </SectionHeader>
        <VSpacerS />
        <Input value={input} onChange={setInput} />
        <VSpacerS />
        {input.length > 0 && !valid && (
          // TODO: Move to locales
          <ErrorMessage
            message={`The current value isn't a valid ${base.name}`}
          />
        )}
      </SectionContainer>

      <VSpacerM />
      <SectionContainer>
        <SectionHeader title={t.numberBase.hexTitle} />
        <VSpacerS />
        <Input value={hex}>
          <CopyButton text={hex} showTitle={true} />
        </Input>
      </SectionContainer>

      <VSpacerM />
      <SectionContainer>
        <SectionHeader title={t.numberBase.decimalTitle} />
        <VSpacerS />
        <Input value={decimal}>
          <CopyButton text={decimal} showTitle={true} />
        </Input>
      </SectionContainer>

      <VSpacerM />
      <SectionContainer>
        <SectionHeader title={t.numberBase.octalTitle} />
        <VSpacerS />
        <Input value={octal}>
          <CopyButton text={octal} showTitle={true} />
        </Input>
      </SectionContainer>

      <VSpacerM />
      <SectionContainer>
        <SectionHeader title={t.numberBase.binaryTitle} />
        <VSpacerS />
        <Input value={binary}>
          <CopyButton text={binary} showTitle={true} />
        </Input>
      </SectionContainer>
    </MainLayout>
  );
};

export default NumberBase;
