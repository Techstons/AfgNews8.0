import { ArticleCard } from "@components/news";
import { Article } from "@components/types";
import { Container } from "@components/ui";
import styled from "@emotion/styled";
import Link from "next/link";
import { FC, ReactNode } from "react";

interface ISection {
  title: string;
  card: Article[];
  variant: "primary" | "secondary" | "tertiary" | "quaternary";
  position?: PositionTypes;
  children?: ReactNode;
  slug: string;
}

type PositionTypes = "left" | "right";

type ContainerType = {
  position: PositionTypes;
};

const Section: FC<ISection> = ({
  title,
  card,
  variant,
  position = "left",
  children,
  slug,
}) => {
  // const [visible, setVisible] = useState(3);

  // const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  // const showMoreItems = () => {
  //   setVisible((prev) => prev + 2);
  // };

  // // Load more functionality
  // const renderArticles = (isMobile: boolean) => {
  //   if (isMobile)
  //     return (
  //       <>
  //         {data.mainPage.header.slice(0, visible).map((item, i) => {
  //           // On smaller screens, less data will be displayed
  //           if (i < 3)
  //             return <ArticleCard variant="primary" key={i} card={item} />;
  //           return <ArticleCard variant="slim" key={i} card={item} />;
  //         })}
  //         {data.mainPage.header.length >= visible && ( // Only display button when data length is bigger than visible items
  //           <Button onClick={showMoreItems}>Load more</Button>
  //         )}
  //       </>
  //     );
  //   else
  //     return data.mainPage.header.map((item, i) => {
  //       if (i < 3) return <ArticleCard variant="primary" key={i} card={item} />;
  //       return <ArticleCard variant="slim" key={i} card={item} />;
  //     });
  // };

  const renderArticlesWithColumns = (column: number, n: number) => {
    // Render only 3 items on 1024px small screens
    // const num = isMobile ? 3 : n;

    return card.slice(0, n).map((item, i) => {
      if (i < column)
        return <ArticleCard variant="primary" key={i} card={item} />;
      return <ArticleCard variant="slim" key={i} card={item} />;
    });
  };

  const renderSlimArticles = (n: number) => {
    return card.slice(0, n).map((item, i) => {
      return <ArticleCard variant="slim" key={i} card={item} />;
    });
  };

  const renderHeader = () => {
    return (
      <Header>
        <h2>{title}</h2>
        <Link href={slug}>
          <a>
            <HeaderLink>View more</HeaderLink>
          </a>
        </Link>
      </Header>
    );
  };

  return (
    <Container>
      <Wrapper>
        {variant === "primary" ? (
          <>
            {renderHeader()}
            <PrimaryArticleContainer>
              {renderArticlesWithColumns(3, 9)}
            </PrimaryArticleContainer>
          </>
        ) : variant === "secondary" ? (
          <SecondaryContainer position={position}>
            <div>
              {renderHeader()}
              <SecondaryArticleContainer>
                {renderArticlesWithColumns(2, 6)}
              </SecondaryArticleContainer>
            </div>

            <SecondaryInfoContainer position={position}>
              {children}
            </SecondaryInfoContainer>
          </SecondaryContainer>
        ) : variant === "tertiary" ? (
          <>
            {renderHeader()}

            <TertiaryArticleContainer>
              {card.slice(0, 4).map((item, i) => (
                <ArticleCard variant="primary" key={i} card={item} />
              ))}
            </TertiaryArticleContainer>
          </>
        ) : (
          <SecondaryContainer position={position}>
            <div>
              {renderHeader()}

              <QuaternaryArticleContainer>
                {renderSlimArticles(3)}
              </QuaternaryArticleContainer>
            </div>

            <SecondaryInfoContainer position={position}>
              {children}
            </SecondaryInfoContainer>
          </SecondaryContainer>
        )}
      </Wrapper>
    </Container>
  );
};

export default Section;

const Wrapper = styled.section`
  display: grid;
  gap: 1rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--primary-light);
  margin-bottom: 1rem;
  text-transform: uppercase;
`;

const HeaderLink = styled.span`
  font-size: 0.75rem;
  color: var(--primary-light);
  cursor: pointer;
`;

const PrimaryArticleContainer = styled.div`
  display: grid;
  gap: 1rem;

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const SecondaryContainer = styled.div<ContainerType>`
  display: grid;
  gap: 1rem;

  @media only screen and (min-width: 768px) {
    grid-template-columns: ${(props) =>
      props.position === "left" ? "65% 35%" : "35% 65%"};
  }
`;

const SecondaryArticleContainer = styled.div`
  display: grid;
  gap: 1rem;

  @media only screen and (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const SecondaryInfoContainer = styled.div<ContainerType>`
  grid-row: ${(props) => (props.position === "right" ? "1" : "auto")};
`;

const TertiaryArticleContainer = styled.div`
  display: grid;
  gap: 1rem;

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const QuaternaryArticleContainer = styled.div`
  display: grid;
  gap: 1rem;
`;
