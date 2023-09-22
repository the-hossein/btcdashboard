import { v4 as uuidv4 } from "uuid";
import { ITableColumns } from "../../../viewModel/types/TableTypes/ITableColumn";

export const columns: ITableColumns[] = [
  {
    id: uuidv4(),
    label: "کد محتوا",
    name: "uuid",
    align: "right",
    minWidth: 85,
  },
  {
    id: uuidv4(),
    label: "تیتر محتوا",
    name: "title",
    align: "right",
    minWidth: 370,
  },
  {
    id: uuidv4(),
    label: "زمان انتشار",
    name: "date",
    align: "center",
    minWidth: 110,
  },
  {
    id: uuidv4(),
    label: "مکان محتوا",
    name: "location",
    align: "center",
    minWidth: 100,
  },
  {
    id: uuidv4(),
    label: "تایید شده",
    name: "isActive",
    align: "center",
    minWidth: 100,
    sortField: true,
  },
  {
    id: uuidv4(),
    label: "",
    name: "actions",
    align: "left",
    minWidth: 60,
  },
];
