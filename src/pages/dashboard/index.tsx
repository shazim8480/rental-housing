import { ReactElement, useState } from "react";
// layout
import { NextPageWithLayout } from "../_app";
import DashboardLayout from "@/layout/dashboard/DashboardLayout";

const DashboardPage: NextPageWithLayout = ({}) => {
  return (
    <div className="text-center flex min-h-screen items-center justify-center">
      <h3>
        Welcome to the dashboard, very soon you'll be able to see much contents!
      </h3>
    </div>
  );
};

export default DashboardPage;

DashboardPage.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
