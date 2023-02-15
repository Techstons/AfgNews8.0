import styled from "@emotion/styled";
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "@components/ui";
import Link from "next/link";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Work = ({ workTitle }: { workTitle: string }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  return (
    <MainContainer>
      <MainHeader>Apply now as {workTitle}</MainHeader>
      <Form>
        <Grid container>
          <Grid item md={6} xs={12}>
            <div className="input-fields">
              <p>Full name:</p>
              <Input
                type="text"
                id="full-name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
          </Grid>
          <Grid item md={6} xs={12}>
            <div className="input-fields">
              <p>Email Address:</p>
              <Input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </Grid>
          <Grid item md={6} xs={12}>
            <div className="input-fields">
              <p>Telephone number:</p>
              <Input
                type="tel"
                id="telephone"
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
              />
            </div>
          </Grid>
          <Grid item md={6} xs={12}>
            <div className="input-fields">
              <p>LinkedIn address</p>
              <Input
                type="url"
                id="linkedin"
                value={linkedIn}
                onChange={(e) => setLinkedIn(e.target.value)}
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className="choose-a-file">
              <p style={{ margin: "0 0 .5rem 0" }}>CV file:</p>
              <input type="file" name="file" />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                margin: "0 0 0 2.3rem",
              }}
            >
              <Checkbox {...label} required />{" "}
              <Link href="/PrivacyPolicy">
                <DivWithHover>
                  I have agreed to the privacy policy.
                </DivWithHover>
              </Link>
            </div>
          </Grid>
          <Grid>
            <div className="button-container">
              <Button type="submit">Submit</Button>
            </div>
          </Grid>
        </Grid>
      </Form>
    </MainContainer>
  );
};

const DivWithHover = styled.div`
  border-bottom: 1px solid var(--primary-color);
  transition: border-color 0.5s ease;

  &:hover {
    border-color: var(--secondary-color);
    cursor: pointer;
  }
`;

const Input = styled.input`
  border: solid 1px black;
  width: 20rem;
  background-color: #e3e3e3;
  height: 3rem;
  border: 2px solid #d1d1d1;
  padding: 0 0 0 1rem;
  &:hover {
    background-color: #d1d1d1;
    cursor: type;
  }
  &:focus {
    border-color: lightblue;
    outline: none;
  }
`;

const Form = styled.form`
  & p {
    font-size: 1.2rem;
  }

  & .input-fields {
    margin: 1rem 0 2rem 3rem;
    animation: slide-in 1s;
  }

  @keyframes slide-in {
    0% {
      margin: 0;
    }
    100% {
      margin: 1rem 0 2rem 3rem;
    }
  }

  & .choose-a-file {
    margin: 2rem 0 0.5rem 3rem;
  }
  & .button-container {
    margin: 0.5rem 0 0 3rem;
  }
`;

const MainHeader = styled.h1`
  color: var(--primary-color);
  margin: 0 0 2rem 0;
`;

const MainContainer = styled.div`
  padding: 2rem 2rem 0 4rem;
`;

export default Work;
