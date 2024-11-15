import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navlinks.module.css";

type NavLinksData = {
  label: string;
  to: string;
}[];

const navlinksData: NavLinksData = [
  { label: "Dictionary", to: "/dictionary" },
  { label: "Training", to: "/training" },
  { label: "Recommend", to: "/recommend" },
];

type BuildClassFunction = {
  isActive: boolean;
};

export const buildActiveClass = ({ isActive }: BuildClassFunction) => {
  return clsx(css.link, isActive && css["active-link"]);
};

const NavLinks = () => {

  return (
    <nav>
      <ul className={css["navlinks-list"]}>
        {navlinksData.map((item) => {
          return (
            <li>
              <NavLink
                className={({ isActive }) =>
                  buildActiveClass({
                    isActive,
                  })
                }
                to={item.to}
              >
                {item.label}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavLinks;
