import styled from "@emotion/styled";
import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { Article } from "@components/types";

interface INewsCard {
  card: Article;
  variant?: "primary" | "slim";
}

const NewsCard: FC<INewsCard> = ({ card, variant = "primary" }) => {
  return variant === "primary" ? (
    <Link href={card.slug} passHref={true}>
      <Card>
        <Image
          src={card.image}
          className="image"
          alt="An"
          layout="responsive"
          width={1920}
          height={1080}
          quality={20}
          objectFit="cover"
        />
        <div className="primary">
          <h3>{card.title}</h3>
          <p>{card.category}</p>
        </div>
      </Card>
    </Link>
  ) : (
    <Link href={card.slug} passHref={true}>
      <Card>
        <h3 className="slim">{card.title}</h3>
      </Card>
    </Link>
  );
};

export default NewsCard;

const Card = styled.a`
  position: relative;
  cursor: pointer;

  & .image {
    filter: brightness(75%);

    &:hover {
      filter: brightness(100%);
    }
  }

  & .primary {
    position: absolute;
    bottom: 1rem;
    left: 0.5rem;
    z-index: 1;
    color: white;

    & p {
      color: var(--text-color-alt);
    }
  }

  & .slim {
    border-bottom: 1px solid var(--primary-light);
    margin: 0 0.5rem;
  }
`;
