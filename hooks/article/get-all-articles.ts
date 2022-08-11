import { Article } from "@components/types";
import fetcherApi from "@hooks/utils/fetch-api";
import { normalizeArticle } from "../normalize";
import { ArticleCollection } from "../types";
import { getAllArticlesQuery } from "../utils/queries";

export const getArticlesOrdered = async () => {};

export const getArticles = async () => {
  const res = await fetcherApi<ArticleCollection>(getAllArticlesQuery);

  return normalizeArticle(res.articleCollection.items);
};
