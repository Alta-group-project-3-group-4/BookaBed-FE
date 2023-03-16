import React from "react";
import { FC } from "react";
import { useNavigate } from "react-router";
import image from "../assets/div.svg";
import { useCookies } from "react-cookie";

interface CardProps {
  homestay_id?: number
  name?: string
  description?: string
  price?: number
  gambar?: string
  images?: string
  onClick?: any

}
const Card: FC<CardProps> = (
  { homestay_id,
    name,
    description,
    price,
    gambar,
    images,
    onClick
  }
) => {


  return (
    <div className="card card-compact w-96 bg-transparent p-4" onClick={onClick}>
      <figure >
        <img
          src={images}
          alt="Nama Tempat"
          className="w-64 aspect-auto object-contain"
          onClick={onClick}
        />
      </figure>
      <div className="card-body items-start justify-between m-7 -mt-1" >
        <h2 className="card-title">{name}</h2>
        <div className="rating space-x-2">
          <input
            type="radio"
            name="rating-4"
            className="mask mask-star-2 bg-[#0E8388]"
          />
          <p className="text-start text-xl font-semibold -mt-1">
            4,9
          </p>
        </div>
        <div className="card-actions justify-start">
          <p className="text-start text-xl font-semibold">
            Rp.{price}/malam
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
