import styled from "@emotion/styled";
import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { Article } from "@hooks/types";

interface INewsCard {
  card?: Article;
}

const NewsCard: FC<INewsCard> = ({ card }) => {
  return (
    <Link href={`/articles/${card?.slug}`} passHref={true}>
      <Card>
        <Image
          src={card?.featuredImage ? card.featuredImage : "/placeholder.svg"}
          className="image"
          alt="An"
          layout="responsive"
          width={1920}
          height={1080}
          quality={20}
          priority={true}
          objectFit="cover"
        />
        <div className="primary">
          <h3>{card?.title}</h3>
          <p>{card?.category.name}</p>
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
    }

    & p {
      color: #cccccc;
    }
  }
`;
