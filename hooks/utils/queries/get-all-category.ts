const getAllCategoryQuery = `
query getCategoryCollectionQuery {
  categoryCollection {
    items {
      slug
    }
  }
}
`;

export default getAllCategoryQuery;
