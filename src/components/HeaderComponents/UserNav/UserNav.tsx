import { MenuItem } from "@headlessui/react";
import NavigationLink from "../NavigationLink/NavigationLink";
import css from "./UserNav.module.css";

type UserNavData = {
  label: string;
  to: string;
}[];

const navlinksData: UserNavData = [
  { label: "Dictionary", to: "/dictionary" },
  { label: "Recommend", to: "/recommend" },
  { label: "Training", to: "/training" },
];

type UserNavProps = {
  isMenuNav?: boolean;
};

const UserNav = ({ isMenuNav }: UserNavProps) => {
  return (
    <nav>
      <ul className={css["navlinks-list"]}>
        {navlinksData.map((item) => {
          if (isMenuNav) {
            return (
              <li>
                <MenuItem as={NavigationLink} linkData={item} />;
              </li>
            );
          } else {
            return (
              <li>
                <NavigationLink linkData={item} />
              </li>
            );
          }
        })}
      </ul>
    </nav>
  );
};

export default UserNav;
