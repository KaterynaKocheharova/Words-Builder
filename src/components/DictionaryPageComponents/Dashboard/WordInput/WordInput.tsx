import { useId } from "react";
import css from "./WordInput.module.css";
import Relative from "../../../CommonComponents/Relative/Relative";
import InputError from "../../../CommonComponents/InputError/InputError";
import Input from "../../../CommonComponents/Input/Input";
import { type AddWordFormValues } from "../AddWordForm/AddWordForm";
import { type InputErrorProps } from "../../../CommonComponents/InputError/InputError";
import { UseFormRegister } from "react-hook-form";

type WordInputProps = {
  label: string;
  register: UseFormRegister<AddWordFormValues>;
  name: "En" | "Ua";
} & InputErrorProps;

const WordInput = ({ label, errorMessage, register, name }: WordInputProps) => {
  const id = useId();

  return (
    <div className={css.container}>
      <label className={css.label} htmlFor={`${id}${label}`}>
        {label}
      </label>
      <Relative>
        <InputError errorMessage={errorMessage} />
        <Input<AddWordFormValues>
          placeholder="Enter a word"
          extraClass="word-form-input"
          register={register}
          name={name}
          isWrong={Boolean(errorMessage)}
        />
      </Relative>
    </div>
  );
};

export default WordInput;
