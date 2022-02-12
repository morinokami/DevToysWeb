import md5 from "crypto-js/md5";
import sha1 from "crypto-js/sha1";
import sha256 from "crypto-js/sha256";
import sha512 from "crypto-js/sha512";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";

import ClearButton from "../../components/ClearButton";
import Configuration from "../../components/Configuration";
import CopyButton from "../../components/CopyButton";
import Input from "../../components/Input";
import PasteButton from "../../components/PasteButton";
import SectionHeader from "../../components/SectionHeader";
import Spacer, { VSpacerL, VSpacerM, VSpacerS } from "../../components/Spacer";
import TextArea from "../../components/TextArea";
import Toggle from "../../components/Toggle";
import { IconBeerMini } from "../../data/icon";
import { getTitle } from "../../data/nav";
import MainLayout from "../../layouts/MainLayout";

const Hash: NextPage = () => {
  const router = useRouter();
  const title = getTitle(router.asPath);

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
    <MainLayout title={title}>
      <div>
        <SectionHeader title="Configuration" />
        <VSpacerS />
        <Configuration icon={IconBeerMini} title="Uppercase">
          <Toggle on={uppercase} onChange={setUppercase} desc="Use uppercase" />
        </Configuration>
      </div>

      <VSpacerL />
      <div>
        <SectionHeader title="Input">
          <div className="flex">
            <PasteButton onClick={setInput} />
            <Spacer x={6} />
            <ClearButton onClick={() => setInput("")} />
          </div>
        </SectionHeader>
        <VSpacerS />
        <TextArea value={input} onChange={setInput} rows={5} />
      </div>

      <VSpacerM />
      <div>
        <SectionHeader title="MD5" />
        <VSpacerS />
        <Input value={md5Output}>
          <CopyButton text={md5Output} showTitle={true} />
        </Input>
      </div>

      <VSpacerM />
      <div>
        <SectionHeader title="SHA1" />
        <VSpacerS />
        <Input value={sha1Output}>
          <CopyButton text={sha1Output} showTitle={true} />
        </Input>
      </div>

      <VSpacerM />
      <div>
        <SectionHeader title="SHA256" />
        <VSpacerS />
        <Input value={sha256Output}>
          <CopyButton text={sha256Output} showTitle={true} />
        </Input>
      </div>

      <VSpacerM />
      <div>
        <SectionHeader title="sha512" />
        <VSpacerS />
        <Input value={sha512Output}>
          <CopyButton text={sha512Output} showTitle={true} />
        </Input>
      </div>
    </MainLayout>
  );
};

export default Hash;
