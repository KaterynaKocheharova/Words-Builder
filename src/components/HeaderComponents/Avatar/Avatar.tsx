import { useAppSelector } from "../../../redux/hooks";
import { selectUsername } from "../../../redux/auth/selectors";
import css from "./Avatar.module.css";

const Avatar = () => {
  const userName = useAppSelector(selectUsername);

  return (
    <div className={css.flex}>
      <p className={css.name}>{userName}</p>
      <div className={css["avatar-round"]}>
        <svg width="24" height="24" className={css["avatar-icon"]}>
          <use href="/sprite.svg#icon-user"></use>
        </svg>
      </div>
    </div>
  );
};

export default Avatar;
