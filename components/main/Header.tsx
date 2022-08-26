import { ArticleCard, TopNewsCard } from "@components/news";
import { Article } from "@components/types";
import { Container } from "@components/ui";
import styled from "@emotion/styled";
import useFormattedDate from "@hooks/useFormattedDate";
import { useRouter } from "next/router";

const Header = ({
  title,
  articles,
}: {
  articles?: Article[];
  title: string;
}) => {
  const router = useRouter();

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
          <TopNewsCard card={articles?.[0]} priority={true} />
          <SubGrid>
            {articles?.slice(1, 5).map((item) => (
              <TopNewsCard key={item.title} card={item} />
            ))}
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
  margin-bottom: 1rem;
`;

const HeaderTitle = styled.h2`
  text-transform: uppercase;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;

  .date {
    color: var(--text-color-alt);
    font-size: 24px;
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
  gap: 1rem;

  @media only screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem 1rem;
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
