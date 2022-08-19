import { articleFields } from "./common";

const getArticleByCategory = `
    query getArticleByCategory($category: String!, $limit: Int!, $locale: String)  {
        articleCollection (where: { category: { slug: $category } }, limit: $limit, locale: $locale) {
            ${articleFields}
        }
    }
`;

export default getArticleByCategory;
