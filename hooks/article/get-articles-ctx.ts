import { normalizeArticle } from "@hooks/normalize";
import { Article } from "@hooks/types";
import fetcherApi from "@hooks/utils/fetch-api";
import { getArticlesCtxQuery } from "@hooks/utils/queries";

type ArticleCtx = {
  All: {
    items: Article[];
  };
  World: {
    items: Article[];
  };
  Business: {
    items: Article[];
  };
  Tech: {
    items: Article[];
  };
  Health: {
    items: Article[];
  };
  Sports: {
    items: Article[];
  };
};

export const getArticlesCtx = async () => {
  const res = await fetcherApi<ArticleCtx>(getArticlesCtxQuery);

  const normalized = Object.entries(res).map((entry) => {
    const [key, value] = entry;
    return {
      [key]: normalizeArticle(value.items),
    };
  });

  console.log(normalized);

  return normalized;
};
