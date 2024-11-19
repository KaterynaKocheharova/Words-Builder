import { useEffect } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import clsx from "clsx";
import css from "./ModalWrapper.module.css";

export type ModalWrapperProps = {
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

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [close]);

  return (
    <Dialog open={isOpen} onClose={close}>
      <DialogBackdrop className={css.backdrop}>
        <DialogPanel className={clsx(css.content, css[extraClass])}>
          <button className={css["close-button"]} onClick={close}>
            <svg width="24" height="24" className={css["close-icon"]}>
              <use href="/sprite.svg#icon-close"></use>
            </svg>
          </button>
          {children}
        </DialogPanel>
      </DialogBackdrop>
    </Dialog>
  );
};

export default ModalWrapper;
