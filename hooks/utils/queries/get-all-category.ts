const getAllCategoryQuery = `
query getCategoryCollectionQuery($locale: String!) {
  categoryCollection(locale: $locale) {
    items {
      name
      slug
    }
  }
}
`;

export default getAllCategoryQuery;
