import { ArticleCard } from "@components/news";
import { Article, ISection } from "@components/types";
import styled from "@emotion/styled";
import SectionHeader from "./SectionHeader";
import SectionWrapper from "./SectionWrapper";

const TechAndScienceSection = ({ articles, slug, title }: ISection) => {
  return (
    <SectionWrapper>
      <SectionHeader slug={slug} title={title} />
      <TechAndScienceLayout>
        <FeaturedArticle>
          {articles?.slice(0, 2)?.map((item) => {
            return <ArticleCard card={item} key={item.slug} />;
          })}
        </FeaturedArticle>
        <SubArticles>
          {articles?.slice(0, 5)?.map((item) => {
            return (
              <ArticleCard
                card={item}
                key={item.slug}
                variant="slim"
                layout="fill"
                width="50%"
                height="200px"
                categoryVariant="secondary"
              />
            );
          })}
          {articles?.slice(0, 5)?.map((item) => {
            return (
              <ArticleCard
                card={item}
                key={item.slug}
                variant="slim"
                layout="fill"
                width="50%"
                height="200px"
                categoryVariant="secondary"
              />
            );
          })}
        </SubArticles>
      </TechAndScienceLayout>
    </SectionWrapper>
  );
};

export default TechAndScienceSection;

const TechAndScienceLayout = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`;

const FeaturedArticle = styled.div`
  width: 50%;

  & > * {
    margin-bottom: 1.25rem;
  }
`;

const SubArticles = styled.div`
  width: 50%;

  & > * {
    margin-bottom: 0.75rem;
  }
`;
