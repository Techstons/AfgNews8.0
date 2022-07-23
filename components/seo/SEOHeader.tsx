import Head from "next/head";

interface ISEO {
  title?: string;
  description?: string;
  author?: string;
  keywords?: string[];
  siteName?: string;
  canonical: string;
  ogImage?: string;
  ogType?: string;
  twitterHandle?: string;
}

const DOMAIN = "https://afgnews.vercel.app";
const DEFAULT_OG_IMAGE =
  "https://storage.googleapis.com/brandflow-bucket/personal/blog/portfolio-og.jpg"; // TODO: Change default image to something more relevant

const SEOHeader = ({
  title = "AFGNews | #1 News Source for Afghanistan",
  description = "AFGNews is the #1 news source for Afghanistan. We are the only news source in the world that provides the latest news and updates on Afghanistan.",
  keywords = ["afghanistan", "news", "latest", "updates"],
  author = "AFGNews",
  siteName = "AFGNews",
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  twitterHandle = "@AFGNEWS_",
}: ISEO) => {
  const slug = canonical?.toLowerCase();

  return (
    <Head>
      <title key="title">{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(",")} />
      <meta name="author" content={author} />
      <meta key="og_type" property="og:type" content={ogType} />
      <meta key="og_title" property="og:title" content={title} />
      <meta
        key="og_description"
        property="og:description"
        content={description}
      />
      <meta key="og_locale" property="og:locale" content="en_IE" />
      <meta
        key="og_url"
        property="og:url"
        content={`${DOMAIN}/${canonical ? slug : ""}`}
      />
      <meta key="og_site_name" property="og:site_name" content={siteName} />
      <meta
        key="og_image"
        property="og:image"
        content={ogImage ?? DEFAULT_OG_IMAGE}
      />
      <meta key="og_image:alt" property="og:image:alt" content={title} />
      <meta key="og_image:width" property="og:image:width" content="1200" />
      <meta key="og_image:height" property="og:image:height" content="630" />
      <meta name="robots" content="index,follow" />
      <meta
        key="twitter:card"
        name="twitter:card"
        content="summary_large_image"
      />
      <meta key="twitter:site" name="twitter:site" content={twitterHandle} />
      <meta
        key="twitter:creator"
        name="twitter:creator"
        content={twitterHandle}
      />
      <meta key="twitter:title" property="twitter:title" content={title} />
      <meta
        key="twitter:description"
        property="twitter:description"
        content={description}
      />
      <link rel="canonical" href={`${DOMAIN}/${canonical ? slug : ""}`} />
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
  );
};

export default SEOHeader;
