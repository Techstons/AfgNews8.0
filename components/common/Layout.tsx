import { ContextProvider } from "@components/context";
import { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface ILayout {
  children: ReactNode;
}

const Layout = ({ children }: ILayout) => {
  return (
    <ContextProvider>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </ContextProvider>
  );
};

export default Layout;
