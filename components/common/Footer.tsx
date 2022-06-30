import { Button, Container, Input } from "@components/ui";
import styled from "@emotion/styled";
import data from "@test-data";
import Link from "next/link";
import { Facebook } from "@styled-icons/material/Facebook";
import { Twitter } from "@styled-icons/bootstrap/Twitter";
import { Youtube } from "@styled-icons/bootstrap/Youtube";
import { Instagram } from "@styled-icons/bootstrap/Instagram";

const Footer = () => {
  const SocialLinks = [
    {
      icon: Facebook,
      url: "https://www.facebook.com/",
    },
    {
      icon: Twitter,
      url: "https://twitter.com/",
    },
    {
      icon: Youtube,
      url: "https://www.youtube.com/",
    },
    {
      icon: Instagram,
      url: "https://www.instagram.com/",
    },
  ];

  return (
    <Wrapper>
      <Container>
        <div className="content">
          <FooterContainer>
            <h2 className="logo">Afgnews</h2>

            <div className="newsletter">
              <p className="description">Join our news letter</p>
              <div className="input-box">
                <Input placeholder="Enter your email" />
                <Button>OK</Button>
              </div>
            </div>
            <div className="socials">
              <p>Follow us: </p>
              {SocialLinks.map((item, index) => {
                return (
                  <Link href={item.url} key={index}>
                    <SocialCircle>
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
                  <Link href={item.url} key={index}>
                    <FooterLink>{item.title}</FooterLink>
                  </Link>
                );
              })}
            </div>
          </FooterContainer>
        </div>
        <BottomFooter>
          <p>{new Date().getFullYear()} AFGnews - All Rights Reserved</p>
          <div className="bottom_links">
            About Us - Privacy Policy - Terms of Use - Advertise
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
    width: 100%;
    flex-direction: column;
    gap: 0.5rem;

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
`;

const SocialCircle = styled.a`
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 100%;
  width: 33px;
  height: 33px;
  border: solid 2px white;
  transition: color 0.2s ease-in-out;

  &:hover {
    background-color: var(--nav-text);
    color: var(--nav-color);
    border: solid 2px black;
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
