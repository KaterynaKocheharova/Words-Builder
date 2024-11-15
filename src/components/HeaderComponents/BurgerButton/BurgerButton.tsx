import css from "./BurgerButton.module.css";

const BurgerButton = () => {
  return (
    <button className={css.button}>
      <svg width="32" height="32" className={css.icon}>
        <use href="/sprite.svg#icon-burger"></use>
      </svg>
    </button>
  );
};

export default BurgerButton;
