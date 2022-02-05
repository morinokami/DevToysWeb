import Head from "next/head";

interface MainLayoutProps {
  title?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title ? `${title} - DevToysWeb` : "DevToysWeb"}</title>
      </Head>
      {title ?? <h1>{title}</h1>}
      {children}
    </>
  );
};

export default MainLayout;
