import { createAsyncThunk } from "@reduxjs/toolkit";
import { type RootState } from "../store.ts";

import axios from "axios";

type RegisterCredentials = {
  email: string;
  password: string;
  name: string;
};

export type AuthResponse = {
  email: string;
  name: string;
  token: string;
};

axios.defaults.baseURL = "https://vocab-builder-backend.p.goit.global/api";

const setAuthHeader = (token: string): void => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const registerUser = createAsyncThunk<
  AuthResponse,
  RegisterCredentials,
  { rejectValue: string }
>("auth/register", async (credentials: RegisterCredentials, thunkAPI) => {
  try {
    const { data } = await axios.post<AuthResponse>(
      "/users/signup",
      credentials
    );
    setAuthHeader(data.token);
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return thunkAPI.rejectWithValue(error.message);
    } else {
      return thunkAPI.rejectWithValue("Something went wrong with registration");
    }
  }
});

type RefreshUserResponse = AuthResponse & { _id: string };

export const refreshUser = createAsyncThunk<
  RefreshUserResponse,
  void,
  { state: RootState; rejectValue: string }
>(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (!persistedToken) {
      return thunkAPI.rejectWithValue("No token available");
    }

    setAuthHeader(persistedToken);
    try {
      const { data } = await axios.get<RefreshUserResponse>("/users/current");
      return data;
    } catch (error) {
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      } else if (typeof error === "string") {
        return thunkAPI.rejectWithValue(error);
      } else {
        return thunkAPI.rejectWithValue("Something went wrong during refresh");
      }
    }
  },
  {
    condition(_, thunkAPI) {
      const state = thunkAPI.getState() as RootState;
      return state.auth.token !== null;
    },
  }
);

// export const login = createAsyncThunk(
//   "auth/login",
//   async (credentials, thunkAPI) => {
//     try {
//       const { data } = await axios.post("/users/login", credentials);
//       setAuthHeader(data.token);
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const logOut = createAsyncThunk("auth/logOut", async (_, thunkAPI) => {
//   try {
//     const { data } = await axios.post("/users/logOut");
//     clearAuthHeader();
//     return data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });
