import { Field, Label, Radio, RadioGroup } from "@headlessui/react";
import css from "./VerbTypeRadio.module.css";

type VerbTypeRadioProps = {
  value: string | undefined;
  onChange: (value: string) => void;
};

const VerbTypeRadio = ({ value, onChange }: VerbTypeRadioProps) => {
  return (
    <RadioGroup
      className={css["group-flex"]}
      aria-label="Verb type"
      value={value}
      onChange={onChange}
    >
      <Field className={css["field-flex"]}>
        <Radio className={css.outer} value="isRegular">
          {({ checked }) => (
            <div className={checked ? css.center : undefined}></div>
          )}
        </Radio>
        <Label className={css.label}>Is Regular</Label>
      </Field>
      <Field className={css["field-flex"]}>
        <Radio className={css.outer} value="isIrregular">
          {({ checked }) => (
            <div className={checked ? css.center : undefined}></div>
          )}
        </Radio>
        <Label className={css.label}>Is Irregular</Label>
      </Field>
    </RadioGroup>
  );
};

export default VerbTypeRadio;
