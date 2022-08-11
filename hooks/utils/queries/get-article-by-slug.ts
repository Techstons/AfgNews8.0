const getArticleBySlugQuery = `
    query getArticleBySlug($slug: String!) {
        articleCollection (where: { slug: $slug }, limit: 1) {
                items {
                    title
                    featuredImage
                    excerpt
                    category {
                        name
                    }
                    body {
                        json
                    }
                }
        }
    }
`;

export default getArticleBySlugQuery;
