import React, { FC, useEffect, useState } from "react";
import MainLayout from "../../tools/contentManages/MainLayout";
import MainTable from "../../tools/table/MainTable";
import HeaderTableContent from "../../tools/table/contentTable/ContentTable";
import { ITableColumns } from "../../viewModel/types/TableTypes/ITableColumn";
import {
  IRows,
  ITableContentRow,
} from "../../viewModel/types/TableTypes/ITableRow";
import { ITableRow, TableData } from "../../contents/FakeData";
import { useParams } from "react-router-dom";
import { ResultModel } from "../../viewModel/types/IApi";
import { CallApi } from "../../services/api/CallApi";
import { GetTableContent } from "../../services/api/ApiRoutes";
import { StatusCode } from "../../viewModel/enums/StatusCode";
import TableSkeleton from "../../tools/table/TableSkeleton";

interface IProps {}

const NewsList: FC<IProps> = () => {
  const params = useParams();
  const [loader, setLoader] = useState<boolean>(false);
  const [tableRows, setTableRows] = useState<ITableContentRow[] | null>(null);
  const [filteredRows, setFilteredRows] = useState<ITableContentRow[] | null>(
    null
  );
  const [columns, activeStatus, locationStatus] = HeaderTableContent();

  const getTableContentBack = async () => {
    setLoader(true);

    const tableContent: ResultModel<ITableContentRow[]> = await CallApi(
      GetTableContent + params.id,
      null,
      false,
      "GET",
      false
    );

    if (tableContent.statusCode === StatusCode.Success) {
      setTableRows(tableContent.data?.data ?? null);
      setFilteredRows(tableContent.data?.data ?? null);
      setLoader(false);
      console.log("lunch table");
    }

    setLoader(false);
  };

  useEffect(() => {
    getTableContentBack();
  }, [params]);

  useEffect(() => {
    if (typeof activeStatus === "number") {
      setFilteredRows(() => {
        if (tableRows !== null) {
          if (activeStatus < 2) {
            return tableRows?.filter((row) => row.IsActive === !!activeStatus);
          } else {
            return tableRows;
          }
        }
        return null;
      });
    }
  }, [activeStatus]);

  return (
    <>
      <MainLayout title="لیست اخبار">
        {loader ? (
          <TableSkeleton />
        ) : (
          <MainTable columns={columns} rows={filteredRows} />
        )}
      </MainLayout>
    </>
  );
};

export default NewsList;
