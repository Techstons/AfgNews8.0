import React from "react";
import styled from "@emotion/styled";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import { useSelector } from "react-redux";
import type { RootState } from "../hooks/store";
import { useTranslation } from "next-i18next";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale || "en", ["common"])),
    },
  };
}

const SubmitAStory = () => {
  const isDarkMode = useSelector((state: RootState) => state.search.isDarkMode);
  const { t } = useTranslation();

  return (
    <SubmitAStoryMainContainer className="story-main">
      <Head>
        <title>Submit A Story</title>
      </Head>
      <Header className="story-header">
        <div className="contents-container">
          <div>
            <h1 className="submit-a-story-header">
              {t("common:how_to_share")}
            </h1>
            <p className="submit-a-story-header-p">
              {t("common:is_there_a_story")}
            </p>
          </div>
        </div>
      </Header>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "2rem  0 0 0",
        }}
      >
        <SmallCardContainer className="story-card-container">
          <Grid container>
            <Grid item xs={12}>
              <SmallCard
                className="smallcard-story"
                style={{ backgroundColor: isDarkMode ? "gray" : "#ffffff" }}
              >
                <h1>{t("common:email")}:</h1>
                <div>
                  <p>
                    {t("common:send_your_tip")}{" "}
                    <Link href="/ContactUs" className="submit-a-story">
                      {t("common:here")}
                    </Link>{" "}
                    {t("common:in_the_dropdown")}
                  </p>
                </div>
                <div>
                  <h2>{t("common:imp")}:</h2>
                  <p>{t("common:never_use")}</p>
                </div>
              </SmallCard>
            </Grid>
          </Grid>
        </SmallCardContainer>
      </div>
      <h1 className="in-between-text">{t("common:we_offer")}:</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <LongCardContainer>
          <Grid container>
            <Grid item xs={12} md={4} className="center-grid">
              <LongCard
                className="story-longcard-container"
                style={{
                  backgroundColor: isDarkMode ? "gray" : "#ffffff",
                }}
              >
                <h1>{t("common:whatsapp")}:</h1>
                <div className="card-info-container">
                  <p>{t("common:whatsapp_desc")}</p>
                </div>
                <div>
                  <h2>{t("common:whatsapp_num")}</h2>
                </div>
                <button>{t("common:download_whatsapp")}</button>
              </LongCard>
            </Grid>
            <Grid item xs={12} md={4} className="center-grid">
              <LongCard
                className="story-longcard-container"
                style={{
                  backgroundColor: isDarkMode ? "gray" : "#ffffff",
                }}
              >
                <h1>{t("common:signal")}</h1>
                <div className="card-info-container">
                  <p>{t("common:signal_desc")}</p>
                </div>
                <div>
                  <h2>{t("common:signal_num")}</h2>
                </div>
                <button>{t("common:download_signal")}</button>
              </LongCard>
            </Grid>
            <Grid item xs={11} md={4} className="center-grid">
              <LongCard
                className="story-longcard-container"
                style={{
                  backgroundColor: isDarkMode ? "gray" : "#ffffff",
                }}
              >
                <h1>{t("common:viber")}</h1>
                <div className="card-info-container">
                  <p>{t("common:viber_desc")}</p>
                </div>
                <div>
                  <h2>{t("common:viber_num")}</h2>
                </div>
                <button>{t("common:download_viber")}</button>
              </LongCard>
            </Grid>
          </Grid>
        </LongCardContainer>
      </div>
    </SubmitAStoryMainContainer>
  );
};

export default SubmitAStory;

const ThingsToConsider = styled.div`
  padding: 1.5rem 1rem 1.5rem 1rem;
  // display: flex;
  // flex-direction: column;

  & .submit-a-story {
    color: blue;
    text-decoration: underline;
  }

  & div {
    margin: 2rem 0 1rem 0;
  }

  & h1 {
    font-size: 18px;
  }

  & h2 {
    font-size: 14px;
  }
`;

const ThingsToConsiderContainer = styled.div`
  // background-color: #e8e8e8;
  display: flex;
  justify-content: center;
`;

const LargeCard = styled.div`
  background-color: #ffffff;
  padding: 1.5rem 1rem 1.5rem 1rem;
  // display: flex;
  // flex-direction: column;

  & a {
    color: blue;
    text-decoration: underline;
  }

  & div {
    margin: 3rem 0 0 0;
  }

  & h1 {
    font-size: 18px;
  }

  & h2 {
    font-size: 14px;
  }

  & p {
    font-size: 14px;
  }
`;

const LongCardContainer = styled.div`
  width: 75%;
`;

const LongCard = styled.div`
  height: 31rem;
  padding: 1.5rem 1rem 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 0 2rem 0;
  width: 90%;

  & button {
    border: solid 1px black;
    margin: 2rem 0 0 0;
    width: 11rem;
    height: 2.3rem;

    &:hover {
      color: white;
      background-color: #101d48;
    }
  }

  // & div {
  //   margin: 3rem 0 0 0;
  //   background-color: lightblue;
  // }
  .card-info-container {
    min-height: 15rem;
  }

  & h1 {
    font-size: 18px;
  }

  & h2 {
    font-size: 14px;
  }

  & p {
    font-size: 14px;
  }
`;

const SmallCardContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const SmallCard = styled.div`
  height: 17rem;
  padding: 1.5rem 1rem 0 1rem;

  & div {
    margin: 2rem 0 0 0;
  }

  & h1 {
    font-size: 18px;
  }

  & h2 {
    font-size: 14px;
  }

  & p {
    font-size: 14px;
  }

  & a {
    color: blue;
    text-decoration: underline;
  }
`;

const Header = styled.div`
  background-color: var(--primary-color);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  & h1 {
    margin: 0 0 1.5rem 0;
  }
`;

const SubmitAStoryMainContainer = styled.div`
  height: 100%;

  padding: 2.5rem 0 8rem 0;
  margin: 0;
  & .in-between-text {
    font-size: 18px;
    margin: 5rem 0 5rem 0;
    text-align: center;
  }
`;
