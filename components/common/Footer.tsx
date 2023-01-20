import React from "react";
import { SearchIcon } from "@components/icons";
import { Button, Container, Input } from "@components/ui";
import styled from "@emotion/styled";
import useFormattedDate from "@hooks/useFormattedDate";
import data from "@test-data";
import Link from "next/link";
import { FormEvent, ReactNode, useState } from "react";
import { useTranslation } from "next-i18next";
import SocialLinks from "./SocialLinks";
import { SocialCircle } from "@components/ui";
import { ChangeEvent } from 'react'
import { useRouter } from 'next/router';
import {useContext} from "react"
import { DataProvider, DataContext } from '@hooks/DataContext';


interface IFooter {
  isDark: boolean;
}



const Footer = ({ isDark }: IFooter) => {
  const [email, setEmail] = useState("");
  const { t } = useTranslation();

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

  type NavLinks = {
    title: string;
    slug: string;
  };

  const navLinks: NavLinks[] = [
    {
      title: t("common:Search"),
      slug: "/search",
    },
  ]

  const [search, setSearch] = useState("")
  const { newdata, setData } = useContext(DataContext);
 
  
  const router = useRouter();

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value)
  }
 
  function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      console.log("you searched, " + search)
      // router.asPath = "/search"
      if(search) {
        router.replace('/search');
        event.preventDefault();
        setData({...newdata, input: search });
    }
    }
  }

  return (
    <Wrapper isDark={isDark}>
      <Container>
        <div className="content">
          <FooterContainer>
            <h2 className="logo">AFGNEWS</h2>

            <div className="newsletter">
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
                 style={{backgroundColor: 'white', border: "black solid 1px",}}
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
          </FooterContainer>
          <FooterContainer>
            <div className="footer-links">
              {data.menuitems.map((item, index) => {
                return (
                  <Link href={item.url} key={index} passHref={true}>
                    <FooterLink>{item.title}</FooterLink>
                  </Link>
                );
              })}
            </div>
            <div className="search">
              <SearchIcon width="20px" />
              <input
                placeholder={t("common:search_placeholder")}
                aria-label="search bar"
                onChange={handleSearch}
                onKeyDown={handleKeyPress}
              />
            </div>
            {/* <Link href="/donate">
              <a className="donate">Donate</a>
            </Link> */}
          </FooterContainer>
        </div>
        <BottomFooter>
          <p>
            {useFormattedDate(new Date(), "footer")} AfgNews -{" "}
            {t("common:rights")}
          </p>
          <div className="bottom_links">
            {t("common:about")} - {t("common:privacy")} - {t("common:terms")}-
            {t("common:advertise")}
          </div>
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

  & .logo {
    font-size: 5rem;
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
        max-width: min-content;
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
    padding: 1rem 0;
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
  }

  & .search {
    display: flex;
    padding: 0.3rem;
    background-color: #202224;
    border-radius: 0.25rem;
    align-self: self-end;
    max-width: 350px;
    margin-bottom: 2rem;

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
  margin: 1.5rem auto;
  &:hover {
    color: var(--primary-color);
  }
`;

const BottomFooter = styled.div`
  text-align: center;

  @media only screen and (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
  }
`;
