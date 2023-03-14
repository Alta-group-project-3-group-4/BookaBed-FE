import React from "react";
import Logo from "../assets/LogoBookaBed.webp";

import { RiMenuFill } from "react-icons/ri";
import { RiUser3Line } from "react-icons/ri";

function Navbar2() {
  return (
    <div className="h-1/5 w-full shadow-md pb-6">
      <div className="flex flex-row items-center justify-between pt-6 pl-24">
        <div className="flex flex-row items-center gap-8">
          <h1 className="text-3xl text-color3 font-bold ">
            BookaBed
          </h1>
          <img
            src={Logo}
            alt="Logo"
            className="w-12
          "
          />
        </div>
        <div
          className="flex gap-16 pr-32 
        "
        >
          <div className="dropdown dropdown-hover ">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle "
            >
              <RiMenuFill className="w-7 h-7 text-color3 " />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 font-semibold"
            >
              <li>
                <a>Login</a>
              </li>
              <li>
                <a>Register</a>
              </li>
              <li>
                <a>Riwayat Reservasi</a>
              </li>
            </ul>
          </div>
          <div className="pt-2">
            <RiUser3Line className="w-7 h-7 text-color3 " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar2;
