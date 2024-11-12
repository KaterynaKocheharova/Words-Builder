import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { type InputProps } from "../../../components/CommonComponents/Input/Input";
import Relative from "../../CommonComponents/Relative/Relative";
import Input from "../../CommonComponents/Input/Input";
import InputError from "../../CommonComponents/InputError/InputError";
import css from "./PasswordInput.module.css";

type PasswordInputProps<T extends FieldValues> = InputProps<T>;

const PasswordInput = <T extends FieldValues>({
  register,
  errorMessage,
  name,
  extraClass,
  isWrong,
  ...props
}: PasswordInputProps<T>) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  return (
    <Relative>
      <Input<T>
        isWrong={isWrong}
        name={name}
        register={register}
        type={isPasswordShown ? "text" : "password"}
        placeholder="Password"
        extraClass={extraClass}
        {...props}
      />
      <button
        type="button"
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
