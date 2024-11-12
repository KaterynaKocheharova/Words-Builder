import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import css from "./Button.module.css";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  extraClass: string;
  children: React.ReactNode;
};
const Button = ({ onClick, extraClass, children, ...props }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={clsx(css.button, extraClass && css[extraClass])}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
