import { StylesConfig } from "react-select";
import { type Option } from "./CategoriesSelect";

type GetSelectStyles = (location: string) => StylesConfig<Option>;

export const getSelectStyles: GetSelectStyles = (location) => {
  return {
    container: (baseStyles) => ({
      marginBottom: location === "form" ? "8px" : undefined,
    }),
    control: (baseStyles) => ({
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
      maxHeight: "240x",
      backgroundColor: "#FFFFFF",
      borderRadius: "15px",
      padding: "12px 6px 12px 24px",
      marginTop: "4px",
      boxSizing: "border-box",
    }),
    menuList: (baseStyles) => ({
      maxHeight: "216px",
      overflowY: "auto",
      "::-webkit-scrollbar": {
        width: "8px",
        height: "42%",
        cursor: "pointer",
      },
      "::-webkit-scrollbar-thumb": {
        background: "#F8F8F8",
        borderRadius: "12px",
      },
      "::-webkit-scrollbar-track": {
        background: "transparent",
      },
    }),
    option: (baseStyles, state) => ({
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: 1.5,
      color: state.isSelected ? "var(--primary-color)" : "#12141780",
      cursor: "pointer",
    }),
  };
};
