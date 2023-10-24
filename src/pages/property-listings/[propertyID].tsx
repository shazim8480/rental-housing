import MainLayout from "@/layout/main/MainLayout";
import React, { ReactElement, useState } from "react";
import { NextPageWithLayout } from "../_app";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import { useRouter } from "next/router";

import { StarIcon } from "@heroicons/react/20/solid";
import { RadioGroup } from "@headlessui/react";

// fake db
import Link from "next/link";
import { IProperty } from "@/types/globals";
import { GET_PROPERTY_BY_ID_URL, PROTOCOL_HOST } from "@/constants/url";

const breadcrumbs = [
  { id: 1, name: "Property Listings", href: "/property-listings" },
  { id: 2, name: "Rental", href: "/property-listings" },
];

const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const PropertyDetailsPage: NextPageWithLayout = ({ propertyDetails }: any) => {
  const {
    _id,
    title,
    description,
    images,
    pricing,
    location,
    contact,
    additionalDetails,
    units,
  } = propertyDetails;
  // console.log("propertyDetails", propertyDetails);

  const [selectedUnit, setSelectedUnit] = useState<any>(null);

  console.log("Selected unit", selectedUnit);

  const router = useRouter();

  // const handleRegisterProperty = () => {
  //   if (selectedUnit) {
  //     router.push({
  //       pathname: `/property-listings/${_id}`,
  //       query: { selected_unit: selectedUnit?.name },
  //     });
  //   } else {
  //     alert("You must select a unit!");
  //   }
  // };

  return (
    <div className="bg-white">
      <div className="pt-6">
        {/* breadcrumbs */}
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="flex items-center max-w-2xl px-4 mx-auto space-x-2 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            {breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <Link
                    href={breadcrumb.href}
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    {breadcrumb.name}
                  </Link>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="w-4 h-5 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a
                href="#"
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {title}
              </a>
            </li>
          </ol>
        </nav>

        {/* Image gallery */}
        <div className="max-w-2xl mx-auto mt-6 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="hidden overflow-hidden rounded-lg aspect-h-4 aspect-w-3 lg:block">
            <img
              src={images[0]?.src}
              alt="rental"
              className="object-cover object-center w-full h-full"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="overflow-hidden rounded-lg aspect-h-2 aspect-w-3">
              <img
                src={images[1]?.src}
                alt="rental"
                className="object-cover object-center w-full h-full"
              />
            </div>
            <div className="overflow-hidden rounded-lg aspect-h-2 aspect-w-3">
              <img
                src={images[2].src}
                alt="rental"
                className="object-cover object-center w-full h-full"
              />
            </div>
          </div>
          <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <img
              src={images[3].src}
              alt="rental"
              className="object-cover object-center w-full h-full"
            />
          </div>
        </div>

        {/* property info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {title}
            </h3>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h3 className="sr-only">Property information</h3>
            <p className="text-3xl tracking-tight text-gray-900">
              BDT {pricing?.monthly}/mth
            </p>

            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        reviews.average > rating
                          ? "text-yellow-500"
                          : "text-gray-200",
                        "h-5 w-5 flex-shrink-0"
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{reviews.average} out of 5 stars</p>
                <a
                  href={reviews.href}
                  className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  {reviews.totalCount} reviews
                </a>
              </div>
            </div>

            <form className="mt-10">
              {/* Units */}
              <div className="mt-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900">
                    Available Units
                  </h3>
                  <a
                    href="#"
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Units selection guide
                  </a>
                </div>
                {/* select units  */}
                <RadioGroup
                  value={selectedUnit}
                  onChange={setSelectedUnit}
                  className="mt-4"
                >
                  <RadioGroup.Label className="sr-only">
                    Choose an available unit
                  </RadioGroup.Label>
                  <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                    {units?.map((unit: any) => (
                      <RadioGroup.Option
                        key={unit.name}
                        value={unit}
                        disabled={!unit?.available}
                        className={({ active }) =>
                          classNames(
                            unit?.available
                              ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                              : "cursor-not-allowed bg-gray-50 text-gray-200",
                            active ? "ring-2 ring-indigo-500" : "",
                            "group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                          )
                        }
                      >
                        {({ active, checked }) => (
                          <>
                            <RadioGroup.Label as="span">
                              {unit?.name}
                            </RadioGroup.Label>
                            {unit?.available ? (
                              <span
                                className={classNames(
                                  active ? "border" : "border-2",
                                  checked
                                    ? "border-indigo-500"
                                    : "border-transparent",
                                  "pointer-events-none absolute -inset-px rounded-md"
                                )}
                                aria-hidden="true"
                              />
                            ) : (
                              <span
                                aria-hidden="true"
                                className="absolute border-2 border-gray-200 rounded-md pointer-events-none -inset-px"
                              >
                                <svg
                                  className="absolute inset-0 w-full h-full text-gray-200 stroke-2"
                                  viewBox="0 0 100 100"
                                  preserveAspectRatio="none"
                                  stroke="currentColor"
                                >
                                  <line
                                    x1={0}
                                    y1={100}
                                    x2={100}
                                    y2={0}
                                    vectorEffect="non-scaling-stroke"
                                  />
                                </svg>
                              </span>
                            )}
                          </>
                        )}
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>
              {/* proceed to apply  */}
              <Link href={`/apply-property/${_id}`}>
                <button
                  type="submit"
                  className="flex items-center justify-center w-full px-8 py-3 mt-10 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Proceed to Register
                </button>
              </Link>
            </form>
          </div>

          {/* Description and details */}
          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{description}</p>
              </div>
            </div>
            {/* Amenities */}
            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Amenities</h3>
              <div className="mt-4">
                <ul role="list" className="pl-4 space-y-2 text-sm list-disc">
                  {additionalDetails?.amenities?.map((amenity: any) => (
                    <li key={amenity} className="text-gray-400">
                      <span className="text-gray-600">{amenity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* location info */}
            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">
                Location Details
              </h3>

              <div className="mt-4 space-y-3">
                <p className="text-sm text-gray-600">
                  {location?.streetAddress}
                </p>
                <p className="text-sm text-gray-600">
                  {location?.district}, {location?.division},{" "}
                  {location?.zipCode}
                </p>
              </div>
            </div>
            {/* Contact info */}
            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">
                Contact with
              </h3>

              <div className="mt-4 space-y-3">
                <p className="text-sm text-gray-600">{contact?.name}</p>
                <p className="text-sm text-gray-600">{contact?.email}</p>
                <p className="text-sm text-gray-600">{contact?.phone}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsPage;

PropertyDetailsPage.getLayout = function (page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export const getServerSideProps = (async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://rental-housing-server.onrender.com/api/property/${params?.propertyID}`
  );
  const propertyDetails: IProperty = await res.json();

  // console.log("propertyDetails on server", propertyDetails);

  return { props: { propertyDetails } };
}) satisfies GetServerSideProps<{
  propertyDetails: IProperty;
}>;
