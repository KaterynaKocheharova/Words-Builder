import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { type AuthResponse } from "./operations";
import { register } from "./operations";

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

const handleError = <T, S>(state: S, action: PayloadAction<T>): void => {
    if ('isLoading' in state) {
      state.isLoading = "";  // Assuming that isLoading is a property of the state
    }
  
    if (action.payload instanceof Error) {
      (state as any).error = action.payload.message;
    } else if (typeof action.payload === "string") {
      (state as any).error = action.payload;
    } else {
      (state as any).error = "Unknown error";
    }
  };

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = "registering";
      })
      .addCase(
        register.fulfilled,
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
      .addCase(register.rejected, handleError);
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
