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

const TermsAndContidions = () => {
  const { t } = useTranslation();

  return (
    <TermsAndConditionsMainContainer>
      <Head>
        <title>Terms And Conditions</title>
      </Head>
      <Header>
        <h1>{t("common:terms_&_conditions")}</h1>
      </Header>
      <ContentsContainer>
        <Content>
          <p className="numbers">1. {t("common:introduction")}</p>
          <p className="contents">{t("common:this_document")}</p>
        </Content>
        <Content>
          <p className="numbers">2. {t("common:use_of_site")}</p>
          <p className="contents">{t("common:content_on_the_site")}</p>
        </Content>
        <Content>
          <p className="numbers">3. {t("common:user_conduct")} </p>
          <p className="contents">{t("common:you_may_not")}</p>
        </Content>
        <Content>
          <p className="numbers">4. {t("common:disclaimer")}</p>
          <p className="contents">{t("common:the_site")}</p>
        </Content>
        <Content>
          <p className="numbers">5. {t("common:limitation")}</p>
          <p className="contents">{t("common:not_be_liable")}</p>
        </Content>
        <Content>
          <p className="numbers">6. {t("common:indemnification")}</p>
          <p className="contents">{t("common:you_agree")}</p>
        </Content>
        <Content>
          <p className="numbers">7. {t("common:terms_and_site")}</p>
          <p className="contents">{t("common:reserves_the_right")}</p>
        </Content>
        <Content>
          <p className="numbers">8. {t("common:governing_law")}</p>
          <p className="contents">{t("common:these_terms")}</p>
        </Content>
        <Content>
          <p className="numbers">9. {t("common:entire_agreement")}</p>
          <p className="contents">{t("common:terms_constitute")}</p>
        </Content>
        <Content>
          <p className="numbers">{t("common:last_updated")}</p>
          <p className="numbers">{t("common:by_using")}</p>
        </Content>
      </ContentsContainer>
    </TermsAndConditionsMainContainer>
  );
};

const Content = styled.div`
  margin: 2rem 0 0 0;
  & .contents {
    padding: 0 0 0 2rem;
    width: 80%;
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
  padding: 0 2rem 0 4rem;
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
    font-size: 4rem;
    letter-spacing: 1px;
  }
`;

const TermsAndConditionsMainContainer = styled.div`
  height: 100%;
  padding: 2.5rem 0 10rem 0;
`;

export default TermsAndContidions;
