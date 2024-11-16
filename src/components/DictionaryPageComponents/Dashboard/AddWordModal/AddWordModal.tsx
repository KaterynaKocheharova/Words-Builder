import ModalWrapper from "../../../CommonComponents/ModalWrapper/ModalWrapper";
import ModalTitle from "../../../CommonComponents/ModalTitle/ModalTitle";
import AddWordForm from "../AddWordForm/AddWordForm";
import { Description } from "@headlessui/react";
import { type ModalWrapperProps } from "../../../CommonComponents/ModalWrapper/ModalWrapper";
import css from "./AddWordModal.module.css";

type AddWordModalProps = Omit<ModalWrapperProps, "children">;

const AddWordModal = ({ extraClass, isOpen, close }: AddWordModalProps) => {
  return (
    <ModalWrapper extraClass={extraClass} isOpen={isOpen} close={close}>
      <ModalTitle>Add word</ModalTitle>
      <Description className={css.description}>
        Adding a new word to the dictionary is an important step in enriching
        the language base and expanding the vocabulary.
      </Description>
      <AddWordForm />
    </ModalWrapper>
  );
};

export default AddWordModal;
