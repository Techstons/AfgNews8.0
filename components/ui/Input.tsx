import styled from "@emotion/styled";
import { FC, InputHTMLAttributes } from "react";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {}

const Input: FC<IInput> = ({ ...rest }) => {
  return (
    <Wrapper>
      <StyledInput {...rest} />
    </Wrapper>
  );
};

export default Input;

const Wrapper = styled.div`
  display: flex;
  background-color: var(--primary-light);
  border-radius: var(--base-radius);
  padding: 0.4rem 0.5rem;
`;

const StyledInput = styled.input`
  display: flex;
  all: unset;
  padding: 0 0.75rem;
  width: 100%;
`;
