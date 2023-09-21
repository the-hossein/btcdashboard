import React, { FC } from "react";
import MainLayout from "../../tools/contentManages/MainLayout";
import MainTable from "../../tools/table/MainTable";

interface IProps {}

const NewsList: FC<IProps> = () => {
  return (
    <>
      <MainLayout title="لیست اخبار">
        <MainTable />
      </MainLayout>
    </>
  );
};

export default NewsList;
