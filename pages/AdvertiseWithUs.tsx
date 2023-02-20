import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useSelector } from "react-redux";
import type { RootState } from "../hooks/store";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale || "en", ["common"])),
    },
  };
}

const AdvertiseWithUs = () => {
  const isDarkMode = useSelector((state: RootState) => state.search.isDarkMode);

  const InfoList = [
    "10000+ Unique Visitors*",
    "500 Monthly App Downloads ",
    "10000+ YouTube Subscribers",
    "10000+ Newsletter Subscribers",
    "100+ Twitter Followers",
    "100+ Facebook Followers",
  ];

  const [data, setData] = useState<any>(null);
  const [countries, setCountries] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const json = await res.json();
      setData(json);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data !== null) {
      const perCountries = data.map((countries: any) => countries.name.common);
      console.log(perCountries);
      setCountries(perCountries);
    }
  }, [data]);

  return (
    <MainContainer className="adWithUs-main-container">
      <Head>
        <title>Advertise With Us</title>
      </Head>
      <HeaderContainer>
        {/* <HeaderTextContainer>
          <p>Get in touch</p>
          <h1>
            Our dedicated client partners are always on hand, ready to help you
            harness the power of The Washington Post.
          </h1>
        </HeaderTextContainer> */}
        <GetInTouchDesign className="get-in-touch">
          Advertise With Us
        </GetInTouchDesign>
      </HeaderContainer>
      <FormContainer>
        <Advertise className="advertise">
          {/* <h1>Advertise With Us</h1> */}
          <h2>
            The AfgNews media platform is the leading trusted source for content
            from Afghanistan and around the world, attracting millions of users.
            Keeping you updated with the latest news and events. With insights,
            podcasts, youtube, live streaming, research reports, live events,
            data & analytics and much more, that’s why millions of users trust{" "}
            AfgNews as the source for the latest news and why it matters to
            investors, companies and governments.
          </h2>
        </Advertise>
        <div style={{ padding: "0 2rem 0 2rem" }}>
          {InfoList.map((info) => (
            <InfoAboutUs key={info}>
              <div></div>
              <p key={info}>{info}</p>
            </InfoAboutUs>
          ))}
          <PerInfoContainer
            className="perInfo-container"
            style={{ margin: "8rem 0 0 0" }}
          >
            <PerInfo className="per-info-ad">
              <div className="adWithUs-perInfo-div">
                <p>01</p>
                <h1 className="adWithUs-perInfo-h1">Tell us about yourself</h1>
              </div>
            </PerInfo>
            <Form>
              <Input placeholder="First name" className="adWithUs-input" />
              <Input placeholder="Last name" className="adWithUs-input" />
              <Input placeholder="Email address" className="adWithUs-input" />
            </Form>
          </PerInfoContainer>
          <PerInfoContainer className="perInfo-container">
            <PerInfo className="per-info-ad">
              <div className="adWithUs-perInfo-div">
                <p>02</p>
                <h1 className="adWithUs-perInfo-h1">
                  Tell us about your business
                </h1>
              </div>
            </PerInfo>
            <Form>
              <Input
                placeholder="Name of business"
                className="adWithUs-input"
              />
              <Input
                placeholder="Business industry"
                className="adWithUs-input"
              />
              <Location name="Location" className="adWithUs-select">
                {countries?.map((country: any) => (
                  <option key={country}>{country}</option>
                ))}
              </Location>
            </Form>
          </PerInfoContainer>
          <PerInfoContainer className="perInfo-container">
            <PerInfo className="per-info-ad">
              <div className="adWithUs-perInfo-div">
                <p>03</p>
                <h1 className="adWithUs-perInfo-h1">
                  Anything else we should know?
                </h1>
              </div>
            </PerInfo>
            <Form>
              <Message
                placeholder="Optional message with more details"
                className="adWithUs-message"
              />
            </Form>
          </PerInfoContainer>
        </div>
        <ButtonsContainer className="adWithUs-buttons-main">
          <div className="adWithUs-buttons-container">
            <SendButton
              style={{ backgroundColor: isDarkMode ? "gray" : "#e9e9e9" }}
            >
              Send Message
            </SendButton>
            <CancelButton>Cancel</CancelButton>
          </div>
        </ButtonsContainer>
      </FormContainer>
    </MainContainer>
  );
};

const Location = styled.select`
  border: 1px solid black;
  height: 5rem;
  margin: 3rem 0 0 0;
  color: gray;

  padding: 0 0 0 1rem;
  letter-spacing: 2px;
  font-weight: 600;

  & option {
    font-size: 1rem;
    padding: 10px;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  & div {
    display: flex;
    justify-content: space-around;
  }
`;

const SendButton = styled.button`
  height: 3rem;
  width: 8rem;
`;

const CancelButton = styled.button``;

const Message = styled.textarea`
  height: 10rem;
  font-size: 1rem;
  margin-top: 5rem;
  padding: 1rem;

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
  margin: 3rem 0 0 0;
  height: 3rem;

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
  height: 100%;
  justify-content: space-between;
  margin: 3rem 0 0 0;
`;

const PerInfo = styled.div`
  border-top: 1px solid var(--primary-color);

  & h1 {
    margin: 1rem 0 0 0;
  }

  & div {
    margin: 3rem 0 0 0;
  }
`;

const Advertise = styled.div`
  padding: 2rem 2rem 0 2rem;

  & h1 {
    font-size: 3rem;
    margin: 0 0 2rem 0;
    color: var(--primary-color);
    letter-spacing: 2px;
  }

  & h2 {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }

  & a {
    color: #00d964;
  }
`;

const InfoAboutUs = styled.div`
  margin: 0 0 3rem 0;
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
  // background-color: white;
  height: 250vh;
  width: 95%;
`;

const GetInTouchDesign = styled.h2`
  // -webkit-text-stroke: 2px gray;
  // color: transparent;
  color: white !important;

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
  // background-color: #cfebec;
  background-color: var(--primary-color);
  height: 50vh;
  width: 100%;
  color: var(--primary-color);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 0 4rem 0;
`;

const MainContainer = styled.div`
  height: 370vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 2.5rem 0 0 0;
`;

export default AdvertiseWithUs;
