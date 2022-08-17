import { ArticleCard } from "@components/news";
import { Article } from "@components/types";
import { Container } from "@components/ui";
import styled from "@emotion/styled";
import Link from "next/link";
import { FC, ReactNode } from "react";
import { useTranslation } from "next-i18next";

interface ISection {
  title: string;
  cards?: Article[];
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
  cards,
  variant,
  position = "left",
  children,
  slug,
}) => {
  const { t } = useTranslation();

  const renderArticlesWithColumns = (column: number, n: number) => {
    return cards?.slice(0, n).map((item, i) => {
      if (i < column)
        return <ArticleCard variant="primary" key={i} card={item} />;
      return <ArticleCard variant="slim" key={i} card={item} />;
    });
  };

  const renderSlimArticles = (n: number) => {
    return cards?.slice(0, n).map((item, i) => {
      return <ArticleCard variant="slim" key={i} card={item} />;
    });
  };

  const renderHeader = () => {
    return (
      <Header>
        <h2>{title}</h2>
        <Link href={slug} passHref={true}>
          <a>
            <HeaderLink>{t("home:view_more")}</HeaderLink>
          </a>
        </Link>
      </Header>
    );
  };

  return (
    <section>
      <Container>
        {variant === "primary" ? ( // USED PER CATEGORY PAGE
          <>
            {renderHeader()}
            <PrimaryArticleContainer>
              {renderArticlesWithColumns(3, 9)}
            </PrimaryArticleContainer>
          </>
        ) : variant === "secondary" ? ( // ARTICLES WITH A WIDGET BESIDE
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
        ) : variant === "tertiary" ? ( // FOUR ARTICLES IN A ROW
          <>
            {renderHeader()}

            <TertiaryArticleContainer>
              {cards?.slice(0, 4).map((item, i) => (
                <ArticleCard variant="primary" key={i} card={item} />
              ))}
            </TertiaryArticleContainer>
          </>
        ) : (
          // USED BY WORLD SECTION
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
      </Container>
    </section>
  );
};

export default Section;

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
  column-gap: 0.75rem;

  @media only screen and (min-width: 768px) {
    grid-template-columns: ${(props) =>
      props.position === "left" ? "70% 29%" : "29% 70%"};
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
  gap: 1.5rem;

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
