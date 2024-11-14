import css from "./InputGroupContainer.module.css";

type InputGroupContainer = {
  children: React.ReactNode;
};
const InputGroupContainer = ({ children }: InputGroupContainer) => {
  return <div className={css["input-group"]}>{children}</div>;
};

export default InputGroupContainer;
