import { normalizeArticle } from "@hooks/normalize";
import { Article, ArticleCollection } from "@hooks/types";
import fetcherApi from "@hooks/utils/fetch-api";
import { getRecommendedQuery } from "@hooks/utils/queries";

interface GetRecommended {
  latest: {
    items: Article[];
  };
  recommended: {
    items: Article[];
  };
}

export const getRecommended = async (variables?: {
  locale?: string;
  category: string;
}) => {
  const res = await fetcherApi<GetRecommended>(getRecommendedQuery, variables);

  return {
    latest: normalizeArticle(res.latest.items),
    recommended: normalizeArticle(res.recommended.items),
  };
};
