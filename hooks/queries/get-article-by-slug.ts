const getArticleBySlug = `
    query getArticleBySlug($slug: String!) {
        articleCollection (where: { slug: $slug }, limit: 1) {
                items {
                title
                category {
                name
                }
            }
        }
    }
`;

export default getArticleBySlug;
