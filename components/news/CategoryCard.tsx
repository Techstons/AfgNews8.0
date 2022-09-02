import styled from "@emotion/styled";
import Link from "next/link";
import { Article } from "@components/types";
import CloudinaryImage from "./CloudinaryImage";
import useFormattedDate from "@hooks/useFormattedDate";

type Variants = "primary" | "secondary" | "tertiary" | "quaternary";
interface ICategoryCard {
  card?: Article;
  variant: Variants;
}

type ArticleProps = {
  variant: Variants;
};

const CategoryCard = ({ card, variant }: ICategoryCard) => {
  const articleDate = useFormattedDate(
    card?.createdAt ? new Date(card.createdAt) : new Date(),
    "distance"
  );

  if (variant === "primary" || variant === "secondary")
    return (
      <ArticleWrapper variant={variant}>
        <div className="article-image">
          <Link href={`/articles/${card?.slug}`}>
            <a aria-label={card?.title}>
              <CloudinaryImage
                featuredImage={card?.featuredImage}
                title={card?.title}
              />
            </a>
          </Link>
        </div>
        <Details>
          <Link href={`/articles/${card?.slug}`}>
            <a>
              <ArticleTitle variant={variant}>{card?.title}</ArticleTitle>
            </a>
          </Link>
          <p>{articleDate} ago</p>
        </Details>
      </ArticleWrapper>
    );
  else if (variant === "tertiary")
    return (
      <>
        <TertiaryArticleWrapper>
          <Link href={`/articles/${card?.slug}`}>
            <a aria-label={card?.title}>
              <div className="article-image">
                <CloudinaryImage
                  featuredImage={card?.featuredImage}
                  title={card?.title}
                  layout="fill"
                />
              </div>
            </a>
          </Link>

          <Details>
            <Link href={`/articles/${card?.slug}`}>
              <a>
                <ArticleTitle variant={variant}>{card?.title}</ArticleTitle>
              </a>
            </Link>
            <p>{articleDate} ago</p>
          </Details>
        </TertiaryArticleWrapper>
      </>
    );
  else
    return (
      <QuaternaryArticleWrapper>
        <div className="details">
          <p className="date">{articleDate} ago</p>
          <h3>
            <Link href={`/articles/${card?.slug}`}>
              <a>{card?.title}</a>
            </Link>
          </h3>
          <p className="excerpt">{card?.excerpt}</p>
        </div>
        <div className="article-image">
          <Link href={`/articles/${card?.slug}`}>
            <a aria-label={card?.title}>
              <CloudinaryImage
                featuredImage={card?.featuredImage}
                title={card?.title}
              />
            </a>
          </Link>
        </div>
      </QuaternaryArticleWrapper>
    );
};

export default CategoryCard;

const ArticleWrapper = styled.article<ArticleProps>`
  text-align: ${(props) => (props.variant === "primary" ? "center" : "left")};

  .article-image {
    margin-bottom: ${(props) =>
      props.variant === "primary" ? "2.5rem" : "0.5rem"};
  }
`;

const TertiaryArticleWrapper = styled.article`
  display: flex;
  gap: 1.25rem;

  .article-image {
    position: relative;
    width: 88px;
    height: 88px;
  }
`;

const QuaternaryArticleWrapper = styled.article`
  display: grid;
  grid-template-columns: 1.4fr 0.6fr;
  gap: 1rem;

  .details {
    & > * {
      margin-bottom: 0.75rem;
    }

    .date {
      font-size: 10px;
    }

    .excerpt {
      line-height: 1.75rem;
    }
  }
`;

const ArticleTitle = styled.h3<ArticleProps>`
  margin: ${(props) =>
    props.variant === "primary" || props.variant === "secondary"
      ? "0.5rem 0"
      : "auto"};
  font-size: ${(props) =>
    props.variant === "primary" || props.variant === "secondary"
      ? "24px"
      : "16px"};
`;

const Details = styled.div``;
