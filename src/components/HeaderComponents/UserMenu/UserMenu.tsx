import { useScreenSizes } from "../../../hooks/useScreenSizes";
import Avatar from "../Avatar/Avatar";
import LogoutButton from "../LogoutButton/LogoutButton";
import css from "./UserMenu.module.css";

const UserMenu = () => {
  const { isLargeScreen } = useScreenSizes();

  return (
    <div className={css.flex}>
      <Avatar />
      {isLargeScreen && <LogoutButton />}
    </div>
  );
};

export default UserMenu;
