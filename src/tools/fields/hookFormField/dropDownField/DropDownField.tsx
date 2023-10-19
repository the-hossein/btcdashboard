import React, { FC, ReactElement } from "react";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { ITableDropDown } from "../../../../viewModel/types/TableTypes/IIsActiveDropDown";
import Style from "./DropDown.module.scss";

interface IProps {
  options: ITableDropDown[];
  state: string | number;
  setState: (e: string | number) => void;
  icon?: ReactElement;
  label?: string;
  error?: string;
}

const DropDownField = ({
  options,
  state,
  setState,
  icon,
  label,
  error,
}: IProps) => {
  return (
    <>
      <div className={Style.dropdown_field}>
        <div>
          {icon}
          <span>{label}</span>
        </div>
        <FormControl fullWidth>
          <Select
            value={`${state}`}
            onChange={(e: SelectChangeEvent) => {
              setState(e.target.value);
            }}
            sx={{
              width: "100%",
              height: "46px !important",
              ".MuiInputBase-root": {
                width: "100%",
                height: "46px !important",
                direction: "rtl",
              },
              ".MuiOutlinedInput-input" : {
                fontSize: "12px"
              },
              ".MuiOutlinedInput-notchedOutline ": {
                //   border: "none !important",
                borderColor: "var(--border-color) !important",
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
        <p className={Style.error_box}>{error ?? ""}</p>
      </div>
    </>
  );
};

export default DropDownField;