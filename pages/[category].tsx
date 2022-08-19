import { Section } from "@components/main";
import { SEOHeader } from "@components/seo";
import styled from "@emotion/styled";
import {
  getAllCategories,
  getArticleByCategory,
  getArticlesCtx,
} from "@hooks/article";
import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await getAllCategories();

  const paths = res
    .filter((d) => d.name !== "Home")
    .map((category) => ({
      params: {
        category: category.slug,
      },
    }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({
  params,
  locale,
}: GetStaticPropsContext<{ category: string; name: string }>) => {
  const category =
    params!.category[0].toUpperCase() + params!.category.slice(1);

  let categoryName =
    category === "Tech-and-science" ? "Tech & Science" : category;

  const limit = 10;
  const articlesPerCategory = await getArticleByCategory({
    category: categoryName,
    limit,
    locale
  });

  const articles = await getArticlesCtx();

  return {
    props: {
      articles,
      articlesPerCategory,
      category: categoryName,
      ...(await serverSideTranslations(locale || "en", ["common"])),
    },
    revalidate: 60,
  };
};

const Category = ({
  articlesPerCategory,
  category,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Wrapper>
      <SEOHeader title={`${category} | AFGNews`} canonical={category} />
      <Section
        variant="primary"
        cards={articlesPerCategory}
        title={category}
        slug={`/${category}`}
      />
    </Wrapper>
  );
};

export default Category;

const Wrapper = styled.div``;
