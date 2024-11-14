import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navlinks.module.css";

type NavLinksProps = {
  extraClass: string;
};

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
  extraClass: string;
};

export const buildActiveClass = ({
  isActive,
  extraClass,
}: BuildClassFunction) => {
  return clsx(
    css.link,
    isActive && css["active-link"],
    extraClass && css[extraClass]
  );
};

const NavLinks = ({ extraClass }: NavLinksProps) => {
  return (
    <nav>
      <ul>
        {navlinksData.map((item) => {
          return (
            <li>
              <NavLink
                className={({ isActive }) =>
                  buildActiveClass({ isActive, extraClass })
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
