import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="navbar">
      <div className="hidden container my-6 mx-auto md:flex justify-between items-center md:px-10">
        <Link
          to="/"
          className="navbar-brand text-3xl font-ws font-semibold text-gray-900"
        >
          Rantly
        </Link>

        <div className="nav-links flex gap-5 text-lg font-pop items-center font-semibold text-gray-700 cursor-pointer">
          <div className="hover:text-primary">About</div>
          <div>FAQ</div>
          <div>Developer</div>
        </div>

        <div className="button">
          <Link to={"dashboard/user"}>
            {" "}
            <button className="bg-primary text-white text-xl font-pop py-2 px-4 rounded-lg cursor-pointer">
              Signup 
            </button>
          </Link>
          <Link to={"dashboard/user"}>
            {" "}
            <button className="border border-primary text-primary text-xl font-pop py-2 px-4 rounded-lg cursor-pointer">
              Signin 
            </button>
          </Link>
        </div>
      </div>

      {/* mobile */}

      <div className="container my-6 mx-auto px-6 flex justify-between items-center md:hidden">
        <div className="navbar-brand text-3xl font-ws font-semibold text-gray-900">
          Rantly
        </div>

        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Nav;
