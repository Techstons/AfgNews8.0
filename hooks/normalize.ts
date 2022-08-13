import { Article } from "@hooks/types";

export const normalizeArticle = (article: Article[]) => {
  return article.map((item) => {
    return {
      ...item,
      featuredImage: {
        url: item.featuredImage[0].url,
        width: item.featuredImage[0].width,
        height: item.featuredImage[0].height,
        id: item.featuredImage[0].public_id,
      },
      category: item.category.name,
      createdAt: item.sys.publishedAt,
    };
  });
};
