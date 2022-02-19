import md5 from "crypto-js/md5";
import sha1 from "crypto-js/sha1";
import sha256 from "crypto-js/sha256";
import sha512 from "crypto-js/sha512";
import { NextPage } from "next";
import { useState } from "react";

import ClearButton from "../../components/ClearButton";
import Configuration from "../../components/Configuration";
import CopyButton from "../../components/CopyButton";
import Input from "../../components/Input";
import PasteButton from "../../components/PasteButton";
import SectionContainer from "../../components/SectionContainer";
import SectionHeader from "../../components/SectionHeader";
import Spacer, { VSpacerL, VSpacerM, VSpacerS } from "../../components/Spacer";
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
      <SectionContainer>
        <SectionHeader title={t.common.configTitle} />
        <VSpacerS />
        <Configuration icon={IconCase} title={t.hash.uppercaseTitle}>
          <Toggle
            on={uppercase}
            onChange={setUppercase}
            desc={t.hash.uppercaseDesc}
          />
        </Configuration>
      </SectionContainer>

      <VSpacerL />
      <SectionContainer>
        <SectionHeader title={t.common.inputTitle}>
          <div className="flex">
            <PasteButton onClick={setInput} />
            <Spacer x={6} />
            <ClearButton onClick={() => setInput("")} />
          </div>
        </SectionHeader>
        <VSpacerS />
        <TextArea value={input} onChange={setInput} rows={5} />
      </SectionContainer>

      <VSpacerM />
      <SectionContainer>
        <SectionHeader title={t.hash.md5Title} />
        <VSpacerS />
        <Input value={md5Output}>
          <CopyButton text={md5Output} showTitle={true} />
        </Input>
      </SectionContainer>

      <VSpacerM />
      <SectionContainer>
        <SectionHeader title={t.hash.sha1Title} />
        <VSpacerS />
        <Input value={sha1Output}>
          <CopyButton text={sha1Output} showTitle={true} />
        </Input>
      </SectionContainer>

      <VSpacerM />
      <SectionContainer>
        <SectionHeader title={t.hash.sha256Title} />
        <VSpacerS />
        <Input value={sha256Output}>
          <CopyButton text={sha256Output} showTitle={true} />
        </Input>
      </SectionContainer>

      <VSpacerM />
      <SectionContainer>
        <SectionHeader title={t.hash.sha512Title} />
        <VSpacerS />
        <Input value={sha512Output}>
          <CopyButton text={sha512Output} showTitle={true} />
        </Input>
      </SectionContainer>
    </MainLayout>
  );
};

export default Hash;
