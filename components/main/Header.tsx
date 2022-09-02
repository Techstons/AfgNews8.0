import { ArticleCard, TopNewsCard } from "@components/news";
import { Article } from "@components/types";
import { Container } from "@components/ui";
import styled from "@emotion/styled";
import useFormattedDate from "@hooks/useFormattedDate";
import { useRouter } from "next/router";
import { useState } from "react";

const Header = ({
  title,
  articles,
}: {
  articles?: Article[];
  title: string;
}) => {
  const router = useRouter();

  const [activeChoice, setActiveChoice] = useState("top"); // Used in the top news header toggle

  return (
    <Wrapper>
      <Container>
        <Top>
          <HeaderTitle>{title === "Afghanistan" ? "AFG" : title}</HeaderTitle>
          <div className="date">
            {useFormattedDate(new Date(), "nav", router.locale)}
          </div>
        </Top>

        <MainGrid>
          <TopNewsCard card={articles?.[0]} layout="fill" priority={true} />
          <SubGrid>
            <div>
              {articles?.slice(1, 3).map((item) => (
                <TopNewsCard key={item.title} card={item} />
              ))}
            </div>
            <TopNewsAside>
              <div className="header">
                <button
                  className={`${activeChoice === "top" ? "active" : ""}`}
                  onClick={() => setActiveChoice("top")}
                >
                  Popular News
                </button>
                <button
                  className={`${activeChoice === "recent" ? "active" : ""}`}
                  onClick={() => setActiveChoice("recent")}
                >
                  Recent News
                </button>
              </div>
              <div className="articles">
                {articles?.slice(1, 4).map((item) => (
                  <ArticleCard variant="slim" card={item} key={item.title} />
                ))}
              </div>
            </TopNewsAside>
          </SubGrid>
        </MainGrid>
        <ArticleContainer>
          {articles?.slice(5, 12).map((item) => (
            <ArticleCard variant="slim" card={item} key={item.title} />
          ))}
        </ArticleContainer>
      </Container>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  min-height: calc(100vh - 124px);
`;

const HeaderTitle = styled.h2`
  text-transform: uppercase;
  font-size: 1rem;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;

  .date {
    color: var(--text-color-alt);
    font-size: 1rem;
  }
`;

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1.5rem;

  @media only screen and (max-width: 1264px) {
    grid-template-columns: 1fr;
  }
`;

const SubGrid = styled.div`
  display: grid;
  gap: 0 1rem;

  @media only screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const TopNewsAside = styled.aside`
  width: 100%;
  border-radius: 4px 4px 0 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .header {
    display: flex;
    width: 100%;

    & > button {
      text-align: center;
      background-color: var(--primary-color);
      color: white;
      padding: 1rem 0.5rem;
      width: 50%;
    }

    button.active {
      background-color: #222;
    }
  }
`;

const ArticleContainer = styled.div`
  display: grid;
  gap: 1.5rem;

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
