import { Article } from "@components/types";
import { generateSlug } from "@hooks/normalize";
import { addDoc } from "firebase/firestore";
import { articleCollection } from "utils/firebase";

export const postArticle = async (article: Partial<Article>) => {
  if (
    !article.title ||
    !article.body ||
    !article.category ||
    !article.excerpt ||
    !article.featuredImage ||
    !article.author
  ) {
    return alert("Must complete all fields");
  }

  const slug = generateSlug(article.title);

  const newArticle = {
    ...article,
    slug,
    createdAt: new Date(),
  };

  try {
    await addDoc(articleCollection, newArticle);
  } catch (error) {
    console.error(error);
  }
};
