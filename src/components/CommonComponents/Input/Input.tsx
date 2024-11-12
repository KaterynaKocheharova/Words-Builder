import { InputHTMLAttributes } from "react";
import css from "./Input.module.css";
import clsx from "clsx";

type InputProps = { extraClass: string; error?: boolean } & Partial<
  InputHTMLAttributes<HTMLInputElement>
>;

const Input = ({ extraClass, error, ...props }: InputProps) => {
  return (
    <input
      className={clsx(css.input, extraClass && css[extraClass], error && css["wrong-input"])}
      {...props}
    />
  );
};

export default Input;
