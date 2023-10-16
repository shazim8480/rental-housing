import React, { useEffect, useState } from "react";

import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { propertyData } from "@/lib/propertyData";
import moment from "moment";

const ApplyPropertyForm = () => {
  const [selectedDate, setSelectedDate] = useState<string>("");

  // Effect to set today's date on component mount
  useEffect(() => {
    const today = moment().format("DD MMM YYYY");
    setSelectedDate(today);
  }, []);
  return (
    <form>
      <div className="space-y-12 px-10">
        <div className="border-b border-gray-900/10 py-12">
          <h3 className="text-base lg:text-xl font-semibold leading-7 text-gray-900">
            Property Information
          </h3>
          <p className="mt-1 text-sm leading-6 text-indigo-600 font-medium">
            Please make sure to contact the owner before finalizing the
            registration.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            {/* Property name */}
            <div className="col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Property Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="first-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  disabled={true}
                  defaultValue={"Rony Housing"}
                />
              </div>
            </div>
            {/* location */}
            <div className="col-span-3">
              <label
                htmlFor="location"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Location
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="location"
                  id="location"
                  autoComplete="location"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  disabled={true}
                  defaultValue={`${propertyData?.location?.streetAddress}, ${propertyData?.location?.district}, ${propertyData?.location?.division}, ${propertyData?.location?.zipCode}`}
                />
              </div>
            </div>
            {/* Owner name */}
            <div className="md:col-span-3 col-span-3 lg:col-span-2">
              <label
                htmlFor="tenant"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Tenant Name
              </label>
              <div className="mt-2">
                <input
                  id="tenant"
                  name="tenant"
                  type="tenant"
                  autoComplete="tenant"
                  disabled={true}
                  className="block pl-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={"Md Ashikur Rahman"}
                />
              </div>
            </div>

            {/* selected unit */}
            <div className="md:col-span-3 col-span-3 lg:col-span-1">
              <label
                htmlFor="unit"
                className="block mb-2 text-sm font-medium leading-6 text-gray-900"
              >
                Selected Unit
              </label>
              <div className="">
                <select
                  disabled={true}
                  id="unit"
                  name="unit"
                  autoComplete="unit"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>B-2</option>
                </select>
              </div>
            </div>

            {/* Unit size */}
            <div className="md:col-span-3 col-span-3 lg:col-span-1">
              <label
                htmlFor="size"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Unit Size
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="size"
                  id="size"
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={"1200 Sqft"}
                  disabled={true}
                />
              </div>
            </div>
            {/* Reg date */}
            <div className="md:col-span-3 col-span-3 lg:col-span-1">
              <label
                htmlFor="date"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Registration date
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="size"
                  id="size"
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={selectedDate}
                  disabled={true}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base lg:text-xl font-semibold leading-7 text-gray-900">
            Personal Information
          </h2>
          <p className="mt-3 text-sm leading-6 font-medium text-red-500">
            Please fill up the information correctly, Any misleading or
            incorrect information might cause disqualification from all the
            services
          </p>

          <div className="mt-10 grid  gap-x-6 gap-y-8 grid-cols-6">
            {/* First name */}
            <div className="col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {/* last name */}
            <div className="col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* email address */}
            <div className="md:col-span-3 col-span-3 lg:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* country */}
            <div className="mt-2 md:col-span-3 col-span-3 lg:col-span-1">
              <label
                htmlFor="country"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Country
              </label>
              <div className="">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>Bangladesh</option>
                </select>
              </div>
            </div>

            {/* city */}
            <div className="md:col-span-3 col-span-3 lg:col-span-1">
              <label
                htmlFor="city"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                City
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="city"
                  id="city"
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* division */}
            <div className="md:col-span-3 col-span-3 lg:col-span-1">
              <label
                htmlFor="city"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Division
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="city"
                  id="city"
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* postal code */}
            <div className="md:col-span-3 col-span-3 lg:col-span-1">
              <label
                htmlFor="postal-code"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                ZIP / Postal code
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  autoComplete="postal-code"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* Street address */}
            <div className="col-span-full">
              <label
                htmlFor="street-address"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Street Address
              </label>
              <div className="mt-2">
                <textarea
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  name="street-address"
                  id="street-address"
                  rows={6}
                  placeholder="Street Address"
                  defaultValue=""
                />
              </div>
            </div>
          </div>
        </div>

        {/* Upload Section */}
        <div className="col-span-6 mt-6 md:col-span-6 lg:grid lg:grid-cols-2 lg:gap-4">
          {/* NID */}
          <div>
            <label
              htmlFor="cover-photo"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Upload NID Photo
            </label>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div className="text-center">
                <PhotoIcon
                  className="mx-auto h-12 w-12 text-gray-300"
                  aria-hidden="true"
                />
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span>Upload Photo</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs leading-5 text-gray-600">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </div>
          {/* Upload Passport size photo */}
          <div>
            <label
              htmlFor="passport-photo"
              className="block text-sm font-medium leading-6 text-gray-900 mt-6 lg:mt-0"
            >
              Upload Passport Sized Photo
            </label>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div className="text-center">
                <PhotoIcon
                  className="mx-auto h-12 w-12 text-gray-300"
                  aria-hidden="true"
                />
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span>Upload Photo</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs leading-5 text-gray-600">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6 mr-10">
        <button
          type="button"
          className="px-7 rounded-md py-2 text-md bg-red-50 font-semibold leading-6 text-red-700"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-7 py-2 text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default ApplyPropertyForm;
