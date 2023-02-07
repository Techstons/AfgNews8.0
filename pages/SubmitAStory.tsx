import React from "react";
import styled from "@emotion/styled";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Grid from "@mui/material/Grid";
import Link from "next/link";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale || "en", ["common"])),
    },
  };
}

const SubmitAStory = () => {
  return (
    <SubmitAStoryMainContainer className="story-main">
      <Head>
        <title>Submit A Story</title>
      </Head>
      <Header className="story-header">
        <div className="contents-container">
          <div style={{ margin: "2rem 0 0 0" }}>
            <h1 className="submit-a-story-header">
              How to share a story or a tip with us
            </h1>
            <p className="submit-a-story-header-p">
              Is there a story that you think we should cover? Do you have a tip
              or documents that we should investigate? Here are the best ways to
              get in touch with our journalists.
            </p>
          </div>
        </div>
      </Header>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "2rem  0 0 0",
        }}
      >
        <SmallCardContainer className="story-card-container">
          <Grid container>
            {/* <Grid item xs={12} md={6}>
              <SmallCard className="smallcard-story">
                <h1>Postal addresss:</h1>
                <div>
                  <h2>Al Jazeera Media Network</h2>
                  <p>Attn: Investigative Unit</p> <p>PO Box 23127</p>{" "}
                  <p>Doha - Qatar</p>
                </div>
                <div>
                  <h2>Al Jazeera International</h2>
                  <p>Attn: Investigative Unit</p> <p>Level 16, The Shard</p>{" "}
                  <p>32 London Bridge Street</p> <p>London, SE1 9SG, UK</p>
                </div>
              </SmallCard>
            </Grid> */}
            <Grid item xs={12}>
              <SmallCard className="smallcard-story">
                <h1>Email:</h1>
                <div>
                  <p>
                    Send us your tip{" "}
                    <Link href="/ContactUs" className="submit-a-story">
                      here
                    </Link>
                    . In the dropdown menu, be sure to choose General -
                    Editorial
                  </p>
                </div>
                <div>
                  <h2>Important:</h2>
                  <p>
                    Never use email to send us confidential tips or documents
                    that might pose a risk to your safety. Use one of our other
                    options if you have sensitive information you want to share.
                  </p>
                </div>
              </SmallCard>
            </Grid>
          </Grid>
        </SmallCardContainer>
      </div>
      <h1 className="in-between-text">
        We offer the following secure options to get in touch with us if you
        have confidential information:
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "2rem  0 2rem 0",
        }}
      >
        <LongCardContainer>
          <Grid container>
            <Grid item xs={12} md={6} className="center-grid">
              <LongCard className="story-longcard-container">
                <h1>WhatsApp</h1>
                <div>
                  <p>
                    WhatsApp is a free encrypted messaging app, which means only
                    the sender and receiver can read the messages. The app
                    allows you to send text messages, images, videos, audio and
                    text documents. In case messages are intercepted by third
                    parties, they cannot be read because of the encryption the
                    app uses. However, because some information about you as a
                    user is stored on WhatsApp servers (phone numbers, certain
                    types of metadata, including timestamps on messages), the
                    app is not completely anonymous. If you use WhatsApp to
                    contact us, be aware that you also share your phone number
                    with us. Also make sure your conversations are not backed up
                    in the cloud (iCloud or Google Drive).
                  </p>
                </div>
                <div>
                  {/* <h2>Al Jazeera’s WhatsApp Number: +974 5080 0207</h2> */}
                </div>
                <button>Download WhatsApp</button>
              </LongCard>
            </Grid>
            <Grid item xs={12} md={6} className="center-grid">
              <LongCard className="story-longcard-container">
                <h1>Signal</h1>
                <div style={{ height: "22rem" }}>
                  <p>
                    Signal is a free messaging app similar to WhatsApp, but it
                    stores less information about its users. Signal only
                    registers your phone number and the last time you used the
                    app. Other metadata like timestamps on messages are not
                    recorded. Signal also offers the option to send messages
                    that self-destruct after a set time after the message is
                    seen. You will disclose your phone number with us when you
                    send a message.
                  </p>
                </div>
                <div>
                  {/* <h2>Al Jazeera’s Signal Number: +974 5080 0207</h2> */}
                  <button>Download Signal</button>
                </div>
              </LongCard>
            </Grid>
          </Grid>
        </LongCardContainer>
      </div>
    </SubmitAStoryMainContainer>
  );
};

export default SubmitAStory;

const ThingsToConsider = styled.div`
  padding: 1.5rem 1rem 1.5rem 1rem;
  // display: flex;
  // flex-direction: column;

  & .submit-a-story {
    color: blue;
    text-decoration: underline;
  }

  & div {
    margin: 2rem 0 1rem 0;
  }

  & h1 {
    font-size: 18px;
  }

  & h2 {
    font-size: 14px;
    color: #4d4d4d;
  }
`;

const ThingsToConsiderContainer = styled.div`
  background-color: #e8e8e8;
  display: flex;
  justify-content: center;
`;

const LargeCard = styled.div`
  background-color: #ffffff;
  padding: 1.5rem 1rem 1.5rem 1rem;
  // display: flex;
  // flex-direction: column;

  & a {
    color: blue;
    text-decoration: underline;
  }

  & div {
    margin: 3rem 0 0 0;
  }

  & h1 {
    font-size: 18px;
  }

  & h2 {
    font-size: 14px;
    color: #4d4d4d;
  }

  & p {
    font-size: 14px;
  }
`;

const LongCardContainer = styled.div`
  width: 60%;
`;

const LongCard = styled.div`
  background-color: #ffffff;
  width: 24rem;
  height: 28rem;
  padding: 1.5rem 1rem 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 0 2rem 0;

  & button {
    border: solid 1px black;
    margin: 2rem 0 0 0;
    width: 11rem;
    height: 2.3rem;

    &:hover {
      color: white;
      background-color: #101d48;
    }
  }

  & div {
    margin: 3rem 0 0 0;
  }

  & h1 {
    font-size: 18px;
  }

  & h2 {
    font-size: 14px;
    color: #4d4d4d;
  }

  & p {
    font-size: 14px;
  }
`;

const SmallCardContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const SmallCard = styled.div`
  background-color: #ffffff;
  height: 17rem;
  padding: 1.5rem 1rem 0 1rem;

  & div {
    margin: 2rem 0 0 0;
  }

  & h1 {
    font-size: 18px;
  }

  & h2 {
    font-size: 14px;
    color: #98938b;
  }

  & p {
    font-size: 14px;
  }

  & a {
    color: blue;
    text-decoration: underline;
  }
`;

const Logo = styled.div`
  font-size: 2rem;
  text-align: center;
  margin: 2rem 0 0 0;
`;

const Header = styled.div`
  background-color: var(--primary-color);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  & h1 {
    margin: 0 0 1.5rem 0;
  }
`;

const SubmitAStoryMainContainer = styled.div`
  background-color: #f2f2f2;
  height: 100%;

  & .in-between-text {
    font-size: 18px;
    margin: 5rem 0 5rem 0;
    text-align: center;
  }
`;
