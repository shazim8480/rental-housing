import React from "react";
import RentalCard from "./RentalCard";
import { useGetAllPropertiesQuery } from "@/redux/feature/properties/properties-api";
import { IProperty } from "@/types/globals";

const FeaturedProperties: React.FC = () => {
  const { data: propertyData } = useGetAllPropertiesQuery(undefined);

  return (
    <div className="mx-auto bg-indigo-50 pb-12">
      <h3 className="lg:text-4xl md:text-3xl text-3xl pt-12 mb-8 text-center font-bold tracking-tight text-gray-800">
        Featured Properties
      </h3>
      <div className="flex flex-col items-center justify-center lg:grid md:grid lg:gap-5 md:grid-cols-2 md:gap-4 lg:grid-cols-3 md:place-items-center lg:place-items-center">
        {propertyData?.data?.map((property: IProperty, index: string) => {
          return <RentalCard key={index} property={property} />;
        })}
      </div>
    </div>
  );
};

export default FeaturedProperties;
