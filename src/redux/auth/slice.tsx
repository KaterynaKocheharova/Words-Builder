import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { refreshUser, type AuthResponse } from "./operations";
import { registerUser, loginUser, logoutUser } from "./operations";
import { type BaseSliceState } from "../types";

type AuthState = {
  user: {
    name: string;
    email: string;
  };
  token: string;
  isLoggedIn: boolean;
  isLoading: string;
  error: string | undefined;
};

type UserDataPayload = AuthResponse;

const initialState: AuthState = {
  user: {
    name: "",
    email: "",
  },
  token: "",
  isLoggedIn: false,
  isLoading: "",
  error: "",
};

const handleError = <S extends BaseSliceState>(
  state: S,
  action: PayloadAction<string | undefined>
): void => {
  state.isLoading = "";
  state.error = action.payload;
};

const handleGetUserInfo = (
  state: AuthState,
  action: PayloadAction<UserDataPayload>
) => {
  const { name, email, token } = action.payload;
  state.isLoggedIn = true;
  state.isLoading = "";
  state.error = "";
  state.user.name = name;
  state.user.email = email;
  state.token = token;
};

const auth = createSlice({
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
