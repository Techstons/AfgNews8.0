import React from "react";
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

const Feedback = () => {
  const isDarkMode = useSelector((state: RootState) => state.search.isDarkMode);

  return (
    <FeedbackMainContainer>
      <Head>
        <title>Feedback</title>
      </Head>
      <FeedBack>
        <div>
          <h1>Feedback</h1>
          <p>Tell us how we can improve</p>
        </div>
      </FeedBack>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <BoxContainer className="feedback-box-container">
          <div style={{ display: "flex", alignItems: "center" }}>
            <div>From </div>
            <Aster>*</Aster>
          </div>
          <Input
            placeholder="input your email here"
            className="feedback-input"
            style={{
              border: isDarkMode
                ? "1px solid var(--primary-color)"
                : "solid 1px black",
            }}
          />
          <div
            style={{ display: "flex", alignItems: "center", marginTop: "2rem" }}
          >
            <div>Message </div>
            <Aster>*</Aster>
          </div>
          <Text
            placeholder="write a subject"
            className="feedback-text-aria"
            style={{
              border: isDarkMode
                ? "1px solid var(--primary-color)"
                : "solid 1px black",
              backgroundColor: isDarkMode ? "black" : "white",
            }}
          />
        </BoxContainer>
        <Divider />
      </div>
      <Divider />
    </FeedbackMainContainer>
  );
};

const Aster = styled.div`
  color: red;
  font-size: 2rem;
  margin: 0 0 0 10px;
`;

const Text = styled.textarea`
  height: 25rem;
  padding: 1rem 0 0 1rem;

  font-size: 1rem;
  background-color: black;
`;

const Input = styled.input`
  height: 3rem;
  padding: 0 0 0 1rem;

  border-radius: 5px;

  &:focus {
    border: solid black 2px;
    border-radius: 5px;
  }
`;

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 33rem;
  justify-content: space-around;
`;

const Divider = styled.div`
  margin: 10rem 0 0 0;
  border-top: 1px solid var(--primary-color);
`;

const FeedBack = styled.div`
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
    margin: 2rem 0 2rem 0;
  }

  & p {
    letter-spacing: 1px;
    font-size: 1.2rem;
  }
`;

const FeedbackMainContainer = styled.div`
  height: 100%;
  padding: 2.5rem 0 10rem 0;
`;

export default Feedback;
