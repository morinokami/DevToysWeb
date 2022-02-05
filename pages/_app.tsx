import "../styles/globals.css";

import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

import Header from "../components/Header";
import SidebarLayout from "../layouts/SidebarLayout";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Header />
      <SidebarLayout>
        <Component {...pageProps} />
      </SidebarLayout>
    </ThemeProvider>
  );
}

export default App;
