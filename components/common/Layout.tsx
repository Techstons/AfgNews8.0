import { ContextProvider } from "@components/context";
import styled from "@emotion/styled";
import { ReactNode, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface ILayout {
  children: ReactNode;
}

type MainProps = {
  isDark?: boolean;
};

const Layout = ({ children }: ILayout) => {
  const [isDark, setIsDark] = useState(false);
  return (
    <ContextProvider>
      <Navbar isDark={isDark} setIsDark={setIsDark} />
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
