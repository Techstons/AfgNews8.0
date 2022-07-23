import { useApi } from "@components/context";
import { Button, InputForm, SocialCircle } from "@components/ui";
import styled from "@emotion/styled";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  TwitterAuthProvider,
} from "firebase/auth";
import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
import { FormEvent, useEffect, useState } from "react";
import { useAuth } from "utils/firebase";

type LocalAuth = {
  email: string;
  password: string;
  passwordConfirm?: string;
};

const Login = () => {
  const { user, setUser } = useApi();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const localAuth = (e: FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      return;
    }

    localLogin({ email, password });
  };

  const errorLogger = (err: any) => {
    console.log(`
          error code: ${err.errorCode}
          error message: ${err.errorMessage}
          error email: ${err.email}
          error credential: ${err.credential}
        `);
  };

  const localLogin = (auth: LocalAuth) => {
    if (!auth.email || !auth.password) {
      return alert("You must put an email and password");
    }

    signInWithEmailAndPassword(useAuth, auth.email, auth.password)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(`Error Login: ${errorCode} - ${errorMessage}`);
        alert(errorCode);
      });
  };

  const googleLogin = () => {
    signInWithPopup(useAuth, new GoogleAuthProvider())
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        setUser(result.user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);

        errorLogger({ errorCode, errorMessage, email, credential });
        alert(errorCode);
      });
  };

  const facebookLogin = () => {
    signInWithPopup(useAuth, new FacebookAuthProvider())
      .then((result) => {
        // The signed-in user info.
        const user = result.user;

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential?.accessToken;

        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);

        errorLogger({ errorCode, errorMessage, email, credential });
        alert(errorCode);
      });
  };

  const twitterLogin = () => {
    signInWithPopup(useAuth, new TwitterAuthProvider())
      .then((result) => {
        // The signed-in user info.
        const user = result.user;

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = TwitterAuthProvider.credentialFromResult(result);
        const accessToken = credential?.accessToken;

        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = TwitterAuthProvider.credentialFromError(error);

        errorLogger({ errorCode, errorMessage, email, credential });
        alert(errorCode);
      });
  };

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

  useEffect(() => {
    if (useAuth.currentUser) {
      Router.push({
        pathname: "/",
      });
    }
  }, [user]);

  return (
    <Wrapper>
      <Container>
        <Overlay />
        <Header>
          <h2>AFGNews</h2>
          <h3>Sign in</h3>
        </Header>
        <Form onSubmit={localAuth}>
          <InputForm
            id="email"
            placeholder="Email"
            value={email}
            type="email"
            autoComplete="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputForm
            id="password"
            placeholder="Password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Sign in</Button>
          <span>Dont have an account?</span>{" "}
          <Link href="/auth/registration" passHref={true}>
            <a className="registration">Click here</a>
          </Link>
        </Form>
        <SocialContainer>
          <p>Or sign in using social media accounts</p>

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
                    onClick={item.auth}
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
