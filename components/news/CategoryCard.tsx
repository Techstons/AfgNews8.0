import styled from "@emotion/styled";
import Link from "next/link";
import { Article } from "@components/types";
import CloudinaryImage from "./CloudinaryImage";
import useFormattedDate from "@hooks/useFormattedDate";

type Variants = "primary" | "secondary" | "tertiary";
interface ICategoryCard {
  card: Article;
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
          <Link href={`/articles/${card.slug}`}>
            <a aria-label={card?.title}>
              <CloudinaryImage
                featuredImage={card?.featuredImage}
                title={card?.title}
              />
            </a>
          </Link>
        </div>
        <Details>
          <Link href={`/articles/${card.slug}`}>
            <a>
              <ArticleTitle variant={variant}>{card?.title}</ArticleTitle>
            </a>
          </Link>
          <p>{articleDate} ago</p>
        </Details>
      </ArticleWrapper>
    );
  else
    return (
      <>
        <TertiaryArticleWrapper>
          <Link href={`/articles/${card.slug}`}>
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
            <Link href={`/articles/${card.slug}`}>
              <a>
                <ArticleTitle variant={variant}>{card?.title}</ArticleTitle>
              </a>
            </Link>
            <p>{articleDate} ago</p>
          </Details>
        </TertiaryArticleWrapper>
      </>
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

const TertiaryArticleWrapper = styled.div`
  display: flex;
  gap: 1.25rem;

  .article-image {
    position: relative;
    width: 88px;
    height: 88px;
  }
`;

const ArticleTitle = styled.h2<ArticleProps>`
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
