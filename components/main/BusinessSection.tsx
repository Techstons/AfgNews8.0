import { ArticleCard } from "@components/news";
import { Article, ISection } from "@components/types";
import styled from "@emotion/styled";
import SectionHeader from "./SectionHeader";
import SectionWrapper from "./SectionWrapper";

const BusinessSection = ({ articles, slug, title }: ISection) => {
  return (
    <SectionWrapper>
      <SectionHeader slug={slug} title={title} />
      <BusinessLayout>
        <FeaturedArticle>
          {articles?.slice(0, 2)?.map((item) => {
            return <ArticleCard card={item} key={item.slug} />;
          })}
        </FeaturedArticle>
        <SubArticles>
          {articles?.slice(1, 5)?.map((item) => {
            return <ArticleCard card={item} key={item.slug} />;
          })}
        </SubArticles>
      </BusinessLayout>
    </SectionWrapper>
  );
};

export default BusinessSection;

const BusinessLayout = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const FeaturedArticle = styled.div`
  width: calc(66% - 15px);

  & > * {
    margin-bottom: 1.25rem;
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

const SubArticles = styled.div`
  width: calc(34% - 15px);

  & > * {
    margin-bottom: 0.75rem;
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;
