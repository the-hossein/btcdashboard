import React from "react";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import ItemCell from "./ItemCell";
import { ITableColumns } from "../../viewModel/types/TableTypes/ITableColumn";
import { ITableRow } from "../../contents/FakeData";
import { ITableContentRow } from "../../viewModel/types/TableTypes/ITableRow";

interface IProps {
  columns: ITableColumns[];
  rows: ITableContentRow[] | null;
}

const MainTable = ({ columns, rows }: IProps) => {
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
                {col.actionField ? col.action : col.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows !== null &&
            rows?.map((row) => (
              <TableRow hover role="checkbox" tabIndex={-1} key={row?.IntID}>
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
