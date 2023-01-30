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

const AdvertiseWithUs = () => {
  const InfoList = [
    "5.7 million+ Unique Visitors*",
    "1.6 million monthly downloads for the CoinDesk Podcast Network",
    "CoinDesk TV - live daily and weekly streaming shows",
    "334,000+ Newsletter subscribers",
    "3 million+ Twitter followers",
    "CoinDesk’s Consensus is the leading annual event in crypto",
  ];

  return (
    <MainContainer>
      <HeaderContainer>
        <HeaderTextContainer>
          <p>Get in touch</p>
          <h1>
            Our dedicated client partners are always on hand, ready to help you
            harness the power of The Washington Post.
          </h1>
        </HeaderTextContainer>
        <GetInTouchDesign>GET IN TOUCH</GetInTouchDesign>
      </HeaderContainer>
      <FormContainer>
        <Advertise>
          <h1>Advertise</h1>
          <h2>
            The CoinDesk media platform is the leading trusted source for crypto
            and blockchain content, attracting <br></br>
            <a>millions of users.</a>
            <br></br>
            Absolutely no one brings the news and events shaping the digital
            finance landscape like CoinDesk. With news and insights, podcasts,
            live streaming TV shows, research reports, live events, and a
            toolkit of indices, data and analytics, that’s why millions of users
            trust <a>
              CoinDesk as the source for an emerging crypto economy
            </a>{" "}
            and why it matters to investors, companies and governments.
          </h2>
        </Advertise>
        <div style={{ padding: "3rem 2rem 0 2rem" }}>
          {InfoList.map((info) => (
            <InfoAboutUs>
              <div></div>
              <p key={info}>{info}</p>
            </InfoAboutUs>
          ))}
          <PerInfoContainer>
            <PerInfo>
              <div>
                <p>01</p>
                <h1>Tell us about yourself</h1>
              </div>
            </PerInfo>
            <Form>
              <Input placeholder="First name" />
              <Input placeholder="Last name" />
              <Input placeholder="Email address" />
            </Form>
          </PerInfoContainer>
          <PerInfoContainer>
            <PerInfo>
              <div>
                <p>02</p>
                <h1>Tell us about your business</h1>
              </div>
            </PerInfo>
            <Form>
              <Input placeholder="Name of business" />
              <Input placeholder="Business industry" />
              <Input
                placeholder="Location"
                style={{ border: "1px solid black", height: "10rem" }}
              />
            </Form>
          </PerInfoContainer>
          <PerInfoContainer>
            <PerInfo>
              <div>
                <p>03</p>
                <h1>Anything else we should know?</h1>
              </div>
            </PerInfo>
            <Form>
              <Message placeholder="Optional message with more details" />
            </Form>
          </PerInfoContainer>
        </div>
      </FormContainer>
    </MainContainer>
  );
};

const Message = styled.textarea`
  width: 75%;
  height: 10rem;
  font-size: 1rem;
  margin-top: 5rem;

  &::-webkit-input-placeholder {
    font-size: 1rem;
    color: gray;
  }
  &::-moz-placeholder {
    color: gray;
    font-size: 1rem;
  }
  &:-ms-input-placeholder {
    font-size: 1rem;
    color: gray;
  }
`;

const Input = styled.input`
  border-bottom: 1px solid black;
  width: 70%;
  margin: 3rem 0 0 0;
  height: 3rem;
  font-size: 2.5rem;
  padding: 0 1rem 0 1rem;

  &:focus {
    border: 2px solid black;
    border-radius: 5px;
  }

  &::-webkit-input-placeholder {
    font-weight: bold;
    color: gray;
  }
  &:-moz-placeholder {
    font-weight: bold;
    color: gray;
  }
  &::-moz-placeholder {
    font-weight: bold;
    color: gray;
  }
  &:-ms-input-placeholder {
    font-weight: bold;
    color: gray;
  }
`;

const Form = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PerInfoContainer = styled.div`
  height: 20rem;
  display: flex;
  justify-content: space-between;
  margin: 3rem 0 0 0;
`;

const PerInfo = styled.div`
  border-top: 1px solid var(--primary-color);
  width: 25%;

  & h1 {
    font-size: 3rem;
    margin: 1rem 0 0 0;
  }

  & div {
    margin: 3rem 0 0 0;
  }
`;

const Advertise = styled.div`
  padding: 2rem 2rem 2rem 2rem;
  background-color: #262626;
  height: 60vh;
  color: #ffffff;

  & h1 {
    font-size: 3rem;
    margin: 0 0 2rem 0;
  }

  & h2 {
    font-size: 1.4rem;
    line-height: 2.5rem;
  }

  & a {
    color: #00d964;
  }
`;

const InfoAboutUs = styled.div`
  margin: 3rem 0 3rem 0;
  display: flex;
  align-items: center;
  & div {
    background-color: green;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 1rem;
  }
`;

const FormContainer = styled.div`
  background-color: white;
  height: 250vh;
  width: 95%;
  position: absolute;
  top: 34rem;
`;

const GetInTouchDesign = styled.h2`
  -webkit-text-stroke: 2px gray;
  color: transparent;
  font-size: 11.6rem;
  width: 100%;
  text-align: center;
  font-weight: bold;
`;

const HeaderTextContainer = styled.div`
  width: 67%;
  text-align: center;
  height: 50%;
  margin: 0 0 2rem 0;
  & p {
    margin-bottom: 2rem;
  }

  & h1 {
    font-size: 3rem;
  }
`;

const HeaderContainer = styled.div`
  background-color: #cfebec;
  height: 100vh;
  color: var(--primary-color);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const MainContainer = styled.div`
  margin: 0 0 130rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export default AdvertiseWithUs;
