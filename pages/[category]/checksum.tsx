import { NextPage } from "next";
import { useState } from "react";

import { CopyButton } from "../../components/button";
import { Input, Select, Toggle } from "../../components/io";
import DragAndDrop from "../../components/io/DragAndDrop";
import FileInputText from "../../components/io/FileInputText";
import {
  Configuration,
  SectionConfiguration,
  SectionHeader,
  SectionMain,
} from "../../components/section";
import { VSpacerM, VSpacerS } from "../../components/Spacer";
import { IconCase, IconConversion } from "../../data/icon";
import { useLocale } from "../../hooks/useLocale";
import MainLayout from "../../layouts/MainLayout";
import { generateChecksum } from "../../lib/generate";

// TODO: incomplete
const Checksum: NextPage = () => {
  const { t } = useLocale();
  const { hashingAlgorithmOptions } = t.checksum;

  const [uppercase, setUppercase] = useState(false);
  const [algorithm, setAlgorithm] = useState(hashingAlgorithmOptions[0]);
  const [output, setOutput] = useState("");

  const onDrop = (files: File[]) => {
    if (files.length === 1) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result;
        if (result && result instanceof ArrayBuffer) {
          setOutput(generateChecksum(result, algorithm.value, uppercase));
        }
      };
      reader.readAsArrayBuffer(file);
    }
  };

  // const onFileInputChange = (files: FileList) => {
  //   if (files.length === 1) {
  //     const file = files[0];
  //     const reader = new FileReader();
  //     reader.onload = (e) => {
  //       const result = e.target?.result;
  //       if (result && result instanceof ArrayBuffer) {
  //         setOutput(generateChecksum(result, algorithm.value, uppercase));
  //       }
  //     };
  //     reader.readAsArrayBuffer(file);
  //   }
  // };

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
      <DragAndDrop onDrop={onDrop}>
        <p>{t.checksum.dragAndDropTitle}</p>
        {/* <VSpacerS />
        <p>{t.common.orText}</p>
        <VSpacerS />
        <FileInputText
          text={t.common.browseFilesText}
          onFileRead={onFileInputChange}
        /> */}
      </DragAndDrop>

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
