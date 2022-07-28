import { ContextProvider } from "@components/context";
import styled from "@emotion/styled";
import { Currency } from "@hooks/types";
import { Arrow90degUp, ArrowUp } from "@styled-icons/bootstrap";
import { ReactNode, useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface ILayout {
  children: ReactNode;
  currencies: Currency[];
  articles: any;
}

type MainProps = {
  isDark?: boolean;
};

type Scroller = {
  isVisible: boolean;
};

const Layout = ({ articles, currencies, children }: ILayout) => {
  const [isDark, setIsDark] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const scrollEvent = () => {
    if (window.scrollY > 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => scrollEvent);

    return () => {
      window.removeEventListener("scroll", () => scrollEvent);
    };
  }, []);

  return (
    <ContextProvider>
      <Navbar
        articles={articles}
        currencies={currencies}
        isDark={isDark}
        setIsDark={setIsDark}
      />
      <Main isDark={isDark}>{children}</Main>
      <AccessibilityScroller isVisible={isVisible}>
        <ArrowUp size={24} />
      </AccessibilityScroller>
      <Footer />
    </ContextProvider>
  );
};

export default Layout;

const Main = styled.main<MainProps>`
  min-height: 100vh;
  background-color: ${(props) =>
    props.isDark ? "var(--text-color)" : "var(--container-color)"};
  color: ${(props) =>
    props.isDark ? "var(--container-color)" : "var(--text-color)"};
`;

const AccessibilityScroller = styled.button<Scroller>`
  display: ${(props) => (props.isVisible ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  width: 48px;
  height: 48px;
  z-index: 100;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 100%;
`;
