import { Article } from "@components/types";
import styled from "@emotion/styled";
import useFormattedDate from "@hooks/useFormattedDate";
import { Clock } from "@styled-icons/bootstrap";
import Link from "next/link";
import { FC } from "react";
import CategoryLabel from "./CategoryLabel";
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
  const articleDate = useFormattedDate(
    card?.createdAt ? new Date(card.createdAt) : new Date(),
    "distance"
  );

  return variant === "primary" ? (
    <PrimaryWrapper>
      <Link href={`/articles/${card.slug}`} passHref={true}>
        <PrimaryAnchor>
          <ImageWrapper>
            <CloudinaryImage
              featuredImage={card.featuredImage}
              title={card.title}
              className="image-container"
              height={height}
              width={width}
              layout={layout}
            />
            <p className="category">
              <CategoryLabel label={card.category} />
            </p>
          </ImageWrapper>
          <div className="content">
            <h3>{card.title}</h3>
            <p className="description">{card.excerpt}</p>
            <p className="date">
              <Clock size={10} className="clock" /> {articleDate}
            </p>
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

    .date {
      margin-top: 0.5rem;
      font-size: 0.75rem;

      .clock {
        margin-right: 0.25rem;
      }
    }

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
      margin-bottom: 1.5rem;
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
  align-items: center;
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

    .date {
      font-size: 0.75rem;
    }

    .category {
      margin-top: 1rem;
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

const ImageWrapper = styled.div`
  position: relative;
`;
