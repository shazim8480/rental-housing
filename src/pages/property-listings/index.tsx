import MainLayout from "@/layout/main/MainLayout";
import { ReactElement, useState } from "react";
import { NextPageWithLayout } from "../_app";
import Dropdown from "@/components/shared/Dropdown";
import RentalCardSmall from "@/components/RentalCardSmall";

// dropdown data //
const priceData = [
  { value: "Any Price" },
  { value: `${8000} BDT / mth` },
  { value: `${10000} BDT / mth` },
  { value: `${12000} BDT / mth` },
  { value: `${15000} BDT / mth` },
  { value: `${20000} BDT / mth` },
];
const homeTypeData = [{ value: "Rental" }, { value: "For Sale" }];
const bedTypeData = [
  { value: "2 - 3 Beds" },
  { value: "3 - 4 Beds" },
  { value: "Others" },
];

const PropertyListingsPage: NextPageWithLayout = () => {
  // dropdown state
  const [priceSelect, setPriceSelect] = useState(priceData[0]);
  const [bedsSelect, setBedsSelect] = useState(bedTypeData[0]);
  const [homeTypeSelect, setHomeTypeSelect] = useState(homeTypeData[0]);

  return (
    <div className="lg:grid lg:grid-cols-2 lg:place-items-center lg:gap-5 py-10 lg:pt-5 px-10 bg-slate-50">
      <div className="flex-1 w-full min-h-screen">
        <h3 className="text-2xl font-bold tracking-wide mb-7 text-indigo-700 lg:text-3xl md:text-3xl text-center lg:text-left md:text-left">
          Find your home, accordingly
        </h3>
        {/* filtering options */}
        <div className="lg:flex md:flex grid grid-cols-2 gap-5 place-items-center lg:justify-start md:justify-start justify-between lg:space-x-5 md:space-x-6 items-start mb-5">
          <Dropdown
            items={priceData}
            selectedValue={priceSelect}
            setSelectedValue={setPriceSelect}
          />
          <Dropdown
            items={homeTypeData}
            selectedValue={homeTypeSelect}
            setSelectedValue={setHomeTypeSelect}
          />
          <Dropdown
            items={bedTypeData}
            selectedValue={bedsSelect}
            setSelectedValue={setBedsSelect}
          />
        </div>
        {/* rentals list */}
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <RentalCardSmall />
            <RentalCardSmall />
            <RentalCardSmall />
            <RentalCardSmall />
          </div>
        </div>
        {/* pagination*/}
        <div></div>
      </div>

      {/* maps */}
      <div className="w-full mt-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
          width="600"
          height="450"
          frameBorder="0"
          style={{
            border: 0,
            width: "100%",
            height: "100vh",
            borderRadius: "8px",
          }}
          // allowFullScreen=""
          aria-hidden="false"
          // tabIndex="0"
        />
      </div>
    </div>
  );
};

export default PropertyListingsPage;

PropertyListingsPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout isSearchBar={true}>{page}</MainLayout>;
};
