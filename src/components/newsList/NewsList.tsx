import React, { FC } from "react";
import MainLayout from "../../tools/contentManages/MainLayout";
import MainTable from "../../tools/table/MainTable";
import { columns } from "../../tools/table/contentTable/ContentTable";
import { ITableColumns } from "../../viewModel/types/TableTypes/ITableColumn";
import { IRows } from "../../viewModel/types/TableTypes/ITableRow";
import { ITableRow, TableData } from "../../contents/FakeData";

interface IProps {}

const NewsList: FC<IProps> = () => {
  return (
    <>
      <MainLayout title="لیست اخبار">
        <MainTable<ITableRow> columns={columns} rows={TableData} />
      </MainLayout>
    </>
  );
};

export default NewsList;
