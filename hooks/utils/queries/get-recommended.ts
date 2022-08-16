const getRecommendedQuery = `
    query getRecommended {
        articleCollection ( limit: 4, order:sys_publishedAt_DESC ) {
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
