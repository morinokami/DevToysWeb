import "../styles/globals.css";

import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

import Header from "../components/Header";
import SidebarLayout from "../layouts/SidebarLayout";

function App({ Component, pageProps }: AppProps) {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setNavIsOpen(false);
  }, [router.asPath]);

  return (
    <ThemeProvider attribute="class">
      <Header setNavIsOpen={setNavIsOpen} />
      <SidebarLayout navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen}>
        <Component {...pageProps} />
      </SidebarLayout>
    </ThemeProvider>
  );
}

export default App;
