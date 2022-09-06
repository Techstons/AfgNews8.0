import { ArticleCard } from "@components/news";
import { Article, ISection } from "@components/types";
import styled from "@emotion/styled";
import SectionHeader from "./SectionHeader";

const BusinessSection = ({ articles, slug, title }: ISection) => {
  return (
    <Wrapper>
      <SectionHeader slug={slug} title={title} />
      <BusinessLayout>
        <MainArticleContainer>
          {articles?.slice(0, 2)?.map((item) => {
            return <ArticleCard card={item} key={item.slug} />;
          })}
        </MainArticleContainer>
        <SubArticleContainer>
          {articles?.slice(1, 5)?.map((item) => {
            return <ArticleCard card={item} key={item.slug} />;
          })}
        </SubArticleContainer>
      </BusinessLayout>
    </Wrapper>
  );
};

export default BusinessSection;

const Wrapper = styled.section`
  margin-bottom: 3rem;
`;

const BusinessLayout = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MainArticleContainer = styled.div`
  width: calc(66% - 15px);

  & > * {
    margin-bottom: 1.25rem;
  }
`;

const SubArticleContainer = styled.div`
  width: calc(34% - 15px);

  & > * {
    margin-bottom: 0.75rem;
  }
`;
