import { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";
const Navbar = () => {
  const nav = useNavigate();
  const { user, handleSignOut } = useContext(AuthContext);

  const userData = JSON.parse(localStorage.getItem("userinfo"));
  const display_name = userData?.displayName_val;
  const photo = userData?.photoURL_val;

  const navLinks = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/events">Services</NavLink>
      <NavLink to="/aboutus">About Us</NavLink>
    </>
  );
  const privatelinks = (
    <>
      <NavLink to="bookings">My Bookings</NavLink>
      <NavLink to="/info">Profile</NavLink>
    </>
  );

  return (
    <div>
      <style>
        {` 
          .navbarNavLink .active{
                color: red;
            }
              `}
      </style>
      <div className="navbar w-10/12 text-5xl m-auto text-black  font-semibold pb-4 ">
        <div className="navbar-start w-full justify-between md:justify-normal">
          <div className="dropdown  ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden -ml-6"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu  bg-white menu-sm dropdown-content -ml-10  mt-4 z-[1] p-2 shadow h-screen  w-40"
            >
              <ul className="menu text-[10px] space-y-2 ml-4 navbarNavLink">
                {navLinks}
                {user ? (
                  <div className=" flex flex-col space-y-2 ">
                    {" "}
                    <h1 className="flex flex-col space-y-2 navbarNavLink">
                      {privatelinks}
                    </h1>{" "}
                    <div className="flex items-center space-x-2">
                      {" "}
                      {photo ? (
                        <img className="h-6  rounded-full" src={photo} alt="" />
                      ) : (
                        <FaUserCircle className="w-auto h-6" />
                      )}
                      <h1 className="">
                        {display_name ? `${display_name}` : "User"}
                      </h1>
                    </div>
                    <button
                      className="p-0 m-0 text-left"
                      onClick={() => {
                        handleSignOut(),
                          nav("/"),
                          location.reload(),
                          localStorage.clear();
                      }}
                    >
                      Sign Out
                    </button>
                  </div>
                ) : (
                  <NavLink to="/login">
                    <button>Login</button>
                  </NavLink>
                )}
              </ul>
            </ul>
          </div>

          <div className=" text-center ">
            <div className="p-2 ">
              <button
                onClick={() => {
                  nav("/");
                }}
              >
                <img
                  className="md:w-16 w-10 "
                  src="https://i.postimg.cc/tTqLxxT2/event-logo-EDITED.png"
                  alt=""
                />
              </button>
            </div>

            <h1 className="font-bold ml-2 -mt-4 tracking-[3px] text-white text-[10px] md:text-sm">
              Light
            </h1>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal space-x-8 items-center text-xl text-white font-semibold navbarNavLink">
            {navLinks}

            {user ? (
              <div className=" flex items-center space-x-5">
                {" "}
                <h1 className="flex space-x-8 mr-4 navbarNavLink">
                  {privatelinks}
                </h1>{" "}
                <div className="flex items-center space-x-2">
                  {" "}
                  {photo ? (
                    <img className="h-10  rounded-full" src={photo} alt="" />
                  ) : (
                    <FaUserCircle className="w-auto h-10" />
                  )}
                  <h1 className="">
                    {display_name ? `${display_name}` : "User"}
                  </h1>
                </div>
                <button
                  onClick={() => {
                    handleSignOut(),
                      nav("/"),
                      location.reload(),
                      localStorage.clear();
                  }}
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <NavLink to="/login">
                <button>Login</button>
              </NavLink>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
