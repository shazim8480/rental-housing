import { ReactElement } from "react";
import ApplyPropertyForm from "@/components/ApplyPropertyForm";

// layout
import MainLayout from "@/layout/main/MainLayout";

// components
import { NextPageWithLayout } from "../_app";
import Footer from "@/layout/UI/Footer";

const PropertyApplyPage: NextPageWithLayout = () => {
  return (
    <section>
      <ApplyPropertyForm />
    </section>
  );
};

export default PropertyApplyPage;

PropertyApplyPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
