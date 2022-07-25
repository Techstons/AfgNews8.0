import { Button, Container, Divider, InputForm } from "@components/ui";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";

const Donate = () => {
  return (
    <Container>
      <Wrapper>
        <Form>
          <Divider>Enter amount</Divider>
          <InputForm type="number" placeholder="Amount..." />
          <InputForm
            type="text"
            placeholder="First name"
            autoComplete="given-name"
          />
          <InputForm
            type="text"
            placeholder="Last name..."
            autoComplete="family-name"
          />
          <InputForm
            type="email"
            placeholder="Email address..."
            autoComplete="email"
          />
          <InputForm
            type="text"
            placeholder="Address..."
            autoComplete="street-address"
          />
          <TermLinks>
            <Link href="/terms-and-conditions">
              <a>Terms and Conditions</a>
            </Link>
            <span>|</span>
            <Link href="/frequently-asked-questions">
              <a>Frequently asked questions</a>
            </Link>
          </TermLinks>

          <Button>SUBMIT</Button>
        </Form>
        <CTA>
          <Image
            src="/assets/crowdfunding-new.jpg"
            alt="News reporters"
            layout="responsive"
            width="1980"
            height="1080"
          />
          <h1>Support Free and Fearless Journalism</h1>

          <p>
            When Power insists, "you're either with us or against us," the space
            for a diversity of voices and ideas shrinks. When hate and anger are
            weaponized, it creates a spiral of silence. When critical questions
            are simplistically equated with an anti-government agenda, it
            requires courage to hold decision-makers accountable. We launched
            Rappler in 2012 to marry the highest standards of journalism with
            technology to strengthen Philippine democracy. We don't want to just
            give you the news; we aim to promote critical thinking,
            self-reflection, and empathy to encourage informed decision-making.
            Help us stay free and independent of political pressure and
            commercial interests.
          </p>
        </CTA>
      </Wrapper>
    </Container>
  );
};

export default Donate;

const Wrapper = styled.div`
  display: grid;
  gap: 1.5rem;

  @media only screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const TermLinks = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 0.9rem;
  color: var(--primary-color);
`;

const CTA = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
