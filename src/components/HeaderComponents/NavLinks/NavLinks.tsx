import { NavLink } from "react-router-dom";
import { useScreenSizes } from "../../../hooks/useScreenSizes";
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
  isLargeScreen: boolean;
  isMediumScreen: boolean;
  isSmallScreen: boolean;
};

export const buildActiveClass = ({
  isActive,
  isLargeScreen,
  isMediumScreen,
  isSmallScreen,
}: BuildClassFunction) => {
  return clsx(
    css.link,
    (isMediumScreen || isSmallScreen) && css["menu-link"],
    isLargeScreen && css["desktop-link"],
    isActive && isLargeScreen && css["desktop-active-link"],
    isActive && (isSmallScreen || isMediumScreen) && css["menu-active-link"]
  );
};

const NavLinks = ({ extraClass }: NavLinksProps) => {
  const { isLargeScreen, isMediumScreen, isSmallScreen } = useScreenSizes();

  return (
    <nav>
      <ul>
        {navlinksData.map((item) => {
          return (
            <li>
              <NavLink
                className={({ isActive }) =>
                  buildActiveClass({
                    isActive,
                    isLargeScreen,
                    isMediumScreen,
                    isSmallScreen,
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
