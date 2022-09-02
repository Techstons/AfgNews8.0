import styled from "@emotion/styled";
import Link from "next/link";
import { Article } from "@components/types";
import CloudinaryImage from "./CloudinaryImage";
import useFormattedDate from "@hooks/useFormattedDate";

type Variants = "primary" | "secondary" | "tertiary" | "quaternary";
interface ICategoryCard {
  card?: Article;
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

  if (variant === "primary")
    return (
      <>
        <PrimaryArticleWrapper>
          <Link href={`/articles/${card?.slug}`}>
            <a aria-label={card?.title}>
              <div className="article-image">
                <CloudinaryImage
                  featuredImage={card?.featuredImage}
                  title={card?.title}
                />
              </div>
            </a>
          </Link>

          <Details>
            <Link href={`/articles/${card?.slug}`}>
              <a>
                <h3>{card?.title}</h3>
              </a>
            </Link>
            <p>{articleDate} ago</p>
          </Details>
        </PrimaryArticleWrapper>
      </>
    );
  else
    return (
      <SecondaryArticleWrapper>
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
      </SecondaryArticleWrapper>
    );
};

export default CategoryCard;

const PrimaryArticleWrapper = styled.article`
  text-align: left;

  .article-image {
    margin-bottom: 0.5rem;
  }
`;

const SecondaryArticleWrapper = styled.article`
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

const Details = styled.div``;
