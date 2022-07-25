import { Layout } from "@components/common";
import { getArticlesOrdered } from "@hooks/article";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import "../styles/globals.scss";

export const getStaticProps = async () => {
  const articles = await getArticlesOrdered();

  return {
    pageProps: {
      articles,
    },
    revalidate: 60,
    notFound: !!articles,
  };
};

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    console.log(pageProps.articles);
  }, [pageProps.articles]);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
