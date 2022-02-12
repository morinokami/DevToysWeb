import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { v1 as uuidv1, v4 as uuidv4 } from "uuid";

import ClearButton from "../../components/ClearButton";
import Configuration from "../../components/Configuration";
import CopyButton from "../../components/CopyButton";
import NumberInput from "../../components/NumberInput";
import SectionHeader from "../../components/SectionHeader";
import Select from "../../components/Select";
import Spacer from "../../components/Spacer";
import TextArea from "../../components/TextArea";
import TextButton from "../../components/TextButton";
import Toggle from "../../components/Toggle";
import { IconBeerMini } from "../../data/icon";
import { getTitle } from "../../data/nav";
import MainLayout from "../../layouts/MainLayout";

const versions = [{ name: "1" }, { name: "4 (GUID)" }];

const Uuid: NextPage = () => {
  const router = useRouter();
  const title = getTitle(router.asPath);

  const [hyphens, setHyphens] = useState(true);
  const [uppercase, setUppercase] = useState(false);
  const [version, setVersion] = useState(versions[1]);
  const [count, setCount] = useState(1);
  const [uuids, setUuids] = useState<string[]>([]);

  const output = uuids.join("\n");

  return (
    <MainLayout title={title}>
      <div>
        <SectionHeader title="Configuration" />
        <Spacer y={6} />
        <Configuration icon={IconBeerMini} title="Hyphens">
          <Toggle on={hyphens} onChange={setHyphens} desc="Use hyphens" />
        </Configuration>
        <Spacer y={6} />
        <Configuration icon={IconBeerMini} title="Uppercase">
          <Toggle on={uppercase} onChange={setUppercase} desc="Use uppercase" />
        </Configuration>
        <Spacer y={6} />
        <Configuration
          icon={IconBeerMini}
          title="UUID version"
          subtitle="Choose the version of UUID to generate"
        >
          <div className="w-28">
            <Select options={versions} value={version} onChange={setVersion} />
          </div>
        </Configuration>
      </div>
      <Spacer y={24} />
      <div>
        <SectionHeader title="Generate" />
        <Spacer y={6} />
        <div className="flex items-center">
          <TextButton
            text="Generate UUID(s)"
            onClick={() => {
              const generatedUuids = [];
              for (let i = 0; i < count; i++) {
                let uuid = version.name === "1" ? uuidv1() : uuidv4();
                uuid = !hyphens ? uuid.replace(/-/g, "") : uuid;
                uuid = !uppercase ? uuid.toLowerCase() : uuid.toUpperCase();
                generatedUuids.push(uuid);
              }
              setUuids([...uuids, ...generatedUuids]);
            }}
          />
          <Spacer x={12} />
          x
          <Spacer x={12} />
          <NumberInput value={count} onChange={setCount} min={1} max={10000} />
        </div>
      </div>
      <Spacer y={24} />
      <div>
        <SectionHeader title="Output">
          <div className="flex">
            <CopyButton text={output} />
            <Spacer x={6} />
            <ClearButton onClick={() => setUuids([])} />
          </div>
        </SectionHeader>
        <Spacer y={6} />
        <TextArea value={output} />
      </div>
    </MainLayout>
  );
};

export default Uuid;
