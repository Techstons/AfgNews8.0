import { CategorySection, Section } from "@components/main";
import { SEOHeader } from "@components/seo";
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
    fallback: false,
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
      category: articlesPerCategory[0]?.category || params!.category,
      ...(await serverSideTranslations(locale || "en", ["common"])),
    },
    revalidate: 60,
    notFound: articlesPerCategory.length === 0,
  };
};

const Category = ({
  articlesPerCategory,
  slug,
  category,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <SEOHeader title={`${category} | AfgNews`} canonical={slug} />
      {/* <Section
        variant="primary"
        cards={articlesPerCategory}
        title={category}
        slug={category}
      /> */}
      <CategorySection title={category} articles={articlesPerCategory} />
    </>
  );
};

export default Category;
