import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { type AuthResponse } from "./operations";
import { registerUser } from "./operations";
import { type BaseSliceState } from "../types";

type AuthState = {
  user: {
    name: string;
    email: string;
  };
  token: string;
  isLoggedIn: boolean;
  isLoading: string;
  error: null | Error | string;
};

type RegisterPayload = AuthResponse;

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

const handleError = <T, S extends BaseSliceState>(
  state: S,
  action: PayloadAction<T>
): void => {
  state.isLoading = "";

  if (action.payload instanceof Error) {
    state.error = action.payload.message;
  } else if (typeof action.payload === "string") {
    state.error = action.payload;
  } else {
    state.error = "Unknown error";
  }
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = "registering";
      })
      .addCase(
        registerUser.fulfilled,
        (state, action: PayloadAction<RegisterPayload>) => {
          const { name, email, token } = action.payload;
          state.isLoading = "";
          state.error = null;
          state.isLoggedIn = true;
          state.user = {
            name,
            email,
          };
          state.token = token;
        }
      )
      .addCase(registerUser.rejected, handleError);
    //   .addCase(login.pending, (state) => {
    //     state.loading = "logining";
    //   })
    //   .addCase(login.fulfilled, (state, action) => {
    //     state.isLoggedIn = true;
    //     state.user = action.payload.user;
    //     state.token = action.payload.token;
    //     state.loading = null;
    //     state.error = null;
    //   })
    //   .addCase(login.rejected, handleError)
    //   .addCase(logOut.pending, (state) => {
    //     state.loading = "logining-out";
    //   })
    //   .addCase(logOut.fulfilled, (state) => {
    //     state.isLoggedIn = false;
    //     state.user = { name: null, email: null };
    //     state.token = null;
    //     state.loading = null;
    //     state.error = null;
    //   })
    //   .addCase(logOut.rejected, handleError)
    //   .addCase(refreshUser.pending, (state) => {
    //     state.loading = "refreshing";
    //   })
    //   .addCase(refreshUser.fulfilled, (state, action) => {
    //     state.isLoggedIn = true;
    //     state.user = action.payload;
    //     state.loading = null;
    //     state.error = null;
    //   })
    //   .addCase(refreshUser.rejected, (state, action) => {
    //     state.loading = null;
    //     state.error = action.payload;
    //   });
  },
});

export const authReducer = auth.reducer;
