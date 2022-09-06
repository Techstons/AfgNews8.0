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
            return <ArticleCard key={item.slug} card={item} />;
          })}
        </SubArticles>
      </WorldLayout>
    </SectionWrapper>
  );
};

export default WorldSection;

const Wrapper = styled.section`
  margin-bottom: 3rem;
`;

const WorldLayout = styled.div`
  display: flex;
  gap: 2rem;
`;

const FeaturedArticle = styled.div`
  width: 55%;
`;

const SubArticles = styled.div`
  width: 45%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`;
