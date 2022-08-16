import { Section } from "@components/main";
import { SEOHeader } from "@components/seo";
import styled from "@emotion/styled";
import { getArticleByCategory } from "@hooks/article";
import { getAllCategories } from "@hooks/article/get-all-categories";
import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await getAllCategories();

  const paths = res.map((category) => ({
    params: {
      category: category.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<{ category: string; name: string }>) => {
  const category = params!.category;

  const limit = 10;
  const articles = await getArticleByCategory({ category, limit });

  return {
    props: {
      articles,
      category,
    },
    revalidate: 60,
  };
};

const Category = ({
  articles,
  category,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Wrapper>
      <SEOHeader title={`${category} | AFGNews`} canonical={category} />
      <Section
        variant="primary"
        cards={articles}
        title={category}
        slug={`/${category}`}
      />
    </Wrapper>
  );
};

export default Category;

const Wrapper = styled.div``;
