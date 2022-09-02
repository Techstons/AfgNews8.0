import { Article } from "@components/types";
import styled from "@emotion/styled";
import Link from "next/link";
import { FC } from "react";
import CloudinaryImage from "./CloudinaryImage";
import useFormattedDate from "@hooks/useFormattedDate";

interface INewsCard {
  card?: Article;
  priority?: boolean;
  imageHeight?: string;
}

const NewsCard: FC<INewsCard> = ({ card, priority, imageHeight }) => {
  const articleDate = useFormattedDate(
    card?.createdAt ? new Date(card.createdAt) : new Date(),
    "distance"
  );

  return (
    <Wrapper>
      <Link href={`/articles/${card?.slug}`} passHref={true}>
        <Card>
          <CloudinaryImage
            featuredImage={card?.featuredImage}
            title={card?.title}
            priority={priority}
            height={imageHeight}
          />
          <Details>
            <h3>{card?.title}</h3>
            <p className="date">{articleDate} ago</p>
            <p className="excerpt">{card?.excerpt}</p>
          </Details>
          <Category>{card?.category}</Category>
        </Card>
      </Link>
    </Wrapper>
  );
};

export default NewsCard;

const Wrapper = styled.article`
  position: relative;
`;

const Card = styled.a``;

const Category = styled.p`
  background-color: var(--primary-color);
  padding: 0.2rem 0.5rem;
  color: white;
  font-size: 0.8rem;
  top: 1rem;
  left: 1rem;
  position: absolute;
  display: inline-block;
`;

const Details = styled.div`
  position: relative;
  margin-top: -40px;
  margin-right: 20px;
  z-index: 100;
  background-color: var(--container-color);
  color: var(--text-color);
  padding: 1rem;

  h3 {
    font-size: 1.25rem;
  }

  .date {
    font-size: 0.75rem;
  }

  .excerpt {
    font-size: 0.9rem;
  }

  & > * {
    margin-bottom: 0.5rem;
  }
`;
