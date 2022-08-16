import { Layout } from "@components/common";
import type { AppProps } from "next/app";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout articles={pageProps.articles}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
