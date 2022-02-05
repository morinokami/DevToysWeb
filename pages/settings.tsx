import { NextPage } from "next";
import { useTheme } from "next-themes";

import MainLayout from "../layouts/MainLayout";

const Settings: NextPage = () => {
  const { theme, setTheme } = useTheme();
  return (
    <MainLayout title="Settings">
      <button onClick={() => setTheme("light")}>Light</button>
      <button onClick={() => setTheme("dark")}>Dark</button>
    </MainLayout>
  );
};

export default Settings;
