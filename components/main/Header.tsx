import { TopNewsCard } from "@components/news";
import { Container } from "@components/ui";
import styled from "@emotion/styled";
import data from "@test-data";

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <MainGrid>
          <TopNewsCard card={data.mainPage.header[0]} />
          <SubGrid>
            {data.mainPage.header.slice(1, 5).map((item, index) => (
              <TopNewsCard key={index} card={item} />
            ))}
          </SubGrid>
        </MainGrid>
      </Container>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  padding: 0.5rem 0;
`;

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

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
