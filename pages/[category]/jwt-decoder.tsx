import jwt_decode from "jwt-decode";
import { NextPage } from "next";
import { useState } from "react";

import ClearButton from "../../components/ClearButton";
import CodeEditor from "../../components/CodeEditor";
import CopyButton from "../../components/CopyButton";
import PasteButton from "../../components/PasteButton";
import SectionContainer from "../../components/SectionContainer";
import SectionHeader from "../../components/SectionHeader";
import Spacer, { VSpacerM, VSpacerS } from "../../components/Spacer";
import TextArea from "../../components/TextArea";
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
      <SectionContainer>
        <SectionHeader title={t.jwtDecoder.jwtTokenTitle}>
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
        <SectionHeader title={t.jwtDecoder.headerTitle}>
          <CopyButton text={header} />
        </SectionHeader>
        <VSpacerS />
        <CodeEditor
          height="250px"
          value={header}
          language="json"
          readOnly={true}
        />
      </SectionContainer>

      <VSpacerM />
      <SectionContainer>
        <SectionHeader title={t.jwtDecoder.payloadTitle}>
          <CopyButton text={payload} />
        </SectionHeader>
        <VSpacerS />
        <CodeEditor
          height="250px"
          value={payload}
          language="json"
          readOnly={true}
        />
      </SectionContainer>
    </MainLayout>
  );
};

export default JwtDecoder;
