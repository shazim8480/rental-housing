import { ReactElement, useState } from "react";
// layout
import { NextPageWithLayout } from "../../_app";
import DashboardLayout from "@/layout/dashboard/DashboardLayout";
import Breadcrumb from "@/components/dashboard/Breadcrumb/Breadcrumb";
import PropertiesTable from "@/components/dashboard/Tables/PropertiesTable";

const PropertyListPage: NextPageWithLayout = ({}) => {
  return (
    <>
      <Breadcrumb pageName="Properties" />
      <div className="flex flex-col gap-10">
        <PropertiesTable />
      </div>
    </>
  );
};

export default PropertyListPage;

PropertyListPage.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
