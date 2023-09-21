import React, { FC } from "react";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { ITableDropDown } from "../../../viewModel/types/TableTypes/IIsActiveDropDown";

interface IProps {
  options: ITableDropDown[];
  state: string | number;
  setState: (e: string | number) => void;
}

const MenuDropDow = ({ options, state, setState }: IProps) => {
  return (
    <>
      <FormControl>
        <Select
          value={`${state}`}
          onChange={(e: SelectChangeEvent) => {
            setState(e.target.value);
          }}
          sx={{
            minWidth: 120,
            ".MuiSelect-root": {
              direction: "rtl",
            },
            ".MuiOutlinedInput-notchedOutline ": {
              border: "none !important",
            },
            ".MuiSelect-select": {
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
          inputProps={{ "aria-label": "Without label" }}
        >
          {options.map((option) => (
            <MenuItem value={option.value}>{option.label}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default MenuDropDow;
