import styled from "@emotion/styled";
import Link from "next/link";
import { Article } from "@components/types";
import CloudinaryImage from "./CloudinaryImage";
import useFormattedDate from "@hooks/useFormattedDate";

interface ICategoryCard {
  card?: Article;
}

const CategoryCard = ({ card }: ICategoryCard) => {
  const articleDate = useFormattedDate(
    card?.createdAt ? new Date(card.createdAt) : new Date(),
    "distance"
  );

  return (
    <ArticleWrapper>
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
      <div className="details">
        <p className="date">{articleDate} ago</p>
        <h3>
          <Link href={`/articles/${card?.slug}`}>
            <a>{card?.title}</a>
          </Link>
        </h3>
        <p className="excerpt">{card?.excerpt}</p>
      </div>
    </ArticleWrapper>
  );
};

export default CategoryCard;

const ArticleWrapper = styled.article`
  display: grid;
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

  @media screen and (min-width: 769px) {
    grid-template-columns: 1.4fr 0.6fr;

    .details {
      grid-row: 1;
      grid-column: 1;
    }

    .article-image {
      grid-column: 2;
    }
  }
`;
