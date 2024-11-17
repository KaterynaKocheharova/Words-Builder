import { Field, Label, Radio, RadioGroup } from "@headlessui/react";
import css from "./VerbTypeRadio.module.css";

const VerbTypeRadio = () => {
  return (
    <RadioGroup aria-label="Verb type">
      <Field>
        <Radio value="isIrregular">
          {({ checked }) => {
            console.log(checked);
            if (checked) {
              return (
                <div className={css.outer}>
                  <div className={css.center}></div>
                </div>
              );
            } else {
              return <div className={css.initial}></div>;
            }
          }}
        </Radio>
        <Label>Is Irregular</Label>
      </Field>
    </RadioGroup>
  );
};

export default VerbTypeRadio;
