import styled from "@emotion/styled";
import { ReactNode } from "react";

interface ISectionWrapper {
  children: ReactNode;
}

const SectionWrapper = ({ children }: ISectionWrapper) => (
  <Wrapper>{children}</Wrapper>
);

export default SectionWrapper;

const Wrapper = styled.section`
  margin-bottom: 3rem;
`;
