import { normalizeArticle } from "@hooks/normalize";
import { ArticleCollection } from "@hooks/types";
import fetcherApi from "@hooks/utils/fetch-api";
import { getRecommendedQuery } from "@hooks/utils/queries";

export const getRecommended = async (variables?: { locale?: string }) => {
  const res = await fetcherApi<ArticleCollection>(
    getRecommendedQuery,
    variables
  );

  return normalizeArticle(res.articleCollection.items);
};
