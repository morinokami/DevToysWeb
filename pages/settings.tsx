import { NextPage } from "next";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";

import Configuration from "../components/Configuration";
import SectionContainer from "../components/SectionContainer";
import Select from "../components/Select";
import { VSpacerS } from "../components/Spacer";
import { IconBeerMini } from "../data/icon";
import { useLocale } from "../hooks/useLocale";
import MainLayout from "../layouts/MainLayout";

const Settings: NextPage = () => {
  const { t, locale } = useLocale();
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  const { languageOptions, themeOptions } = t.settings;
  const language = languageOptions.find((l) => l.value === locale);
  const currentTheme = themeOptions.find((t) => t.value === theme);

  return (
    <MainLayout title={t.settings.title}>
      <SectionContainer>
        <Configuration icon={IconBeerMini} title={t.settings.languageTitle}>
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
      </SectionContainer>
      <VSpacerS />
      <SectionContainer>
        <Configuration
          icon={IconBeerMini}
          title={t.settings.themeTitle}
          subtitle={t.settings.themeSubtitle}
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
      </SectionContainer>
    </MainLayout>
  );
};

export default Settings;
