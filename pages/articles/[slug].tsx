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
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const res = await getAllArticlePaths();

  const paths = res
    .map((slug) => {
      return locales!.map((locale) => {
        return {
          params: {
            slug,
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
}: GetStaticPropsContext<{ slug: string }>) => {
  const article = await getArticleBySlug({ slug: params!.slug, locale });
  const recommended = await getRecommended({
    locale,
    category: article.category,
  });
  const articles = await getArticlesCtx({ locale });

  return {
    props: {
      article,
      recommended,
      articles,
      ...(await serverSideTranslations(locale || "en", ["common", "slug"])),
    },
    notFound: !article,
    revalidate: 60,
  };
};

const ArticlePage = ({
  article,
  recommended,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { t } = useTranslation();
  const router = useRouter();
  const articleDate = useFormattedDate(
    article?.createdAt ? new Date(article.createdAt) : new Date(),
    "distance"
  );

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const fullPath = `https://www.afgnews.com/articles/${article.slug}`;

  const invokeShare = () => {
    if (!navigator.canShare) {
      navigator.clipboard.writeText(fullPath);
      return;
    }

    navigator.share({
      url: fullPath,
    });
  };

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
            <p className="category">{article?.category}</p>
            <h1 className="title">{article?.title}</h1>
            <div>
              <p className="contributor">
                <span>
                  <strong>By {article?.author || "AfgNews"} Team</strong>
                </span>
              </p>
              <div className="date">
                <Clock size={12} className="clock" />
                {"  "}
                <span>{article?.createdAt ? articleDate : "N/A"} ago</span>
              </div>
            </div>

            <button
              data-text="Link copied!"
              className="share"
              onClick={invokeShare}
            >
              <Share size={16} />
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
            <ArticleExcerpt>
              <i>{article?.excerpt}</i>
            </ArticleExcerpt>
            <ArticleMdx>
              {documentToReactComponents(article?.body.json)}
            </ArticleMdx>
          </ArticleBody>
          <Comments
            websiteId={8397}
            //7660 -- previous
            title={article.title}
            url={fullPath}
            loadMode="load"
            id={article.slug + article.sys.publishedAt}
          />
        </ArticleWrapper>
        <Aside>
          <div>
            <h2>Latest news</h2>
            {!!recommended.latest &&
              recommended.latest.length !== 0 &&
              recommended.latest.map((article) => (
                <ArticleCard
                  key={article.title}
                  card={article}
                  variant="slim"
                />
              ))}
          </div>
          <div>
            <h2>{t("slug:recommended")}</h2>
            {!!recommended.recommended &&
              recommended.recommended.length !== 0 &&
              recommended.recommended.map((article) => (
                <ArticleCard
                  key={article.title}
                  card={article}
                  variant="slim"
                />
              ))}
          </div>
        </Aside>
      </Wrapper>
    </Container>
  );
};

export default ArticlePage;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 100%;
  }
`;

const ArticleWrapper = styled.div``;

const Aside = styled.aside`
  display: flex;
  gap: 6rem;
  flex-direction: column;

  div {
    display: flex;
    gap: 1rem;
    flex-direction: column;
  }
`;

const ArticleHeader = styled.header`
  border-bottom: solid 1px #8a8c8e;
  padding-bottom: 2rem;

  .title {
    font-size: 2.15rem;
    font-weight: bold;
    margin-bottom: 1.65rem;
    letter-spacing: 0.1em;
  }

  .share {
    background-color: var(--primary-color);
    color: white;
    padding: 0.4rem 0.5rem 0.5rem;
    border-radius: var(--base-radius);
    width: max-content;
    position: relative;

    &:before {
      content: attr(data-text);
      position: absolute;

      /* vertically center */
      top: 50%;
      transform: translateY(-50%);

      /* move to right */
      left: 100%;
      margin-left: 15px; /* and add a small left margin */

      width: 125px;
      padding: 10px;
      border-radius: 3px;
      background: #000;
      color: #fff;
      text-align: center;

      display: none; /* hide by default */
    }

    &:after {
      content: "";
      position: absolute;

      /* position tooltip correctly */
      left: 100%;
      margin-left: -5px;

      /* vertically center */
      top: 50%;
      transform: translateY(-50%);

      /* the arrow */
      border: 10px solid #000;
      border-color: transparent black transparent transparent;

      display: none;
    }

    &:focus-within:before,
    &:focus-within:after {
      display: block;
    }
  }

  .category {
    background-color: var(--primary-color);
    color: white;
    padding: 0.25rem;
    border-radius: var(--base-radius);
    font-weight: 100;
    font-size: 0.85rem;
    margin-bottom: 1.25rem;
    width: max-content;
  }

  .contributor,
  .date {
    margin-bottom: 0.3rem;
    font-size: 0.65rem;
  }

  .date {
    .clock {
      margin-right: 0.15rem;
    }
  }

  & > *:not(.category) {
    margin-top: 0.85rem;
  }
`;

const ArticleBody = styled.div`
  padding: 2rem 0;
`;

const Featured = styled.div`
  display: block;
`;

const ArticleExcerpt = styled.p`
  margin-bottom: 2.25rem;
  margin-top: 0.5rem;
  font-size: 1.25rem;
  line-height: 1.5;
  font-weight: var(--font-medium);
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

  p {
    margin-bottom: 1.25rem;
  }
`;
