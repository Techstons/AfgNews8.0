import styled from "@emotion/styled";
import { Article } from "@components/types";
import { CategoryCard } from "@components/news";
import { Container } from "@components/ui";

interface ICategorySection {
  title: string;
  articles?: Article[];
}

const CategorySection = ({ title, articles }: ICategorySection) => {
  return (
    <>
      <Container>
        <Header>
          <h1 className="header-title">
            {title?.toLowerCase() === "afg" ? "Afghanistan" : title}
          </h1>
          <Wrapper>
            <MainChannel>
              <CategoryCard variant="primary" card={articles?.[0]} />
              <BottomChannel>
                <CategoryCard variant="tertiary" card={articles?.[0]} />
                <CategoryCard variant="tertiary" card={articles?.[0]} />
                <CategoryCard variant="tertiary" card={articles?.[0]} />
                <CategoryCard variant="tertiary" card={articles?.[0]} />
              </BottomChannel>
            </MainChannel>
            <SideChannel className="">
              <CategoryCard variant="secondary" card={articles?.[0]} />
              <CategoryCard variant="secondary" card={articles?.[0]} />
            </SideChannel>
          </Wrapper>
        </Header>

        <Section>
          <Wrapper>
            <SpecialFeature>
              <CategoryCard variant="secondary" card={articles?.[0]} />
              <CategoryCard variant="secondary" card={articles?.[0]} />
            </SpecialFeature>
          </Wrapper>
        </Section>
      </Container>
    </>
  );
};

export default CategorySection;

const Header = styled.header`
  margin-bottom: 60px;

  .header-title {
    text-align: center;
    margin: 0 auto;
    line-height: 2.25rem;
    margin-bottom: 2rem;
    text-transform: uppercase;
    font-size: 2.25rem;
    font-weight: 400;
    font-family: "Vollkorn SC", serif;
    border-bottom: 2px solid var(--primary-color);
    width: max-content;
  }
`;

const Wrapper = styled.div`
  display: grid;
  gap: 3.5rem;
  grid-template-columns: 1.35fr 0.65fr;
`;

const MainChannel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const SideChannel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const BottomChannel = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`;

const Section = styled.section`
  padding: 22px 0;
`;

const SpecialFeature = styled.section`
  display: flex;
  gap: 2rem;
`;
