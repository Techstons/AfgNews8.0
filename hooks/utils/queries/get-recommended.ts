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
                sys {
                    publishedAt
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
                 sys {
                    publishedAt
                }
            }
        }
    }
`;

export default getRecommendedQuery;
