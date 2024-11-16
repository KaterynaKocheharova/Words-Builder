import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import clsx from "clsx";
import css from "./ModalWrapper.module.css";

type ModalWrapperProps = {
  extraClass: string;
  isOpen: boolean;
  close: () => void;
  children: React.ReactNode;
};

const ModalWrapper = ({
  extraClass,
  isOpen,
  close,
  children,
}: ModalWrapperProps) => {
  return (
    <Dialog open={isOpen} onClose={close}>
      <DialogBackdrop className={css.backdrop}>
        <DialogPanel className={clsx(css.content, css[extraClass])}>
          {children}
        </DialogPanel>
      </DialogBackdrop>
    </Dialog>
  );
};

export default ModalWrapper;
