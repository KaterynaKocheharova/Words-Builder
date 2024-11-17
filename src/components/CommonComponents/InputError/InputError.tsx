import css from "./InputError.module.css";

type InputErrorProps = {
  errorMessage: string | undefined;
};

const InputError = ({ errorMessage }: InputErrorProps) => {
  if (!errorMessage) {
    return null;
  }

  return (
    <p className={css["error-text"]}>
      <svg width="16" height="16" className={css["error-icon"]}>
        <use href="/sprite.svg#icon-error-warning"></use>
      </svg>
      {errorMessage}
    </p>
  );
};

export default InputError;
