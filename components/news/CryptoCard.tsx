import { Article } from "@components/types";
import styled from "@emotion/styled";
import CloudinaryImage from "./CloudinaryImage";

interface ICryptoCard {
  card: Article;
}

const CryptoCard = ({ card }: ICryptoCard) => {
  return (
    <Wrapper>
      <CloudinaryImage featuredImage={card.featuredImage} width="800" />
      <Details>
        <p className="category">{card.category}</p>
        <h3>{card.title}</h3>
      </Details>
    </Wrapper>
  );
};

export default CryptoCard;

const Wrapper = styled.article`
  position: relative;
`;

const Details = styled.div`
  position: absolute;
  bottom: 0.5rem;
  color: white;
  padding: 1rem 2rem;

  .category {
    padding: 0.35rem;
    font-size: 0.85rem;
    border-radius: 0.25rem;
    background-color: var(--primary-color);
    width: max-content;
    margin-bottom: 1rem;
  }
`;
