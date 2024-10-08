import { normalizeArticle } from '@hooks/normalize';
import { ArticleCollection } from '@hooks/types';
import fetcherApi from '@hooks/utils/fetch-api';
import { getAllLatestQuery } from '@hooks/utils/queries';

export const getAllLatest = async (variables?: { locale?: string }) => {
  const res = await fetcherApi<ArticleCollection>(getAllLatestQuery, variables);

  // console.log(res);
  return normalizeArticle(res.articleCollection.items);
};
