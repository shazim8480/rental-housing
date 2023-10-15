import { ReactElement, useState } from "react";
// layout
import { NextPageWithLayout } from "../../_app";
import DashboardLayout from "@/layout/dashboard/DashboardLayout";
import Breadcrumb from "@/components/dashboard/Breadcrumb/Breadcrumb";
import UsersTable from "@/components/dashboard/Tables/UsersTable";

const UserListPage: NextPageWithLayout = ({}) => {
  return (
    <>
      <Breadcrumb pageName="Users" />
      <div className="flex flex-col gap-10">
        <UsersTable />
      </div>
    </>
  );
};

export default UserListPage;

UserListPage.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
