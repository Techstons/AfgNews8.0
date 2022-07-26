import { Button, Container, Divider } from "@components/ui";
import styled from "@emotion/styled";
import { loadStripe, RedirectToCheckoutClientOptions } from "@stripe/stripe-js";
import Image from "next/image";
import { useState } from "react";

type Amount = {
  selected: boolean;
};

const Donate = () => {
  const [selectedPrice, setSelectedPrice] = useState<string>("$10");

  const price_ids: { [key: string]: string } = {
    // any: "price_1LPdVhI6dLdBU0wDoOMhWMv3",
    $10: "price_1LPe9nI6dLdBU0wDEmwsDdZj",
    $20: "price_1LPeA9I6dLdBU0wDJ7aMAGlM",
    $30: "price_1LPeAGI6dLdBU0wDT8jPE8eO",
    $60: "price_1LPeAOI6dLdBU0wDt3EONlBK",
  };

  const redirectToCheckout = async () => {
    console.log("redirectToCheckout");

    const item = {
      price: price_ids[selectedPrice],
      quantity: 1,
    };

    const checkoutOptions: RedirectToCheckoutClientOptions = {
      lineItems: [item],
      mode: "payment",
      successUrl: `${window.location.origin}/thank-you`,
      cancelUrl: `${window.location.origin}/donate`,
    };

    const STRIPE_KEY = process.env.STRIPE_KEY ?? "";

    const stripe = await loadStripe(STRIPE_KEY);

    const error = await stripe?.redirectToCheckout(checkoutOptions);

    console.log("Stripe checkout error", error?.error);
  };

  return (
    <Container>
      <Wrapper>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            necessitatibus nulla voluptates unde pariatur exercitationem veniam
            adipisci ducimus rem, corporis voluptate illo laudantium voluptatum,
            similique natus enim nostrum ad excepturi!
          </p>
        </CTA>
        <AmountWrapper>
          <Divider>Donate now</Divider>
          <AmountContainer>
            {Object.entries(price_ids).map((item, idx) => (
              <Amount
                key={idx}
                onClick={() => setSelectedPrice(item[0])}
                selected={selectedPrice === item[0]}
              >
                {item[0]}
              </Amount>
            ))}
          </AmountContainer>
          <Button onClick={redirectToCheckout} role="link">
            Pay with Stripe
          </Button>
        </AmountWrapper>
      </Wrapper>
    </Container>
  );
};

export default Donate;

const Wrapper = styled.div`
  display: grid;
  gap: 1.5rem;

  @media only screen and (min-width: 768px) {
    grid-template-columns: 0.7fr 1.3fr;
  }
`;

const AmountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const AmountContainer = styled.div`
  display: grid;
  gap: 1rem;

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);

    & div:last-child {
      grid-column: auto / span 3;
    }
  }
`;

const Amount = styled.div<Amount>`
  cursor: pointer;
  border-radius: var(--base-radius);
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 1rem 2rem;
  border: 1px solid;
  background-color: ${(props) =>
    props.selected ? "var(--primary-color)" : "inherit"};
  color: ${(props) => (props.selected ? "white" : "inherit")};
`;

const CTA = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
