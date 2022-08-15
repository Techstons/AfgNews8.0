import { articleFields } from "./common";

const getArticlesCtxQuery = `
query getArticlesCtxQuery {
  Home:articleCollection(order: sys_publishedAt_DESC, limit: 11)  {
      ${articleFields}
  }
  World:articleCollection(order: sys_publishedAt_DESC, where: {category: {name: "World"}}, limit: 4) {
      ${articleFields}
  }
  Business:articleCollection(order: sys_publishedAt_DESC, where: {category: {name: "Business"}}, limit: 4) {
      ${articleFields}
  }
  Tech:articleCollection(order: sys_publishedAt_DESC, where: {category: {name: "Tech & Science"}}, limit: 4) {
      ${articleFields}
  }
  Health:articleCollection(order: sys_publishedAt_DESC, where: {category: {name: "Health"}}, limit: 4) {
      ${articleFields}
  }
  Sports:articleCollection(order: sys_publishedAt_DESC, where: {category: {name: "Sports"}}, limit: 4) {
      ${articleFields}
  }
}
`;

export default getArticlesCtxQuery;
