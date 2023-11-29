import { ReactElement } from "react";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import ApplyPropertyForm from "@/components/ApplyPropertyForm";

// layout
import MainLayout from "@/layout/main/MainLayout";

// components
import { NextPageWithLayout } from "../_app";
import { IProperty } from "@/types/globals";
// import { useRouter } from "next/router";

const PropertyApplyPage: NextPageWithLayout = ({ propertyDetails }: any) => {
  return (
    <section>
      <ApplyPropertyForm propertyDetails={propertyDetails} />
    </section>
  );
};

export default PropertyApplyPage;

PropertyApplyPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export const getServerSideProps = (async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://rental-housing-server.onrender.com/api/property/${params?.applyPropertyID}`
  );
  const propertyDetails: IProperty = await res.json();

  // console.log("propertyDetails on server", propertyDetails);

  return { props: { propertyDetails } };
}) satisfies GetServerSideProps<{
  propertyDetails: IProperty;
}>;
