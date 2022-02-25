import jwt_decode from "jwt-decode";
import { NextPage } from "next";
import { useState } from "react";

import { ClearButton, CopyButton, PasteButton } from "../../components/button";
import { CodeEditor, FileInput, TextArea } from "../../components/io";
import { SectionHeader, SectionMain } from "../../components/section";
import Spacer, { VSpacerM } from "../../components/Spacer";
import { useLocale } from "../../hooks/useLocale";
import MainLayout from "../../layouts/MainLayout";

const decode = (jwt: string) => {
  try {
    const header = JSON.stringify(jwt_decode(jwt, { header: true }), null, 2);
    const payload = JSON.stringify(jwt_decode(jwt), null, 2);
    return { header, payload };
  } catch {
    return { header: "", payload: "" };
  }
};

const JwtDecoder: NextPage = () => {
  const { t } = useLocale();

  const [input, setInput] = useState("");

  const { header, payload } = decode(input);

  return (
    <MainLayout title={t.jwtDecoder.title}>
      <SectionMain>
        <SectionHeader title={t.jwtDecoder.jwtTokenTitle} label="jwt-token">
          <div className="flex">
            <PasteButton onClick={setInput} />
            <Spacer x={6} />
            <FileInput onFileRead={setInput} />
            <Spacer x={6} />
            <ClearButton onClick={() => setInput("")} />
          </div>
        </SectionHeader>
        <TextArea id="jwt-token" value={input} onChange={setInput} rows={5} />
      </SectionMain>

      <VSpacerM />
      <SectionMain>
        <SectionHeader title={t.jwtDecoder.headerTitle}>
          <CopyButton text={header} />
        </SectionHeader>
        <CodeEditor
          height="250px"
          value={header}
          language="json"
          readOnly={true}
        />
      </SectionMain>

      <VSpacerM />
      <SectionMain>
        <SectionHeader title={t.jwtDecoder.payloadTitle}>
          <CopyButton text={payload} />
        </SectionHeader>
        <CodeEditor
          height="250px"
          value={payload}
          language="json"
          readOnly={true}
        />
      </SectionMain>
    </MainLayout>
  );
};

export default JwtDecoder;
