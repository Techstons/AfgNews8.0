import styled from '@emotion/styled';
import { Article } from '@components/types';
import { CategoryCard, CategoryHeaderCard } from '@components/news';
import { Container } from '@components/ui';
import { useTranslation } from 'next-i18next';
import useNavLinks from '@hooks/useNavLinks';

interface ICategorySection {
  slug: string;
  articles?: Article[];
}

const CategorySection = ({ slug, articles }: ICategorySection) => {
  const navLinks = useNavLinks({ isCategory: true });

  const categoryTitle = navLinks.find(
    (navLink) => navLink.slug === '/' + slug
  )?.title;

  return (
    <>
      <Container>
        <Header>
          <h1 className="header-title">{categoryTitle}</h1>
          <Wrapper>
            <MainChannel>
              <TopChannel>
                <CategoryHeaderCard variant="primary" card={articles?.[0]} />
              </TopChannel>
              <BottomChannel>
                <CategoryHeaderCard variant="tertiary" card={articles?.[0]} />
                <CategoryHeaderCard variant="tertiary" card={articles?.[0]} />
                <CategoryHeaderCard variant="tertiary" card={articles?.[0]} />
                <CategoryHeaderCard variant="tertiary" card={articles?.[0]} />
              </BottomChannel>
            </MainChannel>
            <SideChannel className="">
              <CategoryHeaderCard variant="secondary" card={articles?.[0]} />
              <CategoryHeaderCard variant="secondary" card={articles?.[0]} />
            </SideChannel>
          </Wrapper>
        </Header>

        <Section>
          <Wrapper>
            <div>
              <h2 className="section-header">
                More from <span>{categoryTitle}</span>
              </h2>
              <MoreNews>
                <CategoryCard card={articles?.[0]} />
                <CategoryCard card={articles?.[0]} />
                <CategoryCard card={articles?.[0]} />
                <CategoryCard card={articles?.[0]} />
                <CategoryCard card={articles?.[0]} />
              </MoreNews>
            </div>
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
    margin: 1.25rem auto;
    line-height: 2.75rem;
    margin-bottom: 3rem;
    text-transform: uppercase;
    font-size: 2.25rem;
    font-weight: 400;
    font-family: 'Vollkorn SC', serif;
    border-bottom: 4px solid var(--primary-color);
    width: max-content;
  }
`;

const Wrapper = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1.35fr 0.65fr;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const MainChannel = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding-right: 2rem;

  &::after {
    content: '';
    width: 0.75px;

    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    transform: scaleY(-85%);

    background-color: #d48985;
  }

  @media screen and (max-width: 768px) {
    padding-right: 0;

    &::after {
      display: none;
    }
  }

  @media screen and (max-width: 480px) {
    gap: 2rem;
  }
`;

const TopChannel = styled.div`
  border-bottom: 1px solid #d48985;
  padding-bottom: 2rem;
`;

const SideChannel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media screen and (max-width: 768px) {
    flex-direction: row;
  }

  @media screen and (max-width: 480px) {
    gap: 2rem;
    flex-direction: column;
  }
`;

const BottomChannel = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  & > article:nth-of-type(1),
  & > article:nth-of-type(3) {
    border-right: 1px solid #d48985;
  }

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;

    & > article:nth-of-type(1),
    & > article:nth-of-type(3) {
      border-right: none;
    }
  }
`;

const Section = styled.section`
  padding: 22px 0;

  .section-header {
    border-bottom: 1px solid var(--primary-color);
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
  }

  .section-header span {
    color: var(--primary-color);
  }
`;

const MoreNews = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;

  @media screen and (max-width: 768px) {
    gap: 3.5rem;
  }
`;
