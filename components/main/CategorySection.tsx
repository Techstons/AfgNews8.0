import styled from "@emotion/styled";
import { Article } from "@components/types";

interface ICategorySection {
  title: string;
  articles?: Article[];
}

const CategorySectionHeader = ({ title, articles }: ICategorySection) => {
  return (
    <Wrapper>
      <h1 className="header-title">
        {title?.toLowerCase() === "afg" ? "Afghanistan" : title}
      </h1>
    </Wrapper>
  );
};

export default CategorySectionHeader;

const Wrapper = styled.section`
  .header-title {
    text-align: center;
    margin-bottom: 3.5rem;
    text-transform: uppercase;
    font-size: 2.25rem;
    font-weight: 400;
    font-family: "Vollkorn SC", serif;
  }
`;
