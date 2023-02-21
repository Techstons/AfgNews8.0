import React from "react";
import styled from "@emotion/styled";
import Head from "next/head";
import Grid from "@mui/material/Grid";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
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

const AboutUs = () => {
  const isDarkMode = useSelector((state: RootState) => state.search.isDarkMode);
  const { t } = useTranslation();

  return (
    <AboutUsMainContainer>
      <Head>
        <title>About Us</title>
      </Head>
      <Grid container>
        <Grid item xs={12}>
          <AboutUsSectionContainer>
            <h1 className="about-us-header">{t("common:about")}</h1>
          </AboutUsSectionContainer>
        </Grid>
      </Grid>
      <MissionContainer style={isDarkMode ? { color: "white" } : {}}>
        <Grid container>
          <Grid item xs={12} className="center-grid">
            <MissionHeaderContainer>
              <h2>{t("common:mission")}</h2>
              <p>{t("common:our_mission")}</p>
            </MissionHeaderContainer>
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
        </Grid>
        <MissionInformation>
          <div className="per-info">
            <Grid container>
              <Grid item xs={12} md={6}>
                <img
                  alt="image"
                  className="about-us-image"
                  src="https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/Z3IDS7JHKJFTRI3IZ5PE7H3S6M.png"
                />
              </Grid>
              <Grid item xs={12} md={6} className="align-grid">
                <p>{t("common:we_strive")}</p>
              </Grid>
            </Grid>
          </div>
          <div className="per-info">
            <Grid
              container
              style={{ display: "flex", flexDirection: "row-reverse" }}
            >
              <Grid
                item
                xs={12}
                md={5}
                style={{ display: "flex", justifyContent: "flex-end" }}
              >
                <img
                  alt="image"
                  className="about-us-image"
                  src="https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/P7KYLA746VDC7FRZEUVIPZYSMA.png"
                />
              </Grid>
              <Grid item xs={12} md={7} className="align-grid">
                <p>{t("common:modern_news")}</p>
              </Grid>
            </Grid>
          </div>
          <div className="per-info">
            <Grid container>
              <Grid item xs={12} md={5}>
                <img
                  alt="image"
                  className="about-us-image"
                  src="https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/N4PSKXDSIVASLJXMCIVKLV3CNE.png"
                />
              </Grid>
              <Grid item xs={12} lg={7} className="align-grid">
                <p>{t("common:our_commitment")}</p>
              </Grid>
            </Grid>
          </div>
        </MissionInformation>
        <Divider />
      </MissionContainer>
      <ByNumbersContainer>
        <Grid container>
          <Grid
            item
            xs={12}
            md={6}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <h1
              className="about-us-numbers"
              style={isDarkMode ? { color: "white" } : {}}
            >
              {t("common:the_numbers")}
            </h1>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              className="social-followers"
              style={isDarkMode ? { color: "white" } : {}}
            >
              <div>
                <FollowersCard>
                  <Numbers>
                    <h2>2</h2>
                    <p></p>
                  </Numbers>
                  <Platform>
                    {t("common:followers")}
                    <a
                      href="https://twitter.com/AFGNEWS_"
                      target="_blank"
                      rel="noreferrer"
                    >
                      @AFGNEWS_
                    </a>{" "}
                    {t("common:twitter")}
                  </Platform>
                </FollowersCard>
                <FollowersCard>
                  <Numbers>
                    <h2>0</h2>
                    <p></p>
                  </Numbers>
                  <Platform>{t("common:consensus")}</Platform>
                </FollowersCard>
              </div>
              <div>
                <FollowersCard>
                  <Numbers>
                    <h2>500</h2>
                    <p></p>
                  </Numbers>
                  <Platform>{t("common:monthly_views")}</Platform>
                </FollowersCard>
                <FollowersCard>
                  <Numbers>
                    <h2>2</h2>
                    <p></p>
                  </Numbers>
                  <Platform>
                    <a
                      href="https://www.youtube.com/channel/UC1JjrqGsFWlcVpcImM98Xjw"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t("common:yt")}
                    </a>{" "}
                    {t("common:page_followers")}
                  </Platform>
                </FollowersCard>
              </div>
            </div>
          </Grid>
        </Grid>
      </ByNumbersContainer>
      <Divider />
      <TimeCapsuleMainContainer style={isDarkMode ? { color: "white" } : {}}>
        <h1>{t("common:our_story")}</h1>
        <div className="navigation-container">
          <CapsuleNavigation>
            <div className="line"></div>
            <div>
              <button></button>
              <div className="year">2022</div>
            </div>
          </CapsuleNavigation>
        </div>
        <YearInformationContainer>
          <YearInformation>
            <h2>{t("common:april")}</h2>
            <h1>{t("common:was_born")}</h1>
            <p>{t("common:a_modern")}</p>
          </YearInformation>
          {/* <YearInformation>
            <h2>July</h2>
            <h1>CoinDesk launches original price reference rate for ฿</h1>
            <p>Sourced and quoted by major media world-wide</p>
          </YearInformation> */}
        </YearInformationContainer>
      </TimeCapsuleMainContainer>
      <WeAreContainer className="we-are-container">
        <div className="upper-content-container">
          <h1 className="about-us-we-are">{t("common:global_org")}</h1>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
            className="work-for-us-buttons-container"
          >
            <Link href="/WorkForUs">
              <button>{t("common:work_for_us")}</button>
            </Link>
            <Link href="/AdvertiseWithUs">
              <button>{t("common:ad_with_us")}</button>
            </Link>
          </div>
        </div>
        <img
          alt="globe image"
          className="about-us-globe"
          src="earth-globe-icon-on-transparent-background-illustration-free-vector-removebg-preview.png"
        />
      </WeAreContainer>
      <OurTeamContainer style={isDarkMode ? { color: "white" } : {}}>
        <h1>{t("common:our_team")}</h1>
        <p>{t("common:welcome")}</p>
        <ImageContainer>
          <Images
            alt="our team image"
            src="https://img.freepik.com/premium-photo/mosaic-closeup-photos-smiling-young-people-different-nationalities_116547-19927.jpg?w=2000"
          />
        </ImageContainer>
      </OurTeamContainer>
    </AboutUsMainContainer>
  );
};

const MissionInformation = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  align-content: center;

  & .per-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & p {
    width: 100%;
    font-size: 18px;
    margin: 1rem 0 0 0;
  }
`;

const Images = styled.img`
  width: 100%;
  object-fit: cover;
`;

const ImageContainer = styled.div``;

const OurTeamContainer = styled.div`
  padding: 0 4rem 0 4rem;
  margin-top: 6rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & h1 {
    font-size: 3rem;
    font-family: var(--formal-font);
  }
  & p {
    font-size: 18px;
    line-height: 30px;
    margin: 2rem 0 2rem 0;
  }
`;

const WeAreContainer = styled.div`
  background-color: rgb(38, 38, 38);
  height: 110vh;

  & h1 {
    color: white;
  }
  & img {
    // width: 40%;
    object-fit: cover;
  }
  & button {
    background-color: rgb(248, 191, 30);
    width: 9rem;
    height: 2rem;
    border-radius: 5px;
  }
  & .upper-content-container {
    padding: 0 2rem 0 2rem;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`;

const YearInformationContainer = styled.div`
  display: flex;
  padding: 0 2.5rem 0 2.5rem;
  margin-top: 4rem;
`;
const YearInformation = styled.div`
  width: 30rem;
  height: 7rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & h1 {
    margin: 0;
    color: green;
    font-size: 2rem;
  }
`;

const CapsuleNavigation = styled.div`
  margin: 6rem 0 0 0;
  width: 90%;
  position: relative;
  background-color: light-blue;
  & .line {
    border-bottom: 2px solid gray;
    margin-top: 18px;
  }
  & button {
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 1;
    background-color: green;
    height: 1.5rem;
    width: 1.5rem;
    border-radius: 50%;
    display: flex;
  }

  & .year {
    margin: 2rem 0 0 3px;
    color: green;
    font-weight: 700;
    font-size: 1rem;
  }
`;

const TimeCapsuleMainContainer = styled.div`
  height: 80vh;
  margin: 4rem 0 0 0;
  & h1 {
    font-family: var(--formal-font);
    font-size: 3rem;
    margin-left: 2rem;
  }
  & .navigation-container {
    display: flex;
    justify-content: center;
  }
`;

const AboutUsMainContainer = styled.div`
  color: rgb(38, 38, 38);
  padding: 2.5rem 0 8rem 0;
`;

const AboutUsSectionContainer = styled.div`
  background-color: var(--primary-color);
  height: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;

  & h1 {
    letter-spacing: 4px;
    color: white;
  }
`;

const MissionContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 4rem 0 0 0;
  flex-direction: column;
  align-items: center;
`;

const MissionHeaderContainer = styled.div`
  width: 70%;
  & p {
    margin-top: 2rem;
    font-size: 22px;
    line-height: 30px;
  }
  & h2 {
    // color: rgb(38, 38, 38);
    font-weight: 700;
    font-size: 36px;
    font-family: var(--formal-font);
    letter-spacing: 2px;
  }
`;

const Divider = styled.div`
  border-bottom: solid 1px black;
  width: 100%;
  border-color: gray;
  margin: 3rem 0 3rem 0;
`;

const ByNumbersContainer = styled.div`
  height: 80vh;
  display: flex;

  & .social-followers {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }

  & h1 {
    margin-left: 2rem;
    font-family: var(--formal-font);
    font-size: 3rem;
    letter-spacing: 5px;
    font-weight: 700;
  }
`;

const FollowersCard = styled.div`
  width: 100%;
  display: flex;
  height: 50%;
  flex-direction: column;
`;

const Numbers = styled.div`
  font-size: 2.6rem;
  display: flex;
`;
const Platform = styled.div`
  font-weight: 700;
  width: 80%;

  & a {
    &:hover {
      color: var(--primary-color);
    }
  }
`;

export default AboutUs;
