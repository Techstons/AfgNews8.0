import styled from "@emotion/styled";
import { Currency } from "@hooks/types";
import { ArrowUp } from "@styled-icons/bootstrap";
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const scrollEvent = () => {
      const isVisible = window.scrollY > 0 ? true : false;
      setIsVisible(isVisible);
    };

    window.addEventListener("scroll", () => scrollEvent());

    return () => {
      window.removeEventListener("scroll", () => scrollEvent());
    };
  }, []);

  return (
    <>
      <Navbar
        articles={articles}
        currencies={currencies}
        isDark={isDark}
        setIsDark={setIsDark}
      />
      <Main isDark={isDark}>{children}</Main>
      <AccessibilityScroller
        isVisible={isVisible}
        onClick={scrollToTop}
        aria-label="Scroll to top button"
      >
        <ArrowUp size={24} />
      </AccessibilityScroller>
      <Footer />
    </>
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
