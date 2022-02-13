import { NextPage } from "next";
import { useState } from "react";
import { v1 as uuidv1, v4 as uuidv4 } from "uuid";

import ClearButton from "../../components/ClearButton";
import Configuration from "../../components/Configuration";
import CopyButton from "../../components/CopyButton";
import NumberInput from "../../components/NumberInput";
import SectionContainer from "../../components/SectionContainer";
import SectionHeader from "../../components/SectionHeader";
import Select from "../../components/Select";
import Spacer, { VSpacerL, VSpacerS } from "../../components/Spacer";
import TextArea from "../../components/TextArea";
import TextButton from "../../components/TextButton";
import Toggle from "../../components/Toggle";
import { IconBeerMini } from "../../data/icon";
import { useLocale } from "../../hooks/useLocale";
import MainLayout from "../../layouts/MainLayout";

const Uuid: NextPage = () => {
  const { t } = useLocale();
  const { versionOptions } = t.uuid;

  const [hyphens, setHyphens] = useState(true);
  const [uppercase, setUppercase] = useState(false);
  const [version, setVersion] = useState(versionOptions[1]);
  const [count, setCount] = useState(1);
  const [uuids, setUuids] = useState<string[]>([]);

  const generate = () => {
    const generated = [];
    for (let i = 0; i < count; i++) {
      let uuid = version.name === "1" ? uuidv1() : uuidv4();
      uuid = !hyphens ? uuid.replace(/-/g, "") : uuid;
      uuid = !uppercase ? uuid.toLowerCase() : uuid.toUpperCase();
      generated.push(uuid);
    }
    setUuids([...uuids, ...generated]);
  };

  const output = uuids.join("\n");

  return (
    <MainLayout title={t.uuid.title}>
      <SectionContainer>
        <SectionHeader title={t.common.configTitle} />
        <VSpacerS />
        <Configuration icon={IconBeerMini} title={t.uuid.hyphenateTitle}>
          <Toggle
            on={hyphens}
            onChange={setHyphens}
            desc={t.uuid.hyphenateDesc}
          />
        </Configuration>
        <VSpacerS />
        <Configuration icon={IconBeerMini} title={t.uuid.uppercaseTitle}>
          <Toggle
            on={uppercase}
            onChange={setUppercase}
            desc={t.uuid.uppercaseDesc}
          />
        </Configuration>
        <VSpacerS />
        <Configuration
          icon={IconBeerMini}
          title={t.uuid.uuidVersionTitle}
          subtitle={t.uuid.uuidVersionSubtitle}
        >
          <div className="w-28">
            <Select
              options={versionOptions}
              value={version}
              onChange={setVersion}
            />
          </div>
        </Configuration>
      </SectionContainer>

      <VSpacerL />
      <SectionContainer>
        <SectionHeader title={t.uuid.generateTitle} />
        <VSpacerS />
        <div className="flex items-center">
          <TextButton text={t.uuid.generateButtonText} onClick={generate} />
          <Spacer x={12} />
          x
          <Spacer x={12} />
          <NumberInput value={count} onChange={setCount} min={1} max={10000} />
        </div>
      </SectionContainer>

      <VSpacerL />
      <SectionContainer>
        <SectionHeader title={t.common.outputTitle}>
          <div className="flex">
            <CopyButton text={output} />
            <Spacer x={6} />
            <ClearButton onClick={() => setUuids([])} />
          </div>
        </SectionHeader>
        <VSpacerS />
        <TextArea value={output} />
      </SectionContainer>
    </MainLayout>
  );
};

export default Uuid;
