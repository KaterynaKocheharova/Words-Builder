import { Field, Label, Radio, RadioGroup } from "@headlessui/react";
import css from "./VerbTypeRadio.module.css";

const VerbTypeRadio = () => {
  return (
    <RadioGroup className={css["group-flex"]} aria-label="Verb type">
      <Field className={css["field-flex"]}>
        <Radio className={css.outer} value="isRegular">
          {({ checked }) => {
            return checked ? <div className={css.center}></div> : <div></div>;
          }}
        </Radio>
        <Label className={css.label}>Is Irregular</Label>
      </Field>
      <Field className={css["field-flex"]}>
        <Radio className={css.outer} value="isIrregular">
          {({ checked }) => {
            return checked ? <div className={css.center}></div> : <div></div>;
          }}
        </Radio>
        <Label className={css.label}>Irregular</Label>
      </Field>
    </RadioGroup>
  );
};

export default VerbTypeRadio;
