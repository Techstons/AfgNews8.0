import { Article } from "@components/types";
import { normalizeArticle } from "@hooks/normalize";
import { getDocs, query, where } from "firebase/firestore";
import { articleCollection } from "utils/firebase";

export const getArticleByProp = async (prop: keyof Article, value: string) => {
  const q = query(articleCollection, where(prop, "==", value));
  const articleDoc = await getDocs(q);

  return normalizeArticle(articleDoc);
};
