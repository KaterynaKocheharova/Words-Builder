import { useOpen } from "../../../../hooks/useOpen";
import AddWordModal from "../AddWordModal/AddWordModal";
import css from "./AddWordButton.module.css";

const AddWordButton = () => {
  const { isOpen, open, close } = useOpen();

  return (
    <>
      <button className={css.button} onClick={open}>
        Add word
        <svg width="20" height="20" className={css["add-icon"]}>
          <use href="/sprite.svg#icon-plus"></use>
        </svg>
      </button>
      <AddWordModal extraClass="add-word-modal" isOpen={isOpen} close={close} />
    </>
  );
};

export default AddWordButton;
