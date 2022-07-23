import { useApi } from "@components/context";
import { CloseIcon, MenuIcon } from "@components/icons";
import { ArticleCard } from "@components/news";
import { Container } from "@components/ui";
import { NavCurrencyWidget } from "@components/widgets";
import styled from "@emotion/styled";
import useFormattedDate from "@hooks/useFormattedDate";
import { Moon, Sun } from "@styled-icons/bootstrap";
import data from "@test-data";
import { onAuthStateChanged } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useAuth } from "utils/firebase";

type BottomType = {
  active: boolean;
};

interface INavbar {
  isDark: boolean;
  setIsDark: Dispatch<SetStateAction<boolean>>;
}

const Navbar = ({ isDark, setIsDark }: INavbar) => {
  const [active, setActive] = useState(false);
  const { user, setUser } = useApi();
  const router = useRouter();

  const logout = () =>
    useAuth
      .signOut()
      .then(() => {
        console.log("logout successfully");
      })
      .catch((err) => console.log(err)); // Implement logout function

  useEffect(() => {
    const unsub = onAuthStateChanged(useAuth, (user) => {
      setUser(user ?? undefined);
    });

    return unsub;
  }, []);

  return (
    <Root>
      <Container>
        <TopStrip>
          <NavCurrencyWidget />
          <div className="date">{useFormattedDate(new Date(), "nav")}</div>
        </TopStrip>
        <TopContent>
          <div>
            <button
              onClick={() => setActive(!active)}
              aria-label="Navigation Toggle"
            >
              {active ? <CloseIcon width="25px" /> : <MenuIcon width="25px" />}
            </button>
          </div>
          <div>
            <span>AFGNews</span>
          </div>
          <div>
            <span>
              {!!user ? (
                <>
                  <Link href="/profile">
                    <a>Profile</a>
                  </Link>
                  <button className="logout" onClick={logout}>
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link href="/auth/login">
                    <a className="signIn">Sign in</a>
                  </Link>
                  <Link href="/auth/registration">
                    <a className="signUp">Sign up</a>
                  </Link>
                </>
              )}
            </span>
          </div>
        </TopContent>
        <BottomContent active={active}>
          <div className="menu">
            {data.menuitems.map((menu, i) => {
              return (
                <div className="menu-item" key={i}>
                  <Link href={menu.url} passHref={true}>
                    <MenuItem>{menu.title}</MenuItem>
                  </Link>
                  {router.asPath !== menu.url && (
                    <MenuDropDown className="menu-dropdown">
                      <ArticleCard card={data.articles[0]} variant="slim" />
                      <ArticleCard card={data.articles[0]} variant="slim" />
                      <ArticleCard card={data.articles[0]} variant="slim" />
                      <ArticleCard card={data.articles[0]} variant="slim" />
                    </MenuDropDown>
                  )}
                </div>
              );
            })}
          </div>
          <div className="right">
            <div className="languages">
              <button
                aria-label="Toggle dark mode"
                onClick={() => setIsDark(!isDark)}
              >
                {isDark ? <Moon size={20} /> : <Sun size={20} />}
              </button>
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

    @media only screen and (min-width: 900px) {
      display: none;
    }
  }

  & div:last-of-type {
    // Refers to login/sign up/logout
    display: flex;
    justify-content: flex-end;

    @media only screen and (max-width: 768px) {
      font-size: 0.7rem;
    }
  }

  .logout {
    color: var(--primary-color);
    margin-left: 0.5rem;
  }

  span .signUp {
    color: var(--primary-color);
    margin-left: 0.5rem;
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
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

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
