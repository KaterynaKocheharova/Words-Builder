import css from "./AuthFormTitle.module.css";

type AuthFormTitleProps = {
  children: React.ReactNode;
};

const AuthFormTitle = ({ children }: AuthFormTitleProps) => {
  return <h2 className={css.title}>{children}</h2>;
};

export default AuthFormTitle;
