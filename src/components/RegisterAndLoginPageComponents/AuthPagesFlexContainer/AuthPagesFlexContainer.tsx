import css from "./AuthPagesFlexContainer.module.css";

type AuthPagesFlexContainer = {
  children: React.ReactNode;
};
const AuthPagesFlexContainer = ({ children }: AuthPagesFlexContainer) => {
  return <div className={css["flex-container"]}>{children}</div>;
};

export default AuthPagesFlexContainer;
