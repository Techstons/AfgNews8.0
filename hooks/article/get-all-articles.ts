import { getDocs, limit, orderBy, query, where } from "firebase/firestore";
import { articleCollection } from "utils/firebase";
import { normalizeArticle } from "../normalize";
import data from "@test-data";

export const getArticlesOrdered = async () => {
  // All all latest article per category
  const results = await Promise.all(
    data.menuitems.map((item) => {
      const q = query(
        articleCollection,
        orderBy("createdAt", "desc"),
        where("category", "==", item.title),
        limit(4)
      );
      return getDocs(q);
    })
  );

  const q = query(articleCollection, orderBy("createdAt", "desc"), limit(11)); // Get all latest articles by default
  const allArticles = normalizeArticle(await getDocs(q));

  // check if article is empty
  if (allArticles.length === 0) {
    return null;
  }

  const perCategory = results.map((item, index) => {
    const normalized = normalizeArticle(item);
    return {
      category: data.menuitems[index].title,
      articles: normalized,
    };
  });

  return {
    allArticles,
    perCategory,
  };
};

export const getArticles = async () => {
  const docs = await getDocs(articleCollection);
  return normalizeArticle(docs);
};
