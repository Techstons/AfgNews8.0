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
        <div className="logo">
          <h1>Afgnews</h1>
        </div>
        <div className="content">
          <FooterContainer>
            <div className="newsletter">
              <p className="description">Join our news letter</p>
              <div>
                <Input placeholder="Enter your email" />
                <Button>OK</Button>
              </div>
            </div>
            <div className="socials">
              {SocialLinks.map((item, index) => {
                return (
                  <Link href={item.url} key={index}>
                    <SocialCircle>
                      <item.icon size={24} />
                    </SocialCircle>
                  </Link>
                );
              })}
            </div>
          </FooterContainer>
          <FooterContainer>
            {data.menuitems.map((item, index) => {
              return (
                <Link href={item.url} key={index}>
                  <FooterLink>{item.title}</FooterLink>
                </Link>
              );
            })}
          </FooterContainer>
        </div>
        <BottomFooter>
          <p>{new Date().getFullYear()} AFGnews - All Rights Reserved</p>
          <div className="bottom_links">
            About Us Privacy Policy Terms of Use Advertise
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

  & .logo {
    font-size: 1.5rem;
    font-weight: bold;
  }

  & .content {
    padding: 0.75rem 0;
    display: flex;
    justify-content: space-evenly;
    gap: 1rem;

    @media only screen and (max-width: 768px) {
      display: block;

      & > * {
        margin: 1rem 0; // This adds space between children elements of content
      }
    }
  }
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: var(--nav-color);
  color: var(--nav-text);
  font-size: 1.2rem;
  font-weight: bold;
  border-top: 1px solid var(--nav-color);
  border-bottom: 1px solid var(--nav-color);

  & .newsletter {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
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
    gap: 1.5rem;
  }
`;

const SocialCircle = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 100%;
  width: 47px;
  height: 47px;
  border: solid 2px white;
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
