import styled from "@emotion/styled";
import { ReactNode } from "react";

type LengthUnit = "px" | "em" | "rem";
type Length = `${number}${LengthUnit}`;

interface ISocialCircle {
  variant?: "primary" | "secondary";
  children: ReactNode;
  size: Length;
}

const SocialCircle = ({
  children,
  size,
  variant = "primary",
}: ISocialCircle) => <Wrapper size={size}>{children}</Wrapper>;

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
  border: solid 2px white;
  transition: color 0.2s ease-in-out;

  &:hover {
    background-color: var(--nav-text);
    color: var(--nav-color);
    border: solid 2px black;
  }
`;
