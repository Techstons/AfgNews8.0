import { articleFields } from "./common";

const getArticleBySlugQuery = `
    query getArticleBySlug($slug: String!, $locale: String!)  {
        articleCollection (where: { slug: $slug }, limit: 1, locale: $locale) {
            ${articleFields}
        }
    }
`;

export default getArticleBySlugQuery;
