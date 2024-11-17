import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setAuthHeader } from "../auth/operations";
export type CategoriesResponse = string[];


export const getWordsCategories = createAsyncThunk<
  CategoriesResponse,
  void,
  { rejectValue: string }
>("auth/getCategories", async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token; 

  if (!persistedToken) {
    return thunkAPI.rejectWithValue("No token available");
  }

  setAuthHeader(persistedToken); 

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
