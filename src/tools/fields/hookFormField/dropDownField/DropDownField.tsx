import React, { InputHTMLAttributes, ReactElement } from "react";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { ITableDropDown } from "../../../../viewModel/types/TableTypes/IIsActiveDropDown";
import Style from "./DropDown.module.scss";
import {
  useController,
  UseControllerProps,
  FieldValues,
  Control,
} from "react-hook-form";

interface IProps<T extends FieldValues> {
  options: ITableDropDown[];
  icon?: ReactElement;
  label?: string;
  control: Control<T, object>;
}

type CombinedProps<T extends FieldValues> = IProps<T> &
  UseControllerProps<T> &
  InputHTMLAttributes<HTMLInputElement>;

const DropDownField = <T extends FieldValues>({
  options,
  icon,
  label,
  ...props
}: CombinedProps<T>) => {
  const {
    field,
    fieldState: { error, isTouched, invalid },
  } = useController(props);

  return (
    <>
      <div className={Style.dropdown_field}>
        <div>
          {icon}
          <span>{label}</span>
        </div>
        <FormControl fullWidth>
          <Select
            {...field}
            sx={{
              width: "100%",
              height: "46px !important",
              ".MuiInputBase-root": {
                width: "100%",
                height: "46px !important",
                direction: "rtl",
              },
              ".MuiOutlinedInput-input": {
                fontSize: "12px",
              },
              ".MuiOutlinedInput-notchedOutline ": {
                //   border: "none !important",
                borderColor: !invalid && isTouched
                ? "var(--success) !important"
                : invalid && isTouched
                ? "var(--error) !important"
                : invalid
                ? "var(--error) !important"
                : "var(--border-color) !important",
                zIndex: 80,
                "& legend": {
                  width: "0 !important",
                },
              },
              ".MuiSelect-select": {
                width: "100%",
                padding: "8px 6px ",
                paddingRight: "16px !important",
                paddingLeft: "32px",
              },
              ".MuiSelect-icon": {
                left: "7px",
                right: "auto",
              },
            }}
            displayEmpty
            label={label}
            inputProps={{ "aria-label": "Without label" }}
          >
            {options.map((option) => (
              <MenuItem value={option.value}>{option.label}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <p className={Style.error_box}>{error?.message ?? ""}</p>
      </div>
    </>
  );
};

export default DropDownField;
