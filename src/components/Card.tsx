import React from "react";

import image from "../assets/div.svg";

const Card = () => {
  return (
    <div className="card card-compact w-96 bg-transparent p-4">
      <figure>
        <img 
        src={image} 
        alt="Nama Tempat" 
        className="w-full aspect-auto object-contain"
        />
      </figure>
      <div className="card-body items-start justify-between">
        <h2 className="card-title">Nama Tempat</h2>
        <div className="rating space-x-2">
          <input
            type="radio"
            name="rating-4"
            className="mask mask-star-2 bg-[#0E8388]"
            checked
          />
          <p className="text-start text-xl font-semibold -mt-1">
            4,9
          </p>
        </div>
        <div className="card-actions justify-start">
          <p className="text-start text-xl font-semibold">
            Rp.52.964.303/malam
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
