import { articleFields } from "./common";

const getAllArticlesQuery = `
    query getAllArticles {
        articleCollection {
            ${articleFields}
        }
    }`;

export default getAllArticlesQuery;
