import { Section } from "@components/main";
import { SEOHeader } from "@components/seo";
import { Article } from "@components/types";
import styled from "@emotion/styled";
import { getArticleByProp } from "@hooks/article/get-article";
import data from "@test-data";
import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = data.menuitems.slice(1).map((category) => ({
    params: {
      category: category.url.slice(1),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<{ category: string }>) => {
  const category =
    params!.category.split("")[0].toUpperCase() + params!.category.slice(1);

  const articles = (await getArticleByProp("category", category)) as Article[];

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
