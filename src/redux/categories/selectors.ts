import { type RootState } from "../store";

type SelectCategories = (state: RootState) => string[];

export const selectCategories: SelectCategories = (state) =>
  state.wordsCategories.categories;
