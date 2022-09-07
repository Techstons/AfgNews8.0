import { ArticleCard } from "@components/news";
import { ISection } from "@components/types";
import styled from "@emotion/styled";
import SectionHeader from "./SectionHeader";
import SectionWrapper from "./SectionWrapper";

const SportsSection = ({ slug, title, articles }: ISection) => {
  return (
    <SectionWrapper>
      <SectionHeader slug={slug} title={title} />
      <SportsLayout>
        <FeaturedArticle>
          {!!articles?.[0] && <ArticleCard card={articles[0]} />}
        </FeaturedArticle>
        <SubArticles>
          {articles?.slice(1, 5)?.map((item) => {
            return <ArticleCard card={item} key={item.slug} variant="slim" />;
          })}
          {!!articles?.[0] && <ArticleCard card={articles[0]} variant="slim" />}
        </SubArticles>
      </SportsLayout>
    </SectionWrapper>
  );
};

export default SportsSection;

const SportsLayout = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const FeaturedArticle = styled.div`
  width: 50%;

  & > * {
    margin-bottom: 1.25rem;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const SubArticles = styled.div`
  width: 50%;

  & > * {
    margin-bottom: 0.75rem;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
