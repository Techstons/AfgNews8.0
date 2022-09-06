import { Article } from "@components/types";
import styled from "@emotion/styled";
import Link from "next/link";
import { FC } from "react";
import CloudinaryImage from "./CloudinaryImage";

interface IArticle {
  card: Article;
  variant?: "primary" | "slim";
  width?: string;
  height?: string;
  layout?: "fixed" | "fill" | "raw" | "intrinsic" | "responsive" | undefined;
}

const ArticleCard: FC<IArticle> = ({
  card,
  variant = "primary",
  height,
  width,
  layout,
}) => {
  return variant === "primary" ? (
    <PrimaryWrapper>
      <Link href={`/articles/${card.slug}`} passHref={true}>
        <PrimaryAnchor>
          <div>
            <CloudinaryImage
              featuredImage={card.featuredImage}
              title={card.title}
              className="image-container"
              height={height}
              width={width}
              layout={layout}
            />
          </div>
          <div className="content">
            <h3>{card.title}</h3>
            <p className="description">{card.excerpt}</p>
            <p className="category">{card.category}</p>
          </div>
        </PrimaryAnchor>
      </Link>
    </PrimaryWrapper>
  ) : (
    <SecondaryWrapper>
      <Link href={`/articles/${card.slug}`} passHref={true}>
        <SecondaryAnchor>
          <CloudinaryImage
            featuredImage={card.featuredImage}
            title={card.title}
            height={height}
            width={width}
            layout={layout}
          />
          <div className="content">
            <h3>{card.title}</h3>
            <p className="category">{card.category}</p>
          </div>
        </SecondaryAnchor>
      </Link>
    </SecondaryWrapper>
  );
};

export default ArticleCard;

const PrimaryWrapper = styled.article`
  position: relative;
  padding-bottom: 0.5rem;
  overflow: hidden;
  border-radius: 0.25rem;

  .image-container {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
  }

  &:hover {
    border-color: var(--primary-color);
  }

  @media only screen and (min-width: 1024px) {
    padding-bottom: 2rem;
  }
`;

const SecondaryWrapper = styled.article`
  position: relative;
  padding-bottom: 1rem;
  overflow: hidden;
  border-radius: 0.25rem;
`;

const PrimaryAnchor = styled.a`
  cursor: pointer;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  h3 {
    font-size: 1.15rem;
    margin-bottom: 0.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    line-clamp: 2;
    -webkit-box-orient: vertical;
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
      font-weight: 400;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2; /* 2 number of lines to show */
      line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }

  &:hover {
    .content {
      color: var(--primary-color);
    }
  }

  @media only screen and (max-width: 950px) {
    padding-bottom: 1rem; // Adds padding-bottom on screens smaller than 450px so category doesn't touch the description
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
  display: flex;
  gap: 1rem;

  & > * {
    width: 50%;
  }

  h3 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    line-clamp: 2;
    -webkit-box-orient: vertical;
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
