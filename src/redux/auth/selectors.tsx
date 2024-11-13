import { SelectBoolean, SelectString } from "../types";

export const selectIsLoading: SelectString = (state) => state.auth.isLoading;
export const selectIsLoggedIn: SelectBoolean = (state) => state.auth.isLoggedIn;
