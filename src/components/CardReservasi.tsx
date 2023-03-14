import React from "react";
import foto from "../assets/images/fotoni.png";
import { FiMoreHorizontal } from "react-icons/fi";

export function CardReservasi() {
  return (
    <div className="flex border-2 w-[60%] rounded-lg h-48 items-center pl-4">
      <div className="flex gap-4">
        <img src={foto} alt="foto" className="rounded-lg w-36" />
        <div className="w-[30rem]">
          <div className="flex justify-between">
            <h1
              className="font-bold text-xl
          "
            >
              Nama tempat
            </h1>
            <div className="dropdown dropdown-hover">
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle"
              >
                <FiMoreHorizontal className="h-5 w-5" />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="text-red-600">
                    Batalkan Booking
                  </a>
                </li>
                <li>
                  <a>Beri Ulasan</a>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-slate-400 pt-2">
            Check in 21/9/2023 - Check out 22/9/2023
          </p>
        </div>
      </div>
    </div>
  );
}
export function CardRumah() {
  return (
    <div className="flex border-2 w-1/2 rounded-lg h-48 items-center pl-4">
      <div className="flex gap-4">
        <img src={foto} alt="foto" className="rounded-lg w-36" />
        <div className="w-[35rem]">
          <div className="flex justify-between">
            <h1
              className="font-bold text-xl
          "
            >
              Nama tempat
            </h1>
            <div className="dropdown dropdown-hover">
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle"
              >
                <FiMoreHorizontal className="h-5 w-5" />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Edit</a>
                </li>
                <li>
                  <a className="text-red-600">Delete</a>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-color1 pt-2">harga /Night</p>
        </div>
      </div>
    </div>
  );
}
