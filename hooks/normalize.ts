import { Article } from '@hooks/types';

export const normalizeArticle = (article?: Article[]) => {
  console.log(article);
  return !!article && article?.length !== 0
    ? article.map((item) => {
        return {
          ...item,
          featuredImage: {
            url: item?.featuredImage?.[0]?.secure_url || null,
            width: item?.featuredImage?.[0]?.width || null,
            height: item?.featuredImage?.[0]?.height || null,
            id: item?.featuredImage?.[0]?.public_id || null,
          },
          category: item.category.name,
          createdAt: item?.sys?.publishedAt ?? '',
          author: item?.author?.name ?? '',
        };
      })
    : [];
};
