import { useAppSelector } from "../../../redux/hooks";
import { forwardRef } from "react";
import Select, { SingleValue, ActionMeta } from "react-select";
import { getSelectStyles } from "./getSelectStyles";
import css from "./CategoriesSelect.module.css";
import { selectCategories } from "../../../redux/categories/selectors";
import { getWordsCategoriesOptions } from "../../../utils/getWordsCategoriesOptions";

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
    const categories = useAppSelector(selectCategories);
    const options = getWordsCategoriesOptions(categories);

    return (
      <Select
        unstyled
        {...props}
        ref={ref}
        options={options}
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
