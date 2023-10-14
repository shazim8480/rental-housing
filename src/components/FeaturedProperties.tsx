import React from "react";
import RentalCard from "./RentalCard";

const FeaturedProperties: React.FC = () => {
  return (
    <div className="mx-auto bg-indigo-50 pb-12">
      <h3 className="lg:text-4xl md:text-3xl text-3xl pt-12 mb-8 text-center font-bold tracking-tight text-gray-800">
        Featured Properties
      </h3>
      <div className="flex flex-col items-center justify-center lg:grid md:grid  md:grid-cols-2 md:gap-4 lg:grid-cols-3 md:place-items-center lg:place-items-center">
        <RentalCard />
        <RentalCard />
        <RentalCard />
      </div>
    </div>
  );
};

export default FeaturedProperties;
