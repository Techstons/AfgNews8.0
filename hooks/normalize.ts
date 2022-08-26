import { Article } from "@hooks/types";

export const normalizeArticle = (article?: Article[]) => {
  return !!article && article?.length !== 0
    ? article.map((item) => {
        return {
          ...item,
          featuredImage: {
            url: item.featuredImage[0].secure_url,
            width: item.featuredImage[0].width,
            height: item.featuredImage[0].height,
            id: item.featuredImage[0].public_id,
          },
          category: item.category.name,
          createdAt: item?.sys?.publishedAt ?? "",
          author: item?.author?.name ?? "",
        };
      })
    : [];
};
