import { useScreenSizes } from "../../../hooks/useScreenSizes";
import UserBar from "../UserBar/UserBar";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import LogoutButton from "../LogoutButton/LogoutButton";
import css from "./UserMenu.module.css";

const UserMenu = () => {
  const { isLargeScreen } = useScreenSizes();

  return (
    <div className={css.flex}>
      <UserBar />
      {isLargeScreen ? <LogoutButton /> : <BurgerMenu />}
    </div>
  );
};

export default UserMenu;
