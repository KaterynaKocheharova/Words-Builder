import { InputHTMLAttributes } from "react";
import Relative from "../../CommonComponents/Relative/Relative";
import Input from "../../CommonComponents/Input/Input";
import InputError from "../../CommonComponents/InputError/InputError";

type PasswordInputProps = {
  errorMessage?: string;
} & Partial<InputHTMLAttributes<HTMLInputElement>>;

const PasswordInput = ({ errorMessage, ...props }: PasswordInputProps) => {
  return (
    <Relative>
      <Input
        type="password"
        placeholder="Password"
        extraClass="auth-form-input"
        {...props}
      />
      {errorMessage && <InputError errorMessage={errorMessage} />}
    </Relative>
  );
};

export default PasswordInput;
