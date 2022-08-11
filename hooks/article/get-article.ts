import { ArticleCollection } from "@hooks/types";
import fetcherApi from "@hooks/utils/fetch-api";
import { getArticleBySlug } from "@hooks/utils/queries";

export const getArticleByProp = async (slug: string) => {
  const res = await fetcherApi<ArticleCollection>(getArticleBySlug, slug);

  const data = res.articleCollection.items[0];

  return data;
};
