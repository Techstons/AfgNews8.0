import {
  MainHeader,
  BusinessSection,
  WorldSection,
  TechAndScienceSection,
  CryptoSection,
} from "@components/main";
import { SEOHeader } from "@components/seo";
import { Container } from "@components/ui";
import styled from "@emotion/styled";
import { getArticlesCtx } from "@hooks/article";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

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
    <Container>
      <SEOHeader />
      <MainHeader articles={articles.Home.items} title={t("common:afg")} />
      <WorldSection
        slug="/world"
        title={t("common:world")}
        articles={articles.World.items}
      />
      <TwoColumns>
        <div>
          <BusinessSection
            articles={articles.Business.items}
            title={t("common:business")}
            slug="/business"
          />
        </div>
        <div></div>
      </TwoColumns>
      <TechAndScienceSection
        articles={articles.Tech.items}
        title={t("common:tech")}
        slug="/tech-and-science"
      />
      <CryptoSection
        slug="/crypto"
        title="Crypto"
        articles={articles.Crypto.items}
      />
    </Container>
  );
};

export default Home;

const TwoColumns = styled.div`
  display: grid;
  grid-template-columns: 1.35fr 0.65fr;
`;
