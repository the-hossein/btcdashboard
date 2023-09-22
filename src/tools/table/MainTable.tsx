import React, { FC, useState } from "react";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import ItemCell from "./ItemCell";
import MenuDropDow from "../fields/dropDown/MenuDropDow";
import { ITableDropDown } from "../../viewModel/types/TableTypes/IIsActiveDropDown";
import { ITableColumns } from "../../viewModel/types/TableTypes/ITableColumn";
import { ITableRow } from "../../contents/FakeData";

interface IProps<Row> {
  columns: ITableColumns[];
  rows: ITableRow[];
}

const MainTable = <Row,>({ columns, rows }: IProps<Row>) => {
  const [isActiveFilter, setIsActiveFilter] = useState<number | string>(1);

  const optionsDropDown: ITableDropDown[] = [
    { value: 2, label: "همه وضعیت ها" },
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
            <TableRow hover role="checkbox" tabIndex={-1} key={row?.uuid}>
              {columns.map((column) => {
                return (
                  <TableCell key={column.id} align={column.align}>
                    <ItemCell value={row[column?.name]} name={column.name} />
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
