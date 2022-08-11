const getArticleByCategory = `
    query getArticleByCategory($category: [String]!)  {
        articleCollection (where: { category: {name_in: $category} }, limit: 1) {
            items {
            title
            category {
            name
                    }
            featuredImage
            body {
            json
            } 
            excerpt         
            }
        }
    }
`;

export default getArticleByCategory;
