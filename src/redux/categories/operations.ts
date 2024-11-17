import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

axios.defaults.baseURL = "https://vocab-builder-backend.p.goit.global/api";

export type CategoriesResponse = string[];

export const getWordsCategories = createAsyncThunk<
  CategoriesResponse,
  void,
  { rejectValue: string }
>("auth/register", async (_, thunkAPI) => {
  try {
    const { data } = await axios.get<CategoriesResponse>("/words/categories");
    console.log(data);
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return thunkAPI.rejectWithValue(error.message);
    } else {
      return thunkAPI.rejectWithValue("Something went wrong");
    }
  }
});
