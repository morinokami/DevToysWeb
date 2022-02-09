import Head from "next/head";

import Spacer from "../components/Spacer";

interface MainLayoutProps {
  title?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title ? `${title} - DevToysWeb` : "DevToysWeb"}</title>
      </Head>
      {title ? <h1 className="text-lg">{title}</h1> : null}
      <Spacer y={24} />
      {children}
    </>
  );
};

export default MainLayout;
