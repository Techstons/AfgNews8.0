import { SearchIcon } from "@components/icons";
import { Button, Container, Input } from "@components/ui";
import styled from "@emotion/styled";
import useFormattedDate from "@hooks/useFormattedDate";
import { Instagram } from "@styled-icons/bootstrap/Instagram";
import { Twitter } from "@styled-icons/bootstrap/Twitter";
import { Youtube } from "@styled-icons/bootstrap/Youtube";
import { Facebook } from "@styled-icons/material/Facebook";
import data from "@test-data";
import Link from "next/link";
import { FormEvent, ReactNode, useState } from "react";
import { useTranslation } from "next-i18next";

type LengthUnit = "px" | "em" | "rem";
type Length = `${number}${LengthUnit}`;

interface ISocialCircle {
  variant?: "primary" | "secondary";
  children: ReactNode;
  size: Length;
}

const Footer = () => {
  const [email, setEmail] = useState("");
  const { t } = useTranslation();

  const SocialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/AFG-News-104199542368566/about/?ref=page_internal",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/AFGNEWS_",
    },
    {
      name: "Youtube",
      icon: Youtube,
      url: "https://www.youtube.com/channel/UC1JjrqGsFWlcVpcImM98Xjw",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/",
    },
  ];

  const subscribeToNewsLetter = async (e: FormEvent) => {
    e.preventDefault();

    // // Mailchimp request
    // const res = await fetch("/api/subscribe-to-newsletter", {
    //   body: JSON.stringify({
    //     email: email,
    //   }),

    //   headers: {
    //     "Content-Type": "application/json",
    //   },

    //   method: "POST",
    // });

    // const data = await res.json();

    // if (res.status !== 201) {
    //   return alert(
    //     `ERROR ${res.status}: ${data.error.title}, ${data.error.detail}`
    //   );
    // }

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

  return (
    <Wrapper>
      <Container>
        <div className="content">
          <FooterContainer>
            <h2 className="logo">AfgNews</h2>

            <div className="newsletter">
              <p className="description">{t("common:news_letter_title")}</p>
              <form
                onSubmit={subscribeToNewsLetter}
                className="input-box"
                aria-label="Subscribe your email to newsletter"
              >
                <Input
                  className="input"
                  placeholder={t("common:news_letter_placeholder")}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoCapitalize="off"
                  autoCorrect="off"
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
                  <Link href={item.url} key={index} passHref={true}>
                    <SocialCircle size="33px" aria-label={item.name}>
                      <item.icon size={18} />
                    </SocialCircle>
                  </Link>
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

const Wrapper = styled.footer`
  background-color: var(--nav-color);
  color: var(--nav-text);
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
  background-color: var(--nav-color);
  color: var(--nav-text);
  font-size: 1.2rem;
  font-weight: bold;
  border-top: 1px solid var(--nav-color);
  border-bottom: 1px solid var(--nav-color);

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
  color: var(--nav-text);
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

const SocialCircle = styled.a<ISocialCircle>`
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 100%;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border: solid 2px white;
  transition: color 0.2s ease-in-out;

  &:hover {
    background-color: var(--nav-text);
    color: var(--nav-color);
    border: solid 2px black;
  }
`;
