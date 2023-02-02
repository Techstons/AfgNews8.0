import React from "react";
import styled from "@emotion/styled";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale || "en", ["common"])),
    },
  };
}

const SubmitAStory = () => {
  const largeCardList = [
    "Download and install software to access the Tor network: https://www.torproject.org (if this web page is blocked in your country, you can send an email (gettor@torproject.org) or a direct message on Twitter to @get_tor to get a direct download link)",
    " Once you load the Tor browser, copy and paste the URL http://ajiunit.securedrop.tor.onion into the Tor address bar. You will then find additional instructions on how to submit files to Al Jazeera.",
    " A randomly generated, unique code name will be assigned to you. If Al Jazeera wishes to contact you, we will do so in your SecureDrop. These messages can only be accessed using your code name.",
    " Using the Tails operating system is recommended to increase security.",
    " More information on the Tails operating system can be found here.",
    " More information on SecureDrop can be found https://docs.securedrop.org/en/stable/source.html",
  ];

  const thingsToConsider = [
    "- Read the tool or app’s terms and conditions, as well as the instructions before using.",
    "- Be aware of the network you use. Do not use your home or work network if you do not want the information to be traced back to you. Using a public wifi network might be preferable to reduce the risk of being identified.",
    "- Remember that your internet and search history can help identify you. A simple Google search with how to leak documents could be enough to identify you or put you at risk.",
    "- Downloading the Tor browser could also potentially come with some risks in certain countries.",
    "- Tor does not hide the fact you are using Tor.",
    "- In countries where Tor is not extensively used, it can be easier for users to be identified. In these countries – which include several countries outside of Europe and North America – you should avoid using networks associated with your identity.",
    "- If possible, do not use your personal or work phones or computers to contact us.",
    "- Encrypt any sensitive information you have stored locally. Find out how and why here.",
    "- Use strong passwords on your phone and computer to increase security. If you have sensitive information on your phone, it is best not to use biometric security like fingerprint recognition or FaceID. ",
  ];
  return (
    <SubmitAStoryMainContainer>
      <Head>
        <title>Submit A Story</title>
      </Head>
      <Header>
        <div className="contents-container">
          <Logo>AFG NEWS</Logo>
          <div style={{ margin: "2rem 0 0 0" }}>
            <h1>How to share a story or a tip with AFG NEWS</h1>
            <p>
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
        <SmallCardContainer>
          <SmallCard>
            <h1>Postal address:</h1>
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
          <SmallCard>
            <h1>Email:</h1>
            <div>
              <p>
                Send us your tip here. In the dropdown menu, be sure to choose
                General - Editorial
              </p>
            </div>
            <div>
              <h2>Important:</h2>
              <p>
                Never use email to send us confidential tips or documents that
                might pose a risk to your safety. Use one of our other options
                if you have sensitive information you want to share.
              </p>
            </div>
          </SmallCard>
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
          <LongCard>
            <h1>WhatsApp</h1>
            <div>
              <p>
                WhatsApp is a free encrypted messaging app, which means only the
                sender and receiver can read the messages. The app allows you to
                send text messages, images, videos, audio and text documents. In
                case messages are intercepted by third parties, they cannot be
                read because of the encryption the app uses. However, because
                some information about you as a user is stored on WhatsApp
                servers (phone numbers, certain types of metadata, including
                timestamps on messages), the app is not completely anonymous. If
                you use WhatsApp to contact us, be aware that you also share
                your phone number with us. Also make sure your conversations are
                not backed up in the cloud (iCloud or Google Drive).
              </p>
            </div>
            <div>
              <h2>Al Jazeera’s WhatsApp Number: +974 5080 0207</h2>
            </div>
            <button>Download WhatsApp</button>
          </LongCard>
          <LongCard>
            <h1>Signal</h1>
            <div style={{ height: "22rem" }}>
              <p>
                Signal is a free messaging app similar to WhatsApp, but it
                stores less information about its users. Signal only registers
                your phone number and the last time you used the app. Other
                metadata like timestamps on messages are not recorded. Signal
                also offers the option to send messages that self-destruct after
                a set time after the message is seen. You will disclose your
                phone number with us when you send a message.
              </p>
            </div>
            <div>
              <h2>Al Jazeera’s Signal Number: +974 5080 0207</h2>
              <button>Download WhatsApp</button>
            </div>
          </LongCard>
        </LongCardContainer>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "2rem  0 2rem 0",
        }}
      >
        <LargeCard>
          <h1>SecureDrop –</h1>
          <a href="http://ajiunit.securedrop.tor.onion">
            http://ajiunit.securedrop.tor.onion
          </a>
          <h1>or </h1>
          <a href="http://jkta32w5gvk6pmqdfwj67psojot3l2iwoqbdvrvywi5bkudfeandq7id.onion">
            http://jkta32w5gvk6pmqdfwj67psojot3l2iwoqbdvrvywi5bkudfeandq7id.onion
          </a>
          <div>
            <p>
              SecureDrop is an encrypted submission system that is highly
              recommended if you value both confidentiality and anonymity.
              Because it uses the Tor network, your identity, location and other
              information will be protected. SecureDrop allows us to communicate
              while keeping both parties completely anonymous from each other.
            </p>
          </div>
          <div>
            <p>To use SecureDrop, you must:</p>
          </div>
          <div
            style={{
              margin: "1rem 0 0 1rem",
            }}
          >
            {largeCardList.map((list) => (
              <ul key={list} style={{ width: "80%", fontSize: "14px" }}>
                <li key={list}>{list}</li>
              </ul>
            ))}
          </div>
        </LargeCard>
      </div>
      <ThingsToConsiderContainer>
        <ThingsToConsider>
          <h1>
            Things to consider before sending confidential tips and documents:
          </h1>
          <div>
            <p>
              It is important to remember that no app or tool is 100 percent
              safe and secure, and all forms of communication come with risks.
              To help with security, we recommend you:{" "}
            </p>
          </div>
          {thingsToConsider.map((list) => (
            <p key={list}>{list}</p>
          ))}
          <div>
            <p>More information on password security here. </p>
            <p>A note about using phone communication: </p>
          </div>
          <p>
            - In general, mobile messaging is not recommended if you want to
            stay completely anonymous. Phone locations, numbers and identities
            can potentially be traced to identify you as the source.
          </p>
          <p>
            - If someone gets access to your phone, they might be able to read
            any messages if they can unlock your phone. More information on the
            risks of using mobile phones can be found here.
          </p>
          <p>
            We encourage you to assess the potential risks and choose the option
            that you believe is best for you and the information youre sharing.{" "}
          </p>
          <p>
            We ask that you do not send pitches, press releases or feedback
            through these channels. While we will check messages regularly, we
            will not always respond. If we do respond, it will be through the
            same method by which you contacted us.
          </p>{" "}
          <p>
            Are you a journalist who wants to pitch a story to Al Jazeera? Find
            out the best way to pitch us your story idea here.
          </p>
        </ThingsToConsider>
      </ThingsToConsiderContainer>
    </SubmitAStoryMainContainer>
  );
};

export default SubmitAStory;

const ThingsToConsider = styled.div`
  width: 61%;
  padding: 1.5rem 1rem 1.5rem 1rem;
  // display: flex;
  // flex-direction: column;

  & a {
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

  & p {
    font-size: 14px;
    line-height: 2rem;
  }
`;

const ThingsToConsiderContainer = styled.div`
  background-color: #e8e8e8;
  height: 80rem;
  display: flex;
  justify-content: center;
`;

const LargeCard = styled.div`
  background-color: #ffffff;
  width: 59%;
  height: 30rem;
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
  display: flex;
  justify-content: space-around;
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
  width: 60%;
`;

const SmallCard = styled.div`
  background-color: #ffffff;
  width: 24rem;
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
`;

const Logo = styled.div`
  font-size: 2rem;
  text-align: center;
  margin: 2rem 0 0 0;
`;

const Header = styled.div`
  background-color: var(--primary-color);
  height: 20rem;
  color: white;
  display: flex;
  justify-content: center;

  & h1 {
    font-size: 2.7rem;
    margin: 0 0 1rem 0;
  }

  & p {
    line-height: 1.5rem;
  }

  & .contents-container {
    width: 50%;
  }
`;

const SubmitAStoryMainContainer = styled.div`
  background-color: #f2f2f2;
  height: 400vh;
  margin: 1rem 0 20rem 0;

  & .in-between-text {
    font-size: 18px;
    margin: 5rem 0 5rem 0;
    text-align: center;
  }
`;
