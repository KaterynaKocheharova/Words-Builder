import ModalWrapper from "../../../CommonComponents/ModalWrapper/ModalWrapper";
import { type ModalWrapperProps } from "../../../CommonComponents/ModalWrapper/ModalWrapper";
import css from "./AddWordModal.module.css";

type AddWordModalProps = Omit<ModalWrapperProps, "children">;

const AddWordModal = ({ extraClass, isOpen, close }: AddWordModalProps) => {
  return (
    <ModalWrapper extraClass={extraClass} isOpen={isOpen} close={close}>
      Add word modal
    </ModalWrapper>
  );
};

export default AddWordModal;
