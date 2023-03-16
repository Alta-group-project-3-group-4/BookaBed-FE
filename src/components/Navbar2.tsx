import React, { FC } from "react";
import { useNavigate } from "react-router";
import Logo from "../assets/LogoBookaBed.webp";

import { RiMenuFill } from "react-icons/ri";
import { RiUser3Line } from "react-icons/ri";

import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { handleAuth } from "../utils/redux/reducer/reducer";

interface navbarProps {
  onClick?: any
}
const Navbar2: FC<navbarProps> = (
  {
    onClick
  }
) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [cookie, , removeCookie] = useCookies(["token"]);
  const checkToken = cookie.token;

  const handleLogout = async () => {
    removeCookie("token");
    dispatch(handleAuth(false));
    navigate("/login");
    alert("You have been logged out");
  };

  return (
    <div className="h-1/5 w-full shadow-md pb-6">
      <div className="flex flex-row items-center justify-between pt-6 pl-24">
        <div className="flex flex-row items-center gap-8">
          <h1 className="text-3xl text-color3 font-bold "
            onClick={() => navigate("/")}>BookaBed</h1>
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
            <label tabIndex={0} className="btn btn-ghost btn-circle ">
              <RiMenuFill className="w-7 h-7 text-color3 " />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 font-semibold"
            >
              <li
                onClick={() =>
                  checkToken ? handleLogout() : navigate("/login")
                }
              >
                <a>{checkToken ? "Logout" : "Login"}</a>
              </li>
              <li>
                <a href="/register">Register</a>
              </li>
              <li>
                <a href="/reservasi">Riwayat Reservasi</a>
              </li>
            </ul>
          </div>
          <div className="pt-2" onClick={() => onClick}>
            <RiUser3Line className="w-7 h-7 text-color3 " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar2;
