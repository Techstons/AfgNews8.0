import { ContextProvider } from "@components/context";
import styled from "@emotion/styled";
import { Currency } from "@hooks/types";
import { ReactNode, useState } from "react";
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

const Layout = ({ articles, currencies, children }: ILayout) => {
  const [isDark, setIsDark] = useState(false);
  return (
    <ContextProvider>
      <Navbar
        articles={articles}
        currencies={currencies}
        isDark={isDark}
        setIsDark={setIsDark}
      />
      <Main isDark={isDark}>{children}</Main>
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
