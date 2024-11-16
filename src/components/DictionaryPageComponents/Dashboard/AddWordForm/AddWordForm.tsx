import Select, { components, DropdownIndicatorProps } from "react-select";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import css from "./AddWord.module.css";

type Option = {
  label: string;
  value: string;
};

export type AddWordFormValues = {
  category: { label: string; value: string };
  //   en: string;
  //   ua: string;
  //   isIrregular: boolean;
};

const defaultValues: AddWordFormValues = {
  category: { label: "", value: "" },
  //   en: "",
  //   ua: "",
  //   isIrregular: false,
};

const addWordFormSchema = yup.object({
  category: yup.object({
    label: yup.string().required("Category is required"),
    value: yup.string().required("Category is required"),
  }),
  //   en: yup
  //     .string()
  //     .matches(/\b[A-Za-z'-]+(?:\s+[A-Za-z'-]+)*\b/, "Incorrect word")
  //     .required("English word is required"),
  //   ua: yup
  //     .string()
  //     .matches(/^(?![A-Za-z])[А-ЯІЄЇҐґа-яієїʼ\s]+$/u, "Incorrect word")
  //     .required("Translation is required"),
  //   isIrregular: yup.boolean().required("Verb type is required"),
});

const AddWordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<AddWordFormValues>({
    defaultValues,
    resolver: yupResolver(addWordFormSchema),
  });

  const onSubmit: SubmitHandler<AddWordFormValues> = (data) => {
    console.log(data);
  };

  //   const DropdownIndicator = (
  //     props: DropdownIndicatorProps<Option[], false>
  //   ) => {
  //     return (
  //       <components.DropdownIndicator {...props}>
  //         <button className={css["dropdown-indicator"]}>
  //           <svg width="20" height="20" className={css["dropdown-icon"]}>
  //             <use href="/sprite.svg#icon-dropdown"></use>
  //           </svg>
  //         </button>
  //       </components.DropdownIndicator>
  //     );
  //   };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="category"
        control={control}
        render={({ field }) => (
          <Select
            unstyled
            {...field}
            options={[
              { value: "chocolate", label: "Chocolate" },
              { value: "strawberry", label: "Strawberry" },
              { value: "vanilla", label: "Vanilla" },
            ]}
            styles={{
              control: (baseStyles) => ({
                position: "relative",
                backgroundColor: "transparent",
                border: "1px solid #D1D5DB",
                borderRadius: "15px",
                padding: "12px 24px",
                fontWeight: "500",
                lineHeight: "1.5",
                color: "var(--white)",
                cursor: "pointer",
              }),
              dropdownIndicator: (baseStyles) => ({
                position: "absolute",
                top: "14px",
                right: "14px",
                stroke: "#121417",
                fill: "none",
                cursor: "pointer",
              }),
              menu: (baseStyles) => ({
                ...baseStyles,
                backgroundColor: "#FFFFFF",
                borderRadius: "14px",
                padding: "14px 18px",
                marginTop: "4px",
                display: "flex",
                flexDirection: "column",
                columnGap: "8px",
              }),
              option: (baseStyles, state) => ({
                fontSize: "18px",
                fontWeight: "500",
                lineHeight: "1.1",
                color: state.isSelected ? "#121417" : "#12141733",
                marginBottom: "8px",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                cursor: "pointer",
              }),
            }}
          />
        )}
      />
      {/* <p>
        {errors?.category?.value?.message || errors?.category?.label?.message}
      </p> */}

      <button type="submit">Submit</button>
    </form>
  );
};

export default AddWordForm;
