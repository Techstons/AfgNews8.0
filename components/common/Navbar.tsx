import { CloseIcon, MenuIcon, SearchIcon } from "@components/icons";
import { Container } from "@components/ui";
import { StockExchangeWidget } from "@components/widget";
import styled from "@emotion/styled";
import data from "@test-data";
import Link from "next/link";
import { useState } from "react";

// test

type BottomType = {
  active: boolean;
};

const Navbar = () => {
  const [active, setActive] = useState(false);

  return (
    <Root>
      <Container>
        {/* <TopStrip>
          languages here
          <div>
            <button>English</button>
            <button>پشتو</button>
            <button>فارسی</button>
            <button>русский</button>
          </div>
          <div>
            <span>{new Date().toDateString()}</span>
          </div>
        </TopStrip> */}
        <TopStrip>
          <StockExchangeWidget />
        </TopStrip>
        <TopContent>
          <div>
            <button onClick={() => setActive(!active)}>
              {active ? <CloseIcon width="25px" /> : <MenuIcon width="25px" />}
            </button>
          </div>
          <div>
            <span>AFGNews</span>
          </div>
          <div>
            <span>
              <button className="signIn">Sign in</button>
              <button className="signUp">Sign up</button>
            </span>
          </div>
        </TopContent>
        <BottomContent active={active}>
          <div className="menu">
            {data.menuitems.map((menu, i) => (
              <div key={i}>
                <Link href={menu.url} passHref={true}>
                  <MenuItem>{menu.title}</MenuItem>
                </Link>
              </div>
            ))}
          </div>
          <div className="search">
            <SearchIcon width="20px" />
            <input />
          </div>
        </BottomContent>
      </Container>
    </Root>
  );
};

const Root = styled.nav`
  padding: 0.5rem 1rem;
  background-color: var(--nav-color);
  font-weight: var(--font-medium);
  color: var(--nav-text);

  @media only screen and (max-width: 640px) {
    padding: 0.25rem 0.5rem;
  }
`;

const TopStrip = styled.div`
  border-bottom: 1px solid white;
  font-size: 0.65rem;
`;

const TopContent = styled.div`
  display: flex;
  align-items: center;
  padding-top: 0.5rem;

  & div {
    flex: 1;
    display: flex;
    justify-content: center;
  }

  & > div:nth-of-type(2) {
    font-size: 1.25rem;
    color: var(--primary-color);
    font-weight: var(--font-bold);
  }

  & div:first-of-type > button {
    cursor: pointer;
    margin: auto auto auto 0;

    @media only screen and (min-width: 768px) {
      display: none;
    }
  }

  & div:last-of-type > span {
    margin-left: auto;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;

    @media only screen and (min-width: 768px) {
      flex-direction: row;
      gap: 0.5rem;
    }
  }

  .signUp {
    color: var(--primary-color);
  }
`;

const BottomContent = styled.div<BottomType>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0;
  transition: all 0.2s ease;

  & .menu {
    display: flex;
    gap: 2rem;

    @media only screen and (max-width: 768px) {
      flex-direction: column;
    }
  }

  & .search {
    display: flex;
    padding: 0.5rem;
    background-color: #202224;
    border-radius: 0.25rem;
    margin-left: 2rem;

    & input {
      color: white;
      width: 100%;
      padding-left: 0.35rem;
      outline: none;
      border: none;
      background-color: transparent;
    }

    @media only screen and (max-width: 768px) {
      margin-top: 1rem;
      margin-left: 0;
    }
  }

  @media only screen and (max-width: 768px) {
    display: ${(props) => (props.active ? "block" : "none")};
    transform-origin: top;
    animation: growDown 300ms ease;
    justify-content: flex-start;
  }

  @keyframes growDown {
    0% {
      transform: scaleY(0);
    }
    100% {
      transform: scaleY(1);
    }
  }
`;

const MenuItem = styled.a`
  cursor: pointer;
  border-bottom: 2px solid transparent;
  transition: all 0.2s ease-in-out;

  &:hover {
    border-bottom: 2px solid var(--primary-color);
  }
`;

export default Navbar;
