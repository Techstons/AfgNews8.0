import { Article as ComponentArticle } from "@components/types";
import { normalizeArticle } from "@hooks/normalize";
import { Article } from "@hooks/types";
import fetcherApi from "@hooks/utils/fetch-api";
import { getArticlesCtxQuery } from "@hooks/utils/queries";

type Keys = "Home" | "World" | "Business" | "Tech" | "Health" | "Sports";

type ArticleCtx = {
  [key in Keys]: {
    items: Article[];
  };
};

export type ReturnValue = {
  [key in Keys]: {
    items: ComponentArticle[];
  };
};

export const getArticlesCtx = async () => {
  const res = await fetcherApi<ArticleCtx>(getArticlesCtxQuery);

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
  };

  for (const [k, v] of Object.entries(res)) {
    temp[k as Keys].items = normalizeArticle(v.items);
  }

  return temp;
};
