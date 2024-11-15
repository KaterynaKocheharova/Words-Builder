import { useAppSelector } from "../../../redux/hooks";
import { selectUsername } from "../../../redux/auth/selectors";
import clsx from "clsx";
import css from "./Avatar.module.css";

type AvatarProps = {
  inMenu?: boolean;
};

const Avatar = ({ inMenu }: AvatarProps) => {
  const userName = useAppSelector(selectUsername);

  return (
    <div className={css.flex}>
      <p className={clsx(css.name, inMenu && css["menu-name"])}>{userName}</p>
      <div
        className={clsx(
          css["avatar-round"],
          inMenu && css["menu-avatar-round"]
        )}
      >
        <svg width="24" height="24" className={css["avatar-icon"]}>
          <use href="/sprite.svg#icon-user"></use>
        </svg>
      </div>
    </div>
  );
};

export default Avatar;
