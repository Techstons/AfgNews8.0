import { ArticleCard } from "@components/news";
import { Article } from "@components/types";
import styled from "@emotion/styled";
import SectionHeader from "./SectionHeader";

interface ISection {
  title: string;
  articles?: Article[];
  slug: string;
}

const BusinessSection = ({ articles, slug, title }: ISection) => {
  return (
    <Wrapper>
      <SectionHeader slug={slug} title={title} />
      <Layout>
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
      </Layout>
    </Wrapper>
  );
};

export default BusinessSection;

const Wrapper = styled.section``;

const Layout = styled.div`
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
