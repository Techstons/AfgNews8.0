import { cardArticleFields } from "@hooks/utils/queries/common";

const getAllLatest = `
    query {
        articleCollection(order: sys_publishedAt_DESC, limit: 8) {
            ${cardArticleFields}

        }
    }
`;

export default getAllLatest;
