import { Article } from "@components/types";
import { Container } from "@components/ui";
import styled from "@emotion/styled";
import { Clock, Share } from "@styled-icons/bootstrap";
import { formatDistanceToNow } from "date-fns";
import { getDoc, getDocs } from "firebase/firestore";
import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import { articleCollection, articleRefById } from "utils/firebase";
import Image from "next/image";
import { Discussion } from "@components/article";

// TODO: Article structure
// Author
// Date
// Title
// Category
// Excerpt
// Featured image
// Body (markdown)
// Tags

export const getStaticPaths: GetStaticPaths = async () => {
  const snapshot = await getDocs(articleCollection);
  const data = snapshot.docs.map((doc) => doc.id);

  const paths = data.map((article) => ({
    params: {
      slug: article,
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
  const snap = await getDoc(articleRefById(params!.slug));
  const article = { id: snap.id, ...snap.data() } as Article;

  return {
    props: {
      article,
    },
  };
};

const ArticlePage = ({
  article,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Container>
      <ArticleHeader>
        <small className="category">{article.category}</small>
        <h1 className="title">{article.title}</h1>

        <p className="contributor">
          <span>
            By <strong> {article.author}</strong> <br />
            AFGNews Team
          </span>
        </p>
        <div className="date">
          <Clock size={18} />{" "}
          <span>{formatDistanceToNow(new Date(article.createdAt))}</span>
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

        <ArticleExcerpt>{article.excerpt}</ArticleExcerpt>
        <ArticleMdx>{article.body}</ArticleMdx>
      </ArticleBody>
      <Discussion id={article.id} title={article.title} />
    </Container>
  );
};

export default ArticlePage;

const ArticleHeader = styled.header`
  border-bottom: solid 1px #8a8c8e;
  padding: 2rem 0;

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
