import React, { FC, useState } from "react";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import { ITableColumns } from "../../viewModel/types/TableTypes/ITableColumn";
import { v4 as uuidv4 } from "uuid";
import { TableData } from "../../contents/FakeData";
import { convertDateToPersian } from "./UtiltyTable";
import ItemCell from "./ItemCell";
import MenuDropDow from "../fields/dropDown/MenuDropDow";
import {
  IIsActiveDropDown,
  ITableDropDown,
} from "../../viewModel/types/TableTypes/IIsActiveDropDown";

interface IProps {}

const MainTable: FC<IProps> = () => {
  const [isActiveFilter, setIsActiveFilter] = useState<number | string>(1);

  const columns: readonly ITableColumns[] = [
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

  interface IRows {
    [key: string]: any;
    actions: null;
    uuid: number;
    title: string;
    date: Date;
    location: number;
    isActive: boolean;
  }

  const rows: IRows[] = TableData.map((data) => ({ ...data, actions: null }));

  const optionsDropDown: ITableDropDown[] = [
    { value: 1, label: "تایید شده" },
    { value: 0, label: "تایید نشده" },
  ];

  return (
    <TableContainer sx={{ maxHeight: 550 }}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            {columns.map((col) => (
              <TableCell
                key={col.id}
                align={col.align}
                style={{ minWidth: col.minWidth }}
              >
                {col.name === "isActive" ? (
                  <MenuDropDow
                    state={isActiveFilter}
                    setState={(value) => {
                      setIsActiveFilter(value);
                    }}
                    options={optionsDropDown}
                  />
                ) : (
                  col.label
                )}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow hover role="checkbox" tabIndex={-1} key={row.uuid}>
              {columns.map((column) => {
                return (
                  <TableCell key={column.id} align={column.align}>
                    <ItemCell value={row[column.name]} name={column.name} />
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MainTable;
