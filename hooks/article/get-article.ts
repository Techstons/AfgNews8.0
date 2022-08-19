import { normalizeArticle } from "@hooks/normalize";
import { ArticleCollection } from "@hooks/types";
import fetcherApi from "@hooks/utils/fetch-api";
import {
  getArticleByCategoryQuery,
  getArticleBySlugQuery,
} from "@hooks/utils/queries";

export const getArticleBySlug = async (variables: {
  slug: string;
  locale?: string;
}) => {
  const res = await fetcherApi<ArticleCollection>(
    getArticleBySlugQuery,
    variables
  );

  const data = normalizeArticle(res.articleCollection.items);

  return data[0];
};

export const getArticleByCategory = async (variables: {
  category: string;
  limit: number;
  locale?: string;
}) => {
  const res = await fetcherApi<ArticleCollection>(
    getArticleByCategoryQuery,
    variables
  );

  return normalizeArticle(res.articleCollection.items);
};
