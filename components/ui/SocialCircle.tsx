import styled from "@emotion/styled";
import { AnchorHTMLAttributes, ReactNode } from "react";

type LengthUnit = "px" | "em" | "rem";
type Length = `${number}${LengthUnit}`;

interface ISocialCircle extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  size: Length;
  href: string;
}

const SocialCircle = ({ children, size, href }: ISocialCircle) => (
  <Wrapper href={href} size={size}>
    {children}
  </Wrapper>
);

export default SocialCircle;

const Wrapper = styled.a<ISocialCircle>`
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 100%;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border: solid 2px var(--primary-color);
  transition: color 0.2s ease-in-out;

  &:hover {
    background-color: var(--nav-text);
    color: var(--nav-color);
    border: solid 2px black;
  }
`;
