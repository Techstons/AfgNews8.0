const getRecommendedQuery = `
    query getRecommended($locale: String, $category: String!) {
        latest:articleCollection ( limit: 3, order:sys_publishedAt_DESC, locale: $locale) {
            items {
                title
                featuredImage
                slug
                category {
                    name
                }
            }
        }
        recommended:articleCollection ( limit: 3, order:sys_publishedAt_DESC, locale: $locale , where: {category: {name: $category}}) {
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
