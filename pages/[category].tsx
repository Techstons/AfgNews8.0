import { Section } from "@components/main";
import { SEOHeader } from "@components/seo";
import styled from "@emotion/styled";
import {
  getAllCategoriesSlugs,
  getArticleByCategory,
  getArticlesCtx,
} from "@hooks/article";
import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const res = await getAllCategoriesSlugs();

  const paths = res
    .map((category) => {
      return locales!.map((locale) => {
        return {
          params: {
            category: category.slug,
          },
          locale,
        };
      });
    })
    .flat();

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({
  params,
  locale,
}: GetStaticPropsContext<{ category: string }>) => {
  const limit = 10;
  const articlesPerCategory = await getArticleByCategory({
    category: params!.category,
    limit,
    locale,
  });

  const articles = await getArticlesCtx({ locale });

  return {
    props: {
      articles,
      articlesPerCategory,
      slug: params!.category,
      category: articlesPerCategory[0]?.category,
      ...(await serverSideTranslations(locale || "en", ["common"])),
    },
    revalidate: 60,
  };
};

const Category = ({
  articlesPerCategory,
  slug,
  category,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Wrapper>
      <SEOHeader title={`${category} | AFGNews`} canonical={slug} />
      <Section
        variant="primary"
        cards={articlesPerCategory}
        title={category}
        slug={category}
      />
    </Wrapper>
  );
};

export default Category;

const Wrapper = styled.div``;
