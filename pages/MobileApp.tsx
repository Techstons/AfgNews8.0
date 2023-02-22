import React from "react";
import styled from "@emotion/styled";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale || "en", ["common"])),
    },
  };
}

const MobileApp = () => {
  const { t } = useTranslation();
  return (
    <MobileAppMainContainer>
      <Head>
        <title>Mobile App</title>
      </Head>
      <GetOurApp>
        <h1>{t("common:get_our_app")}</h1>
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
                src="https://res.cloudinary.com/dbpar1qf3/image/upload/v1676542273/hero-image.fill.size_1200x1200.v1623363034-removebg-preview_y0ao5k.png"
              />
            </Button>
            <h2 className="label-button">{t("common:gplay")}</h2>
          </div>
          <div className="per-button-container">
            <Button>
              <Image
                alt="appstore image"
                src="app-store-complete-transparent.png"
              />
            </Button>
            <h2 className="label-button">{t("common:appstore")}</h2>
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
  height: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 5rem 0;

  & h1 {
    color: white;
    font-size: 4rem;
    letter-spacing: 1px;
  }
`;

const MobileAppMainContainer = styled.div`
  height: 100%;
  padding: 2.5rem 0 0 0;

  & h2 {
    width: 10rem;
    font-size: 1rem;
    text-align: center;
    margin-top: 1rem;
  }
`;
