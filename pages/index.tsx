import { Header, Section } from "@components/main";
import { SEOHeader } from "@components/seo";
import { getArticlesCtx } from "@hooks/article";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Script from "next/script";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const articles = await getArticlesCtx({ locale });

  return {
    props: {
      articles,
      ...(await serverSideTranslations(locale || "en", ["common", "home"])),
    },
    revalidate: 60,
  };
};

const Home = ({ articles }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { t } = useTranslation();

  return (
    <>
      <SEOHeader canonical="/" />
      <Header articles={articles.Home.items} title={t("home:top_news")} />
      <Section
        cards={articles.World.items}
        variant="quaternary"
        title={t("common:world")}
        slug="/world"
      >
        <a
          className="twitter-timeline"
          href="https://twitter.com/AFGNEWS_?ref_src=twsrc%5Etfw"
        >
          Tweets by AFGNEWS_
        </a>
      </Section>
      <Section
        cards={articles.Business.items}
        variant="tertiary"
        position="left"
        title={t("common:business")}
        slug="/business"
      />
      <Section
        cards={articles.Tech.items}
        variant="tertiary"
        title={t("common:tech")}
        slug="/tech-and-science"
      ></Section>

      <Section
        cards={articles.Health.items}
        variant="tertiary"
        title={t("common:health")}
        slug="/health"
      ></Section>
      <Section
        cards={articles.Sports.items}
        variant="tertiary"
        title={t("common:sports")}
        slug="/sports"
      ></Section>
      <Script
        src="https://platform.twitter.com/widgets.js"
        strategy="lazyOnload"
        id="twitter-embed"
      ></Script>
    </>
  );
};

export default Home;
