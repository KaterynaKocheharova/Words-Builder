import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export type CategoriesResponse = string[];

export const getWordsCategories = createAsyncThunk<
  CategoriesResponse,
  void,
  { rejectValue: string }
>("wordsCategories/getCategories", async (_, thunkAPI) => {
  try {
    const { data } = await axios.get<CategoriesResponse>("/words/categories");
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return thunkAPI.rejectWithValue(error.message);
    } else {
      return thunkAPI.rejectWithValue("Something went wrong");
    }
  }
});
