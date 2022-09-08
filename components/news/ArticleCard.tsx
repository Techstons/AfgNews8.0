import { Article } from "@components/types";
import styled from "@emotion/styled";
import useFormattedDate from "@hooks/useFormattedDate";
import { Clock } from "@styled-icons/bootstrap";
import Link from "next/link";
import { FC } from "react";
import CategoryLabel from "./CategoryLabel";
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
  const articleDate = useFormattedDate(
    card?.createdAt ? new Date(card.createdAt) : new Date(),
    "distance"
  );

  return variant === "primary" ? (
    <PrimaryWrapper>
      <Link href={`/articles/${card.slug}`} passHref={true}>
        <PrimaryAnchor categoryVariant={categoryVariant}>
          <ImageWrapper categoryVariant={categoryVariant}>
            <CloudinaryImage
              featuredImage={card.featuredImage}
              title={card.title}
              className="image-container"
              height={height}
              width={width}
              layout={layout}
            />
            {categoryVariant === "primary" && (
              <>
                <p className="category">
                  <CategoryLabel label={card.category} />
                </p>
              </>
            )}
          </ImageWrapper>
          <div className="content">
            {categoryVariant === "primary" ? (
              <>
                <p className="primary-date date">
                  <Clock size={10} className="clock" /> {articleDate} ago
                </p>
                <h3 className="primary">{card.title}</h3>
              </>
            ) : (
              <>
                <CategoryMinimal className="category-and-time">
                  {card.category} &nbsp; / &nbsp; <span>{articleDate} ago</span>
                </CategoryMinimal>
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
          />
          <div className="content">
            {categoryVariant === "primary" ? (
              <>
                <h3>{card.title}</h3>
                <CategoryMinimal>{card.category}</CategoryMinimal>
              </>
            ) : (
              <>
                <h3 className="secondary">{card.title}</h3>
                <p>{card.excerpt}</p>
                <CategoryMinimal className="category-and-time">
                  {card.category} &nbsp; / &nbsp; <span>{articleDate} ago</span>
                </CategoryMinimal>
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

const PrimaryAnchor = styled.a<CardVariantProps>`
  cursor: pointer;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
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
      font-size: 0.65rem;
      margin-bottom: 0.5rem;
    }
  }

  &:hover {
    .content {
      color: var(--primary-color);
    }
  }

  @media only screen and (min-width: 1024px) {
    grid-template-columns: 1fr;
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
      font-size: 0.6rem;
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

  .category {
    position: ${(props) =>
      props.categoryVariant === "primary" ? "absolute" : "static"};
    top: 1rem;
    left: 1rem;
    border-bottom: ${(props) =>
      props.categoryVariant === "secondary" &&
      "1px solid var(--primary-color)"};
    width: max-content;
  }
`;

const CategoryMinimal = styled.p`
  display: inline-flex;
  align-items: center;
  font-size: 0.75rem;

  &::before {
    content: " ";
    display: inline-block;
    margin-right: 0.5rem;
    border-left: 2px solid var(--primary-color);
    height: 0.65rem;
    padding: 0;
    width: 0;
  }
`;
