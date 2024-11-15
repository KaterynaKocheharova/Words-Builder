import { useAppSelector } from "../../../redux/hooks";
import { selectUsername } from "../../../redux/auth/selectors";
import clsx from "clsx";
import css from "./UserBar.module.css";

type UserBarProps = {
  inMenu?: boolean;
};

const UserBar = ({ inMenu }: UserBarProps) => {
  const userName = useAppSelector(selectUsername);

  return (
    <div className={css.flex}>
      <p className={clsx(css.name, inMenu && css["menu-name"])}>{userName}</p>
      <div
        className={clsx(
          css["UserBar-round"],
          inMenu && css["menu-UserBar-round"]
        )}
      >
        <svg width="24" height="24" className={css["UserBar-icon"]}>
          <use href="/sprite.svg#icon-user"></use>
        </svg>
      </div>
    </div>
  );
};

export default UserBar;
