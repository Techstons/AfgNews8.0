import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import styled from "@emotion/styled";
import Head from "next/head";
import { useTranslation } from "next-i18next";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale || "en", ["common"])),
    },
  };
}

const Success = () => {
  const { t } = useTranslation();
  return (
    <MainContainer>
      <Head>
        <title>Success</title>
      </Head>
      <div>
        <SuccessText>{t("common:thanks")}</SuccessText>
        <p>{t("common:your_message")}</p>
      </div>
    </MainContainer>
  );
};

const SuccessText = styled.h1`
  color: white;
  font-size: 4rem;
  margin: 0 0 1rem 0;
`;

const MainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  & p {
    color: white;
    letter-spacing: 1px;
    font-size: 1.2rem;
  }

  & div {
    background-color: #22bb33;
    width: 70%;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export default Success;
