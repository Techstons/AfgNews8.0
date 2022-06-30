import styled from "@emotion/styled";
import { FC, HTMLAttributes, ReactNode } from "react";

interface IContainer extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const Container: FC<IContainer> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Container;

const Wrapper = styled.div`
  max-width: var(--max-screen);
  margin: 0 auto;
  padding: 0 1rem;
`;
