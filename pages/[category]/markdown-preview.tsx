import { marked } from "marked";
import { NextPage } from "next";
import { useState } from "react";

import { Select } from "../../components/io";
import MarkdownPreview from "../../components/MarkdownPreview";
import {
  Configuration,
  SectionConfiguration,
  SectionMain,
} from "../../components/section";
import { VSpacerM } from "../../components/Spacer";
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
      <SectionConfiguration title={t.common.configTitle}>
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
      </SectionConfiguration>

      <VSpacerM />
      <SectionMain className="grow">
        <MarkdownPreview
          input={input}
          setInput={setInput}
          output={output}
          theme={theme.value}
        />
      </SectionMain>
    </MainLayout>
  );
};

export default MakrdownPreview;
