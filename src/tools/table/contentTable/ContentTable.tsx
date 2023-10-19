import { v4 as uuidv4 } from "uuid";
import { ITableColumns } from "../../../viewModel/types/TableTypes/ITableColumn";
import MenuDropDow from "../../fields/dropDown/MenuDropDow";
import { useState } from "react";
import { ITableDropDown } from "../../../viewModel/types/TableTypes/IIsActiveDropDown";

const HeaderTableContent = (): [
  ITableColumns[],
  string | number,
  string | number
] => {
  const [isActive, setIsActive] = useState<number | string>(2);
  const [isLocation, setIsLocation] = useState<number | string>(9);
  const optionsDropDown: ITableDropDown[] = [
    { value: 2, label: "همه وضعیت ها" },
    { value: 1, label: "تایید شده" },
    { value: 0, label: "تایید نشده" },
  ];

  // const optionsLocation: ITableDropDown[] = [
  //   { value: 1, label: "خبر" },
  //   { value: 0, label: "زئوس" },
  // ];

  const optionsLocation: ITableDropDown[] = [
    { value: 9, label: "مکان محتوا" },
    { value: 0, label: "0" },
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
    { value: 5, label: "5" },
    { value: 6, label: "6" },
    { value: 7, label: "7" },
    { value: 8, label: "8" },
  ];


  const columns: ITableColumns[] = [
    {
      id: uuidv4(),
      label: "کد محتوا",
      name: "IntID",
      align: "right",
      minWidth: 85,
    },
    {
      id: uuidv4(),
      label: "تیتر محتوا",
      name: "Title",
      align: "right",
      minWidth: 370,
    },
    {
      id: uuidv4(),
      label: "زمان انتشار",
      name: "ReleaseTime",
      align: "center",
      minWidth: 110,
    },
    {
      id: uuidv4(),
      label: "مکان محتوا",
      name: "ShowLocation",
      align: "center",
      minWidth: 100,
      actionField: true,
      action: (
        <MenuDropDow
          state={isLocation}
          setState={(value) => {
            setIsLocation(value);
          }}
          options={optionsLocation}
        />
      ),
    },
    {
      id: uuidv4(),
      label: "تایید شده",
      name: "IsActive",
      align: "center",
      minWidth: 100,
      actionField: true,
      action: (
        <MenuDropDow
          state={isActive}
          setState={(value) => {
            setIsActive(value);
          }}
          options={optionsDropDown}
        />
      ),
    },
    {
      id: uuidv4(),
      label: "",
      name: "actions",
      align: "left",
      minWidth: 60,
    },
  ];

  return [columns, isActive, isLocation];
};

export default HeaderTableContent;
