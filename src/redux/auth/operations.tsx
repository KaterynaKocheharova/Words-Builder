import { createAsyncThunk } from "@reduxjs/toolkit";
import { type RootState } from "../store.ts";
import { type LoginFormValues } from "../../components/RegisterAndLoginPageComponents/LoginForm/LoginForm.tsx";

import axios from "axios";

type RegisterCredentials = {
  email: string;
  password: string;
  name: string;
};

type LoginCredentials = LoginFormValues;

export type AuthResponse = {
  email: string;
  name: string;
  token: string;
};

type LoginResponse = AuthResponse;

type LogoutResponse = {
  message: string;
};

export type RefreshUserResponse = AuthResponse & { _id: string };

axios.defaults.baseURL = "https://vocab-builder-backend.p.goit.global/api";

export const setAuthHeader = (token: string): void => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
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
      return thunkAPI.rejectWithValue("Something went wrong");
    }
  }
});

export const loginUser = createAsyncThunk<
  LoginResponse,
  LoginCredentials,
  { rejectValue: string }
>("auth/login", async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post("/users/signin", credentials);
    setAuthHeader(data.token);
    return data;
  } catch (error) {
    if (error instanceof Error) {
      if (error.message === "Request failed with status code 401") {
        return thunkAPI.rejectWithValue("Incorrect email ro password");
      } else {
        return thunkAPI.rejectWithValue(error.message);
      }
    } else {
      return thunkAPI.rejectWithValue("Something went wrong");
    }
  }
});

export const logoutUser = createAsyncThunk<
  LogoutResponse,
  void,
  { rejectValue: string }
>("auth/logout", async (_, thunkAPI) => {
  try {
    const { data } = await axios.post("/users/signout");
    clearAuthHeader();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return thunkAPI.rejectWithValue(error.message);
    } else {
      return thunkAPI.rejectWithValue("Something went wrong");
    }
  }
});
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
