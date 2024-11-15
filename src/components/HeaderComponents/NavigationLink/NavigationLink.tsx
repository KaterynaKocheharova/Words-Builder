import clsx from "clsx";
import css from "./NavigationLink.module.css";
import { NavLink } from "react-router-dom";

type NavigationLinkProps = {
  linkData: {
    to: string;
    label: string;
  };
};

type BuildClassFunction = {
  isActive: boolean;
};

export const buildActiveClass = ({ isActive }: BuildClassFunction) => {
  return clsx(css.link, isActive && css["active-link"]);
};

const NavigationLink = ({ linkData: { to, label } }: NavigationLinkProps) => {
  return (
    <NavLink
      className={({ isActive }) =>
        buildActiveClass({
          isActive,
        })
      }
      to={to}
    >
      {label}
    </NavLink>
  );
};

export default NavigationLink;
