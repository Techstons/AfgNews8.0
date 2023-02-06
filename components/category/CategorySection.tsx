import styled from "@emotion/styled";
import { Article } from "@components/types";
import { CategoryCard, CategoryHeaderCard } from "@components/news";
import { Container } from "@components/ui";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

interface ICategorySection {
  title: string;
  articles?: Article[];
}

const CategorySection = ({ title, articles }: ICategorySection) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [clickCheck, setclickCheck] = useState(0);
  const itemsPerPage = 5;

  const router = useRouter();
  const { pathname } = router;

  if (!articles) {
    // console.log(articles);
    return <p>Loading...</p>;
  }

  const loadMorePages = Array.from(
    { length: articles.length },
    (_, i) => i
  ).slice(12, (currentPage + 13) * itemsPerPage);

  const handleLoadMore = () => {
    setCurrentPage(currentPage + 1);
    setclickCheck(clickCheck + 1);
  };

  // useEffect(() => {
  //   console.log(clickCheck);
  // }, [clickCheck]);

  return (
    <>
      <Container>
        <Header>
          <h1 className="header-title">
            {title?.toLowerCase() === "afg" ? "Afghanistan" : title}
          </h1>
          <Wrapper>
            <MainChannel>
              <TopChannel>
                <CategoryHeaderCard variant="primary" card={articles?.[0]} />
              </TopChannel>
              <BottomChannel>
                <CategoryHeaderCard variant="tertiary" card={articles?.[3]} />
                <CategoryHeaderCard variant="tertiary" card={articles?.[4]} />
                <CategoryHeaderCard variant="tertiary" card={articles?.[5]} />
                <CategoryHeaderCard variant="tertiary" card={articles?.[6]} />
              </BottomChannel>
            </MainChannel>
            <SideChannel className="">
              <CategoryHeaderCard variant="secondary" card={articles?.[1]} />
              <CategoryHeaderCard variant="secondary" card={articles?.[2]} />
            </SideChannel>
          </Wrapper>
        </Header>
        <Section>
          <Wrapper>
            <div>
              <h2 className="section-header">
                More from <span>{title}</span>
              </h2>
              <MoreNews>
                <CategoryCard card={articles?.[7]} />
                <CategoryCard card={articles?.[8]} />
                <CategoryCard card={articles?.[9]} />
                <CategoryCard card={articles?.[10]} />
                <CategoryCard card={articles?.[11]} />
              </MoreNews>
              <MoreNews style={{ marginTop: "5rem" }}>
                {clickCheck > 0 ? (
                  loadMorePages.map((i) => (
                    <CategoryCard key={i} card={articles[i]} />
                  ))
                ) : (
                  <div></div>
                )}
              </MoreNews>
            </div>
          </Wrapper>
        </Section>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <LoadMoreButton onClick={handleLoadMore}>Load more</LoadMoreButton>
        </div>
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
    font-family: "Vollkorn SC", serif;
    border-bottom: 4px solid var(--primary-color);
    width: max-content;
  }
`;
const LoadMoreButton = styled.button`
  &:hover {
    background-color: #032a63;
  }
  background-color: gray;
  color: #e4ebf2;
  height: 2rem;
  width: 8rem;
  border-radius: 3px;
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
    content: "";
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
