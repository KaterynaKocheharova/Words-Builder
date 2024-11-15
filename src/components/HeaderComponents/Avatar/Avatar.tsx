import { useAppSelector } from "../../../redux/hooks";
import { selectUsername } from "../../../redux/auth/selectors";
import clsx from "clsx";
import css from "./Avatar.module.css";

type AvatarProps = {
  extraRoundClass?: string;
};

const Avatar = ({ extraRoundClass }: AvatarProps) => {
  const userName = useAppSelector(selectUsername);

  return (
    <div className={css.flex}>
      <p className={css.name}>{userName}</p>
      <div className={clsx(css["avatar-round"], extraRoundClass && css[extraRoundClass])}>
        <svg width="24" height="24" className={css["avatar-icon"]}>
          <use href="/sprite.svg#icon-user"></use>
        </svg>
      </div>
    </div>
  );
};

export default Avatar;
