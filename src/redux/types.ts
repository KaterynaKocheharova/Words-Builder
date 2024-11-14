import { RootState } from "./store";

export type BaseSliceState = {
  isLoading: boolean | string;
  error: string | undefined;
};

export type SelectString = (state: RootState) => string;
export type SelectBoolean = (state: RootState) => boolean;
