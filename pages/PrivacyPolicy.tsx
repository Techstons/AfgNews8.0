import React from "react";
import styled from "@emotion/styled";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale || "en", ["common"])),
    },
  };
}

const PrivacyPolicy = () => {
  return (
    <PrivacyPolicyMainContainer>
      <Head>
        <title>Privacy Policy</title>
      </Head>
      <PageHeader>
        <h1>Privacy Policy</h1>
      </PageHeader>
      <ContentsContainer>
        <p>
          This Privacy Policy outlines how we collect and use personal
          information from visitors to our news website. Personal information
          may include name, email address, IP address, and location data.
        </p>

        <p>
          We use this information to provide a better experience on our website,
          send newsletters, and promote our services and products. We may share
          the information with third-party service providers, but they must keep
          it confidential. We take appropriate measures to secure personal
          information, but cannot guarantee absolute security. We will retain
          the information for as long as necessary and delete it when no longer
          needed.
        </p>
        <p>
          Visitors have the right to access, rectify, erase, object to
          processing, and request data portability. If you have questions,
          please contact us at Here.
        </p>

        <p>
          We may update this Privacy Policy in the future and will notify you of
          any changes. Effective Date: 09 February 2023.
        </p>
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
  height: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 5rem 0;
  color: white;
  text-align: center;

  & h1 {
    font-size: 3rem;
    letter-spacing: 1px;
  }
`;

const PrivacyPolicyMainContainer = styled.div`
  height: 100%;
  margin: 0 0 5rem 0;
  & p {
    margin: 2rem 0 0 0;
    font-size: 1rem;
    line-height: 2rem;
    width: 70%;
  }
`;

export default PrivacyPolicy;
