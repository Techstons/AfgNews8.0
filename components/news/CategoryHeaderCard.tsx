import { Article } from "@components/types";
import styled from "@emotion/styled";
import { CloudinaryImage } from "@components/news";
import Link from "next/link";
import useFormattedDate from "@hooks/useFormattedDate";

type Variants = "primary" | "secondary" | "tertiary";

interface ICategoryCard {
  card?: Article;
  variant: Variants;
}

type ArticleProps = {
  variant: Variants;
};

const CategoryHeaderCard = ({ card, variant }: ICategoryCard) => {
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
        <div>
          <Link href={`/articles/${card?.slug}`}>
            <a>
              <ArticleTitle variant={variant}>{card?.title}</ArticleTitle>
            </a>
          </Link>
          <p>{articleDate} ago</p>
        </div>
      </ArticleWrapper>
    );
  else
    return (
      <>
        <TertiaryArticleWrapper>
          <Link href={`/articles/${card?.slug}`}>
            <a aria-label={card?.title}>
              <div className="article-image">
                <CloudinaryImage
                  featuredImage={card?.featuredImage}
                  title={card?.title}
                  layout="fixed"
                  width="88"
                  height="88"
                />
              </div>
            </a>
          </Link>

          <div>
            <Link href={`/articles/${card?.slug}`}>
              <a>
                <ArticleTitle variant={variant}>{card?.title}</ArticleTitle>
              </a>
            </Link>
            <p>{articleDate} ago</p>
          </div>
        </TertiaryArticleWrapper>
      </>
    );
};

export default CategoryHeaderCard;

const ArticleWrapper = styled.article<ArticleProps>`
  text-align: ${(props) => (props.variant === "primary" ? "center" : "left")};

  .article-image {
    margin-bottom: ${(props) =>
      props.variant === "primary" ? "2.5rem" : "0.5rem"};

    @media screen and (max-width: 480px) {
      display: ${(props) => (props.variant === "secondary" ? "none" : "block")};
    }
  }

  @media screen and (max-width: 480px) {
    border-bottom: ${(props) =>
      props.variant === "secondary" ? "1px solid #d48985" : "none"};
    padding-bottom: ${(props) =>
      props.variant === "secondary" ? "1.5rem" : "0"};
  }
`;

const ArticleTitle = styled.h3<ArticleProps>`
  margin: "0.5rem 0";
  font-size: "24px";
`;

const TertiaryArticleWrapper = styled.article`
  display: flex;
  gap: 1.25rem;

  .article-image {
    position: relative;

    @media screen and (max-width: 480px) {
      display: none;
    }
  }

  @media screen and (max-width: 480px) {
    gap: 0;
    border-bottom: 1px solid #d48985;
    padding-bottom: 1.5rem;
  }
`;
