import { InputHTMLAttributes } from "react";
import { Path, UseFormRegister, FieldValues } from "react-hook-form";
import css from "./Input.module.css";
import clsx from "clsx";

export type InputProps<T extends FieldValues> = {
  name: Path<T>;
  register: UseFormRegister<T>;
  extraClass: string;
  errorMessage?: string;
} & Partial<InputHTMLAttributes<HTMLInputElement>>;

const Input = <T extends FieldValues>({
  extraClass,
  errorMessage,
  register,
  name,
  ...props
}: InputProps<T>) => {
  return (
    <input
      {...register(name)}
      className={clsx(
        css.input,
        extraClass && css[extraClass],
        errorMessage && css["wrong-input"]
      )}
      {...props}
    />
  );
};

export default Input;
