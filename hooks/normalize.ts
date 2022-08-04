import { Article } from "@components/types";
import { DocumentData, QuerySnapshot } from "firebase/firestore";

export const normalizeArticle = (snapshot: QuerySnapshot<DocumentData>) => {
  return snapshot.docs.map(
    (doc) =>
      ({
        id: doc.id ?? "",
        createdAt: doc.data()?.createdAt?.toDate().toISOString() ?? "",
        author: doc.data()?.author ?? "",
        title: doc.data()?.title ?? "",
        category: doc.data()?.category ?? "",
        body: doc.data()?.body ?? "",
        excerpt: doc.data()?.excerpt ?? "",
        featuredImage: doc.data()?.featuredImage ?? "",
        slug: doc.data()?.slug ?? "",
      } as Article)
  );
};

export const generateSlug = (title: string) => {
  return title.toLowerCase().replace(/[^\w-]+/g, "-");
};
