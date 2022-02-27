import { NextPage } from "next";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";

import { Select, Toggle } from "../components/io";
import { Configuration, SectionConfiguration } from "../components/section";
import { VSpacerM } from "../components/Spacer";
import {
  IconHightlight,
  IconI18n,
  IconIndentation,
  IconLineNumber,
  IconTheme,
  IconWrap,
} from "../data/icon";
import { editorSettings } from "../data/localStorageKeys";
import { useLocale } from "../hooks/useLocale";
import { useLocalStorage } from "../hooks/useLocalStorage";
import MainLayout from "../layouts/MainLayout";

const languageOptions = [
  { name: "English", value: "en" },
  { name: "日本語", value: "ja" },
];

const Settings: NextPage = () => {
  const { t, locale } = useLocale();
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  const { themeOptions } = t.settings;
  const language = languageOptions.find((l) => l.value === locale);
  const currentTheme = themeOptions.find((t) => t.value === theme);

  const [wrapWord, setWrapWord] = useLocalStorage(
    editorSettings.wrapWord.key,
    editorSettings.wrapWord.default
  );
  const [lineNumber, setLineNumber] = useLocalStorage(
    editorSettings.lineNumber.key,
    editorSettings.lineNumber.default
  );
  const [highlight, setHighlight] = useLocalStorage(
    editorSettings.highlightCurrentLine.key,
    editorSettings.highlightCurrentLine.default
  );
  const [renderWhiteSpace, setRenderWhiteSpace] = useLocalStorage(
    editorSettings.renderWhiteSpace.key,
    editorSettings.renderWhiteSpace.default
  );

  return (
    <MainLayout title={t.settings.title}>
      <SectionConfiguration>
        <Configuration icon={IconI18n} title={t.settings.languageTitle}>
          <div className="w-36">
            {language && (
              <Select
                options={languageOptions}
                value={language}
                onChange={(l) => {
                  router.push("/", "/", { locale: l.value });
                }}
              />
            )}
          </div>
        </Configuration>
        <Configuration
          icon={IconTheme}
          title={t.settings.themeTitle}
          desc={t.settings.themeSubtitle}
        >
          <div className="w-36">
            <Select
              options={themeOptions}
              value={currentTheme || themeOptions[0]}
              onChange={(t) => {
                setTheme(t.value);
              }}
            />
          </div>
        </Configuration>
      </SectionConfiguration>

      <VSpacerM />
      <SectionConfiguration title={t.settings.textEditorTitle}>
        <Configuration icon={IconWrap} title={t.settings.wrapWordTitle}>
          <Toggle
            on={wrapWord}
            onChange={setWrapWord}
            desc={t.settings.wrapWordTitle}
          />
        </Configuration>
        <Configuration
          icon={IconLineNumber}
          title={t.settings.lineNumbersTitle}
          desc={t.settings.lineNumbersDesc}
        >
          <Toggle
            on={lineNumber}
            onChange={setLineNumber}
            desc={t.settings.lineNumbersDesc}
          />
        </Configuration>
        <Configuration
          icon={IconHightlight}
          title={t.settings.highlightCurrentLineTitle}
          desc={t.settings.highlightCurrentLineDesc}
        >
          <Toggle
            on={highlight}
            onChange={setHighlight}
            desc={t.settings.highlightCurrentLineDesc}
          />
        </Configuration>
        <Configuration
          icon={IconIndentation}
          title={t.settings.renderWhiteSpaceTitle}
        >
          <Toggle
            on={renderWhiteSpace}
            onChange={setRenderWhiteSpace}
            desc={t.settings.renderWhiteSpaceTitle}
          />
        </Configuration>
      </SectionConfiguration>
    </MainLayout>
  );
};

export default Settings;
