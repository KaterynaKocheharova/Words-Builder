import { useOpen } from "../../../../hooks/useOpen";
import ModalWrapper from "../../../CommonComponents/ModalWrapper/ModalWrapper";
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
      <ModalWrapper extraClass="add-word-modal" isOpen={isOpen} close={close}>
        <p>Add word modal</p>
      </ModalWrapper>
    </>
  );
};

export default AddWordButton;
