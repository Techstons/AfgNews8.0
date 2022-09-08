import { Article } from "@components/types";
import styled from "@emotion/styled";
import Link from "next/link";
import CategoryLabel from "./CategoryLabel";
import CloudinaryImage from "./CloudinaryImage";

type Variants = "primary" | "slim";

interface IHealthCard {
  card: Article;
  variant?: Variants;
}

type ArticleContainerProps = {
  variant: Variants;
};

const HealthCard = ({ card, variant = "primary" }: IHealthCard) => {
  return (
    <Wrapper>
      <Link href={card.slug}>
        <a aria-label={card.title}>
          <ArticleContainer variant={variant}>
            <ImageWrapper>
              <CloudinaryImage
                featuredImage={card.featuredImage}
                layout="fill"
                width="100%"
                height="100%"
              />
            </ImageWrapper>
            <Details>
              <h3>{card.title}</h3>
              {variant === "primary" && <p>{card.excerpt}</p>}
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
`;

const ArticleContainer = styled.div<ArticleContainerProps>`
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  height: 100%;
  min-height: ${(props) => (props.variant === "primary" ? "200px" : "100px")};
`;

const ImageWrapper = styled.div`
  position: relative;
`;

const Details = styled.div`
  padding: 1rem;

  & > * {
    margin-bottom: 0.5rem;
  }
`;
