import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import ItemCell from "./ItemCell";
import { ITableColumns } from "../../viewModel/types/TableTypes/ITableColumn";
import { ITableContentRow } from "../../viewModel/types/TableTypes/ITableRow";
import TablePagination from "@mui/material/TablePagination";
import style from "./Table.module.scss";

interface IProps {
  columns: ITableColumns[];
  rows: ITableContentRow[] | null;
  page: number;
  setPage: (num: number) => void;
  rowsPerPage: number;
  setRowsPerPage: (num: number) => void;
  pageCount?: number;
}

const MainTable = ({
  columns,
  rows,
  page,
  rowsPerPage,
  setPage,
  setRowsPerPage,
  pageCount = 100,
}: IProps) => {
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <TableContainer sx={{ maxHeight: "100%" }} className={style.tableScroll}>
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
                        <ItemCell value={row[column.name]} id={row.IntID} name={column.name} />
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      {rows !== null && rows?.length > 10 && (
        <TablePagination
          rowsPerPageOptions={[10, 20, 50, 100]}
          component="div"
          style={{ direction: "ltr" }}
          sx={{
            // height: "fit-content",
            // minHeight: "fit-content !important",
            // overflow: "auto",
            overflow: "initial !important" ,
            // ".MuiTablePagination-root": { overflow: "initial !important" },
            ".MuiTablePagination-actions": {
              rotate: "180deg",
            },
            "*": {
              paddingTop: "0 !important",
              paddingBottom: "0 !important",
            },
          }}
          count={pageCount ?? 100}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage={"ردیف در هر صفحه"}
        />
      )}
    </>
  );
};

export default MainTable;
