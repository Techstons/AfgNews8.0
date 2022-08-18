import { cardArticleFields } from "./common";

const getArticlesCtxQuery = `
query getArticlesCtxQuery {
  Home:articleCollection(order: sys_publishedAt_DESC, limit: 11)  {
      ${cardArticleFields}
  }
  World:articleCollection(order: sys_publishedAt_DESC, where: {category: {name: "World"}}, limit: 4) {
      ${cardArticleFields}
  }
  Business:articleCollection(order: sys_publishedAt_DESC, where: {category: {name: "Business"}}, limit: 4) {
      ${cardArticleFields}
  }
  Tech:articleCollection(order: sys_publishedAt_DESC, where: {category: {name: "Tech & Science"}}, limit: 4) {
      ${cardArticleFields}
  }
  Health:articleCollection(order: sys_publishedAt_DESC, where: {category: {name: "Health"}}, limit: 4) {
      ${cardArticleFields}
  }
  Sports:articleCollection(order: sys_publishedAt_DESC, where: {category: {name: "Sports"}}, limit: 4) {
      ${cardArticleFields}
  }
}
`;

export default getArticlesCtxQuery;
