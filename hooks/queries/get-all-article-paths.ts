const getAllArticlePaths = `
    query getAllArticlePaths {
        articleCollection {
        items {
        slug
            }
        }
    }`;

export default getAllArticlePaths;
