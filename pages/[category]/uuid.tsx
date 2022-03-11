import { NextPage } from "next";
import { useState } from "react";

import { ClearButton, CopyButton, TextButton } from "../../components/button";
import { NumberInput, Select, TextArea, Toggle } from "../../components/io";
import {
  Configuration,
  SectionConfiguration,
  SectionHeader,
  SectionMain,
} from "../../components/section";
import Spacer, { VSpacerL } from "../../components/Spacer";
import { IconCase, IconHyphen, IconVersion } from "../../data/icon";
import { useLocale } from "../../hooks/useLocale";
import MainLayout from "../../layouts/MainLayout";
import { generateUuid } from "../../lib/generate";

const Uuid: NextPage = () => {
  const { t } = useLocale();
  const { versionOptions } = t.uuid;

  const [hyphenate, setHyphenate] = useState(true);
  const [uppercase, setUppercase] = useState(false);
  const [version, setVersion] = useState(versionOptions[1]);
  const [count, setCount] = useState<number | null>(1);
  const [uuids, setUuids] = useState<string[]>([]);

  const generate = () => {
    if (count === null) {
      return;
    }

    const generated = [];
    for (let i = 0; i < count; i++) {
      const uuid = generateUuid(version.value, hyphenate, uppercase);
      generated.push(uuid);
    }
    setUuids([...uuids, ...generated]);
  };

  const output = uuids.join("\n");

  return (
    <MainLayout title={t.uuid.title}>
      <SectionConfiguration title={t.common.configTitle}>
        <Configuration icon={IconHyphen} title={t.uuid.hyphenateTitle}>
          <Toggle
            on={hyphenate}
            onChange={setHyphenate}
            desc={t.uuid.hyphenateDesc}
          />
        </Configuration>
        <Configuration icon={IconCase} title={t.uuid.uppercaseTitle}>
          <Toggle
            on={uppercase}
            onChange={setUppercase}
            desc={t.uuid.uppercaseDesc}
          />
        </Configuration>
        <Configuration
          icon={IconVersion}
          title={t.uuid.uuidVersionTitle}
          desc={t.uuid.uuidVersionSubtitle}
        >
          <div className="w-28">
            <Select
              options={versionOptions}
              value={version}
              onChange={setVersion}
            />
          </div>
        </Configuration>
      </SectionConfiguration>

      <VSpacerL />
      <SectionMain>
        <SectionHeader title={t.uuid.generateTitle} />
        <div className="flex items-center">
          <TextButton
            className="bg-blue-30 text-white hover:bg-blue-20 dark:text-black"
            text={t.uuid.generateButtonText}
            onClick={generate}
          />
          <Spacer x={12} />
          x
          <Spacer x={12} />
          <NumberInput value={count} onChange={setCount} min={1} max={10000} />
        </div>
      </SectionMain>

      <VSpacerL />
      <SectionMain className="flex grow flex-col">
        <SectionHeader title={t.common.outputTitle} label="output">
          <CopyButton text={output} />
          <Spacer x={6} />
          <ClearButton onClick={() => setUuids([])} />
        </SectionHeader>
        <TextArea id="output" value={output} />
      </SectionMain>
    </MainLayout>
  );
};

export default Uuid;
