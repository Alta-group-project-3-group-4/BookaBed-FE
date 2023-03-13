import React from "react";

export const Navbar = () => {
  return (
    <div className="navbar sticky z-50 bg-white shadow-md rounded-lg">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl text-[#0E8388]">
          Bookabed
        </a>
      </div>
      <div className="flex-1 justify-between gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered bg-[#CBE4DE] w-96"
          />
        </div>
        <div className="dropdown dropdown-end">
          <label
            tabIndex={0}
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export const Navbar2 = () => {
  return <div>lalalal</div>;
};
