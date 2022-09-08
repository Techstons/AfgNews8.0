import { Article } from "@components/types";
import styled from "@emotion/styled";
import useFormattedDate from "@hooks/useFormattedDate";
import Link from "next/link";
import { FC } from "react";
import CategoryMinimal from "./CategoryMinimal";
import CloudinaryImage from "./CloudinaryImage";

interface INewsCard {
  card?: Article;
  priority?: boolean;
  layout?: "fixed" | "fill" | "raw" | "intrinsic" | "responsive" | undefined;
  height?: string;
  width?: string;
}

const NewsCard: FC<INewsCard> = ({ card, priority, layout, height, width }) => {
  const articleDate = useFormattedDate(
    card?.createdAt ? new Date(card.createdAt) : new Date(),
    "distance"
  );

  return (
    <Wrapper>
      <Link href={`/articles/${card?.slug}`} passHref={true}>
        <a>
          <CloudinaryImage
            featuredImage={card?.featuredImage}
            title={card?.title}
            priority={priority}
            layout={layout}
            height={height}
            width={width}
            className="image-wrapper"
          />
          <Details>
            <CategoryMinimal className="category-and-date">
              {card?.category} &nbsp; / &nbsp; {articleDate} ago
            </CategoryMinimal>
            <h3>{card?.title}</h3>
            <p className="excerpt">{card?.excerpt}</p>
          </Details>
        </a>
      </Link>
    </Wrapper>
  );
};

export default NewsCard;

const Wrapper = styled.article`
  position: relative;
  border-radius: 0.25rem;
  overflow: hidden;

  .image-wrapper {
    transition: scale 1s ease;
  }

  &:hover .image-wrapper {
    scale: 1.05;
  }
`;

const Details = styled.div`
  position: relative;
  margin-top: -40px;
  margin-right: 20px;
  z-index: 100;
  background-color: var(--container-color);
  color: var(--text-color);
  padding: 0.5rem 1rem 1rem 1rem;

  h3 {
    font-size: 1.25rem;
  }

  .category-and-date {
    margin-bottom: 20px;
    font-size: 0.75rem;
    color: var(--text-color-alt);
  }

  .excerpt {
    font-size: 0.9rem;
  }

  & > * {
    margin-bottom: 0.5rem;
  }
`;
