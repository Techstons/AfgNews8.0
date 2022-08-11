const getAllArticlePathsQuery = `
    query getAllArticlePaths {
        articleCollection {
            items {
                slug
            }
        }
    }`;

export default getAllArticlePathsQuery;
