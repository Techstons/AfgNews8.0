import { Article } from "@components/types";
import styled from "@emotion/styled";
import Link from "next/link";
import CloudinaryImage from "./CloudinaryImage";

interface IHealthCard {
  card: Article;
}

const HealthCard = ({ card }: IHealthCard) => {
  return (
    <Wrapper>
      <Link href={card.slug}>
        <a aria-label={card.title}>
          <ArticleContainer>
            <ImageWrapper>
              <CloudinaryImage
                featuredImage={card.featuredImage}
                layout="fill"
                height="100%"
                width="100%"
              />
              <p className="category">{card.category}</p>
            </ImageWrapper>
            <Details>
              <h3>{card.title}</h3>
              <p className="excerpt">{card.excerpt}</p>
            </Details>
          </ArticleContainer>
        </a>
      </Link>
    </Wrapper>
  );
};

export default HealthCard;

const Wrapper = styled.article`
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  height: 100%;
`;

const ArticleContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 100%;
`;

const ImageWrapper = styled.div`
  position: relative;

  .category {
    position: absolute;
    top: 1rem;
    left: 1rem;
    font-size: 0.85rem;
    background-color: var(--primary-color);
    color: white;
    padding: 0.35rem;
    border-radius: 0.25rem;
  }
`;

const Details = styled.div`
  padding: 1.5rem;

  & > * {
    margin-bottom: 0.5rem;
  }
`;
