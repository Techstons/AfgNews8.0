import { Header, Section } from "@components/main";
import { Article } from "@components/types";
import {
  CurrencyWidget,
  TwitterFeedWidget,
  WeatherWidget,
} from "@components/widgets";
import { getDocs, orderBy, query } from "firebase/firestore";
import { InferGetStaticPropsType } from "next";
import { useState } from "react";
import { articleCollection } from "utils/firebase";

export async function getStaticProps() {
  // const res = await tweetsFetcher;
  // const tweets = await res.json();
  const q = query(articleCollection, orderBy("createdAt", "desc"));

  const snapshot = await getDocs(q);
  const data = snapshot.docs.map(
    (doc) => ({ id: doc.id, ...doc.data() } as Article)
  );

  return {
    props: {
      // tweets,
      articles: {
        data,
      },
    },
    // will be passed to the page component as props
    revalidate: 60,
  };
}

const Home = ({ articles }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [currencies, setCurrencies] = useState<any>();
  const [weather, setWeather] = useState<any>();
  const [tweets, setTweets] = useState<any>();

  return (
    <>
      <Header articles={articles.data} />
      <Section
        cards={articles.data}
        variant="primary"
        title="Top News"
        slug="/"
      />
      <Section
        cards={articles.data.filter((item) => item.category === "Business")}
        variant="secondary"
        position="left"
        title="Business"
        slug="/business"
      >
        <CurrencyWidget data={currencies} />
      </Section>
      <Section
        cards={articles.data.filter((item) => item.category === "Health")}
        variant="tertiary"
        title="Health"
        slug="/health"
      ></Section>
      <Section
        cards={articles.data.filter((item) => item.category === "Sports")}
        variant="secondary"
        position="right"
        title="Sports"
        slug="/sports"
      >
        <WeatherWidget data={weather} />
      </Section>
      <Section
        cards={articles.data.filter((item) => item.category === "World")}
        variant="quaternary"
        title="World"
        slug="/world"
      >
        <TwitterFeedWidget data={tweets?.data} meta={tweets?.meta} />
      </Section>
      <Section
        cards={articles.data.filter(
          (item) => item.category === "Arts & Culture"
        )}
        variant="tertiary"
        title="ARTS & CULTURE"
        slug="/arts-and-culture"
      ></Section>
      <Section
        cards={articles.data.filter(
          (item) => item.category === "Science & Technology"
        )}
        variant="tertiary"
        title="SCIENCE & TECHNOLOGY"
        slug="/science-and-technology"
      ></Section>
    </>
  );
};

export default Home;
