import { cardArticleFields } from "./common";

const getArticlesCtxQuery = `
query getArticlesCtxQuery($locale: String!) {
  Home:articleCollection(order: sys_publishedAt_DESC, limit: 11, locale: $locale)  {
      ${cardArticleFields}
  }
  World:articleCollection(order: sys_publishedAt_DESC, where: {category: {name: "World"}}, limit: 4, locale: $locale)  {
      ${cardArticleFields}
  }
  Business:articleCollection(order: sys_publishedAt_DESC, where: {category: {name: "Business"}}, limit: 4, locale: $locale)  {
      ${cardArticleFields}
  }
  Tech:articleCollection(order: sys_publishedAt_DESC, where: {category: {name: "Tech & Science"}}, limit: 4, locale: $locale) {
      ${cardArticleFields}
  }
  Health:articleCollection(order: sys_publishedAt_DESC, where: {category: {name: "Health"}}, limit: 4, locale: $locale) {
      ${cardArticleFields}
  }
  Sports:articleCollection(order: sys_publishedAt_DESC, where: {category: {name: "Sports"}}, limit: 4, locale: $locale) {
      ${cardArticleFields}
  }
}
`;

export default getArticlesCtxQuery;
