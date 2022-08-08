import { Discussion } from "@components/article";
import { ArticleCard } from "@components/news";
import { SEOHeader } from "@components/seo";
import { Container } from "@components/ui";
import styled from "@emotion/styled";
import { getArticleByProp, getArticles } from "@hooks/article";
import useFormattedDate from "@hooks/useFormattedDate";
import { Clock, Share } from "@styled-icons/bootstrap";
import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import Image from "next/image";
import { useRouter } from "next/router";

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getArticles();

  const paths = data.map((article) => ({
    params: {
      slug: article?.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<{ slug: string }>) => {
  const article = await getArticleByProp("slug", params!.slug);

  return {
    props: {
      article: article[0],
    },
  };
};

const ArticlePage = ({
  article,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const articleDate = useFormattedDate(
    article?.createdAt ? new Date(article.createdAt) : new Date(),
    "distance"
  );

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <SEOHeader
        title={article?.title}
        author={article?.author}
        description={article?.excerpt}
        ogImage={article?.featuredImage}
        canonical={article?.slug}
      />
      <Wrapper>
        <ArticleWrapper>
          <ArticleHeader>
            <small className="category">{article?.category}</small>
            <h1 className="title">{article?.title}</h1>
            <p className="contributor">
              <span>
                By <strong> {article?.author}</strong> <br />
                AFGNews Team
              </span>
            </p>
            <div className="date">
              <Clock size={18} />{" "}
              <span>{article?.createdAt ? articleDate : "N/A"}</span>
            </div>
            <button className="share">
              <Share size={24} />
            </button>
          </ArticleHeader>
          <ArticleBody>
            {!!article?.featuredImage && (
              <Featured>
                <Image
                  src={article.featuredImage}
                  layout="responsive"
                  width={1920}
                  height={1080}
                  alt="Featured article image"
                />
              </Featured>
            )}
            <ArticleExcerpt>{article?.excerpt}</ArticleExcerpt>
            <ArticleMdx>{article?.body}</ArticleMdx>
          </ArticleBody>
          <Discussion id={article?.id} title={article?.title} />
        </ArticleWrapper>
        <Recommended>
          <h2>Recommended</h2>
          <ArticleCard card={article} variant="slim" />
          <ArticleCard card={article} variant="slim" />
          <ArticleCard card={article} variant="slim" />
          <ArticleCard card={article} variant="slim" />
        </Recommended>
      </Wrapper>
    </Container>
  );
};

export default ArticlePage;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 65% 35%;
  gap: 1rem;
  margin: 2rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ArticleWrapper = styled.div``;

const Recommended = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: column;
`;

const ArticleHeader = styled.header`
  border-bottom: solid 1px #8a8c8e;
  padding-bottom: 2rem;

  .title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    letter-spacing: 0.1em;
  }

  .share {
    background-color: var(--primary-color);
    color: white;
    padding: 0.5rem;
    border-radius: var(--base-radius);
    width: max-content;
  }

  .category {
    background-color: var(--primary-color);
    color: white;
    padding: 0.25rem;
    border-radius: var(--base-radius);
    width: max-content;
  }

  & > *:not(.category) {
    margin-top: 1rem;
  }
`;

const ArticleBody = styled.div`
  padding: 2rem 0;
`;

const Featured = styled.div``;

const ArticleExcerpt = styled.p`
  padding: 1rem 0;
  font-size: 1.25rem;
  line-height: 1.5;
  color: #8a8c8e;
`;

const ArticleMdx = styled.p`
  padding: 1rem 0;
  line-height: 1.5;
`;
