import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import css from "./Button.module.css";

type ButtonProps = Partial<ButtonHTMLAttributes<HTMLButtonElement>> & {
  extraClass: string;
  children: React.ReactNode;
};
const Button = ({ extraClass, children, ...props }: ButtonProps) => {
  return (
    <button
      className={clsx(css.button, extraClass && css[extraClass])}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
