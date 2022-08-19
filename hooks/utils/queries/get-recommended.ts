const getRecommendedQuery = `
    query getRecommended($locale: String) {
        articleCollection ( limit: 4, order:sys_publishedAt_DESC, locale: $locale) {
            items {
                title
                featuredImage
                slug
                category {
                    name
                }
            }
        }
    }
`;

export default getRecommendedQuery;
