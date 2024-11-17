// import Select from "react-select";
// import { getSelectStyles } from "./getSelectStyles";
// import css from "./CategoriesSelect.module.css";

// export type Option = {
//   label: string;
//   value: string;
// };

// type ControllerField = {
//   onChange: (value: any) => void;
//   onBlur: () => void;
//   value: any;
//   name: string;
//   ref: React.Ref<any>;
// };

// type CategoriesSelectProps = {
//   location: "form" | "dashboard";
// } & ControllerField;

// const CategoriesSelect = ({ location, ...props }: CategoriesSelectProps) => {
//   return (
//     <Select
//       options={[
//         { value: "chocolate", label: "Chocolate" },
//         { value: "strawberry", label: "Strawberry" },
//         { value: "vanilla", label: "Vanilla" },
//         { value: "mint", label: "Mint" },
//         { value: "caramel", label: "Caramel" },
//         { value: "coffee", label: "Coffee" },
//         { value: "hazelnut", label: "Hazelnut" },
//         { value: "banana", label: "Banana" },
//         { value: "peach", label: "Peach" },
//         { value: "mango", label: "Mango" },
//         { value: "blueberry", label: "Blueberry" },
//         { value: "raspberry", label: "Raspberry" },
//         { value: "pistachio", label: "Pistachio" },
//         { value: "lemon", label: "Lemon" },
//         { value: "lime", label: "Lime" },
//         { value: "coconut", label: "Coconut" },
//         { value: "cherry", label: "Cherry" },
//         { value: "watermelon", label: "Watermelon" },
//         { value: "grape", label: "Grape" },
//         { value: "apple", label: "Apple" },
//       ]}
//       placeholder="Categories"
//       aria-labelledby="categories select"
//       aria-label="categories select"
//       {...props}
//       defaultValue={{ value: "", label: "" }}
//       unstyled
//       styles={getSelectStyles(location)}
//       classNames={{
//         option: () => `${css["custom-option"]}`,
//       }}
//     />
//   );
// };

// export default CategoriesSelect;

import { forwardRef } from "react";
import Select, { SingleValue, ActionMeta } from "react-select";
import { getSelectStyles } from "./getSelectStyles";
import css from "./CategoriesSelect.module.css";

export type Option = {
  label: string;
  value: string;
};

type CategoriesSelectProps = {
  location: "form" | "dashboard";
  value: Option | null;
  onChange: (
    value: SingleValue<Option>,
    actionMeta: ActionMeta<Option>
  ) => void;
  onBlur: () => void;
};

const CategoriesSelect = forwardRef<any, CategoriesSelectProps>(
  ({ location, ...props }, ref) => {
    return (
      <Select
        unstyled
        {...props}
        ref={ref}
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
        placeholder="Select a Category"
        aria-labelledby="categories select"
        aria-label="categories select"
        styles={getSelectStyles(location)}
        classNames={{
          option: () => `${css["custom-option"]}`,
        }}
        onChange={(newValue, actionMeta) => {
          props.onChange(newValue as SingleValue<Option>, actionMeta);
        }}
      />
    );
  }
);

export default CategoriesSelect;
