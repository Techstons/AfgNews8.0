import { ArticleCard, HealthCard } from "@components/news";
import { ISection } from "@components/types";
import styled from "@emotion/styled";
import SectionHeader from "./SectionHeader";
import SectionWrapper from "./SectionWrapper";

const HealthSection = ({ slug, title, articles }: ISection) => {
  return (
    <SectionWrapper>
      <SectionHeader slug={slug} title={title} />
      <HealthLayout>
        <FeaturedArticle>
          {!!articles?.[0] && (
            <ArticleCard
              card={articles[0]}
              variant="slim"
              categoryVariant="secondary"
            />
          )}
        </FeaturedArticle>
        <SubArticles>
          {/* {articles?.slice(0, 4).map((item) => {
            return <HealthCard card={item} key={item.slug} />;
          })} */}
          {!!articles?.[0] && (
            <>
              <ArticleCard card={articles[0]} variant="slim" />
              <ArticleCard card={articles[0]} variant="slim" />
              <ArticleCard card={articles[0]} variant="slim" />
              <ArticleCard card={articles[0]} variant="slim" />
            </>
          )}
        </SubArticles>
      </HealthLayout>
    </SectionWrapper>
  );
};

export default HealthSection;

const HealthLayout = styled.div`
  display: grid;
  gap: 2rem;
`;

const FeaturedArticle = styled.div``;

const SubArticles = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  & > * {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    padding: 1rem;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
