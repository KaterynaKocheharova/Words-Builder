import { SelectString } from "../types";

export const selectIsLoading: SelectString = (state) => state.auth.isLoading;
