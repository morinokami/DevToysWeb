import "../styles/globals.css";
import "../styles/github-markdown.css";
import "react-reflex/styles.css";

import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

import Header from "../components/Header";
import SidebarLayout from "../layouts/SidebarLayout";

function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);
  const [navIsOpen, setNavIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setNavIsOpen(false);
  }, [router.asPath]);

  if (!mounted) {
    return null;
  }

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
