import { articleFields } from "./common";

const getArticleByCategory = `
    query getArticleByCategory($category: String!, $limit: Int!)  {
        articleCollection (where: { category: {name: $category} }, limit: $limit) {
            ${articleFields}
        }
    }
`;

export default getArticleByCategory;
