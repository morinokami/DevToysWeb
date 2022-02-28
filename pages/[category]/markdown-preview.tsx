import { marked } from "marked";
import { NextPage } from "next";
import { useState } from "react";

import { MarkdownPreview, Select } from "../../components/io";
import {
  Configuration,
  SectionConfiguration,
  SectionMain,
} from "../../components/section";
import { VSpacerM } from "../../components/Spacer";
import { IconTheme } from "../../data/icon";
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
          icon={IconTheme}
          title={t.markdownPreview.themeTitle}
          desc={t.markdownPreview.themeSubtitle}
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
