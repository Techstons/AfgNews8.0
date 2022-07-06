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
  align-items: center;
  background-color: var(--primary-light);
  border-radius: var(--base-radius);
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 0 0.5rem;
`;
