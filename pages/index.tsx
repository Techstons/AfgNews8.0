import { Header, Section } from "@components/main";
import {
  CurrencyWidget,
  TwitterFeedWidget,
  WeatherWidget,
} from "@components/widgets";
import { tweetsFetcher } from "@hooks/twitterApi";
import data from "@test-data";
import { TwitterData } from "@types";
import { InferGetStaticPropsType } from "next";
import { useState } from "react";

export async function getStaticProps() {
  const res = await tweetsFetcher;
  const tweets = await res.json();

  return {
    props: {
      tweets,
      data,
    }, // will be passed to the page component as props
  };
}

const Home = ({
  tweets,
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [currencies, setCurrencies] = useState<any>();
  const [weather, setWeather] = useState<any>();

  console.log(tweets);

  // useEffect(() => {
  //   const col = async () => {
  //     setCurrencies(await currencyFetcher);
  //   };
  //   console.log(currencies);

  //   col();
  // }, []);

  // useEffect(() => {
  //   const col = async () => {
  //     setWeather(await weatherFetcher);
  //   };

  //   col();
  // }, []);

  return (
    <>
      <Header />
      <Section
        card={data.mainPage.header}
        variant="primary"
        title="Top News"
        slug="/"
      />
      <Section
        card={data.mainPage.header}
        variant="secondary"
        position="left"
        title="Business"
        slug="/business"
      >
        <CurrencyWidget data={currencies} />
      </Section>
      <Section
        card={data.mainPage.header}
        variant="tertiary"
        title="Health"
        slug="/health"
      ></Section>
      <Section
        card={data.mainPage.header}
        variant="secondary"
        position="right"
        title="Sport"
        slug="/sport"
      >
        <WeatherWidget data={weather} />
      </Section>
      <Section
        card={data.mainPage.header}
        variant="quaternary"
        title="World"
        slug="/world"
      >
        <TwitterFeedWidget data={tweets.data} meta={tweets.meta} />
      </Section>
      <Section
        card={data.mainPage.header}
        variant="tertiary"
        title="ARTS & CULTURE"
        slug="/arts-and-culture"
      ></Section>
      <Section
        card={data.mainPage.header}
        variant="tertiary"
        title="SCIENCE & TECHNOLOGY"
        slug="/science-and-technology"
      ></Section>
    </>
  );
};

export default Home;
