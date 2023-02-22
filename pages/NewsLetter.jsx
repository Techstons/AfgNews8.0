import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { FormEvent } from "react";
import { Button } from "@components/ui";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale || "en", ["common"])),
    },
  };
}

const NewsLetter = () => {
  const { t } = useTranslation();

  return (
    <NewsletterMainContainer>
      <Head>
        <title>News Letter</title>
      </Head>
      <UpperContents>
        <h1 className="newsLetter-h1">{t("common:newsletter")}</h1>
      </UpperContents>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Subscribe>{t("common:sub_to_newsletter")}</Subscribe>
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
            // onSubmit={subscribeToNewsLetter}
            className="input-box"
            aria-label="Subscribe your email to newsletter"
          >
            <input
              placeholder={t("common:enter_email")}
              className="newsLetter-input"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                backgroundColor: "white",
                border: "black solid 1px",
                height: "3rem",
                marginRight: "1rem",
                marginLeft: "1rem",
                padding: "0 1rem 0 1rem",
              }}
            />
            <Button className="btn" type="submit">
              {t("common:ok")}
            </Button>
          </form>
        </div>
      </MainContents>
    </NewsletterMainContainer>
  );
};

export default NewsLetter;

const NewsletterMainContainer = styled.div`
  padding: 2.5rem 0 0 0;
`;

const UpperContents = styled.div`
  background-color: var(--primary-color);
  height: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0 0 2rem;
  & h1 {
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
