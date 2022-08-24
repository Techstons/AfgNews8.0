import { Article as ComponentArticle } from "@components/types";
import { normalizeArticle } from "@hooks/normalize";
import { Article } from "@hooks/types";
import fetcherApi from "@hooks/utils/fetch-api";
import { getArticlesCtxQuery } from "@hooks/utils/queries";

type CategoryKeys =
  | "Home"
  | "World"
  | "Business"
  | "Tech"
  | "Health"
  | "Sports"
  | "Crypto";

type ArticleCtx = {
  [key in CategoryKeys]: {
    items: Article[];
  };
};

export type ReturnValue = {
  [key in CategoryKeys]: {
    items: ComponentArticle[];
  };
};

export const getArticlesCtx = async (variables?: { locale?: string }) => {
  const res = await fetcherApi<ArticleCtx>(getArticlesCtxQuery, variables);

  let temp: ReturnValue = {
    Home: {
      items: [],
    },
    World: {
      items: [],
    },
    Business: {
      items: [],
    },
    Tech: {
      items: [],
    },
    Health: {
      items: [],
    },
    Sports: {
      items: [],
    },
    Crypto: {
      items: [],
    },
  };

  for (const [k, v] of Object.entries(res)) {
    temp[k as CategoryKeys].items = normalizeArticle(v.items);
  }

  return temp;
};
