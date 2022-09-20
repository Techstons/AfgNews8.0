import { Article } from "@components/types";
import styled from "@emotion/styled";
import Link from "next/link";
import CategoryMinimal from "./CategoryMinimal";
import CloudinaryImage from "./CloudinaryImage";

interface ICryptoCard {
  card: Article;
}

const CryptoCard = ({ card }: ICryptoCard) => {
  return (
    <Wrapper>
      <Link href={`/articles/${card.slug}`}>
        <a aria-label={card.title}>
          <ImageWrapper>
            <CloudinaryImage featuredImage={card.featuredImage} width="800" />
          </ImageWrapper>
          <Details>
            <h3>{card.title}</h3>
            <p>{card.excerpt}</p>
            <CategoryMinimal
              className="category"
              createdAt={card?.createdAt ?? Date.now()}
              category={card?.category ?? "N/A"}
            />
          </Details>
        </a>
      </Link>
    </Wrapper>
  );
};

export default CryptoCard;

const Wrapper = styled.article`
  position: relative;
  border-radius: 0.25rem;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const ImageWrapper = styled.div`
  position: relative;

  .category {
    position: absolute;
    top: 1rem;
    left: 1rem;
  }
`;

const Details = styled.div`
  position: absolute;
  bottom: 0;
  color: white;
  z-index: 10;
  padding: 60% 0.75rem 2rem 0.75rem;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));

  h3 {
    margin-bottom: 1rem;
  }

  .category {
    margin-top: 1rem;
  }
`;
