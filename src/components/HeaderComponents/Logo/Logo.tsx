import { NavLink } from "react-router-dom";
import css from "./Logo.module.css";

const Logo = () => {
  return (
    <NavLink to="/" className={css["logo-link"]}>
      <svg width="36" height="36">
        <use href="/sprite.svg#icon-logo"></use>
      </svg>
      VocabBuilder
    </NavLink>
  );
};

export default Logo;
