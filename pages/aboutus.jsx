import React from "react";
import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import styled from "@emotion/styled";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

const aboutus = () => {
  return (
    <AboutUsMainContainer>
      <AboutUsSectionContainer>
        <h1>About us</h1>
      </AboutUsSectionContainer>
      <MissionContainer>
        <MissionHeaderContainer>
          <h2>Mission</h2>
          <p>
            Our mission at AfgNews is to inform and empower our audience by
            delivering accurate, impartial and diverse news and perspectives,
            while upholding the highest ethical standards and journalistic
            integrity.
          </p>
        </MissionHeaderContainer>
        <Divider />
        <MissionInformation>
          <div className="per-info">
            <img src="https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/Z3IDS7JHKJFTRI3IZ5PE7H3S6M.png" />
            <p>
              We strive to be a trusted source of news for our community,
              presenting diverse viewpoints and inspiring informed and engaged
              discussion.{" "}
            </p>
          </div>
          <div className="per-info">
            <p>
              A modern news agency that aims to provide the latest and
              simplified news from Afghanistan and around the world on a daily
              basis. Our special focus is on reaching the youth of Afghanistan,
              both domestically and abroad, by presenting information in a
              simple and easy-to-understand language.
            </p>
            <img src="https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/P7KYLA746VDC7FRZEUVIPZYSMA.png" />
          </div>
          <div className="per-info">
            <img src="https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/N4PSKXDSIVASLJXMCIVKLV3CNE.png" />
            <p>
              Through our commitment to journalistic excellence and ethical
              practices, we aim to serve as a watchdog of power and contribute
              to a better-informed society.
            </p>
          </div>
        </MissionInformation>
        <Divider />
      </MissionContainer>
      <ByNumbersContainer>
        <h1>By the numbers</h1>
        <div className="social-followers">
          <div>
            <FollowersCard>
              <Numbers>
                <h2>2</h2>
                <p></p>
              </Numbers>
              <Platform>
                Followers{" "}
                <a href="https://twitter.com/AFGNEWS_" target="_blank">
                  @AFGNEWS_
                </a>{" "}
                Twitter
              </Platform>
            </FollowersCard>
            <FollowersCard>
              <Numbers>
                <h2>0</h2>
                <p></p>
              </Numbers>
              <Platform>Consensus Event Attendees</Platform>
            </FollowersCard>
          </div>
          <div>
            <FollowersCard>
              <Numbers>
                <h2>500</h2>
                <p></p>
              </Numbers>
              <Platform>AFGNEWS Average Monthly Viewers</Platform>
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
                >
                  Youtube
                </a>{" "}
                page followers
              </Platform>
            </FollowersCard>
          </div>
        </div>
      </ByNumbersContainer>
      <Divider />
      <TimeCapsuleMainContainer>
        <h1>Our story in a time capsule</h1>
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
            <h2>May</h2>
            <h1>CoinDesk was born</h1>
            <p>
              As a global financial media website in the nascent years of
              cryptocurrency and blockchain, just a few short years after
              bitcoin’s 2009 arrival in the world
            </p>
          </YearInformation>
          <YearInformation>
            <h2>July</h2>
            <h1>CoinDesk launches original price reference rate for ฿</h1>
            <p>Sourced and quoted by major media world-wide</p>
          </YearInformation>
        </YearInformationContainer>
      </TimeCapsuleMainContainer>
      <WeAreContainer>
        <div className="upper-content-container">
          <h1>We are a global organization serving a global audience</h1>
          <button>work with us</button>
        </div>
        <img src="earth-globe-icon-on-transparent-background-illustration-free-vector-removebg-preview.png" />
      </WeAreContainer>
      <OurTeamContainer>
        <h1>Our team</h1>
        <p>
          The team of subject matter experts at CoinDesk delivers reliable and
          relevant content to both individuals and businesses, driven by the
          mission to inform global communities about the ever-evolving concept
          of money in the new digital era.
        </p>
        <ImageContainer>
          <Images src="https://img.freepik.com/premium-photo/mosaic-closeup-photos-smiling-young-people-different-nationalities_116547-19927.jpg?w=2000" />
        </ImageContainer>
      </OurTeamContainer>
    </AboutUsMainContainer>
  );
};

const MissionInformation = styled.div`
  width: 100%;
  height: 120vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  align-content: center;
  & .per-info {
    display: flex;
    justify-content: space-between;
    width: 65%;
    align-items: center;
  }

  & p {
    width: 60%;
    font-size: 18px;
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
  height: 210vh;
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
  }
`;

const WeAreContainer = styled.div`
  background-color: rgb(38, 38, 38);
  height: 110vh;
  display: flex;
  justify-content: space-around;
  align-items: center;

  & h1 {
    color: white;
    font-size: 4rem;
    line-height: 5rem;
  }
  & img {
    width: 40%;
    object-fit: cover;
  }
  & button {
    background-color: rgb(248, 191, 30);
    width: 8rem;
    height: 2rem;
    border-radius: 5px;
  }
  & .upper-content-container {
    margin: 0 0 0 2rem;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`;

const YearInformationContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 4rem;
`;
const YearInformation = styled.div`
  width: 30rem;
  height: 10rem;
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
`;

const AboutUsSectionContainer = styled.div`
  background-color: var(--primary-color);
  height: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;

  & h1 {
    font-size: 5rem;
    color: white;
    letter-spacing: 4px;
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
    color: rgb(38, 38, 38);
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
    width: 50%;
    display: flex;
    justify-content: space-between;
  }

  & h1 {
    width: 50%;
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

export default aboutus;
