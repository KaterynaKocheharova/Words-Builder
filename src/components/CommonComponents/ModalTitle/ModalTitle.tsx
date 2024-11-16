import { DialogTitle } from "@headlessui/react";
import clsx from "clsx";
import css from "./ModalTitle.module.css";

type ModalTitleProps = {
  children: React.ReactNode;
  extraClass?: string;
};
const ModalTitle = ({ children, extraClass }: ModalTitleProps) => {
  return (
    <DialogTitle className={clsx(css.title, extraClass && css[extraClass])}>
      {children}
    </DialogTitle>
  );
};

export default ModalTitle;
