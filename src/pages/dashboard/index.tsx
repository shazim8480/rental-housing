import { ReactElement, useState } from "react";
// layout
import { NextPageWithLayout } from "../_app";
import DashboardLayout from "@/layout/dashboard/DashboardLayout";

const DashboardPage: NextPageWithLayout = ({}) => {
  return (
    <div>
      <h1>Welcome to the dashboard</h1>
    </div>
  );
};

export default DashboardPage;

DashboardPage.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
