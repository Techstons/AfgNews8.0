import { Layout } from "@components/common";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import "../styles/globals.scss";
import { DataProvider } from "@hooks/DataContext"
import Search from "../pages/search"
import { useState } from "react";




function MyApp({ Component, pageProps }: AppProps) {
  const [isDark, setIsDark] = useState(false);
  return (
    <Layout articles={pageProps.articles}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default appWithTranslation(MyApp);
