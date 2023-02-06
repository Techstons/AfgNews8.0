import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import styled from "@emotion/styled";
import Head from "next/head";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale || "en", ["common"])),
    },
  };
}

const TermsAndContidions = () => {
  return (
    <TermsAndConditionsMainContainer>
      <Head>
        <title>Terms And Conditions</title>
      </Head>
      <Header>
        <h1>
          Terms and Conditions for <a> www.AfgNews.com </a>
        </h1>
      </Header>
      <ContentsContainer>
        <Content>
          <p className="numbers">1. Introduction</p>
          <p className="contents">
            This document outlines the terms and conditions (the "Terms") under
            which you may use <a> www.AfgNews.com </a> website (the "Site"). By
            using the Site, you agree to be bound by these Terms. If you do not
            agree with these Terms, you may not use the Site.
          </p>
        </Content>
        <Content>
          <p className="numbers">2. Use of Site Content</p>
          <p className="contents">
            The content on the Site, including but not limited to text,
            graphics, logos, images, audio, video, and software (collectively,
            "Content"), is protected by intellectual property laws and is the
            property of <a> www.AfgNews.com </a> or its licensors. You may not
            use the Content for commercial purposes or for any other
            unauthorized purpose without the express written consent of{" "}
            <a> www.AfgNews.com </a>.
          </p>
        </Content>
        <Content>
          <p className="numbers">3. User Conduct </p>
          <p className="contents">
            You may not use the Site for any illegal or unauthorized purpose.
            You agree not to, or attempt to, circumvent or manipulate the Site's
            security or network, or take any action that imposes an unreasonable
            burden or load on the Site's infrastructure. You agree not to use
            the Site in a manner that could damage, disable, overburden, or
            impair the Site or interfere with any other party's use of the Site.
          </p>
        </Content>
        <Content>
          <p className="numbers">4. Disclaimer of Warranties</p>
          <p className="contents">
            The Site and its Content are provided on an "as is" basis.
            <a> www.AfgNews.com </a> makes no representations or warranties of
            any kind, express or implied, as to the operation of the Site or the
            information, Content, or materials included on the Site.
          </p>
        </Content>
        <Content>
          <p className="numbers">5. Limitation of Liability</p>
          <p className="contents">
            <a> www.AfgNews.com </a> shall not be liable for any damages of any
            kind arising from the use of the Site, including but not limited to
            direct, indirect, incidental, punitive, and consequential damages.
          </p>
        </Content>
        <Content>
          <p className="numbers">6. Indemnification</p>
          <p className="contents">
            You agree to indemnify and hold <a> www.AfgNews.com </a>, its
            affiliates, and their respective officers, directors, agents,
            partners, and employees, harmless from any claim or demand,
            including reasonable attorneys' fees, made by any third party due to
            or arising out of your use of the Site, violation of these Terms, or
            infringement of any intellectual property or other right of any
            person or entity.s
          </p>
        </Content>
        <Content>
          <p className="numbers">7. Changes to Terms and Site</p>
          <p className="contents">
            <a> www.AfgNews.com </a> reserves the right to modify these Terms at
            any time and without prior notice. <a> www.AfgNews.com </a> may also
            modify or discontinue the Site, in whole or in part, at any time and
            without prior notice.
          </p>
        </Content>
        <Content>
          <p className="numbers">8. Governing Law</p>
          <p className="contents">
            These Terms shall be governed by and construed in accordance with
            the laws.
          </p>
        </Content>
        <Content>
          <p className="numbers">9. Entire Agreement</p>
          <p className="contents">
            These Terms constitute the entire agreement between you and
            <a> www.AfgNews.com </a> regarding the use of the Site and
            supersedes all prior agreements and understandings, whether written
            or oral, relating to the same subject matter.
          </p>
        </Content>
        <Content>
          <p className="numbers">Last Updated: 09 February 2023</p>
          <p className="contents">
            By using the Site, you agree to these Terms. If you do not agree
            with these Terms, you may not use the Site.
          </p>
        </Content>
      </ContentsContainer>
    </TermsAndConditionsMainContainer>
  );
};

const Content = styled.div`
  margin: 2rem 0 0 0;
  & .contents {
    padding: 0 0 0 2rem;
    width: 90%;
    line-height: 1.3rem;
  }
  & .numbers {
    margin: 0 0 1rem 0;
  }
  & a {
    color: var(--primary-color);
    text-decoration: underline;

    &:hover {
      cursor: pointer;
    }
  }
`;

const ContentsContainer = styled.div`
  padding: 0 2rem 0 2rem;
`;

const Header = styled.div`
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

const TermsAndConditionsMainContainer = styled.div`
  height: 100%;
  margin: 0 0 5rem 0;
`;

export default TermsAndContidions;
