import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { propertyData } from "@/lib/propertyData";
import moment from "moment";
import { IProperty } from "@/types/globals";
import { useRegisterUserMutation } from "@/redux/feature/registered-users/registered-users-api";

type RegisterFormProps = React.HTMLAttributes<HTMLDivElement> & {
  propertyDetails: any;
};

interface RegisterFormPropsInputs {}

// const ApplyPropertyForm: React.FC = ({ propertyDetails }: any) => {
const ApplyPropertyForm: React.FC<RegisterFormProps> = (
  props: RegisterFormProps
) => {
  const {
    register,
    formState: { errors },
  } = useForm<RegisterFormPropsInputs>();
  const [selectedDate, setSelectedDate] = useState<string>("");

  const [selectedUnit, setSelectedUnit] = useState("");

  const { propertyDetails } = props;

  const { title, units, location, contact } = propertyDetails;

  // query to register user
  const [registerUser] = useRegisterUserMutation();

  const [formData, setFormData] = useState({
    propertyName: title,
    ownerName: contact?.name,
    ownerEmail: contact?.email,
    location: `${location?.streetAddress}, ${location?.district}, ${location?.division}, ${location?.zipCode}`,
    selectedUnit: selectedUnit,
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    city: "",
    division: "",
    streetAddress: "",
    postalCode: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData: any) => ({ ...prevData, [name]: value }));
  };

  const handleUnitChange = (e: any) => {
    const { value } = e.target;
    setSelectedUnit(value); // Update the selectedUnit state
    setFormData((prevData) => ({ ...prevData, selectedUnit: value }));
  };

  // submit user data for
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Exclude a specific input value (e.g., email) from the formData
    const { location, ...formDataWithoutLocation } = formData;
    console.log(formDataWithoutLocation);
    registerUser(formData);
  };

  useEffect(() => {
    const today = moment().format("DD MMM YYYY");
    setSelectedDate(today);
  }, []);

  // const today = moment().format("DD MMM YYYY");
  return (
    <form onSubmit={handleSubmit}>
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
                  defaultValue={title}
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
                  defaultValue={`${location?.streetAddress}, ${location?.district}, ${location?.division}, ${location?.zipCode}`}
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
                  defaultValue={contact?.name}
                />
              </div>
            </div>

            {/* select unit */}
            <div className="md:col-span-3 col-span-3 lg:col-span-1">
              <label
                htmlFor="selectedUnit"
                className="block mb-2 text-sm font-medium leading-6 text-red-600"
              >
                Select Unit
              </label>
              <div className="">
                <select
                  // disabled={true}
                  id="selectedUnit"
                  name="selectedUnit"
                  autoComplete="selectedUnit"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  value={selectedUnit}
                  onChange={handleUnitChange}
                  onBlur={(e) => e.preventDefault()}
                  required
                >
                  {units?.map((unit: any, index: string) => {
                    return (
                      unit?.available === true && (
                        <option key={index}>{unit?.name}</option>
                      )
                    );
                  })}
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
                htmlFor="firstName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  autoComplete="firstName"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            {/* last name */}
            <div className="col-span-3">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  autoComplete="lastName"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
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
                  value={formData.email}
                  onChange={handleInputChange}
                  required
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
                  value={formData.country}
                  onChange={handleInputChange}
                  required
                >
                  <option value="" disabled>
                    Select a country
                  </option>
                  <option value="Bangladesh">Bangladesh</option>
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
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            {/* division */}
            <div className="md:col-span-3 col-span-3 lg:col-span-1">
              <label
                htmlFor="division"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Division
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="division"
                  id="division"
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={formData.division}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            {/* postal code */}
            <div className="md:col-span-3 col-span-3 lg:col-span-1">
              <label
                htmlFor="postalCode"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                ZIP / Postal code
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="postalCode"
                  id="postalCode"
                  autoComplete="postalCode"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            {/* Street address */}
            <div className="col-span-full">
              <label
                htmlFor="streetAddress"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Street Address
              </label>
              <div className="mt-2">
                <textarea
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  name="streetAddress"
                  id="streetAddress"
                  rows={6}
                  placeholder="Street Address"
                  value={formData.streetAddress}
                  onChange={handleInputChange}
                  required
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
