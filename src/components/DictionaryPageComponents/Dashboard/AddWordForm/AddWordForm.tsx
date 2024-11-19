import { useEffect, useRef } from "react";
import { useForm, Controller, SubmitHandler, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CategoriesSelect, {
  Option,
} from "../../../CommonComponents/CategoriesSelect/CategoriesSelect";
import * as yup from "yup";
import Relative from "../../../CommonComponents/Relative/Relative";
import InputError from "../../../CommonComponents/InputError/InputError";
import css from "./AddWord.module.css";
import VerbTypeRadio from "./VerbTypeRadio/VerbTypeRadio";
import WordInput from "../WordInput/WordInput";

export type AddWordFormValues = {
  category: Option;
  verbType?: "isRegular" | "isIrregular";
  En: string;
  Ua: string;
};

const defaultValues: AddWordFormValues = {
  category: { label: "", value: "" },
  verbType: "isRegular",
  En: "",
  Ua: "",
};

const addWordFormSchema = yup.object({
  category: yup
    .object({
      label: yup.string().required("Category is required"),
      value: yup.string().required("Category is required"),
    })
    .required("Category is required"),
  verbType: yup
    .string()
    .oneOf(["isRegular", "isIrregular"])
    .when("category.value", {
      is: "verb",
      then: (schema) => schema.required("Verb type is required"),
    }),
  En: yup
    .string()
    .matches(/\b[A-Za-z'-]+(?:\s+[A-Za-z'-]+)*\b/)
    .required("English word is required"),
  Ua: yup
    .string()
    .matches(/^(?![A-Za-z])[А-ЯІЄЇҐґа-яієїʼ\s]+$/u)
    .required("Ukrainian word is required"),
});

const AddWordForm = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
    register,
  } = useForm<AddWordFormValues>({
    defaultValues,
    shouldUnregister: true,
    resolver: yupResolver(addWordFormSchema),
  });

  const categorySelectRef = useRef<any>(null);

  const categoryValue = useWatch({
    control,
    name: "category.value",
  });

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
      <div className={css["category-wrapper"]}>
        <div className={css["select-wrapper"]}>
          <Relative>
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
            <InputError
              errorMessage={
                errors?.category?.value?.message ||
                errors?.category?.label?.message
              }
            />
          </Relative>
        </div>
        <div className={css["verb-type-container"]}>
          {categoryValue === "verb" && (
            <>
              <Relative>
                <Controller
                  name="verbType"
                  control={control}
                  render={({ field }) => (
                    <VerbTypeRadio
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />
                <InputError errorMessage={errors?.verbType?.message} />
              </Relative>
              <p className={css["verb-format-note"]}>
                Such data must be entered in the format I form-II form-III form.
              </p>
            </>
          )}
        </div>
      </div>
      <WordInput
        label="Ukrainian"
        errorMessage={errors?.En?.message}
        name="En"
        register={register}
      />
      <WordInput
        label="English"
        errorMessage={errors?.verbType?.message}
        name="En"
        register={register}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddWordForm;
