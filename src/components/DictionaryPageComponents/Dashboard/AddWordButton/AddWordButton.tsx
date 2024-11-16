import css from "./AddWordButton.module.css";

const AddWordButton = () => {
  return (
    <button className={css.button}>
      Add word
      <svg width="20" height="20" className={css["add-icon"]}>
        <use href="/sprite.svg#icon-plus"></use>
      </svg>
    </button>
  );
};

export default AddWordButton;
