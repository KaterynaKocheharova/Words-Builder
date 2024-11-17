import { useEffect, useRef } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CategoriesSelect, {
  Option,
} from "../../../CommonComponents/CategoriesSelect/CategoriesSelect";
import * as yup from "yup";
import Relative from "../../../CommonComponents/Relative/Relative";
import InputError from "../../../CommonComponents/InputError/InputError";
import css from "./AddWord.module.css";

export type AddWordFormValues = {
  category: Option;
};

const defaultValues: AddWordFormValues = {
  category: { label: "", value: "" },
};

const addWordFormSchema = yup.object({
  category: yup.object({
    label: yup.string().required("Category is required"),
    value: yup.string().required("Category is required"),
  }),
});

const AddWordForm = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
    setFocus,
  } = useForm<AddWordFormValues>({
    defaultValues,
    resolver: yupResolver(addWordFormSchema),
  });

  const categorySelectRef = useRef<any>(null);

  useEffect(() => {
    if (categorySelectRef.current) {
      categorySelectRef.current.focus();
    }
  }, []);

  const onSubmit: SubmitHandler<AddWordFormValues> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Relative>
        <div className={css["select-wrapper"]}>
          <Controller
            name="category"
            control={control}
            render={({ field }) => (
              <CategoriesSelect
                location="form"
                {...field}
                ref={categorySelectRef}
              />
            )}
          />
        </div>
        <InputError
          errorMessage={
            errors?.category?.value?.message || errors?.category?.label?.message
          }
        />
      </Relative>

      <p></p>

      <button type="submit">Submit</button>
    </form>
  );
};

export default AddWordForm;
