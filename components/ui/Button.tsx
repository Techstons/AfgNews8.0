import styled from "@emotion/styled";
import { ButtonHTMLAttributes, FC, ReactNode } from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button: FC<IButton> = ({ children, ...rest }) => {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

export default Button;

const Wrapper = styled.button`
  background-color: var(--primary-color);
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: var(--base-radius);
  font-weight: bold;
  font-size: 1.2rem;
  cursor: pointer;
  width: 100%;

  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: var(--primary-color-alt);
  }
  &:focus {
    outline: none;
  }
`;
