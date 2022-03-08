import Head from "next/head";

import { VSpacerL } from "../components/Spacer";
import { useLocale } from "../hooks/useLocale";

const getPWADisplayMode = () => {
  const isStandalone = window.matchMedia("(display-mode: standalone)").matches;
  if (document.referrer.startsWith("android-app://")) {
    return "twa";
    // @ts-ignore
  } else if (navigator.standalone || isStandalone) {
    return "standalone";
  }
  return "browser";
};

interface MainLayoutProps {
  title?: string;
  cardLayout?: boolean;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  title,
  cardLayout,
  children,
}) => {
  const { t } = useLocale();

  const isStandalone = getPWADisplayMode() === "standalone";

  return (
    <>
      <Head>
        <title>
          {title
            ? `${title}${isStandalone ? "" : " - DevToysWeb"}`
            : `${isStandalone ? "" : "DevToysWeb"}`}
        </title>
      </Head>
      <div className="flex h-full flex-col">
        <h1 className="text-lg">{title ?? t.common.allToolsTitle}</h1>
        {cardLayout ? null : <VSpacerL />}
        <div className="flex grow flex-col">{children}</div>
      </div>
    </>
  );
};

export default MainLayout;
