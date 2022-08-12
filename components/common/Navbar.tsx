import { CloseIcon, MenuIcon } from "@components/icons";
import { Container } from "@components/ui";
import { NavCurrencyWidget } from "@components/widgets";
import styled from "@emotion/styled";
import { Currency } from "@hooks/types";
import useFormattedDate from "@hooks/useFormattedDate";
import { MoonFill, SunFill } from "@styled-icons/bootstrap";
import { Person } from "@styled-icons/material";
import data from "@test-data";
import Link from "next/link";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useState } from "react";

type BottomType = {
  active: boolean;
};

interface INavbar {
  isDark: boolean;
  setIsDark: Dispatch<SetStateAction<boolean>>;
  currencies: Currency[];
  articles: any;
}

type DropdownProps = {
  active: boolean;
};

type ToggleProps = {
  active: boolean;
};

const Navbar = ({ isDark, setIsDark, articles, currencies }: INavbar) => {
  const [active, setActive] = useState(false);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const router = useRouter();

  return (
    <Root>
      <Container>
        <TopStrip>
          <NavCurrencyWidget currencies={currencies} />
          <div className="date">{useFormattedDate(new Date(), "nav")}</div>
        </TopStrip>
        <TopContent active={toggleDropdown}>
          <div>
            <button
              onClick={() => setActive(!active)}
              aria-label="Navigation Toggle"
              className="nav-toggle"
            >
              {active ? <CloseIcon width="25px" /> : <MenuIcon width="25px" />}
            </button>
          </div>
          <div>
            <span>AFGNews</span>
          </div>
          <div>
            <button
              aria-label="User dropdown toggle"
              className="toggle"
              onClick={() => setToggleDropdown(!toggleDropdown)}
            >
              <Person size={30} />
            </button>
          </div>
        </TopContent>
        <BottomContent active={active}>
          <div className="menu">
            {data.menuitems.map((menu, i) => {
              return (
                <div className="menu-item" key={i}>
                  <Link href={menu.url} passHref={true}>
                    <MenuItem onClick={() => setActive(false)}>
                      {menu.title}
                    </MenuItem>
                  </Link>
                  {router.asPath !== menu.url && (
                    <MenuDropDown className="menu-dropdown">
                      {/* <ArticleCard card={data.articles[0]} variant="primary" />
                      <ArticleCard card={data.articles[0]} variant="primary" />
                      <ArticleCard card={data.articles[0]} variant="primary" />
                      <ArticleCard card={data.articles[0]} variant="primary" /> */}
                    </MenuDropDown>
                  )}
                </div>
              );
            })}
          </div>
          <div className="right">
            <div className="languages">
              <ToggleDarkWrapper active={isDark}>
                <input
                  type="checkbox"
                  aria-label="Toggle dark mode"
                  onChange={() => setIsDark(!isDark)}
                  checked={isDark}
                  className="toggle-dark"
                  id="toggle-dark"
                  name="toggle-dark"
                  value="toggle-dark"
                  aria-checked={isDark}
                />
                <span className="slider">
                  {!isDark ? <SunFill size={16} /> : <MoonFill size={16} />}
                </span>
              </ToggleDarkWrapper>
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

export default Navbar;

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
  font-size: 0.65rem;
  align-items: center;
  gap: 0.5rem;

  & .date {
    font-size: 0.85rem;
    flex-grow: 1;
    min-width: max-content;
  }
`;

const TopContent = styled.div<DropdownProps>`
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

  & div:first-of-type > .nav-toggle {
    // Mobile navbar
    cursor: pointer;
    margin: auto auto auto 0;

    @media only screen and (min-width: 900px) {
      display: none;
    }
  }

  & div:last-of-type {
    // Right side of the navbar
    position: relative;

    .dropdown {
      display: ${(props) => (props.active ? "flex" : "none")};
      background-color: white;
      flex-direction: column;
      gap: 0.5rem;
      position: absolute;
      color: black;
      right: 0;
      bottom: -5rem;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

      & > * {
        transition: color, background-color 0.2s ease-in-out;
        padding: 0.5rem 2rem;
        white-space: nowrap;
        z-index: 5;
      }

      & > *:hover {
        background-color: var(--primary-color);
        color: white;
      }
    }

    .toggle {
      margin-left: auto;
    }
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

    & .menu-item {
      &:hover .menu-dropdown {
        display: grid;

        @media only screen and (max-width: 900px) {
          display: none;
        }
      }
    }

    @media only screen and (max-width: 900px) {
      flex-direction: column;
    }
  }

  & .right {
    & .languages {
      display: flex;
      gap: 0.5rem;
      font-size: 0.5rem;
      min-width: max-content;
      align-self: flex-end;

      & > * {
        &:hover {
          color: var(--primary-color);
        }
      }

      @media only screen and (min-width: 768px) {
        padding: 0.75rem 0;
        align-self: auto;
        font-size: 0.85rem;
      }
    }

    @media only screen and (min-width: 768px) {
      flex-direction: row;
    }
  }

  @media only screen and (max-width: 900px) {
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

  &:hover {
    color: var(--primary-color);
  }
`;

const MenuDropDown = styled.div`
  z-index: 10;
  position: absolute;
  display: none;
  grid-template-columns: 40% 60%;
  left: 0;
  background-color: black;
  min-height: 150px;
  width: 100%;
  padding: 2rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 3rem;

  & h2 {
    font-size: 3rem;
    color: var(--primary-color);
    font-weight: var(--font-bold);
    padding: 0.5rem;
  }

  & .article-grid {
    display: grid;
    gap: 1.5rem;
  }
`;

const ToggleDarkWrapper = styled.label<ToggleProps>`
  position: relative;
  display: inline-block;
  background-color: #4d4d4d;
  border-radius: 30px;
  height: 24px;
  transition: 0.2s;
  width: 50px;
  cursor: pointer;

  & input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  & input:checked + .slider {
    transform: translateX(22px);
    left: auto;
  }

  & .slider {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    width: 50%;
    bottom: 0;
    transition: 0.4s;
    background-color: ${(props) => (props.active ? "white" : "black")};
    color: ${(props) => (props.active ? "black" : "yellow")};
    border-radius: 30px;
    box-shadow: 0px 0px 0px 3px #4d4d4d;
  }
`;
