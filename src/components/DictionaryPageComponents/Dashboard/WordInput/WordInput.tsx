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
  iconId: string;
} & InputErrorProps;

const WordInput = ({ label, errorMessage, register, name, iconId }: WordInputProps) => {
  const id = useId();

  return (
    <div className={css.container}>
      <label className={css.label} htmlFor={`${id}${label}`}>
        <svg width="28" height="28" className={css["country-icon"]}>
            <use href={`/sprite.svg#${iconId}`}></use>
        </svg>
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
