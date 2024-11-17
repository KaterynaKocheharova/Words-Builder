import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getWordsCategories } from "./operations";
import { type Option } from "../../components/CommonComponents/CategoriesSelect/CategoriesSelect";
import { type BaseSliceState } from "../types";
import { handleError } from "../auth/slice";

type CategoriesState = {
  categories: Option[];
} & BaseSliceState;

type WordsDataPayload = Option[];

const initialState: CategoriesState = {
  categories: [],
  isLoading: false,
  error: "",
};

const word = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = "Registering. Please, wait";
      })
      .addCase(registerUser.fulfilled, handleGetUserInfo)
      .addCase(registerUser.rejected, handleError)
      .addCase(refreshUser.pending, (state) => {
        state.isLoading = "Refreshing your data. Please, wait";
      })
      .addCase(refreshUser.fulfilled, handleGetUserInfo)
      .addCase(refreshUser.rejected, handleError)
      .addCase(loginUser.pending, (state) => {
        state.isLoading = "Registering.Please, wait";
      })
      .addCase(loginUser.fulfilled, handleGetUserInfo)
      .addCase(loginUser.rejected, handleError)
      .addCase(logoutUser.pending, (state) => {
        state.isLoading = "Loginin out. Please, wait";
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.isLoggedIn = false;
        state.isLoading = "";
        state.error = "";
        state.user.name = "";
        state.user.email = "";
        state.token = "";
      })
      .addCase(logoutUser.rejected, handleError);
  },
});

export const authReducer = auth.reducer;
