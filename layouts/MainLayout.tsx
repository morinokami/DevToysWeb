import Head from "next/head";

import { VSpacerL } from "../components/Spacer";

interface MainLayoutProps {
  title?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title ? `${title} - DevToysWeb` : "DevToysWeb"}</title>
      </Head>
      <div className="flex h-full flex-col">
        {/* TODO: Use t */}
        <h1 className="text-lg">{title ?? "All tools"}</h1>
        <VSpacerL />
        <div className="flex grow flex-col">{children}</div>
      </div>
    </>
  );
};

export default MainLayout;
