import clsx from "clsx";
import css from "./SpaceBetween.module.css";

type SpaceBetweenProps = {
  children: React.ReactNode;
  extraClass?:  "modal-buttons";
};

const SpaceBetween = ({ children, extraClass }: SpaceBetweenProps) => {
  return (
    <div className={clsx(css.flex, extraClass && css[extraClass])}>
      {children}
    </div>
  );
};

export default SpaceBetween;
