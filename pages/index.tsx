import { MainHeader, BusinessSection, Section } from "@components/main";
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
      <SectionLayout>
        <div>
          <BusinessSection
            articles={articles.Business.items}
            title={t("common:business")}
            slug="/business"
          />
          <Section
            cards={articles.World.items}
            variant="tertiary"
            title={t("common:world")}
            slug="/world"
          />
        </div>
        <div></div>
      </SectionLayout>
    </Container>
  );
};

export default Home;

const SectionLayout = styled.div`
  display: grid;
  grid-template-columns: 1.35fr 0.65fr;
`;
