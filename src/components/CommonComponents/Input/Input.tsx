import { InputHTMLAttributes } from "react";
import css from "./Input.module.css";
import clsx from "clsx";

type InputProps = { extraClass: string; errorMessage?: string } & Partial<
  InputHTMLAttributes<HTMLInputElement>
>;

const Input = ({ extraClass, errorMessage, ...props }: InputProps) => {
  return (
    <input
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
