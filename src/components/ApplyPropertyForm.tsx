import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { propertyData } from "@/lib/propertyData";
import moment from "moment";
import { IProperty } from "@/types/globals";
import { useRegisterUserMutation } from "@/redux/feature/registered-users/registered-users-api";
import Modal from "./shared/Modal";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type RegisterFormProps = React.HTMLAttributes<HTMLDivElement> & {
  propertyDetails: any;
};

// const ApplyPropertyForm: React.FC = ({ propertyDetails }: any) => {
const ApplyPropertyForm: React.FC<RegisterFormProps> = (
  props: RegisterFormProps
) => {
  const [selectedDate, setSelectedDate] = useState<string>("");

  const [modalVisible, setModalVisible] = useState(false);

  // console.log(selectedDate);

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
    registrationDate: "",
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    city: "",
    division: "",
    streetAddress: "",
    postalCode: "",
    status: "pending",
  });

  const initialFormData = {
    propertyName: title,
    ownerName: contact?.name,
    ownerEmail: contact?.email,
    location: `${location?.streetAddress}, ${location?.district}, ${location?.division}, ${location?.zipCode}`,
    selectedUnit: selectedUnit,
    registrationDate: "",
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    city: "",
    division: "",
    streetAddress: "",
    postalCode: "",
    status: "pending",
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData: any) => ({ ...prevData, [name]: value }));
  };

  const handleUnitChange = (e: any) => {
    const { value } = e.target;
    setSelectedUnit(value); // Update the selectedUnit state
    setFormData((prevData) => ({ ...prevData, selectedUnit: value }));
  };

  const handleDateChange = (e: any) => {
    const { name, value } = e.target;
    setSelectedDate(value);
    setFormData((prevData: any) => ({ ...prevData, [name]: value }));
  };

  // submit user data for
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Exclude a specific input value (e.g., email) from the formData
    const { location, ...formDataWithoutLocation } = formData;
    console.log(formDataWithoutLocation);
  };

  const registeredSuccessful = () =>
    toast.success("Registered Successfully!", {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "colored",
    });
  return (
    <form onSubmit={handleSubmit}>
      <div className="px-10 space-y-12">
        <ToastContainer
          position="top-right"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        {modalVisible && (
          <Modal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            title={"Property Confirmation"}
            bodyText={"Are you sure you want to register for the property?"}
            onBtnClick={(e: any) => {
              if (!selectedUnit) {
                alert("Please Select a Unit !");
              } else if (!selectedDate) {
                alert("Please Select a Registration Date !");
              } else {
                registerUser(formData);
                setFormData(initialFormData);
                setModalVisible(false);
                registeredSuccessful();
              }
            }}
          />
        )}
        <div className="py-12 border-b border-gray-900/10">
          <h3 className="text-base font-semibold leading-7 text-gray-900 lg:text-xl">
            Property Information
          </h3>
          <p className="mt-1 text-sm font-medium leading-6 text-indigo-600">
            Please make sure to contact the owner before finalizing the
            registration.
          </p>

          <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
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
            <div className="col-span-3 md:col-span-3 lg:col-span-2">
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
            <div className="col-span-3 md:col-span-3 lg:col-span-1">
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
            <div className="col-span-3 md:col-span-3 lg:col-span-1">
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
            <div className="col-span-3 md:col-span-3 lg:col-span-1">
              <label
                htmlFor="registrationDate"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Registration date
              </label>
              <div className="mt-2">
                <input
                  type="date"
                  name="registrationDate"
                  id="registrationDate"
                  autoComplete="registrationDate"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={selectedDate}
                  onChange={handleDateChange}
                  // disabled={true}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="pb-12 border-b border-gray-900/10">
          <h2 className="text-base font-semibold leading-7 text-gray-900 lg:text-xl">
            Personal Information
          </h2>
          <p className="mt-3 text-sm font-medium leading-6 text-red-500">
            Please fill up the information correctly, Any misleading or
            incorrect information might cause disqualification from all the
            services
          </p>
          {/* personal info  */}
          <div className="grid grid-cols-6 mt-10 gap-x-6 gap-y-8">
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
            <div className="col-span-3 md:col-span-3 lg:col-span-2">
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
            <div className="col-span-3 mt-2 md:col-span-3 lg:col-span-1">
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
            <div className="col-span-3 md:col-span-3 lg:col-span-1">
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
            <div className="col-span-3 md:col-span-3 lg:col-span-1">
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
            <div className="col-span-3 md:col-span-3 lg:col-span-1">
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
            <div className="flex justify-center px-6 py-10 mt-2 border border-dashed rounded-lg border-gray-900/25">
              <div className="text-center">
                <PhotoIcon
                  className="w-12 h-12 mx-auto text-gray-300"
                  aria-hidden="true"
                />
                <div className="flex mt-4 text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative font-semibold text-indigo-600 bg-white rounded-md cursor-pointer focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
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
              className="block mt-6 text-sm font-medium leading-6 text-gray-900 lg:mt-0"
            >
              Upload Passport Sized Photo
            </label>
            <div className="flex justify-center px-6 py-10 mt-2 border border-dashed rounded-lg border-gray-900/25">
              <div className="text-center">
                <PhotoIcon
                  className="w-12 h-12 mx-auto text-gray-300"
                  aria-hidden="true"
                />
                <div className="flex mt-4 text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative font-semibold text-indigo-600 bg-white rounded-md cursor-pointer focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
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

      <div className="flex items-center justify-end mt-6 mr-10 gap-x-6">
        <button
          // type="submit"
          onClick={() => setModalVisible(true)}
          className="py-2 font-semibold text-white bg-indigo-600 rounded-md shadow-sm px-7 text-md hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default ApplyPropertyForm;
