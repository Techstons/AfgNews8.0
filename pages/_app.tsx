import { Layout } from "@components/common";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import "../styles/globals.scss";
import { DataProvider } from "@hooks/DataContext";
import Search from "../pages/search";
import { useState } from "react";
import { store } from "./store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }: AppProps) {
  const [isDark, setIsDark] = useState(false);
  return (
    <Provider store={store}>
      <Layout articles={pageProps.articles}>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default appWithTranslation(MyApp);
