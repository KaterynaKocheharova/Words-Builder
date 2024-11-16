import ModalWrapper from "../../../CommonComponents/ModalWrapper/ModalWrapper";
import ModalTitle from "../../../CommonComponents/ModalTitle/ModalTitle";
import { type ModalWrapperProps } from "../../../CommonComponents/ModalWrapper/ModalWrapper";
import css from "./AddWordModal.module.css";

type AddWordModalProps = Omit<ModalWrapperProps, "children">;

const AddWordModal = ({ extraClass, isOpen, close }: AddWordModalProps) => {
  return (
    <ModalWrapper extraClass={extraClass} isOpen={isOpen} close={close}>
      <ModalTitle>Add word</ModalTitle>
    </ModalWrapper>
  );
};

export default AddWordModal;
