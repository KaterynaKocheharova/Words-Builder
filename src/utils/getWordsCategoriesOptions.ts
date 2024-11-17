import { type Option } from "../components/CommonComponents/CategoriesSelect/CategoriesSelect";

type GetWordsCategoriesOptions = (arg: string[]) => Option[];

export const getWordsCategoriesOptions: GetWordsCategoriesOptions = (
  categories
) => {
  return categories.map((category) => {
    return {
      value: category,
      label: category.charAt(0).toUpperCase() + category.slice(1),
    };
  });
};
