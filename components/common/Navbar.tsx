import { CloseIcon, MenuIcon } from "@components/icons";
import { Container, SocialCircle } from "@components/ui";
import { LocaleSwitcher, NavCurrencyWidget } from "@components/widgets";
import styled from "@emotion/styled";
import { ReturnValue } from "@hooks/article/get-articles-ctx";
import { MoonFill, SunFill, Youtube } from "@styled-icons/bootstrap";
import { useTranslation } from "next-i18next";
// import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import SocialLinks from "./SocialLinks";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "slices/searchSlices";
import type { RootState } from "../../hooks/store";

type BottomType = {
  active: boolean;
};

interface INavbar {
  isDark: boolean;
  setIsDark: Dispatch<SetStateAction<boolean>>;
  articles: ReturnValue;
}

type DropdownProps = {
  active: boolean;
};

type ToggleProps = {
  active: boolean;
};

type NavLinks = {
  default: keyof ReturnValue;
  title: string;
  slug: string;
};

const Navbar = ({ isDark, setIsDark, articles }: INavbar) => {
  const [active, setActive] = useState(false);
  const router = useRouter();

  const { t } = useTranslation();

  const navLinks: NavLinks[] = [
    {
      default: "Home",
      title: t("common:home"),
      slug: "/",
    },
    {
      default: "Afg",
      title: t("common:afg") === "Afghanistan" ? "AFG" : t("common:afg"),
      slug: "/afg",
    },
    {
      default: "World",
      title: t("common:world"),
      slug: "/world",
    },
    {
      default: "Business",
      title: t("common:business"),
      slug: "/business",
    },
    {
      default: "Tech",
      title: t("common:tech"),
      slug: "/tech-and-science",
    },
    {
      default: "Crypto",
      title: t("common:crypto"),
      slug: "/crypto",
    },
    {
      default: "Health",
      title: t("common:health"),
      slug: "/health",
    },
    {
      default: "Sports",
      title: t("common:sports"),
      slug: "/sports",
    },
  ];

  const renderSocialIcons = () =>
    SocialLinks.map((item) => {
      return (
        <a key={item.name} href={item.url} target="_blank" rel="noreferrer">
          {<item.icon size={16} />}
        </a>
      );
    });
  const renderSocialIconsMobile = () =>
    SocialLinks.filter((social) => social.name !== "Youtube").map((item) => {
      return (
        <a key={item.name} href={item.url} target="_blank" rel="noreferrer">
          <item.icon size={14} style={{ marginLeft: "10px" }} />
        </a>
      );
    });

  // change direction of the page
  useEffect(() => {
    const changeDir = () => {
      let dir = router.locale == "ps" || router.locale === "fa" ? "rtl" : "ltr";

      document?.querySelector("html")?.setAttribute("dir", dir);
    };

    changeDir();
  }, [router.locale]);

  const isDarkMode = useSelector((state: RootState) => state.search.isDarkMode);

  const dispatch = useDispatch();
  function toggleDark() {
    dispatch(toggleDarkMode());
  }

  return (
    <Root active={isDark}>
      <TopStrip>
        <SocialsWrapper>{renderSocialIcons()}</SocialsWrapper>
        <NavCurrencyWidget isDark={isDark} />
        <div className="toggle-and-languages">
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
              onClick={toggleDark}
            />
            <span className="slider">
              {!isDark ? <SunFill size={12} /> : <MoonFill size={12} />}
            </span>
            <h1>{isDarkMode}</h1>
          </ToggleDarkWrapper>

          <LocaleSwitcher />
        </div>
      </TopStrip>
      <Container>
        <TopContent active={active}>
          <button
            onClick={() => setActive(!active)}
            aria-label="Navigation Toggle"
            className="nav-toggle"
          >
            {active ? (
              <CloseIcon width="25px" height="25px" />
            ) : (
              <MenuIcon width="25px" height="25px" />
            )}
          </button>
          <Link href="/">
            <a
              aria-label="AFGNews Logo which links to home when clicked"
              className="logo"
            >
              <img
                src="logo-no-wm-removebg.png"
                alt="AFGNews Logo"
                height={80}
                width={220}
                // height={110}
                // width={330}
                style={{ objectFit: "cover", marginRight: "1.5rem" }}
              />
            </a>
          </Link>
        </TopContent>
        <BottomContent active={active}>
          <div className="menu">
            {navLinks.map((menu, i) => {
              return (
                <div className="menu-item" key={i}>
                  {/* ============= */}
                  <Link href={menu.slug} passHref={true}>
                    <MenuItem
                      onClick={() => setActive(false)}
                      title={menu.title}
                      active={isDark}
                      className={`${
                        router.asPath === menu.slug &&
                        router.asPath !== "/" &&
                        "active"
                      }`}
                    >
                      {menu.title}
                    </MenuItem>
                  </Link>
                </div>
              );
            })}
            <div className="youtube">
              <a
                href="https://www.youtube.com/channel/UC1JjrqGsFWlcVpcImM98Xjw"
                target={"_blank"}
                rel="noreferrer"
                aria-label="AfgNews Youtube Channel"
              >
                <Youtube className="youtube-logo" height={21} width={21} />
              </a>
            </div>
          </div>
          <div className="right">
            <div className="socials">{renderSocialIconsMobile()}</div>
          </div>
        </BottomContent>
      </Container>
    </Root>
  );
};

export default Navbar;

const Root = styled.nav<ToggleProps>`
  background-color: ${(props) =>
    props.active ? "var(--nav-text)" : "var(--nav-color)"};
  font-weight: var(--font-medium);
  color: ${(props) => (props.active ? "var(--nav-color)" : "var(--nav-text)")};
  padding: 0 0.5rem;

  &::after {
    // Adds solid line at the bottom of the navbar
    content: "";
    display: block;
    margin: 0 auto;
    width: 100%;
    border-bottom: 2px solid var(--primary-color);
  }

  .top-banner {
    position: absolute;
    height: ${(props) => (props.active ? "5px" : "3px")};
    width: 100%;
    left: 0;
    top: 0;
  }

  @media only screen and (max-width: 640px) {
    padding: 0.25rem 0.5rem;
  }
`;

const TopStrip = styled.div`
  direction: ltr;
  display: flex;
  font-size: 0.65rem;
  align-items: center;
  gap: 0.5rem;
  padding-top: 0.5rem;

  .toggle-and-languages {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    margin: 0 1rem 0 0;
  }
`;

const TopContent = styled.div<DropdownProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 0.5rem;
  padding-bottom: 0.3rem;

  .nav-toggle {
    // Mobile navbar
    position: absolute;
    left: -5px;
    top: 2.35rem;
    cursor: pointer;

    @media only screen and (min-width: 901px) {
      display: none;
    }
  }

  .logo {
    margin: 0.5rem 0;
  }

  .socials {
    position: absolute;
    right: -5px;
    top: 1.6rem;
    display: flex;
    gap: 0.5rem;

    @media only screen and (max-width: 901px) {
      display: none;
    }
  }
`;

const BottomContent = styled.div<BottomType>`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  gap: 0.7rem;

  & .menu {
    display: flex;
    align-items: center;
    gap: 2rem;

    /* & .menu-item {
      text-transform: uppercase;

      &:hover .menu-dropdown {
        display: grid;
        min-height: 150px;

        @media only screen and (max-width: 900px) {
          display: none;
        }
      }

      &:hover .menu-dropdown:focus-within {
        opacity: 0;
        transform: scaleY(0);
        transition-delay: 100ms;
      }
    } */

    .youtube {
      .youtube-logo {
        margin-bottom: 0.2rem;
        transition: color 0.2s ease-in-out;
        background-color: transparent;
        color: var(--primary-color);
      }
    }

    @media only screen and (max-width: 900px) {
      flex-direction: column;
      align-items: baseline;
    }
  }

  & .right {
    .socials {
      display: flex;
      gap: 0.5rem;

      @media screen and (min-width: 901px) {
        display: none;
      }
    }
  }

  @media screen and (max-width: 901px) {
    display: ${(props) => (props.active ? "flex" : "none")};
    align-items: flex-start;
    transform-origin: top;
    animation: growDown 300ms ease;
    justify-content: space-between;
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
const MenuItem = styled.a<ToggleProps>`
  cursor: pointer;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-color: ${(props) => (props.active ? "white" : "black")};
  font-family: "Vollkorn SC", serif;
  text-transform: uppercase;
  font-size: 1.1rem;

  &:hover {
    color: var(--primary-color);
  }
`;

// const MenuItem = styled.a<ToggleProps>`
//   cursor: pointer;
//   background-clip: text;
//   -webkit-background-clip: text;
//   color: transparent;
//   background-color: ${(props) => (props.active ? "white" : "black")};
//   font-family: "Vollkorn SC", serif;
//   text-transform: uppercase;
//   font-size: 1.1rem;

//   &:hover {
//     background-image: ${(props) =>
//       props.active
//         ? `linear-gradient(
//       180deg,
//       #12a012 0%,
//       #12a012 44%,
//       white 44%,
//       white 100%

//     )`
//         : `linear-gradient(
//       125deg,
//       black 0%,
//       black 30%,
//       var(--primary-color) 30%,
//       var(--primary-color) 55%,
//       #007a36 55%,
//       #007a36 100%
//     )`};
//   }

//   &.active {
//     background-image: ${(props) =>
//       props.active
//         ? `linear-gradient(
//       180deg,
//       #12a012 0%,
//       #12a012 44%,
//       white 44%,
//       white 100%

//     )`
//         : `linear-gradient(
//       125deg,
//       black 0%,
//       black 30%,
//       var(--primary-color) 30%,
//       var(--primary-color) 55%,
//       #007a36 55%,
//       #007a36 100%
//     )`};
//   }
// `;

const MenuDropDown = styled.div`
  z-index: 10;
  position: absolute;
  display: none;
  left: 0;
  transform: translateY(1rem);
  background-color: black;
  width: 100%;
  padding: 2rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 3rem;
`;

const ToggleDarkWrapper = styled.label<ToggleProps>`
  position: relative;
  display: inline-block;
  background-color: #4d4d4d;
  border-radius: 30px;
  height: 16px;
  transition: 0.2s;
  width: 38px;
  cursor: pointer;
  margin: 0 0.5rem 0 0;

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
    width: 45%;
    bottom: 0;
    transition: 0.4s;
    background-color: ${(props) => (props.active ? "white" : "black")};
    color: ${(props) => (props.active ? "black" : "yellow")};
    border-radius: 30px;
    box-shadow: 0px 0px 0px 3px #4d4d4d;
  }

  @media only screen and (max-width: 600px) {
    width: 34px;
    height: 12px;
    margin-top: 2px;
    margin-left: 1rem;
    margin-right: 5px;
  }
`;

const SocialsWrapper = styled.div`
  display: flex;
  gap: 0.5rem;

  @media screen and (max-width: 901px) {
    display: none;
  }
`;
