import { ArticleCard } from "@components/news";
import { ISection } from "@components/types";
import styled from "@emotion/styled";
import SectionHeader from "./SectionHeader";
import SectionWrapper from "./SectionWrapper";

const WorldSection = ({ slug, title, articles }: ISection) => {
  return (
    <SectionWrapper>
      <SectionHeader slug={slug} title={title} />
      <WorldLayout>
        <FeaturedArticle>
          {!!articles?.[0] && <ArticleCard card={articles[0]} />}
        </FeaturedArticle>
        <SubArticles>
          {articles?.slice(0, 5).map((item) => {
            return (
              <ArticleCard
                key={item.slug}
                card={item}
                categoryVariant="secondary"
              />
            );
          })}
        </SubArticles>
      </WorldLayout>
    </SectionWrapper>
  );
};

export default WorldSection;

const WorldLayout = styled.div`
  display: flex;
  gap: 2rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const FeaturedArticle = styled.div`
  width: 55%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const SubArticles = styled.div`
  width: 45%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
