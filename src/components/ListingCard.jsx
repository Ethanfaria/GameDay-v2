import React from "react";
import BentoBox from "./BentoBox";

const ListingCard = ({
  image,
  name,
  location,
  price,
  priceSuffix = "/ hour",
  onClick,
}) => {
  return (
    <BentoBox className="bg-white/5 flex flex-col">
      {/* Image */}
      <div className="w-full h-40 md:h-48 rounded-xl overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-4 md:p-5 flex flex-col h-full">
        <h1 className="text-lg md:text-xl font-bold text-lime-400 mb-1">
          {name}
        </h1>
        <p className="text-white/80 text-sm mb-4">
          {location}
        </p>

        {/* Price Button */}
        {price && (
          <button
            onClick={onClick}
            className="mt-auto px-6 py-2.5 bg-lime-400 text-green-950 font-bold rounded-full hover:bg-lime-300 transition self-start"
          >
            ₹{price} {priceSuffix}
          </button>
        )}
      </div>
    </BentoBox>
  );
};

export default ListingCard;
