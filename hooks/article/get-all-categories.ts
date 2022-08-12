import { CategoryCollection } from "@hooks/types";
import fetcherApi from "@hooks/utils/fetch-api";
import { getAllCategoryQuery } from "@hooks/utils/queries";

export const getAllCategories = async () => {
  const res = await fetcherApi<CategoryCollection>(getAllCategoryQuery);

  return res.categoryCollection.items;
};
