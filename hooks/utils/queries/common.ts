export const articleFields = `
                items {
                    title
                    featuredImage
                    excerpt
                    slug
                    category {
                        name
                    }
                    body {
                        json
                    }
                    sys {
                        publishedAt
                    }
                    author {
                        name
                    }
                }`;

export const cardArticleFields = `
            items {
                title
                featuredImage
                slug
                category {
                    name
                }
                excerpt
                sys {
                    publishedAt
                }
            }`;
