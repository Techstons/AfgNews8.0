import { cardArticleFields } from "@hooks/utils/queries/common";

const getAllLatest = `
    query($locale: String) {
        articleCollection(order: sys_publishedAt_DESC, limit: 8, locale: $locale) {
            ${cardArticleFields}

        }
    }
`;

export default getAllLatest;
