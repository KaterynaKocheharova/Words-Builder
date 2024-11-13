import { RootState } from "./store";

export type BaseSliceState = {
  isLoading: boolean | string;
  error: Error | string | null;
};

export type SelectString = (state: RootState) => string;
