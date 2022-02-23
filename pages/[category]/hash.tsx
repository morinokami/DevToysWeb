import md5 from "crypto-js/md5";
import sha1 from "crypto-js/sha1";
import sha256 from "crypto-js/sha256";
import sha512 from "crypto-js/sha512";
import { NextPage } from "next";
import { useState } from "react";

import { ClearButton, CopyButton, PasteButton } from "../../components/button";
import Input from "../../components/Input";
import {
  Configuration,
  SectionConfiguration,
  SectionHeader,
  SectionMain,
} from "../../components/section";
import Spacer, { VSpacerL, VSpacerM } from "../../components/Spacer";
import TextArea from "../../components/TextArea";
import Toggle from "../../components/Toggle";
import { IconCase } from "../../data/icon";
import { useLocale } from "../../hooks/useLocale";
import MainLayout from "../../layouts/MainLayout";

const Hash: NextPage = () => {
  const { t } = useLocale();

  const [input, setInput] = useState("");
  const [uppercase, setUppercase] = useState(false);

  const hash = (
    input: string,
    hasher: (
      message: string | CryptoJS.lib.WordArray,
      cfg?: object | undefined
    ) => CryptoJS.lib.WordArray,
    uppercase: boolean
  ) => {
    return uppercase
      ? hasher(input).toString().toUpperCase()
      : hasher(input).toString();
  };
  const md5Output = hash(input, md5, uppercase);
  const sha1Output = hash(input, sha1, uppercase);
  const sha256Output = hash(input, sha256, uppercase);
  const sha512Output = hash(input, sha512, uppercase);

  return (
    <MainLayout title={t.hash.title}>
      <SectionConfiguration title={t.common.configTitle}>
        <Configuration icon={IconCase} title={t.hash.uppercaseTitle}>
          <Toggle
            on={uppercase}
            onChange={setUppercase}
            desc={t.hash.uppercaseDesc}
          />
        </Configuration>
      </SectionConfiguration>

      <VSpacerL />
      <SectionMain>
        <SectionHeader title={t.common.inputTitle} label="input">
          <div className="flex">
            <PasteButton onClick={setInput} />
            <Spacer x={6} />
            <ClearButton onClick={() => setInput("")} />
          </div>
        </SectionHeader>
        <TextArea id="input" value={input} onChange={setInput} rows={5} />
      </SectionMain>

      <VSpacerM />
      <SectionMain>
        <SectionHeader title={t.hash.md5Title} label="md5" />
        <Input id="md5" value={md5Output}>
          <CopyButton text={md5Output} showTitle={true} />
        </Input>
      </SectionMain>

      <VSpacerM />
      <SectionMain>
        <SectionHeader title={t.hash.sha1Title} label="sha1" />
        <Input id="sha1" value={sha1Output}>
          <CopyButton text={sha1Output} showTitle={true} />
        </Input>
      </SectionMain>

      <VSpacerM />
      <SectionMain>
        <SectionHeader title={t.hash.sha256Title} label="sha256" />
        <Input id="sha256" value={sha256Output}>
          <CopyButton text={sha256Output} showTitle={true} />
        </Input>
      </SectionMain>

      <VSpacerM />
      <SectionMain>
        <SectionHeader title={t.hash.sha512Title} label="sha512" />
        <Input id="sha512" value={sha512Output}>
          <CopyButton text={sha512Output} showTitle={true} />
        </Input>
      </SectionMain>
    </MainLayout>
  );
};

export default Hash;
