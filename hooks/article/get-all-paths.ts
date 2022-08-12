import fetcherApi from "@hooks/utils/fetch-api";
import { getAllArticlePathsQuery } from "@hooks/utils/queries";

type Slugs = {
  articleCollection: {
    items: {
      slug: string;
    }[];
  };
};

export const getAllArticlePaths = async () => {
  const res = await fetcherApi<Slugs>(getAllArticlePathsQuery);

  return res.articleCollection.items.map(({ slug }) => slug);
};
