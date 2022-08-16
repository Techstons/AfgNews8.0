import { normalizeArticle } from "@hooks/normalize";
import { ArticleCollection } from "@hooks/types";
import fetcherApi from "@hooks/utils/fetch-api";
import { getRecommendedQuery } from "@hooks/utils/queries";

export const getRecommended = async () => {
  const res = await fetcherApi<ArticleCollection>(getRecommendedQuery);

  return normalizeArticle(res.articleCollection.items);
};
