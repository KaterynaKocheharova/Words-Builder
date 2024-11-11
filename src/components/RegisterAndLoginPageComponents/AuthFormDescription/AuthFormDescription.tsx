import css from "./AutFormDescription.module.css";

type AuthFormDescriptionProps = {
  children: React.ReactNode;
};

const AuthFormDescription = ({ children }: AuthFormDescriptionProps) => {
  return <p className={css.description}>{children}</p>;
};

export default AuthFormDescription;
