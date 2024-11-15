import { useAppDispatch } from "../../../redux/hooks";
import { logoutUser } from "../../../redux/auth/operations";
import { toast } from "react-toastify";
import css from "./LogoutButton.module.css";

const LogoutButton = () => {
  const dispatch = useAppDispatch();

  const handleLogoutClick = () => {
    dispatch(logoutUser())
      .unwrap()
      .then(() => {
        toast.success("Logout successfull");
      })
      .catch((error: string) => toast.error(error));
  };

  return (
    <button onClick={handleLogoutClick} className={css["logout-button"]}>
      Log out
      <svg width="16" height="16">
        <use href="/sprite.svg#icon-arrow-logout"></use>
      </svg>
    </button>
  );
};

export default LogoutButton;
