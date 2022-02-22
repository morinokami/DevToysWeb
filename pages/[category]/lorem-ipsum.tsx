import { LoremIpsum } from "lorem-ipsum";
import { NextPage } from "next";
import { useEffect, useState } from "react";

import ClearButton from "../../components/ClearButton";
import Configuration from "../../components/Configuration";
import CopyButton from "../../components/CopyButton";
import NumberInput from "../../components/NumberInput";
import SectionContainer from "../../components/SectionContainer";
import SectionHeader from "../../components/SectionHeader";
import Select from "../../components/Select";
import Spacer, { VSpacerM, VSpacerS } from "../../components/Spacer";
import TextArea from "../../components/TextArea";
import { IconBeerMini } from "../../data/icon";
import { useLocale } from "../../hooks/useLocale";
import MainLayout from "../../layouts/MainLayout";

const Lorem: NextPage = () => {
  const { t } = useLocale();
  const { typeOptions } = t.loremIpsum;

  const [genType, setGenType] = useState(typeOptions[2]);
  const [length, setLength] = useState(1);
  const [output, setOutput] = useState("");

  useEffect(() => {
    const lorem = new LoremIpsum();
    switch (genType.value) {
      case "words":
        setOutput(lorem.generateWords(length));
        break;
      case "sentences":
        setOutput(lorem.generateSentences(length));
        break;
      case "paragraphs":
        const generated = lorem
          .generateParagraphs(length)
          .replace(/\n/g, "\n\n");
        setOutput(generated);
        break;
    }
  }, [genType, length]);

  return (
    <MainLayout title={t.loremIpsum.title}>
      <SectionContainer>
        <SectionHeader title={t.common.configTitle} />
        <VSpacerS />
        <Configuration
          icon={IconBeerMini}
          title={t.loremIpsum.typeTitle}
          subtitle={t.loremIpsum.typeSubtitle}
        >
          <div className="w-32">
            <Select
              options={typeOptions}
              value={genType}
              onChange={setGenType}
            />
          </div>
        </Configuration>
        <VSpacerS />
        <Configuration
          icon={IconBeerMini}
          title={t.loremIpsum.lengthTitle}
          subtitle={t.loremIpsum.lengthSubtitle}
        >
          <NumberInput
            value={length}
            onChange={setLength}
            min={1}
            max={10000}
          />
        </Configuration>
      </SectionContainer>

      <VSpacerM />
      <SectionContainer>
        <SectionHeader title={t.common.outputTitle} label="output">
          <div className="flex">
            <CopyButton text={output} />
            <Spacer x={6} />
            <ClearButton onClick={() => setOutput("")} />
          </div>
        </SectionHeader>
        <VSpacerS />
        <TextArea id="output" value={output} rows={20} />
      </SectionContainer>
    </MainLayout>
  );
};

export default Lorem;
