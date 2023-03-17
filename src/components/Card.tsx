import React from "react";
import { FC } from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import foto from "../assets/images/fotoni.png";
import imagess from "../../assets/images/fotona.png";


interface CardProps {
  homestay_id?: string;
  name?: string;
  description?: string;
  price?: number;
  gambar?: string;
  images?: string;
  onClick?: () => void;
  cardType?: "compact" | "reservasi" | "rumah";
}

const Card: FC<CardProps> = ({
  homestay_id,
  name,
  description,
  price,
  gambar,
  images,
  onClick,
  cardType = "compact",
}) => {
  let cardBody;

  if (cardType === "compact") {
    cardBody = (
      <>
        <div className="rating space-x-2">
          <input
            type="radio"
            name="rating-4"
            className="mask mask-star-2 bg-[#0E8388]"
          />
          <p className="text-start text-xl font-semibold -mt-1">4,9</p>
        </div>
        <div className="card-actions justify-start">
          <p className="text-start text-xl font-semibold">
            Rp.{price}/malam
          </p>
        </div>
      </>
    );
  } else if (cardType === "reservasi") {
    cardBody = (
      <>
        <p className="text-slate-400 pt-2">
          Check in 21/9/2023 - Check out 22/9/2023
        </p>
      </>
    );
  } else if (cardType === "rumah") {
    cardBody = (
      <>
        <p className="text-color1 pt-2">harga /Night</p>
      </>
    );
  }

  return (
    <div
      id={homestay_id}
      className={`card card-${cardType} w-96 bg-transparent p-4`}
      onClick={onClick}
    >
      <figure>
        <img
          src={images}
          alt={name}
          className="w-64 aspect-auto object-contain"
        />
      </figure>
      <div className="card-body items-start justify-between m-7 -mt-1">
        <h1 className="card-title">{name}</h1>
        {cardBody}
        <div className="dropdown dropdown-hover">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <FiMoreHorizontal className="h-5 w-5" />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            {cardType === "compact" ? (
              <>
                <li>
                  <a>Edit</a>
                </li>
                <li>
                  <a className="text-red-600">Delete</a>
                </li>
              </>
            ) : (
              <>
                <li>
                  <a className="text-red-600">Batalkan Booking</a>
                </li>
                <li>
                  <a>Beri Ulasan</a>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
