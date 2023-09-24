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
}

const MainTable = ({ columns, rows }: IProps) => {
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [page, setPage] = useState<number>(0);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    setRowsPerPage(10);
    setPage(0);
  }, [rows?.length]);

  return (
    <>
      <TableContainer sx={{ maxHeight: 450 }} className={style.tableScroll}>
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
              rows
                ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                ?.map((row) => (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row?.IntID}
                  >
                    {columns.map((column) => {
                      return (
                        <TableCell key={column.id} align={column.align}>
                          <ItemCell
                            value={row[column.name]}
                            name={column.name}
                          />
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
            ".MuiTablePagination-actions": {
              rotate: "180deg",
            },
          }}
          count={rows?.length ?? 0}
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
