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
  color: var(--nav-text);
  padding: 1rem 1.5rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: var(--primary-color-alt);
  }
  &:focus {
    outline: none;
  }
`;
