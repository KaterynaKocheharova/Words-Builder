import css from "./LogoutButton.module.css";

const LogoutButton = () => {
  return (
    <button className={css["logout-button"]}>
      Log out
      <svg width="16" height="16">
        <use href="/sprite.svg#icon-arrow-logout"></use>
      </svg>
    </button>
  );
};

export default LogoutButton;
