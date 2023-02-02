import React, { useState } from "react";
import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import styled from "@emotion/styled";
import { useTranslation } from "next-i18next";
import { FormEvent } from "react";
import { Button } from "@components/ui";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

const NewsLetter = () => {
  const [email, setEmail] = useState("");

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

    alert("Success! You have been subscribed ssto our newsletter.");
    setEmail("");
  };
  return (
    <NewsletterMainContainer>
      <UpperContents>
        <h1>Newsletter</h1>
      </UpperContents>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Subscribe>
          Subscribe to AFGNEWS Newsletter — The best way to stay informed about
          the latest news from Afghanistan and around the world.
        </Subscribe>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ margin: "2.5rem 0 2.5rem 0", width: "90%" }}>
          <Divider />
          <Divider />
        </div>
      </div>
      <MainContents>
        <div>
          <h2 className="logo">AFGNEWS</h2>
        </div>
        <div style={{ marginTop: "2rem" }}>
          <form
            onSubmit={subscribeToNewsLetter}
            className="input-box"
            aria-label="Subscribe your email to newsletter"
          >
            <input
              placeholder={"Enter your Email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                backgroundColor: "white",
                border: "black solid 1px",
                height: "3rem",
                width: "20rem",
                marginRight: "1rem",
                padding: "0 0 0 1rem",
              }}
            />
            <Button className="btn" type="submit">
              OK
            </Button>
          </form>
        </div>
      </MainContents>
    </NewsletterMainContainer>
  );
};

export default NewsLetter;

const NewsletterMainContainer = styled.div``;

const UpperContents = styled.div`
  background-color: var(--primary-color);
  height: 20rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 0 2rem;
  & h1 {
    font-size: 5rem;
    color: white;
    letter-spacing: 4px;
  }
`;

const Subscribe = styled.div`
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: 0px;
  text-align: center;
  width: 90%;
  margin: 2rem 0 0 0;
`;

const Divider = styled.div`
  border-top: 1px solid black;
  margin-bottom: 1px;
`;

const MainContents = styled.div`
  display: flex;
  height: 60vh;
  justify-content: center;
  align-contents: center;
  flex-direction: column;
  align-items: center;
  & .logo {
    font-size: 3.8rem;
    font-weight: var(--font-extrabold);

    margin: 0;
    @media only screen and (max-width: 640px) {
      font-size: 3.5rem;
    }
  }

  & .description {
    color: var(--primary-color);
    font-size: 1.2rem;
    font-weight: bold;
    margin: 0;
  }
  .btn {
    width: 4.8rem;
    height: 3rem;
  }
`;
