// import { useForm, SubmitHandler, Controller } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import CategoriesSelect from "../../../CommonComponents/CategoriesSelect/CategoriesSelect";
// import * as yup from "yup";
// import css from "./AddWord.module.css";

// export type AddWordFormValues = {
//   category: { label: string; value: string };
//   //   en: string;
//   //   ua: string;
//   //   isIrregular: boolean;
// };

// const defaultValues: AddWordFormValues = {
//   category: { label: "", value: "" },
//   //   en: "",
//   //   ua: "",
//   //   isIrregular: false,
// };

// const addWordFormSchema = yup.object({
//   category: yup.object({
//     label: yup.string().required("Category is required"),
//     value: yup.string().required("Category is required"),
//   }),
//   //   en: yup
//   //     .string()
//   //     .matches(/\b[A-Za-z'-]+(?:\s+[A-Za-z'-]+)*\b/, "Incorrect word")
//   //     .required("English word is required"),
//   //   ua: yup
//   //     .string()
//   //     .matches(/^(?![A-Za-z])[А-ЯІЄЇҐґа-яієїʼ\s]+$/u, "Incorrect word")
//   //     .required("Translation is required"),
//   //   isIrregular: yup.boolean().required("Verb type is required"),
// });

// const AddWordForm = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     control,
//   } = useForm<AddWordFormValues>({
//     defaultValues,
//     resolver: yupResolver(addWordFormSchema),
//   });

//   const onSubmit: SubmitHandler<AddWordFormValues> = (data) => {
//     console.log(data);
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div className={css["select-wrapper"]}>
//         <Controller
//           name="category"
//           control={control}
//           render={({ field }) => (
//             <CategoriesSelect location="form" {...field} />
//           )}
//         />
//       </div>

//       <p>
//         {errors?.category?.value?.message || errors?.category?.label?.message}
//       </p>

//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default AddWordForm;



import React, { useEffect, useRef } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CategoriesSelect, {
  Option,
} from "../../../CommonComponents/CategoriesSelect/CategoriesSelect";
import * as yup from "yup";
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

      <p>
        {errors?.category?.value?.message || errors?.category?.label?.message}
      </p>

      <button type="submit">Submit</button>
    </form>
  );
};

export default AddWordForm;
