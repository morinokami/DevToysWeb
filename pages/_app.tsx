import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import SidebarLayout from "../layouts/SidebarLayout";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <SidebarLayout>
        <Component {...pageProps} />
      </SidebarLayout>
    </ThemeProvider>
  );
}

export default App;
