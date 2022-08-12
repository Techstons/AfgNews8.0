const getAllCategoryQuery = `
query getCategoryCollectionQuery {
  categoryCollection {
    items {
      name
      slug
    }
  }
}
`;

export default getAllCategoryQuery;
