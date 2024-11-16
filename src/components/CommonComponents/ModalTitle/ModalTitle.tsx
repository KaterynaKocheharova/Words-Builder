import { DialogTitle } from "@headlessui/react";
import css from "./ModalTitle.module.css";

type ModalTitleProps = {
  children: React.ReactNode;
  extraClass?: string;
};
const ModalTitle = ({ children, extraClass }: ModalTitleProps) => {
  return (
    <DialogTitle className={(css.title, extraClass && css[extraClass])}>
      {children}
    </DialogTitle>
  );
};

export default ModalTitle;
