import { NextPage } from "next";
import { useTheme } from "next-themes";

import { useLocale } from "../hooks/useLocale";
import MainLayout from "../layouts/MainLayout";

const Settings: NextPage = () => {
  const { t } = useLocale();
  const { setTheme } = useTheme();
  return (
    <MainLayout title={t.settings.title}>
      <button onClick={() => setTheme("light")}>{t.settings.lightTitle}</button>
      <button onClick={() => setTheme("dark")}>{t.settings.darkTitle}</button>
    </MainLayout>
  );
};

export default Settings;
