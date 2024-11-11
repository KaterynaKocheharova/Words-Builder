import { InputHTMLAttributes } from "react";
import css from "./Input.module.css";
import clsx from "clsx";

type InputProps = { extraClass: string } & Partial<
  InputHTMLAttributes<HTMLInputElement>
>;

const Input = ({ extraClass, ...props }: InputProps) => {
  return (
    <input className={clsx(css.input, extraClass && css[extraClass])} {...props} />
  );
};

export default Input;
