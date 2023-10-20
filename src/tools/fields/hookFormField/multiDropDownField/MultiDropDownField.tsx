import { Autocomplete, FormControl, TextField } from "@mui/material";
import React, { FC, InputHTMLAttributes, ReactElement } from "react";
import { ITableDropDown } from "../../../../viewModel/types/TableTypes/IIsActiveDropDown";
import Style from "./MultiDropDown.module.scss";
import {
  useController,
  UseControllerProps,
  FieldValues,
  Control,
} from "react-hook-form";

interface IProps<T extends FieldValues> {
  limitTag?: number;
  id?: string;
  label?: string;
  icon?: ReactElement;
  placeholder?: string;
  options: ITableDropDown[] | [];
  // value: ITableDropDown[];
  // onChange: (event?: React.ChangeEvent<{}>, newValue?: any) => void;
  control: Control<T, object>;
}

type CombinedProps<T extends FieldValues> = IProps<T> &
  UseControllerProps<T> &
  InputHTMLAttributes<HTMLInputElement>;

const MultiDropDownField = <T extends FieldValues>({
  limitTag = 2,
  id = "multiple-limit-tags",
  options,
  label,
  icon,
  placeholder,
  ...props
}: CombinedProps<T>) => {
  const {
    field,
    fieldState: { error, isTouched, invalid },
  } = useController(props);

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
                placeholder={field.value.length > 0 ? "" : placeholder}
                inputRef={field.ref}
                {...field}
              />
            )}
            onChange={(e, newValues) => {
              field.onChange(newValues);
            }}
            sx={{
              width: "100%",
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
                borderColor:
                  !invalid && isTouched
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
        <p className={Style.error_box}>{error?.message ?? ""}</p>
      </div>
    </>
  );
};

export default MultiDropDownField;
