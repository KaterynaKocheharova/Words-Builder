import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getWordsCategories } from "./operations";
import { type BaseSliceState } from "../types";
import { handleError } from "../auth/slice";

type CategoriesState = {
  categories: string[];
} & BaseSliceState;

export type WordsCategoriesPayload = string[];

const initialState: CategoriesState = {
  categories: [],
  isLoading: false,
  error: "",
};

const wordsCategoriesSlice = createSlice({
  name: "wordsCategories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getWordsCategories.pending, (state) => {
        state.isLoading = "getting-categories";
      })
      .addCase(
        getWordsCategories.fulfilled,
        (state, action: PayloadAction<WordsCategoriesPayload>) => {
          state.categories = action.payload;
          state.isLoading = false;
          state.error = "";
        }
      )
      .addCase(getWordsCategories.rejected, handleError);
  },
});

export const wordsCategoriesReducer = wordsCategoriesSlice.reducer;
