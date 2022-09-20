import { Article } from "@components/types";
import styled from "@emotion/styled";
import Link from "next/link";
import { FC } from "react";
import CategoryMinimal from "./CategoryMinimal";
import CloudinaryImage from "./CloudinaryImage";

type CardVariantProps = {
  categoryVariant?: "primary" | "secondary";
};

interface IArticle extends CardVariantProps {
  card: Article;
  variant?: "primary" | "slim";
  width?: string;
  height?: string;
  layout?: "fixed" | "fill" | "raw" | "intrinsic" | "responsive" | undefined;
}

const ArticleCard: FC<IArticle> = ({
  card,
  variant = "primary",
  categoryVariant = "primary",
  height,
  width,
  layout,
}) => {
  return variant === "primary" ? (
    <PrimaryWrapper>
      <Link href={`/articles/${card.slug}`} passHref={true}>
        <PrimaryAnchor categoryVariant={categoryVariant}>
          <ImageWrapper categoryVariant={categoryVariant}>
            <CloudinaryImage
              featuredImage={card.featuredImage}
              title={card.title}
              height={height}
              width={width}
              layout={layout}
              className="image-container"
            />
          </ImageWrapper>
          <div className="content">
            {categoryVariant === "primary" ? (
              <>
                <CategoryMinimal
                  className="category-and-time"
                  createdAt={card?.createdAt ?? Date.now()}
                  category={card?.category ?? "N/A"}
                />
                <h3 className="primary">{card.title}</h3>
              </>
            ) : (
              <>
                <CategoryMinimal
                  className="category-and-time"
                  createdAt={card?.createdAt ?? Date.now()}
                  category={card?.category ?? "N/A"}
                />
                <h3 className="secondary">{card.title}</h3>
              </>
            )}
            <p>{card.excerpt}</p>
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
            className="image-container"
          />
          <div className="content">
            {categoryVariant === "primary" ? (
              <>
                <h3>{card.title}</h3>
                <CategoryMinimal
                  createdAt={card?.createdAt ?? Date.now()}
                  category={card?.category ?? "N/A"}
                />
              </>
            ) : (
              <>
                <h3 className="secondary">{card.title}</h3>
                <p>{card.excerpt}</p>
                <CategoryMinimal
                  className="category-and-time"
                  createdAt={card?.createdAt ?? Date.now()}
                  category={card?.category ?? "N/A"}
                />
              </>
            )}
          </div>
        </SecondaryAnchor>
      </Link>
    </SecondaryWrapper>
  );
};

export default ArticleCard;

const PrimaryWrapper = styled.article`
  position: relative;
  padding: 0.5rem;
  padding-bottom: 0.5rem;

  .image-container {
    border-radius: 0.25rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
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
  padding: 0.5rem;
  padding-bottom: 1rem;

  .image-container {
    border-radius: 0.25rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`;

const PrimaryAnchor = styled.a<CardVariantProps>`
  cursor: pointer;
  display: grid;

  gap: ${(props) => (props.categoryVariant === "primary" ? "1rem" : "0.5rem")};

  h3 {
    margin-top: 1rem;

    font-size: 1.15rem;
    margin-bottom: 0.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    line-clamp: 2;
    -webkit-box-orient: vertical;

    &.primary {
      font-size: 2rem;
      margin-bottom: 0.75rem;
    }

    &.secondary {
      margin-top: 0.5rem;
    }
  }

  & .content {
    position: relative;
    width: 100%;
    padding-bottom: 1rem;

    .date {
      font-size: 0.75rem;
      color: var(--text-color-alt);

      .clock {
        margin-right: 0.25rem;
      }
    }

    .category-and-time {
      margin-bottom: 0.5rem;
    }
  }

  &:hover {
    .content {
      color: var(--primary-color);
    }
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: ${(props) =>
      props.categoryVariant === "primary" ? "1fr" : "repeat(2, 1fr)"};
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
    margin-bottom: 0.25rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    line-clamp: 2;
    -webkit-box-orient: vertical;

    &.secondary {
      margin-bottom: 0.5rem;
    }
  }

  & .content {
    width: 100%;

    .date {
      font-size: 0.75rem;
    }

    .category-and-time {
      margin-top: 1.75rem;
    }
  }

  &:hover {
    .content {
      color: var(--primary-color);
    }
  }
`;

const ImageWrapper = styled.div<CardVariantProps>`
  position: relative;
`;
