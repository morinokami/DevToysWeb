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
      {/* TODO: Use t */}
      <h1 className="text-lg">{title ?? "All tools"}</h1>
      <VSpacerL />
      {children}
    </>
  );
};

export default MainLayout;
