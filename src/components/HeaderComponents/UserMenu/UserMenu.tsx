import Avatar from "../Avatar/Avatar";
import css from "./UserMenu.module.css";

const UserMenu = () => {
  return (
    <div className={css.flex}>
      <Avatar />
    </div>
  );
};

export default UserMenu;
