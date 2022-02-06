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
      {title ? <h1 className="text-lg">{title}</h1> : null}
      {children}
    </>
  );
};

export default MainLayout;
