import styled from "@emotion/styled";
import { ReactNode } from "react";

const CategoryMinimal = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <Wrapper className={className}>{children}</Wrapper>;
};

export default CategoryMinimal;

const Wrapper = styled.p`
  display: inline-flex;
  align-items: center;
  font-size: 0.6rem;

  &::before {
    content: " ";
    display: inline-block;
    margin-right: 0.5rem;
    border-left: 2px solid var(--primary-color);
    margin-left: 3px;
    height: 0.65rem;
    padding: 0;
    width: 0;
  }
`;
