import { Autocomplete, FormControl, TextField } from "@mui/material";
import React, { FC, ReactElement } from "react";
import { ITableDropDown } from "../../../../viewModel/types/TableTypes/IIsActiveDropDown";
import Style from "./MultiDropDown.module.scss";

interface IProps {
  limitTag?: number;
  id?: string;
  label?: string;
  icon?: ReactElement;
  placeholder?: string;
  options: ITableDropDown[] | [];
  value: ITableDropDown[];
  onChange: (event?: React.ChangeEvent<{}>, newValue?: any) => void;
}

const MultiDropDownField: FC<IProps> = ({
  limitTag = 2,
  id = "multiple-limit-tags",
  options,
  label,
  icon,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <>
      <div className={Style.dropdown_field}>
        <div className={Style.container}>
          {icon}
          <span>{label}</span>
        </div>
        <FormControl fullWidth>
          <Autocomplete
            multiple
            fullWidth
            limitTags={limitTag}
            id={id}
            options={options}
            getOptionLabel={(option) => option.label}
            value={value}
            renderInput={(params) => (
              <TextField
                sx={{
                  ".MuiChip-root": {
                    fontSize: "10px !important",
                    height: "27px",
                  },
                  ".MuiChip-deleteIcon": {
                    fontSize: "16PX !important",
                    margin: "0 !important",
                    marginRight: "-10px !important",
                    marginLeft: "5px !important",
                  },
                  ".MuiChip-label": {
                    padding: "0 12px",
                  },
                }}
                {...params}
                label={""}
                placeholder={value.length <= 0 ? placeholder : ""}
              />
            )}
            onChange={onChange}
            sx={{
              width: "100%",
              //   height: "46px !important",
              ".MuiInputBase-root": {
                width: "100%",
                direction: "rtl",
                paddingRight: "9px !important",
                paddingLeft: "39px !important",
              },
              ".MuiOutlinedInput-input": {
                fontSize: "12px",
              },
              ".MuiOutlinedInput-notchedOutline ": {
                //   border: "none !important",
                borderColor: "var(--border-color) !important",
                zIndex: 80,
                "& legend": {
                  width: "0 !important",
                },
              },
              ".MuiOutlinedInput-root": {
                maxHeight: "46px" /* حداکثر ارتفاع dropdown در بسته شدن */,
              },
              ".MuiOutlinedInput-root.Mui-focused": {
                maxHeight: "initial !important",
              },
              ".MuiAutocomplete-input": {
                paddingTop: "5.5px !important",
              },
              ".MuiAutocomplete-endAdornment": {
                left: "7px !important",
                right: "auto !important",
                direction: "ltr",
                ".MuiSvgIcon-root": {
                  width: "15px !important",
                  height: "15px !important",
                },
              },
            }}
          />
        </FormControl>
        <p className={Style.error_box}></p>
      </div>
    </>
  );
};

export default MultiDropDownField;
