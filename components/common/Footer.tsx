import React from "react";
import { SearchIcon } from "@components/icons";
import { Button, Container } from "@components/ui";
import styled from "@emotion/styled";
import useFormattedDate from "@hooks/useFormattedDate";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { useTranslation } from "next-i18next";
import SocialLinks from "./SocialLinks";
import { SocialCircle } from "@components/ui";
import { ChangeEvent } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../hooks/store";
import { updateValue } from "slices/searchSlices";

interface IFooter {
  isDark: boolean;
}

const Footer = ({ isDark }: IFooter) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [search, setSearch] = useState("");
  const newSearch = useSelector((state: RootState) => state.search.value);

  type NavLinks = {
    title: string;
    slug: string;
  };

  const navLinks: NavLinks[] = [
    {
      title: t("common:Search"),
      slug: "/search",
    },
  ];

  const subscribeToNewsLetter = async (e: FormEvent) => {
    e.preventDefault();

    const FORMSPREE_API = process.env.FORMSPREE_API;
    const res = await fetch(FORMSPREE_API ?? "", {
      method: "POST",
      body: JSON.stringify({
        email: email,
      }),
      headers: {
        Accept: "application/json",
      },
    });

    const data = await res.json();

    if (!res.ok) {
      return alert(
        `${data.error}: ${
          Array.isArray(data.errors) ? data.errors[0].message : data.error
        }`
      );
    }

    alert("Success! You have been subscribed to our newsletter.");
    setEmail("");
  };

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      console.log("you searched, " + search);
      dispatch(updateValue(search));
      console.log(newSearch);
      if (search) {
        router.replace("/search");
        event.preventDefault();
      }
    }
  }

  return (
    <Wrapper isDark={isDark}>
      <Container>
        <div className="content">
          <FooterContainer
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <h2 className="logo">AFGNEWS</h2>
              <div className="newsletter" style={{ margin: "1.7rem 0 3rem 0" }}>
                <p className="description">{t("common:news_letter_title")}</p>
                <form
                  onSubmit={subscribeToNewsLetter}
                  className="input-box"
                  aria-label="Subscribe your email to newsletter"
                >
                  <input
                    placeholder={t("common:news_letter_placeholder")}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{
                      backgroundColor: "white",
                      border: "black solid 1px",
                      padding: "0 0 0 1rem",
                      width: "14rem",
                    }}
                  />
                  <Button className="btn" type="submit">
                    OK
                  </Button>
                </form>
              </div>
              <div className="socials">
                <p>{t("common:follow_us")}: </p>
                {SocialLinks.map((item, index) => {
                  return (
                    <SocialCircle
                      size="33px"
                      href={item.url}
                      aria-label={item.name}
                      key={index}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <item.icon size={18} />
                    </SocialCircle>
                  );
                })}
              </div>
            </div>
          </FooterContainer>
          <FooterContainer
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div className="footer-links">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "80%",
                }}
              >
                <Link href="/aboutus">
                  <FooterLink>About Us</FooterLink>
                </Link>
                <Link href="/ContactUs">
                  <FooterLink>Contact Us</FooterLink>
                </Link>
                <Link href="/MobileApp">
                  <FooterLink>Mobile App</FooterLink>
                </Link>
                <Link href="/SubmitAStory">
                  <FooterLink>Submit a Story</FooterLink>
                </Link>
                <Link href="/AdvertiseWithUs">
                  <FooterLink>Advertise With Us</FooterLink>
                </Link>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <FooterLink>Work For Us</FooterLink>
                <Link href="/Feedback">
                  <FooterLink>Feedback</FooterLink>
                </Link>
                <Link href="/newsletter">
                  <FooterLink>News Letter</FooterLink>
                </Link>
                <FooterLink>Privacy Policy</FooterLink>
                <FooterLink>Terms & Conditions</FooterLink>
              </div>
            </div>
            <div className="search">
              <SearchIcon width="20px" color="#ffff" />
              <input
                placeholder={t("common:search_placeholder")}
                aria-label="search bar"
                onChange={handleSearch}
                onKeyDown={handleKeyPress}
              />
            </div>
          </FooterContainer>
        </div>
        <Divider />
        <BottomFooter>
          <p>
            {useFormattedDate(new Date(), "footer")} AfgNews -{" "}
            {t("common:rights")}
          </p>
        </BottomFooter>
      </Container>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer<IFooter>`
  background-color: ${(props) =>
    props.isDark ? "var(--nav-text)" : "var(--nav-color)"};
  color: ${(props) => (props.isDark ? "var(--nav-color)" : "var(--nav-text)")};
  padding: 1rem 1.5rem;

  & .content {
    padding: 0.75rem 0;
    display: flex;
    justify-content: space-between;
    gap: 1rem;

    @media only screen and (max-width: 880px) {
      display: block;

      & > * {
        margin: 1rem 0; // This adds space between children elements of content
      }
    }
  }
`;

const FooterContainer = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  & .logo {
    font-size: 3.8rem;
    font-weight: var(--font-extrabold);
    padding-bottom: 1.5rem;

    @media only screen and (max-width: 640px) {
      font-size: 3.5rem;
    }
  }

  & .newsletter {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    .input-box {
      display: flex;
      gap: 0.5rem;

      .btn {
        width: 4rem;
      }
    }

    & > * {
      margin-bottom: 0.5rem;
    }
  }

  & .description {
    color: var(--primary-color);
  }

  & .description + div {
    display: flex;
    gap: 0.25rem;
    max-width: 300px;
  }

  & .socials {
    display: flex;
    gap: 1rem;
    align-items: center;
    font-weight: var(--font-base);
    text-transform: uppercase;

    @media only screen and (max-width: 640px) {
      font-size: 0.8rem;
    }
  }

  & .footer-links {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    // margin: 0 0 1.8rem 0;
    width: 23.5rem;
    justify-content: space-between;
  }

  // @media (min-width: 1367px) and (min-height: 769px) {
  //   & .footer-links {
  //     display: flex;
  //     gap: 1rem;
  //     flex-wrap: wrap;
  //     margin: 0 0 1rem 0;
  //     width: 23.5rem;
  //     justify-content: space-between;
  //   }
  // }

  & .search {
    display: flex;
    padding: 0.3rem;
    background-color: #202224;
    border-radius: 0.25rem;
    max-width: 380px;
    margin-bottom: 2px;
    & input {
      color: white;
      outline: none;
      border: none;
      background-color: transparent;
      padding-left: 0.25rem;
    }
  }

  & .donate {
    background-color: var(--success-color);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
  }
`;

const FooterLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  font-weight: medium;
  transition: color 0.2s ease-in-out;
  margin: 14px auto;
  width: 100%;
  font-size: 1rem;
  &:hover {
    color: var(--primary-color);
  }
`;

const BottomFooter = styled.div`
  text-align: center;

  @media only screen and (min-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
  }
`;

const Divider = styled.div`
  border-top: 1px solid gray;
`;
