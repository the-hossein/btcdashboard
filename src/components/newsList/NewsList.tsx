import React, { FC, useEffect, useState } from "react";
import MainLayout from "../../tools/contentManages/MainLayout";
import MainTable from "../../tools/table/MainTable";
import HeaderTableContent from "../../tools/table/contentTable/ContentTable";
import { ITableContentRow } from "../../viewModel/types/TableTypes/ITableRow";
import { useParams } from "react-router-dom";
import { ResultModel } from "../../viewModel/types/IApi";
import { CallApi } from "../../services/api/CallApi";
import { GetTableContent } from "../../services/api/ApiRoutes";
import { StatusCode } from "../../viewModel/enums/StatusCode";
import TableSkeleton from "../../tools/table/TableSkeleton";
import type { Value } from "react-multi-date-picker";
import { getTimeStamp } from "../../tools/table/UtiltyTable";
import MenuItems from "../../text/MenuItems";
import { fundedMenu } from "../../services/utils/FindMenuListTitle";

interface IProps {}

const NewsList: FC<IProps> = () => {
  const [menuItems] = MenuItems();
  const [columns, activeStatus, locationStatus] = HeaderTableContent();
  const params = useParams();
  const [loader, setLoader] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [datePicker, setDatePicker] = useState<Value>(() => null);
  const [tableRows, setTableRows] = useState<ITableContentRow[] | null>(null);
  const [filteredRows, setFilteredRows] = useState<ITableContentRow[] | null>(
    null
  );

  const [rowsPerPage, setRowsPerPage] = useState<number>(20);
  const [page, setPage] = useState<number>(0);

  const getTableContentBack = async () => {
    setLoader(true);

    const tableContent: ResultModel<ITableContentRow[]> = await CallApi(
      GetTableContent(params.id ?? "1", page, rowsPerPage),
      null,
      false,
      "GET",
      false
    );

    if (tableContent.statusCode === StatusCode.Success) {
      setTableRows(tableContent.data?.data ?? null);
      setFilteredRows(tableContent.data?.data ?? null);
      setLoader(false);
    }

    setLoader(false);
  };

  useEffect(() => {
    getTableContentBack();
  }, [params, page, rowsPerPage]);

  useEffect(() => {
    if (tableRows !== null) {
      let filteredData = tableRows;

      if (typeof activeStatus === "number") {
        if (activeStatus < 2) {
          filteredData = filteredData?.filter(
            (row) => row.IsActive === !!activeStatus
          );
        }
      }

      if (search !== "") {
        filteredData = filteredData?.filter((row) =>
          row.Title.includes(search)
        );
      }

      if (datePicker !== null) {
        const date: string | number | Object = datePicker.valueOf();
        const timeStamp = new Date(typeof date === "number" ? date : "");

        filteredData = filteredData?.filter((row) => {
          return (
            getTimeStamp(new Date(row.ReleaseTime)) === getTimeStamp(timeStamp)
          );
        });
      }

      setFilteredRows(filteredData);
    }
  }, [activeStatus, search, datePicker]);

  return (
    <>
      <MainLayout
        title={fundedMenu(
          Array.isArray(menuItems[1].children) ? menuItems[1].children : [],
          params?.id ? +params?.id : 0
        )}
        search={search}
        onChangeSearch={(e) => setSearch(e.target.value)}
        datePicker={datePicker}
        onchangeDate={(e) => {
          setDatePicker(e);
        }}
      >
        {loader ? (
          <TableSkeleton />
        ) : (
          <MainTable
            columns={columns}
            rows={filteredRows}
            page={page}
            setPage={setPage}
            rowsPerPage={rowsPerPage}
            setRowsPerPage={setRowsPerPage}
          />
        )}
      </MainLayout>
    </>
  );
};

export default NewsList;
