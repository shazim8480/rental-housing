import { IProperty } from "@/types/globals";
import Link from "next/link";
import React from "react";

interface RentalCardProps {
  property: IProperty;
}

const RentalCardSmall: React.FC<RentalCardProps> = ({ property }) => {
  // destructuring necessary property data from props
  const { _id, title, images, pricing, additionalDetails } = property;

  return (
    <div className="w-full md:w-1/2 lg:w-1/2 p-4">
      <Link
        href={`/property-listings/${_id}`}
        className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
      >
        <div className="relative pb-48 overflow-hidden">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src={images[0]?.src}
            alt="housing"
          />
        </div>
        <div className="p-3">
          {/* tag and review */}
          <div className="flex justify-start items-start">
            <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs mr-3">
              Popular
            </span>

            <div className="flex items-center text-sm text-gray-600">
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 fill-current text-yellow-400"
              >
                <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
              </svg>
              <span className="ml-2">4.9</span>
            </div>
          </div>
          {/* property title */}
          <h2 className="mt-4 mb-2 text-slate-600 font-semibold">{title}</h2>
          {/* rental fee */}
          <div className="mt-3 flex items-center">
            <span className="text-sm font-semibold">BDT</span>&nbsp;
            <span className="font-bold text-indigo-700 text-xl">
              {pricing?.monthly}
            </span>
            &nbsp;
            <span className="text-sm font-semibold">/ Month</span>
          </div>
        </div>
        {/* bed, bath & sqft */}
        <div className="p-4 border-t border-b text-xs text-gray-700">
          <div className="flex justify-start items-center">
            <span className="flex items-center mb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="green"
                className="mr-1 w-3 h-3"
              >
                <path
                  fillRule="evenodd"
                  d="M3 3.5A1.5 1.5 0 014.5 2h6.879a1.5 1.5 0 011.06.44l4.122 4.12A1.5 1.5 0 0117 7.622V16.5a1.5 1.5 0 01-1.5 1.5h-11A1.5 1.5 0 013 16.5v-13zm10.857 5.691a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 00-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
              {additionalDetails?.bedrooms} Bed
            </span>
            <span className="flex items-center mb-1 ml-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="green"
                className="mr-1 w-3 h-3"
              >
                <path
                  fillRule="evenodd"
                  d="M3 3.5A1.5 1.5 0 014.5 2h6.879a1.5 1.5 0 011.06.44l4.122 4.12A1.5 1.5 0 0117 7.622V16.5a1.5 1.5 0 01-1.5 1.5h-11A1.5 1.5 0 013 16.5v-13zm10.857 5.691a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 00-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
              {additionalDetails?.bathrooms} Bath
            </span>
            <span className="flex items-center mb-1 ml-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="green"
                className="mr-1 w-3 h-3"
              >
                <path
                  fillRule="evenodd"
                  d="M3 3.5A1.5 1.5 0 014.5 2h6.879a1.5 1.5 0 011.06.44l4.122 4.12A1.5 1.5 0 0117 7.622V16.5a1.5 1.5 0 01-1.5 1.5h-11A1.5 1.5 0 013 16.5v-13zm10.857 5.691a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 00-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
              {additionalDetails?.size}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RentalCardSmall;
