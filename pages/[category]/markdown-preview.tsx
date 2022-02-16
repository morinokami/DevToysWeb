import { marked } from "marked";
import { NextPage } from "next";
import { useState } from "react";

import Configuration from "../../components/Configuration";
import MarkdownPreview from "../../components/MarkdownPreview";
import SectionContainer from "../../components/SectionContainer";
import SectionHeader from "../../components/SectionHeader";
import Select from "../../components/Select";
import { VSpacerM, VSpacerS } from "../../components/Spacer";
import { IconBeerMini } from "../../data/icon";
import { useLocale } from "../../hooks/useLocale";
import MainLayout from "../../layouts/MainLayout";

const MakrdownPreview: NextPage = () => {
  const { t } = useLocale();

  const [input, setInput] = useState("");
  const [theme, setTheme] = useState(t.markdownPreview.themeOptions[0]);

  const output = marked.parse(input);

  return (
    <MainLayout title={t.markdownPreview.title}>
      <SectionContainer>
        <SectionHeader title={t.common.configTitle} />
        <VSpacerS />
        <Configuration
          icon={IconBeerMini}
          title={t.markdownPreview.themeTitle}
          subtitle={t.markdownPreview.themeSubtitle}
        >
          <div className="w-24">
            <Select
              options={t.markdownPreview.themeOptions}
              value={theme}
              onChange={setTheme}
            />
          </div>
        </Configuration>
      </SectionContainer>

      <VSpacerM />
      <SectionContainer className="grow">
        <MarkdownPreview
          input={input}
          setInput={setInput}
          output={output}
          theme={theme.value}
        />
      </SectionContainer>
    </MainLayout>
  );
};

export default MakrdownPreview;
