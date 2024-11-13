import { createAsyncThunk } from "@reduxjs/toolkit";
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

// export const refreshUser = createAsyncThunk(
//   "auth/refresh",
//   async (_, thunkAPI) => {
//     const state = thunkAPI.getState();
//     const persistedToken = state.auth.token;
//     setAuthHeader(persistedToken);
//     const { data } = await axios.get("/users/current");
//     return data;
//   },
//   {
//     condition(_, thunkAPI) {
//       const state = thunkAPI.getState();
//       return state.auth.token !== null;
//     },
//   }
// );
