import clsx from "clsx";
import css from "./AuthPagesFlexContainer.module.css";

type AuthPagesFlexContainer = {
  children: React.ReactNode;
  extraClass?: string;
};
const AuthPagesFlexContainer = ({ children, extraClass }: AuthPagesFlexContainer) => {
  return <div className={clsx(css["flex-container"], extraClass && css[extraClass])}>{children}</div>;
};

export default AuthPagesFlexContainer;
