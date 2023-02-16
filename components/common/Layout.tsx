import styled from "@emotion/styled";
import { ReturnValue } from "@hooks/article/get-articles-ctx";
import { ArrowUp } from "@styled-icons/bootstrap";
import { ReactNode, useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { DataProvider } from "@hooks/DataContext";

interface ILayout {
  children: ReactNode;
  articles: ReturnValue;
}

type Scroller = {
  isVisible: boolean;
};

const Layout = ({ articles, children }: ILayout) => {
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
      <Navbar articles={articles} isDark={isDark} setIsDark={setIsDark} />
      <Numbers
        style={isDark ? { backgroundColor: "#000000", color: "white" } : {}}
      >
        <h4>Share your story, Send your Videos and Photos to us</h4>
        <div>
          <section>
            <p>Whatsapp:</p> <a>+14313183942</a>
          </section>
          <section>
            <p>Signal:</p> <a>+15142903146</a>
          </section>
          <section>
            <p>Viber:</p> <a>+18195067489</a>
          </section>
        </div>
      </Numbers>
      <Main className={isDark ? "dark-theme" : "light-theme"}>{children}</Main>
      <AccessibilityScroller
        isVisible={isVisible}
        onClick={scrollToTop}
        aria-label="Scroll to top button"
      >
        <ArrowUp size={24} />
      </AccessibilityScroller>
      <DataProvider>
        <Footer isDark={isDark} />
      </DataProvider>
    </>
  );
};

export default Layout;

const Numbers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 2rem 1rem 2.5rem 1rem;
  & div {
    display: flex;
    margin-top: 2rem;
    width: 80%;
    justify-content: space-around;
    height: 3rem;
  }

  & a {
    border: var(--primary-color) 1px solid;
    margin: 0 0 0 5px;
    // background-color: var(--primary-color);
    // color: white;
    padding: 0.5rem;
    border-radius: 5px;
  }

  & h4 {
    letter-spacing: 1px;
    color: red;
    word-spacing: 6px;
  }

  & p {
    font-size: 14px;
  }

  & section {
    display: flex;
    align-items: center;
  }

  @media (max-width: 600px) {
    p {
      font-size: 12px;
    }
    a {
      width: 6rem;
      font-size: 12px;
    }
    & section {
      display: flex;
      flex-direction: column;
    }
  }
`;

const Main = styled.main`
  min-height: calc(100vh - 142px);

  background-color: var(--container-color);
  color: var(--text-color);
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
