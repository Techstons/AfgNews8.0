import { CloseIcon, MenuIcon } from "@components/icons";
import { ArticleCard } from "@components/news";
import { Article } from "@components/types";
import { Container, SocialCircle } from "@components/ui";
import { LocaleSwitcher, NavCurrencyWidget } from "@components/widgets";
import styled from "@emotion/styled";
import { ReturnValue } from "@hooks/article/get-articles-ctx";
import useFormattedDate from "@hooks/useFormattedDate";
import { MoonFill, SunFill, Youtube } from "@styled-icons/bootstrap";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import SocialLinks from "./SocialLinks";

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
      title: "Afg",
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
    SocialLinks.filter((social) => social.name !== "Youtube").map(
      (item, index) => {
        return (
          <SocialCircle
            size="24px"
            href={item.url}
            aria-label={item.name}
            key={index}
            target="_blank"
            rel="noreferrer"
          >
            <item.icon size={14} />
          </SocialCircle>
        );
      }
    );

  // change direction of the page
  useEffect(() => {
    const changeDir = () => {
      let dir = router.locale == "ps" || router.locale === "fa" ? "rtl" : "ltr";

      document?.querySelector("html")?.setAttribute("dir", dir);
    };

    changeDir();
  }, [router.locale]);

  return (
    <Root>
      <Container>
        <TopStrip>
          <NavCurrencyWidget />
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
              />
              <span className="slider">
                {!isDark ? <SunFill size={16} /> : <MoonFill size={16} />}
              </span>
            </ToggleDarkWrapper>
            <LocaleSwitcher />
          </div>
        </TopStrip>
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
              <Image
                src="c_limit,h_60,q_auto:low,w_130/assets/logo_wjawfm.png"
                alt="AFGNews Logo"
                layout="fixed"
                height={60}
                width={130}
                className="logo"
              />
            </a>
          </Link>
          {/* <div className="socials">{renderSocialIcons()}</div> */}
        </TopContent>
        <BottomContent active={active}>
          <div className="menu">
            {navLinks.map((menu, i) => {
              return (
                <div className="menu-item" key={i}>
                  <Link href={menu.slug} passHref={true}>
                    <MenuItem onClick={() => setActive(false)}>
                      {menu.title}
                    </MenuItem>
                  </Link>
                  {/* {!!articles &&
                    articles[menu.default]?.items?.length > 0 &&
                    router.asPath !== menu.slug &&
                    menu.title !== "Videos" && (
                      <MenuDropDown className="menu-dropdown">
                        {articles[menu.default]?.items
                          .slice(0, 4)
                          .map((item: Article) => {
                            return (
                              <ArticleCard
                                key={item.title}
                                card={item}
                                variant="primary"
                              />
                            );
                          })}
                      </MenuDropDown>
                    )} */}
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
                <Youtube className="youtube-logo" height={22} width={26} />
              </a>
            </div>
          </div>
          <div className="right">
            <div className="socials">{renderSocialIcons()}</div>
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

  .toggle-and-languages {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
`;

const TopContent = styled.div<DropdownProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 0.65rem;

  .nav-toggle {
    // Mobile navbar
    position: absolute;
    left: -5px;
    top: 1.6rem;
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
  gap: 1rem;
  padding: 0.5rem 0;

  & .menu {
    display: flex;
    gap: 2rem;
    align-items: center;
    padding-top: 0.25rem;

    & .menu-item {
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
    }

    .youtube {
      .youtube-logo {
        color: white;
        border: 2px solid var(--primary-color);
        border-radius: 0.5rem;
        padding: 0.025rem 0.05rem;
        transition: color 0.2s ease-in-out;
        &:hover {
          background-color: white;
          color: var(--primary-color);
        }
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

const MenuItem = styled.a`
  cursor: pointer;
  padding-bottom: 1rem;
  &:hover {
    color: var(--primary-color);
  }
`;

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
  height: 20px;
  transition: 0.2s;
  width: 44px;
  cursor: pointer;

  @media only screen and (min-width: 901px) {
    width: 38px;
  }

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
