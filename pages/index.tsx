import { Header, Section } from "@components/main";
import { SEOHeader } from "@components/seo";
import { getArticlesCtx } from "@hooks/article";
import { getCurrency } from "@hooks/thirdpartyApi";
import { InferGetStaticPropsType } from "next";
import { TwitterTimelineEmbed } from "react-twitter-embed";

export async function getStaticProps() {
  const articles = await getArticlesCtx();
  const currencies = await getCurrency();

  return {
    props: {
      // tweets,
      articles,
      currencies,
    },
    // will be passed to the page component as props
    revalidate: 60,
  };
}

const Home = ({ articles }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <SEOHeader canonical="/" />
      <Header articles={articles[0].All} />
      <Section
        cards={articles[1].World}
        variant="quaternary"
        title="World"
        slug="/world"
      >
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="AFGNEWS_"
          autoHeight={true}
        />
      </Section>
      <Section
        cards={articles[2].Business}
        variant="tertiary"
        position="left"
        title="Business"
        slug="/business"
      />
      <Section
        cards={articles[3].Tech}
        variant="tertiary"
        title="Tech & Science"
        slug="/tech-and-science"
      ></Section>

      <Section
        cards={articles[4].Health}
        variant="tertiary"
        title="Health"
        slug="/health"
      ></Section>
      <Section
        cards={articles[5].Sports}
        variant="tertiary"
        title="Sports"
        slug="/sports"
      ></Section>
    </>
  );
};

export default Home;
