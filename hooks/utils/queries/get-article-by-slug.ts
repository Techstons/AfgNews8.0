import { articleFields } from "./common";

const getArticleBySlugQuery = `
    query getArticleBySlug($slug: String!) {
        articleCollection (where: { slug: $slug }, limit: 1) {
            ${articleFields}
        }
    }
`;

export default getArticleBySlugQuery;
