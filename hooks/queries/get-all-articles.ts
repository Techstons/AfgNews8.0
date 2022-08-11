const getAllArticlesQuery = `
    query getAllArticles {
        articleCollection {
        items {
        title
        slug
        category {
            name
                }
        excerpt
            }
        }
    }`;

export default getAllArticlesQuery;
