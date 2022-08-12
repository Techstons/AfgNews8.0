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
                }`;
