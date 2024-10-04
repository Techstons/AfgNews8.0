import { cardArticleFields } from './common';

const getArticlesCtxQuery = `
query getArticlesCtxQuery($locale: String) {
  Home:articleCollection(order: sys_publishedAt_DESC, where: {category: {slug: "afg"}}, limit: 3, locale: $locale)  {
      ${cardArticleFields}
  }
  World:articleCollection(order: sys_publishedAt_DESC, where: {category: {slug: "world"}}, limit: 4, locale: $locale)  {
      ${cardArticleFields}
  }
  Business:articleCollection(order: sys_publishedAt_DESC, where: {category: {slug: "business"}}, limit: 4, locale: $locale)  {
      ${cardArticleFields}
  }
  Tech:articleCollection(order: sys_publishedAt_DESC, where: {category: {slug: "tech-and-science"}}, limit: 4, locale: $locale) {
      ${cardArticleFields}
  }
  Crypto:articleCollection(order: sys_publishedAt_DESC, where: {category: {slug: "crypto"}}, limit: 4, locale: $locale)  {
      ${cardArticleFields}
  }
  Health:articleCollection(order: sys_publishedAt_DESC, where: {category: {slug: "health"}}, limit: 4, locale: $locale) {
      ${cardArticleFields}
  }
  Sports:articleCollection(order: sys_publishedAt_DESC, where: {category: {slug: "sports"}}, limit: 4, locale: $locale) {
      ${cardArticleFields}
  }
}
`;

export default getArticlesCtxQuery;
