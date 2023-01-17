import { ArticleCard, CategoryLabel, TopNewsCard } from "@components/news";
import { Article } from "@components/types";
import styled from "@emotion/styled";
import useFormattedDate from "@hooks/useFormattedDate";
import { useRouter } from "next/router";
import { useState } from "react";
import { useTranslation } from 'next-i18next';
import { withTranslation } from 'next-i18next'

const Header = ({
  title,
  articles,
  latest,
}: {
  articles?: Article[];
  title: string;
  latest?: Article[];
}) => {
  const router = useRouter();
  const { t } = useTranslation();

  const [activeChoice, setActiveChoice] = useState("latest"); // Used in the top news header toggle

  return (
    <Wrapper>
      <Top>
        <CategoryLabel label={title === "Afghanistan" ? "AFG" : title} />
        <div className="date">
          {useFormattedDate(new Date(), "nav", router.locale)}
        </div>
      </Top>

      <MainGrid>
        <FeaturedArticles>
          <div className="featured-article">
            <TopNewsCard
              card={articles?.[0]}
              priority={true}
              layout="fill"
              width="100%"
              height="320px"
            />
          </div>

          <SubGrid>
            {articles?.slice(1, 3).map((item) => (
              <TopNewsCard key={item.title} card={item} />
            ))}
          </SubGrid>
        </FeaturedArticles>
        <TopNewsAside>
          <div className="header">
            <button
              className={`${activeChoice === "latest" ? "active" : ""}`}
              onClick={() => setActiveChoice("latest")}
            >
              {t('common:latest')}
            </button>
            <button
              className={`${activeChoice === "popular" ? "active" : ""}`}
              onClick={() => setActiveChoice("popular")}
            >
              {t('common:popular')}
            </button>
          </div>
          <div className="articles">
            {latest?.slice(0, 8)?.map((item) => (
              <ArticleCard variant="slim" card={item} key={item.title} />
            ))}
          </div>
        </TopNewsAside>
      </MainGrid>
    </Wrapper>
  );
};

export default withTranslation()(Header);

const Wrapper = styled.header`
  min-height: calc(100vh - 124px);
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
  grid-template-columns: 1.4fr 0.6fr;
  gap: 2.5rem;
  margin-bottom: 1.5rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeaturedArticles = styled.div`
  .featured-article {
    margin-bottom: 1.5rem;

    h3 {
      font-size: 2rem;
    }
  }
`;

const SubGrid = styled.div`
  display: grid;
  gap: 0 2rem;

  .middle-column-article {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  @media only screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const TopNewsAside = styled.aside`
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
      background-color: #222;
      color: white;
      padding: 1rem 0.5rem;
      width: 50%;
    }

    button.active {
      background-color: var(--primary-color);
    }
  }
`;
