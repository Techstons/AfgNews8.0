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

const Feedback = () => {
  return (
    <FeedbackMainContainer>
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
        <BoxContainer>
          <Input placeholder="input your email here" />

          <Text placeholder="write a subject" />
        </BoxContainer>
        <Divider />
      </div>
      <Divider />
    </FeedbackMainContainer>
  );
};

const Text = styled.textarea`
  width: 40rem;
  height: 25rem;
  padding: 1rem 0 0 1rem;
  border: solid black 1px;
  font-size: 1rem;
`;

const Input = styled.input`
  height: 3rem;
  padding: 0 0 0 1rem;
  width: 15rem;
  border: solid black 1px;
  border-radius: 5px;

  &:focus {
    border: solid black 2px;
    border-radius: 5px;
  }
`;

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 33rem;
  justify-content: space-around;
`;

const Divider = styled.div`
  margin: 10rem 0 0 0;
  border-top: 2px solid var(--primary-color);
`;

const FeedBack = styled.div`
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
    margin: 2rem 0 2rem 0;
  }

  & p {
    letter-spacing: 1px;
  }
`;

const FeedbackMainContainer = styled.div`
  height: 150vh;
  margin: 2.5rem 0 10rem 0;
`;

export default Feedback;
