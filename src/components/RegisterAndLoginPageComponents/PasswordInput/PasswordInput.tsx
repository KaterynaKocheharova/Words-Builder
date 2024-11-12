import { InputHTMLAttributes, useState } from "react";
import Relative from "../../CommonComponents/Relative/Relative";
import Input from "../../CommonComponents/Input/Input";
import InputError from "../../CommonComponents/InputError/InputError";
import css from "./PasswordInput.module.css";

type PasswordInputProps = {
  errorMessage?: string;
} & Partial<InputHTMLAttributes<HTMLInputElement>>;

const PasswordInput = ({ errorMessage, ...props }: PasswordInputProps) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  return (
    <Relative>
      <Input
        type={isPasswordShown ? "text" : "password"}
        placeholder="Password"
        extraClass="auth-form-input"
        {...props}
      />
      <button
        onClick={() => setIsPasswordShown(!isPasswordShown)}
        className={css["eye-button"]}
      >
        <svg width="20" height="20" className={css["eye-icon"]}>
          <use
            href={`/sprite.svg#${
              isPasswordShown ? "icon-eye" : "icon-eye-off"
            }`}
          ></use>
        </svg>
      </button>
      {errorMessage && <InputError errorMessage={errorMessage} />}
    </Relative>
  );
};

export default PasswordInput;
