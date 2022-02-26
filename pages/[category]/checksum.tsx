import { NextPage } from "next";
import { useState } from "react";

import { CopyButton } from "../../components/button";
import { Input, Select, Toggle } from "../../components/io";
import DragAndDrop from "../../components/io/dragAndDrop";
import {
  Configuration,
  SectionConfiguration,
  SectionHeader,
  SectionMain,
} from "../../components/section";
import { VSpacerM } from "../../components/Spacer";
import { IconCase, IconConversion } from "../../data/icon";
import { useLocale } from "../../hooks/useLocale";
import MainLayout from "../../layouts/MainLayout";

const Checksum: NextPage = () => {
  const { t } = useLocale();
  const { hashingAlgorithmOptions } = t.checksum;

  const [uppercase, setUppercase] = useState(false);
  const [algorithm, setAlgorithm] = useState(hashingAlgorithmOptions[0]);

  const output = "";

  return (
    <MainLayout title={t.checksum.title}>
      <SectionConfiguration title={t.common.configTitle}>
        <Configuration icon={IconCase} title={t.checksum.uppercaseTitle}>
          <Toggle
            on={uppercase}
            onChange={setUppercase}
            desc={t.checksum.uppercaseDesc}
          />
        </Configuration>
        <Configuration
          icon={IconConversion}
          title={t.uuid.uuidVersionTitle}
          desc={t.uuid.uuidVersionSubtitle}
        >
          <div className="w-28">
            <Select
              options={hashingAlgorithmOptions}
              value={algorithm}
              onChange={setAlgorithm}
            />
          </div>
        </Configuration>
      </SectionConfiguration>

      <VSpacerM />
      <DragAndDrop />

      <VSpacerM />
      <SectionMain>
        <SectionHeader title={t.common.outputTitle} label="output" />
        <Input id="output" value={output}>
          <CopyButton text={output} showTitle={true} />
        </Input>
      </SectionMain>

      {/* TODO: Output Comparer (https://github.com/veler/DevToys/pull/406) */}
    </MainLayout>
  );
};

export default Checksum;
