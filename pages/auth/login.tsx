import { useApi } from "@components/context";
import { Button, InputForm, SocialCircle } from "@components/ui";
import styled from "@emotion/styled";
import { Facebook, Google, Twitter } from "@styled-icons/bootstrap";
import Link from "next/link";
import Image from "next/image";

const Login = () => {
  const { googleLogin, facebookLogin, twitterLogin, user } = useApi();

  const SocialLinks = [
    {
      icon: "/assets/icons/facebook.png",
      url: "https://www.facebook.com/",
      auth: facebookLogin,
    },
    {
      icon: "/assets/icons/twitter.png",
      url: "https://twitter.com/",
      auth: twitterLogin,
    },
    {
      icon: "/assets/icons/google.png",
      url: "https://www.youtube.com/",
      auth: googleLogin,
    },
  ];

  return (
    <Wrapper>
      <Container>
        <Overlay />
        <Header>
          <h2>AFGNews</h2>
          <h3>Sign in</h3>
        </Header>
        <Form>
          <InputForm id="name" placeholder="Email or Username" />
          <InputForm id="password" placeholder="Password" />
          <Button>Sign in</Button>
          <span>Dont have an account?</span>{" "}
          <Link href="/auth/registration" passHref={true}>
            <a className="registration">Click here</a>
          </Link>
        </Form>
        <SocialContainer>
          <p>Or sign up using social media accounts</p>

          <div>
            {SocialLinks.map((item, index) => {
              return (
                <SocialCircle size="48px" key={index}>
                  <Image
                    src={item.icon}
                    layout="fixed"
                    alt="Social icons"
                    width="24px"
                    height="24px"
                  />
                </SocialCircle>
              );
            })}
          </div>
        </SocialContainer>
      </Container>
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.div`
  position: relative;
`;

const Overlay = styled.div`
  background-position: right 1rem top;
  background-repeat: no-repeat;
  background-size: calc(40% - 1rem) auto;
  height: 100%;
  left: 0;
  top: 0;
  position: fixed;
  width: 100%;
  z-index: -1;

  @media only screen and (min-width: 1000px) {
    background-image: url(https://ichef.bbci.co.uk/images/ic/608xn/p0by9l73.png) !important;
  }
`;

const Header = styled.header`
  text-align: center;

  & > * {
    margin: 1.5rem 0;
  }
`;

const Container = styled.div`
  padding: 2rem;

  @media only screen and (min-width: 1000px) {
    width: 35%;
    position: relative;
    left: 10rem;
  }
`;

const Form = styled.form`
  padding-bottom: 2rem;
  border-bottom: 1px solid gray;

  & > * {
    margin: 1rem 0;
  }

  .registration {
    color: var(--primary-color);
  }
`;

const SocialContainer = styled.div`
  p {
    text-align: center;
  }

  padding: 2rem 0;

  div {
    display: flex;
    justify-content: center;
    gap: 2rem;
    padding: 2rem 0;
  }
`;
