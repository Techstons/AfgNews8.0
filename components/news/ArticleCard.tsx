import styled from "@emotion/styled";
import { Article } from "@hooks/types";
import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

interface IArticle {
  card: Article;
  variant: "primary" | "slim";
}

const ArticleCard: FC<IArticle> = ({ card, variant = "primary" }) => {
  return variant === "primary" ? (
    <PrimaryWrapper>
      <Link href={`/articles/${card.slug}`} passHref={true}>
        <PrimaryAnchor>
          <div className="image-container">
            <Image
              src={
                card?.featuredImage ? card.featuredImage : "/placeholder.svg"
              }
              className="image"
              alt={card.title}
              layout="responsive"
              width={1920}
              height={1080}
              quality={20}
              objectFit="cover"
            />
          </div>
          <div className="content">
            <h3>{card.title}</h3>
            <p className="description">{card.excerpt}</p>
            <p className="category">{card.category.name}</p>
          </div>
        </PrimaryAnchor>
      </Link>
    </PrimaryWrapper>
  ) : (
    <SecondaryWrapper>
      <Link href={`/articles/${card.slug}`} passHref={true}>
        <SecondaryAnchor>
          <div className="image-container">
            <Image
              src={
                card?.featuredImage ? card.featuredImage : "/placeholder.svg"
              }
              className="image"
              alt={card.title}
              layout="responsive"
              width={1920}
              height={1080}
              quality={20}
              objectFit="cover"
            />
          </div>
          <div className="content">
            <h3>{card.title}</h3>
            <p className="category">{card.category.name}</p>
          </div>
        </SecondaryAnchor>
      </Link>
    </SecondaryWrapper>
  );
};

export default ArticleCard;

const PrimaryWrapper = styled.article`
  position: relative;

  &:hover {
    border-color: var(--primary-color);
  }

  @media only screen and (min-width: 1024px) {
    padding-bottom: 2rem;
  }
`;

const SecondaryWrapper = styled.article`
  position: relative;
`;

const PrimaryAnchor = styled.a`
  cursor: pointer;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  h3 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  & .content {
    width: 100%;

    .category {
      position: absolute;
      bottom: 0;
      font-size: 0.9rem;
      font-weight: 500;
      margin-bottom: 0.1rem;

      &::before {
        content: " ";
        display: inline-block;
        margin-right: 0.5rem;
        border-left: 2px solid var(--primary-color);
        height: 0.75rem;
        padding: 0;
        width: 0;
      }
    }

    .description {
      display: none;
      font-size: 0.8rem;
      font-weight: 400;
    }
  }

  &:hover {
    .content {
      color: var(--primary-color);
    }
  }

  @media only screen and (min-width: 1024px) {
    grid-template-columns: 1fr;

    & .content {
      .description {
        display: block;
      }
    }
  }
`;

const SecondaryAnchor = styled.a`
  position: relative;
  cursor: pointer;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  h3 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  & .content {
    width: 100%;

    .category {
      font-size: 0.75rem;

      &::before {
        content: " ";
        display: inline-block;
        margin-right: 0.5rem;
        border-left: 2px solid var(--primary-color);
        height: 0.75rem;
        padding: 0;
        width: 0;
      }
    }
  }

  &:hover {
    .content {
      color: var(--primary-color);
    }
  }
`;
