import Avatar from "../Avatar/Avatar";
import LogoutButton from "../LogoutButton/LogoutButton";
import css from "./UserMenu.module.css";

const UserMenu = () => {
  return (
    <div className={css.flex}>
      <Avatar />
      <LogoutButton />
    </div>
  );
};

export default UserMenu;
