import { ArticleCard, CloudinaryImage, Comments } from "@components/news";
import { SEOHeader } from "@components/seo";
import { Container } from "@components/ui";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import styled from "@emotion/styled";
import {
  getAllArticlePaths,
  getArticleBySlug,
  getArticlesCtx,
  getRecommended,
} from "@hooks/article";
import useFormattedDate from "@hooks/useFormattedDate";
import { Clock, Share } from "@styled-icons/bootstrap";

import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import { useRouter } from "next/router";

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await getAllArticlePaths();

  const paths = res.map((slug) => ({
    params: {
      slug,
    },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<{ slug: string }>) => {
  const article = await getArticleBySlug({ slug: params!.slug });
  const recommended = await getRecommended();
  const articles = await getArticlesCtx();

  return {
    props: {
      article,
      recommended,
      articles,
    },
    notFound: !article,
    revalidate: 60,
  };
};

const ArticlePage = ({
  article,
  recommended,
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
        ogImage={article?.featuredImage.url}
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
                <CloudinaryImage
                  featuredImage={article.featuredImage}
                  title={article.title}
                />
              </Featured>
            )}
            <ArticleExcerpt>{article?.excerpt}</ArticleExcerpt>
            <ArticleMdx>
              {documentToReactComponents(article?.body.json)}
            </ArticleMdx>
          </ArticleBody>
          <Comments websiteId={7527} title={article.title} loadMode="scroll" />
        </ArticleWrapper>
        <Recommended>
          {!!recommended &&
            recommended.map((article) => (
              <ArticleCard key={article.title} card={article} variant="slim" />
            ))}
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
    grid-template-columns: 100%;
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

const Featured = styled.div`
  display: block;
`;

const ArticleExcerpt = styled.p`
  padding: 1rem 0;
  font-size: 1.25rem;
  line-height: 1.5;
  color: #8a8c8e;
`;

const ArticleMdx = styled.div`
  line-height: 1.5;
  word-wrap: break-word;

  h1 {
    font-size: 2.25rem;
  }

  h2 {
    font-size: 1.85rem;
  }

  h3 {
    font-size: 1.65rem;
  }

  h4 {
    font-size: 1.55rem;
  }

  h5 {
    font-size: 1.35rem;
  }

  h6 {
    font-size: 1.15rem;
  }

  blockquote {
    border-left: 10px solid var(--primary-color);
    margin: 1.5em 10px;
    padding: 0.5em 10px;
  }

  blockquote:before {
    color: var(--primary-color);
    content: open-quote;
    font-size: 4em;
    line-height: 0.1em;
    margin-right: 0.25em;
    vertical-align: -0.4em;
  }

  blockquote p {
    display: inline;
    font-style: oblique;
  }

  ul,
  ol {
    padding-left: 1.25rem;
  }

  ul li::marker {
    color: var(--primary-color);
  }

  a {
    color: var(--primary-color);
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`;
