import { Header, Section } from "@components/main";
import { SEOHeader } from "@components/seo";
import { getArticles } from "@hooks/article";
import { getCurrency } from "@hooks/thirdpartyApi";
import { InferGetStaticPropsType } from "next";
import { TwitterTimelineEmbed } from "react-twitter-embed";

export async function getStaticProps() {
  const articles = await getArticles();
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
  console.log(articles);
  return (
    <></>
    // <>
    //   <SEOHeader canonical="/" />
    //   <Header articles={articles?.allArticles} />
    //   <Section
    //     cards={
    //       articles?.perCategory.find((d) => d.category === "World")?.articles
    //     }
    //     variant="quaternary"
    //     title="World"
    //     slug="/world"
    //   >
    //     <TwitterTimelineEmbed
    //       sourceType="profile"
    //       screenName="AFGNEWS_"
    //       autoHeight={true}
    //     />
    //   </Section>
    //   <Section
    //     cards={
    //       articles?.perCategory.find((d) => d.category === "Business")?.articles
    //     }
    //     variant="tertiary"
    //     position="left"
    //     title="Business"
    //     slug="/business"
    //   />
    //   <Section
    //     cards={
    //       articles?.perCategory.find(
    //         (d) => d.category === "Science" || d.category === "Technology"
    //       )?.articles
    //     }
    //     variant="tertiary"
    //     title="Tech & Science"
    //     slug="/tech-and-science"
    //   ></Section>

    //   <Section
    //     cards={
    //       articles?.perCategory.find((d) => d.category === "Health")?.articles
    //     }
    //     variant="tertiary"
    //     title="Health"
    //     slug="/health"
    //   ></Section>
    //   <Section
    //     cards={
    //       articles?.perCategory.find((d) => d.category === "Sports")?.articles
    //     }
    //     variant="tertiary"
    //     title="Sports"
    //     slug="/sports"
    //   ></Section>
    // </>
  );
};

export default Home;
