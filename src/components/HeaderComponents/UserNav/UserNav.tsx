import NavigationLink from "../NavigationLink/NavigationLink";
import css from "./UserNav.module.css";

type UserNavData = {
  label: string;
  to: string;
}[];

const navlinksData: UserNavData = [
  { label: "Dictionary", to: "/dictionary" },
  { label: "Training", to: "/training" },
  { label: "Recommend", to: "/recommend" },
];

type UserNavProps = {
  isMenuNav?: boolean;
};

const UserNav = ({ isMenuNav }: UserNavProps) => {
  return (
    <nav>
      <ul className={css["navlinks-list"]}>
        {navlinksData.map((item) => {
          return (
            <li>
              <NavigationLink linkData={item} />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default UserNav;
