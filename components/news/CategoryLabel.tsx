import styled from "@emotion/styled";

interface ICategoryLabel {
  label: string;
}

const CategoryLabel = ({ label }: ICategoryLabel) => {
  return <Wrapper>{label}</Wrapper>;
};

export default CategoryLabel;

const Wrapper = styled.span`
  font-size: 0.85rem;
  background-color: var(--primary-color);
  color: white;
  padding: 0.35rem;
  border-radius: 0.25rem;
`;
