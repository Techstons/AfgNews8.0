import { CategoryCollection } from "@hooks/types";
import fetcherApi from "@hooks/utils/fetch-api";
import { getAllCategoryQuery } from "@hooks/utils/queries";

export const getAllCategories = async (variables?: { locale?: string }) => {
  const res = await fetcherApi<CategoryCollection>(
    getAllCategoryQuery,
    variables
  );

  return res.categoryCollection.items;
};
