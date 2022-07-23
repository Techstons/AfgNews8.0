import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Layout } from "@components/common";
import { SEOHeader } from "@components/seo";
import { getArticlesOrdered } from "@hooks/article";
import { useEffect } from "react";

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
      <SEOHeader canonical="" />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
