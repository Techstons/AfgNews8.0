import { Article } from "@components/types";
import styled from "@emotion/styled";
import Link from "next/link";
import CategoryLabel from "./CategoryLabel";
import CloudinaryImage from "./CloudinaryImage";

interface ICryptoCard {
  card: Article;
}

const CryptoCard = ({ card }: ICryptoCard) => {
  return (
    <Wrapper>
      <Link href={card.slug}>
        <a aria-label={card.title}>
          <ImageWrapper>
            <CloudinaryImage featuredImage={card.featuredImage} width="800" />
            <p className="category">
              <CategoryLabel label={card.category} />
            </p>
          </ImageWrapper>
          <Details>
            <h3>{card.title}</h3>
          </Details>
        </a>
      </Link>
    </Wrapper>
  );
};

export default CryptoCard;

const Wrapper = styled.article`
  position: relative;
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
  bottom: 0.5rem;
  color: white;
  padding: 1rem 2rem;
`;
