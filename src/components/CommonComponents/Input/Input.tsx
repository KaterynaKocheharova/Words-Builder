import { InputHTMLAttributes } from "react";
import Relative from "../Relative/Relative";
import InputError from "../InputError/InputError";
import css from "./Input.module.css";
import clsx from "clsx";

type InputProps = { extraClass: string; errorMessage?: string } & Partial<
  InputHTMLAttributes<HTMLInputElement>
>;

const Input = ({ extraClass, errorMessage, ...props }: InputProps) => {
  return (
    <Relative>
      <input
        className={clsx(
          css.input,
          extraClass && css[extraClass],
          errorMessage && css["wrong-input"]
        )}
        {...props}
      />
      {errorMessage && <InputError error={errorMessage} />}
    </Relative>
  );
};

export default Input;
