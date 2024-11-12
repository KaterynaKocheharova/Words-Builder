import css from "./AuthLink.module.css";
import { Link, LinkProps } from "react-router-dom";

type AuthLinkProps = {
  children: React.ReactNode;
} & LinkProps;

const AuthLink = ({ to, children }: AuthLinkProps) => {
  return <Link to={to} className={css["auth-link"]}>{children}</Link>;
};

export default AuthLink;
