import { CloseIcon, MenuIcon, SearchIcon } from "@components/icons";
import { Container } from "@components/ui";
import { NavCurrencyWidget } from "@components/widgets";
import styled from "@emotion/styled";
import data from "@test-data";
import { format } from "date-fns";
import Link from "next/link";
import { useState } from "react";

type BottomType = {
  active: boolean;
};

const Navbar = () => {
  const [active, setActive] = useState(false);

  return (
    <Root>
      <Container>
        <TopStrip>
          <NavCurrencyWidget />
          <div className="date">{format(new Date(), "E, d MMM")}</div>
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
          <div className="right">
            <div className="search">
              <SearchIcon width="20px" />
              <input />
            </div>
            <div className="languages">
              <button>English</button>
              <button>پشتو</button>
              <button>فارسی</button>
              <button>русский</button>
            </div>
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
  display: flex;
  border-bottom: 1px solid white;
  font-size: 0.65rem;
  align-items: center;
  gap: 0.5rem;

  & .date {
    flex-grow: 1;
    min-width: max-content;
  }
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
    // Refers to the logo
    font-size: 1.25rem;
    color: var(--primary-color);
    font-weight: var(--font-bold);
  }

  & div:first-of-type > button {
    // Mobile navbar
    cursor: pointer;
    margin: auto auto auto 0;

    @media only screen and (min-width: 768px) {
      display: none;
    }
  }

  & div:last-of-type > span {
    // Refers to login/sign up
    margin-left: auto;
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;

    @media only screen and (max-width: 768px) {
      font-size: 0.7rem;
    }
  }

  .signUp {
    color: var(--primary-color);
  }
`;

const BottomContent = styled.div<BottomType>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0;
  transition: all 0.2s ease;
  gap: 1rem;

  & .menu {
    display: flex;
    gap: 1rem;

    @media only screen and (max-width: 768px) {
      flex-direction: column;
    }
  }

  & .right {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    & .search {
      display: flex;
      padding: 0.3rem;
      background-color: #202224;
      border-radius: 0.25rem;
      max-width: 125px;
      align-self: self-end;

      & input {
        color: white;
        outline: none;
        border: none;
        background-color: transparent;
        width: 100%;
        padding-left: 0.2rem;
      }

      @media only screen and (min-width: 768px) {
        max-width: 100%;
        align-self: auto;
      }
    }

    & .languages {
      display: block;
      font-size: 0.5rem;
      min-width: max-content;
      align-self: flex-end;

      & > * {
        margin-left: 0.4rem;

        &:hover {
          color: var(--primary-color);
        }
      }

      @media only screen and (min-width: 768px) {
        padding: 0.75rem 0;
        align-self: auto;
        font-size: 0.65rem;
      }
    }

    @media only screen and (min-width: 768px) {
      flex-direction: row;
    }
  }

  @media only screen and (max-width: 768px) {
    display: ${(props) => (props.active ? "flex" : "none")};
    align-items: flex-start;
    transform-origin: top;
    animation: growDown 300ms ease;
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
