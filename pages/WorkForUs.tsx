import React, { useState } from "react";
import styled from "@emotion/styled";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Grid from "@mui/material/Grid";
import CloseIcon from "@mui/icons-material/Close";

import { ReadMore } from "@components/common";
import { Work } from "@components/common";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale || "en", ["common"])),
    },
  };
}

const JobsList = [
  {
    title: "Digital Marketer",
    id: 0,
    description:
      "A digital marketer is someone who specializes in using digital channels and technologies to promote and sell products or services. They typically work for businesses or organizations that are seeking to reach customers or clients through online platforms, including social media, email, search engines, websites, and mobile apps.",
  },
  {
    title: "FrontEnd Developer",
    id: 1,
    description:
      "A frontend developer is responsible for building the user interface and ensuring that a website or application looks and feels great for users. They use programming languages such as HTML, CSS, and JavaScript to create responsive and interactive designs. They also work closely with designers to turn static mockups into fully-functional websites or applications.",
  },
  {
    title: "BackEnd Developer",
    id: 2,
    description:
      "A backend developer is responsible for building and maintaining the server-side of a website or application. They use programming languages such as Java, Python, or PHP to create and maintain the logic and functionality of the application. ",
  },
  {
    title: "UI/UX Designer",
    id: 3,
    description:
      "Were looking for a talented UI/UX Designer to create amazing user experiences. The ideal candidate should have an eye for clean and artful design, possess superior UI skills and be able to translate high-level requirements into interaction flows and artifacts, and transform them into beautiful, intuitive, and functional user interfaces.",
  },
  {
    title: "Mid-level Fullstack Developer",
    id: 4,
    description:
      "We are seeking a Mid Fullstack Developer to join our dynamic and fast-paced development team. The ideal candidate is passionate about technology, has a solid understanding of web development and a proven track record of developing and deploying web applications.",
  },
  {
    title: "Senior Fullstack Developer",
    id: 5,
    description:
      "We are looking for an experienced Senior Developer to join our team. As a Senior Developer, you will be responsible for designing, developing and maintaining our web-based applications. You will work closely with our product team to develop high-quality software that meets our clients needs.",
  },
];

const WorkForUs = () => {
  const [openWork, setOpenWork] = useState(false);
  const [work, setWork] = useState("");
  const [workChoice, setWorkChoice] = useState("");
  const [jobDesc, setJobDesc] = useState("");

  function applyWork(job: any) {
    setWork(job.title);
    setOpenWork(true);
    setWorkChoice("apply");
  }

  function readMore(desc: any, title: any) {
    setWorkChoice("readmore");
    setOpenWork(true);
    setJobDesc(desc);
    setWork(title);
  }

  return (
    <MainContainer>
      <Head>
        <title>Work for us</title>
      </Head>
      <WorkForUsHeader>
        <h1>Work For Us</h1>
        <p>Join our team and help to shape the future</p>
      </WorkForUsHeader>
      {!openWork ? (
        <Grid container style={{ padding: "0 0 0 4rem" }}>
          {JobsList.map((job) => {
            return (
              <Grid item md={4} xs={12} key={job.title}>
                <WorkBox key={job.title}>
                  <h2>{job.title}</h2>
                  <p>{job.description}</p>
                  <div className="works-buttons-container">
                    <Button onClick={() => applyWork(job)}>Apply</Button>
                    <Button
                      onClick={() => readMore(job.description, job.title)}
                    >
                      Read more
                    </Button>
                  </div>
                </WorkBox>
              </Grid>
            );
          })}
        </Grid>
      ) : (
        <div>
          <button onClick={() => setOpenWork(false)}>
            <CloseIcon className="close-icon" />
          </button>
          {workChoice === "apply" ? (
            <Work workTitle={work} />
          ) : (
            <div>
              <ReadMore jobTitle={work} jobDesc={jobDesc} />
              <ButtonsContainer>
                <Button
                  style={{ width: "10rem" }}
                  onClick={() => setWorkChoice("apply")}
                >
                  Apply
                </Button>
              </ButtonsContainer>
            </div>
          )}
        </div>
      )}
    </MainContainer>
  );
};

const ButtonsContainer = styled.div`
  margin: 8rem 0 0 0;
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  background-color: var(--primary-color);
  color: white;
  width: 7rem;
  height: 2rem;
  border-radius: 5px;

  &:hover {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.4);
  }
`;

const WorkBox = styled.div`
  border: solid 1px black;
  width: 22rem;
  height: 20rem;
  //   box-shadow: 0 0.5rem 1rem black;
  border-radius: 10px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0 0 3rem 0;

  & h2 {
    text-align: center;
    color: var(--primary-color);
  }

  & p {
    line-height: 1.2rem;
    min-height: 60%;
  }

  & .works-buttons-container {
    display: flex;
    justify-content: space-around;
  }
`;

const WorkForUsHeader = styled.div`
  background-color: var(--primary-color);
  height: 20rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 0 0 5rem 0;
  color: white;

  & h1 {
    font-size: 4rem;
    letter-spacing: 1px;
    margin: 0 0 2rem 0;
  }

  & p {
    font-size: 1.2rem;
  }
`;

const MainContainer = styled.div`
  margin: 0 0 10rem 0;

  & .close-icon {
    margin: 0 0 0 1rem;
    transition: 0.4s;

    &:hover {
      color: red;
    }
  }
`;

export default WorkForUs;
