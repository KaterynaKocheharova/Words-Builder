import css from "./AuthFormContainer.module.css";

type AuthFormContainerProps = {
  children: React.ReactNode;
};

const AuthFormContainer = ({ children }: AuthFormContainerProps) => {
  return <div className={css["auth-form-container"]}>{children}</div>;
};

export default AuthFormContainer;
