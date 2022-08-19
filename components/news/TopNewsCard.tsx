import styled from "@emotion/styled";
import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { Article } from "@components/types";
import CloudinaryImage from "./CloudinaryImage";

interface INewsCard {
  card?: Article;
  priority?: boolean;
}

const NewsCard: FC<INewsCard> = ({ card, priority }) => {
  return (
    <Link href={`/articles/${card?.slug}`} passHref={true}>
      <Card>
        <CloudinaryImage
          featuredImage={card?.featuredImage}
          title={card?.title}
          priority={priority}
        />
        <div className="primary">
          <h3>{card?.title}</h3>
          <p>{card?.category}</p>
        </div>
      </Card>
    </Link>
  );
};

export default NewsCard;

const Card = styled.a`
  position: relative;
  cursor: pointer;
  overflow: hidden;

  &:hover .image {
    filter: brightness(115%);
  }

  &:hover .primary p {
    color: white;
    font-weight: 700;
  }

  & .image {
    transition: filter 0.3s ease-in-out;
  }

  & .primary {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    box-shadow: inset 0 0 60px rgb(0 0 0 / 60%);
    padding: 0.5rem;

    & h3 {
      font-weight: 500;
      font-size: 1rem;
      color: white;
      margin-bottom: 0.5rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2; /* number of lines to show */
      line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    & p {
      color: #cccccc;
    }
  }
`;
