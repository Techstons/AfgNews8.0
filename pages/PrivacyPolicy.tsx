import React from "react";
import styled from "@emotion/styled";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useTranslation } from "next-i18next";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale || "en", ["common"])),
    },
  };
}

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  return (
    <PrivacyPolicyMainContainer>
      <Head>
        <title>Privacy Policy</title>
      </Head>
      <PageHeader>
        <h1>{t("common:privacy_policy")}</h1>
      </PageHeader>
      <ContentsContainer>
        <p>{t("common:privacy_outline")}</p>

        <p>{t("common:we_use_this")}</p>
        <p>{t("common:visitors_have")}</p>

        <p>{t("common:we_may")}</p>
        <p style={{ margin: "0" }}>{t("common:effective_date")}</p>
      </ContentsContainer>
    </PrivacyPolicyMainContainer>
  );
};

const ContentsContainer = styled.div`
  //   padding: 0 0 0 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PageHeader = styled.div`
  background-color: var(--primary-color);
  height: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 5rem 0;
  color: white;
  text-align: center;

  & h1 {
    font-size: 5rem;
    letter-spacing: 1px;
  }
`;

const PrivacyPolicyMainContainer = styled.div`
  height: 100%;
  padding: 2.5rem 0 10rem 0;
  & p {
    margin: 1rem 0 0 0;
    font-size: 1.1rem;
    line-height: 2rem;
    width: 66%;
  }
`;

export default PrivacyPolicy;
