import React from "react";
import styled from "@emotion/styled";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale || "en", ["common"])),
    },
  };
}

const MobileApp = () => {
  return (
    <MobileAppMainContainer>
      <Head>
        <title>Mobile App</title>
      </Head>
      <GetOurApp>
        <h1>Get our mobile App</h1>
      </GetOurApp>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ButtonsContainer className="mobile-app-buttons-container">
          <div className="per-button-container">
            <Button>
              <Image
                alt="playstore image"
                src="hero-image.fill.size_1200x1200.v1623363034-removebg-preview.png"
              />
            </Button>
            <h2 className="label-button">Google Play</h2>
          </div>
          <div className="per-button-container">
            <Button>
              <Image
                alt="appstore image"
                src="app-store-og-removebg-preview.png"
              />
            </Button>
            <h2 className="label-button">App Store</h2>
          </div>
        </ButtonsContainer>
      </div>
      <Divider />
    </MobileAppMainContainer>
  );
};

export default MobileApp;

const Divider = styled.div`
  margin: 15rem 0 0 0;
  border-top: 2px solid var(--primary-color);
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  & .label-flex {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  & .per-button-container {
    // border: 2px solid black;
    width: 15rem;
    height: 15rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
  }
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Button = styled.button`
  height: 10rem;
  width: 10rem;
  // border: solid 2px black;
  border-radius: 5px;

  &:hover {
    border: solid 2px var(--primary-color);
  }

  &:hover .label-button {
    color: yellow;
  }
`;

const GetOurApp = styled.div`
  background-color: var(--primary-color);
  height: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 5rem 0;

  & h1 {
    color: white;
    font-size: 3rem;
    letter-spacing: 1px;
  }
`;

const MobileAppMainContainer = styled.div`
  height: 120vh;

  & h2 {
    width: 10rem;
    font-size: 1rem;
    text-align: center;
    margin-top: 1rem;
  }
`;
