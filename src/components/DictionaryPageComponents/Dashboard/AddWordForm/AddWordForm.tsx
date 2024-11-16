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

  const DropdownIndicator = (
    props: DropdownIndicatorProps<Option[], false>
  ) => {
    return (
      <components.DropdownIndicator {...props}>
        <button>
          <svg width="20" height="20" className={css["dropdown-icon"]}>
            <use href="/sprite.svg#icon-dropdown"></use>
          </svg>
        </button>
      </components.DropdownIndicator>
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={css["select-wrapper"]}>
        <Controller
          name="category"
          control={control}
          render={({ field }) => (
            <Select
              menuIsOpen={true}
              unstyled
              {...field}
              options={[
                { value: "chocolate", label: "Chocolate" },
                { value: "strawberry", label: "Strawberry" },
                { value: "vanilla", label: "Vanilla" },
                { value: "mint", label: "Mint" },
                { value: "caramel", label: "Caramel" },
                { value: "coffee", label: "Coffee" },
                { value: "hazelnut", label: "Hazelnut" },
                { value: "banana", label: "Banana" },
                { value: "peach", label: "Peach" },
                { value: "mango", label: "Mango" },
                { value: "blueberry", label: "Blueberry" },
                { value: "raspberry", label: "Raspberry" },
                { value: "pistachio", label: "Pistachio" },
                { value: "lemon", label: "Lemon" },
                { value: "lime", label: "Lime" },
                { value: "coconut", label: "Coconut" },
                { value: "cherry", label: "Cherry" },
                { value: "watermelon", label: "Watermelon" },
                { value: "grape", label: "Grape" },
                { value: "apple", label: "Apple" },
              ]}
              // container 32% starting from 768
              styles={{
                control: (baseStyles) => ({
                  position: "relative",
                  backgroundColor: "transparent",
                  border: "1px solid #FCFCFC4D",
                  borderRadius: "15px",
                  padding: "12px 24px",
                  fontWeight: "500",
                  lineHeight: "1.5",
                  color: "var(--white)",
                  cursor: "pointer",
                }),
                dropdownIndicator: (baseStyles) => ({
                  ...baseStyles,
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "20px",
                  height: "20px",
                  right: "24px",
                  stroke: "var(--white)",
                  fill: "none",
                  cursor: "pointer",
                }),
                menu: (baseStyles) => ({
                  ...baseStyles,
                  maxHeight: "240px",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "15px",
                  padding: "12px 24px",
                  marginTop: "4px",
                  overflow: "auto"
                }),
                menuList: (baseStyles) => ({
                  overflow: "hidden",
                }),
                option: (baseStyles, state) => ({
                  //   fontSize: "16px",
                  //   fontWeight: "500",
                  //   lineHeight: "1.5",
                  color: state.isSelected
                    ? "var(--primary-color)"
                    : "#12141780",
                  //   whiteSpace: "nowrap",
                  //   overflow: "hidden",
                  //   textOverflow: "ellipsis",
                  //   cursor: "pointer",
                }),
              }}
              classNames={{
                option: () => css["custom-option"],
              }}
            />
          )}
        />
      </div>

      {/* <p>
        {errors?.category?.value?.message || errors?.category?.label?.message}
      </p> */}

      <button type="submit">Submit</button>
    </form>
  );
};

export default AddWordForm;
