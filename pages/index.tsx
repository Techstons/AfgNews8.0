import { Header, Section } from "@components/main";
import { SEOHeader } from "@components/seo";
import { getArticlesCtx } from "@hooks/article";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const articles = await getArticlesCtx();

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
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="AFGNEWS_"
          autoHeight={true}
        />
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
    </>
  );
};

export default Home;
