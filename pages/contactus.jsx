import React, { useState } from "react";
import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import styled from "@emotion/styled";
import Head from "next/head";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

// export async function getStaticProps({ locale }) {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale || "en", ["common"])),
//     },
//   };
// }

const ContactUs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [placeHolder, setPlaceHolder] = useState("Genaral Inquiries");
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  const inquiries = [
    "General Inquiries",
    "Media and PR",
    "Distribution",
    "Content Sales",
    "Advertising",
  ];

  function returnInquire(inquire) {
    setPlaceHolder(inquire);
    setIsOpen(!isOpen);
  }

  return (
    <ContactUsMainContainer>
      <Head>
        <title>Contact Us</title>
      </Head>
      <Image src="https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?cs=srgb&dl=pexels-pixabay-302769.jpg&fm=jpg" />
      <FormContainer>
        <div className="small-divider"></div>
        <h1>Contact Us</h1>
        <p>For Enquiries, please fill out the form below:</p>
        <Form>
          <div className="container">
            <div className="label-container">
              <label htmlFor="select">To</label>
              <Aster>*</Aster>
            </div>
            <button
              type="button"
              id="select"
              onClick={() => {
                if (!isOpen) setIsOpen(true);
                else setIsOpen(false);
              }}
            >
              {placeHolder}
              <div className="down-arrow"></div>
            </button>

            {isOpen && (
              <ul>
                {inquiries.map((inquire) => (
                  <li key={inquire} onClick={() => returnInquire(inquire)}>
                    {inquire}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div className="label-container">
              <label htmlFor="name">Name</label>
              <Aster>*</Aster>
            </div>
            <Input id="name" required />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div className="label-container">
              <label htmlFor="email">Email</label>
              <Aster>*</Aster>
            </div>
            <Input id="email" required />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div className="label-container">
              <label htmlFor="subject">Subject</label>
              <Aster>*</Aster>
            </div>
            <Input id="subject" required />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div className="label-container">
              <label htmlFor="message">Message</label>
              <Aster>*</Aster>
            </div>
            <Message id="message" required />
          </div>
          <button
            style={{
              backgroundColor: "#fba931",
              color: "black",
              height: "3rem",
              width: "10rem",
              margin: " 2rem 0 0 0",
            }}
            type="submit"
          >
            Send Message
          </button>
        </Form>
      </FormContainer>
    </ContactUsMainContainer>
  );
};

const Message = styled.textarea`
  background-color: #e3e3e3;
  diplay: flex;
  flex-direction: column;
  height: 10rem;
  border: 2px solid #d1d1d1;
  padding: 1rem 0 0 1rem;
  &:hover {
    background-color: #d1d1d1;
    cursor: type;
  }
  &:focus {
    border-color: lightblue;
    outline: none;
  }
`;

const Input = styled.input`
  background-color: #e3e3e3;
  height: 3rem;
  border: 2px solid #d1d1d1;
  padding: 0 0 0 2rem;
  &:hover {
    background-color: #d1d1d1;
    cursor: type;
  }
  &:focus {
    border-color: lightblue;
    outline: none;
  }
`;

const Aster = styled.div`
  color: red;
  font-size: 2rem;
`;

const Form = styled.form`
  height: 80%;
  margin: 2rem 0 0 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & .container {
    position: relative;
  }

  & button {
    width: 100%;
    background-color: #e3e3e3;
    border: 1px solid #d1d1d1;
    height: 3rem;
    color: #7a7a80;
    text-align: left;
    padding: 0 1.5rem 0 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:hover {
      background-color: #d1d1d1;
      cursor: pointer;
    }
  }
  & ul {
    position: absolute;
    width: 100%;
    list-style: none;
    padding: 0;
    margin: 0;
    background-color: #fff;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  }
  & li {
    padding: 12px;
    cursor: pointer;

    &:hover {
      background-color: #1e90ff;
    }

    & label {
      font-size: 3rem !important;
      font-weight: 700 !important;
    }
  }

  & .down-arrow {
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid black;
  }

  & .label-container {
    display: flex;
    align-items: center;
  }
`;

const FormContainer = styled.div`
  background-color: white;
  width: 60%;
  margin: 0 0 0 4rem;
  height: 60%;
  position: absolute;
  top: 35rem;
  padding: 3rem 4rem 0 4rem;

  & .small-divider {
    background-color: #444343;
    width: 3rem;
    height: 6px;
  }

  & h1 {
    font-size: 45px;
    color: #444343;
    margin: 1rem 0 0 0;
  }

  & p {
    margin: 2rem 0 0 0;
    font-weight: 700;
    color: #323232;
  }
`;

const ContactUsMainContainer = styled.div`
  margin: 0 0 7rem 0;
  height: 220vh;
  position: relative;
`;

const Image = styled.img`
  height: 50%;
  width: 100%;
  object-fit: cover;
  position: absolute;
`;

export default ContactUs;
