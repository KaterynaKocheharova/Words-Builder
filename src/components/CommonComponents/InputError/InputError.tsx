import css from "./InputError.module.css";

type InputErrorProps = {
  error: string;
};

const InputError = ({ error }: InputErrorProps) => {
  return <p className={error && css["error-text"]}>{error}</p>;
};

export default InputError;
