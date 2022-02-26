import Head from "next/head";

import { VSpacerL } from "../components/Spacer";
import { useLocale } from "../hooks/useLocale";

interface MainLayoutProps {
  title?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ title, children }) => {
  const { t } = useLocale();

  return (
    <>
      <Head>
        <title>{title ? `${title} - DevToysWeb` : "DevToysWeb"}</title>
      </Head>
      <div className="flex h-full flex-col">
        <h1 className="text-lg">{title ?? t.common.allToolsTitle}</h1>
        <VSpacerL />
        <div className="flex grow flex-col">{children}</div>
      </div>
    </>
  );
};

export default MainLayout;
