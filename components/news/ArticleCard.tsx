import styled from "@emotion/styled";
import { Article } from "@components/types";
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
      <Link href={`/articles/${card.id}`} passHref={true}>
        <PrimaryAnchor>
          <div className="image-container">
            <Image
              src={card.featuredImage ?? "/assets/placeholder.svg"}
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
            <p>{card.category}</p>
            <p className="description">{card.excerpt}</p>
          </div>
        </PrimaryAnchor>
      </Link>
    </PrimaryWrapper>
  ) : (
    <SecondaryWrapper>
      <Link href={`/articles/${card.id}`} passHref={true}>
        <SecondaryAnchor>
          <div className="image-container">
            <Image
              src={card.featuredImage ?? "/assets/placeholder.svg"}
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
            <p>{card.category}</p>
          </div>
        </SecondaryAnchor>
      </Link>
    </SecondaryWrapper>
  );
};

export default ArticleCard;

const PrimaryWrapper = styled.article`
  &:hover {
    border-color: var(--primary-color);
  }

  @media only screen and (min-width: 1024px) {
    padding-bottom: 2rem;
    border-bottom: 2px solid var(--primary-light);
  }
`;

const SecondaryWrapper = styled.article`
  position: relative;
`;

const PrimaryAnchor = styled.a`
  position: relative;
  cursor: pointer;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  & .content {
    width: 100%;

    & .description {
      display: none;
    }
  }

  & .image-container {
    border: 1px solid transparent;
  }

  &:hover {
    & .image-container {
      border: 1px solid var(--primary-color);
    }

    .content {
      color: var(--primary-color);
    }
  }

  @media only screen and (min-width: 1024px) {
    grid-template-columns: 1fr;

    & .content {
      & .description {
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

  & .content {
    width: 100%;
  }

  & .image-container {
    border: 1px solid transparent;
  }

  &:hover {
    & .image-container {
      border: 1px solid var(--primary-color);
    }

    .content {
      color: var(--primary-color);
    }
  }
`;
