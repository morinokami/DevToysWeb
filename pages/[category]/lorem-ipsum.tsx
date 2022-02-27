import { LoremIpsum } from "lorem-ipsum";
import { NextPage } from "next";
import { useEffect, useState } from "react";

import { ClearButton, CopyButton } from "../../components/button";
import { NumberInput, Select, TextArea } from "../../components/io";
import {
  Configuration,
  SectionConfiguration,
  SectionHeader,
  SectionMain,
} from "../../components/section";
import Spacer, { VSpacerM } from "../../components/Spacer";
import { IconBeerMini } from "../../data/icon";
import { optionValues } from "../../data/optionValues";
import { useLocale } from "../../hooks/useLocale";
import MainLayout from "../../layouts/MainLayout";

const Lorem: NextPage = () => {
  const { t } = useLocale();
  const { typeOptions } = t.loremIpsum;

  const [genType, setGenType] = useState(typeOptions[2]);
  const [length, setLength] = useState<number | null>(1);
  const [output, setOutput] = useState("");

  useEffect(() => {
    const lorem = new LoremIpsum();
    switch (genType.value) {
      case optionValues.loremIpsum.type.words:
        setOutput(lorem.generateWords(length ?? undefined));
        break;
      case optionValues.loremIpsum.type.sentences:
        setOutput(lorem.generateSentences(length ?? undefined));
        break;
      case optionValues.loremIpsum.type.paragraphs:
        const generated = lorem
          .generateParagraphs(length ?? 0)
          .replace(/\n/g, "\n\n");
        setOutput(generated);
        break;
    }
  }, [genType, length]);

  return (
    <MainLayout title={t.loremIpsum.title}>
      <SectionConfiguration title={t.common.configTitle}>
        <Configuration
          icon={IconBeerMini}
          title={t.loremIpsum.typeTitle}
          desc={t.loremIpsum.typeSubtitle}
        >
          <div className="w-32">
            <Select
              options={typeOptions}
              value={genType}
              onChange={setGenType}
            />
          </div>
        </Configuration>
        <Configuration
          icon={IconBeerMini}
          title={t.loremIpsum.lengthTitle}
          desc={t.loremIpsum.lengthSubtitle}
        >
          <NumberInput
            value={length}
            onChange={setLength}
            min={1}
            max={10000}
          />
        </Configuration>
      </SectionConfiguration>

      <VSpacerM />
      <SectionMain>
        <SectionHeader title={t.common.outputTitle} label="output">
          <div className="flex">
            <CopyButton text={output} />
            <Spacer x={6} />
            <ClearButton onClick={() => setOutput("")} />
          </div>
        </SectionHeader>
        <TextArea id="output" value={output} rows={20} />
      </SectionMain>
    </MainLayout>
  );
};

export default Lorem;
