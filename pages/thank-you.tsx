import { SEOHeader } from "@components/seo";
import { Container } from "@components/ui";
import styled from "@emotion/styled";
import { Check } from "@styled-icons/material";

const Success = () => {
  return (
    <Container>
      <SEOHeader canonical="thank-you" />
      <Wrapper>
        <h1>Thank you</h1>
        <Check
          size={400}
          style={{
            color: "var(--primary-color)",
          }}
        />
        <p>You have successfully donated to us!</p>
      </Wrapper>
    </Container>
  );
};

export default Success;

const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  text-align: center;
`;
