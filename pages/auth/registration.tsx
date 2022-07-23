import { useApi } from "@components/context";
import { Button, InputForm } from "@components/ui";
import styled from "@emotion/styled";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import Link from "next/link";
import router from "next/router";
import { FormEvent, useEffect, useState } from "react";
import { useAuth } from "utils/firebase";

const Login = () => {
  const { user, setUser } = useApi();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  type LocalAuth = {
    email: string;
    password: string;
    passwordConfirm?: string;
  };

  const localRegister = (auth: LocalAuth) => {
    if (!auth.email || !auth.password) {
      return alert("You must put an email and password");
    }

    if (auth.passwordConfirm !== auth.password) {
      return alert("Passwords must match");
    }

    createUserWithEmailAndPassword(useAuth, auth.email, auth.password)
      .then((result) => {
        setUser(result.user);
        sendEmailVerification(result.user).then(() => {
          console.log("Email sent");
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(`Error Sign up: ${errorCode} - ${errorMessage}`);
        alert(errorCode);
      });
  };

  const localAuth = (e: FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      return;
    }

    localRegister({ email, password, passwordConfirm });
  };

  useEffect(() => {
    if (useAuth.currentUser) {
      router.push({
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
          <h3>Registration</h3>
        </Header>
        <Form onSubmit={localAuth}>
          <InputForm
            id="email"
            placeholder="Email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputForm
            id="password"
            placeholder="Password"
            type="password"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputForm
            id="passwordConfirm"
            placeholder="Password Confirmation"
            type="password"
            autoComplete="new-password"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
          <Button type="submit">Sign up</Button>
          <span>Already have an account?</span>{" "}
          <Link href="/auth/login" passHref={true}>
            <a className="login">Click here</a>
          </Link>
        </Form>
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

  .login {
    color: var(--primary-color);
  }
`;
