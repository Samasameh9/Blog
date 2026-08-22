import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "./context/AuthContext.jsx";

export default function Navbar() {
  const { id, logout } = useAuth();
  function openMenu() {
    document.getElementById("menu").classList.toggle("hidden");
  }
  return (
    <>
      <div className="flex justify-between text-amber-800 items-center py-5 border-2 px-5 rounded-md md:mb-5  rounded-t-none bg-[#EDE9E9]">
        <h2 className="font-bold text-2xl">Blog app</h2>
        <div className="gap-5 font-bold justify-center items-center hidden md:flex">
          {id ? (
            <>
              <NavLink to="/home">Home</NavLink>
              <NavLink to="/profile" className="flex items-center">
                Profile{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
              </NavLink>
              <NavLink to="/" onClick={logout}>
                Logout
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to="/">Login</NavLink>
              <NavLink to="/register">Register</NavLink>
            </>
          )}
        </div>
        <div className="cursor-pointer md:hidden" onClick={openMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>
      <div
        id="menu"
        className=" hidden flex border-2 border-t-0 rounded-md border-amber-800 flex-col bg-[#EDE9E9] text-amber-800  gap-5 font-bold justify-center items-center py-5 mb-5 "
      >
        {id ? (
          <>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/profile" className="flex items-center">
              Profile{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </NavLink>
            <NavLink to="/" onClick={logout}>
              Logout
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to="/">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </>
        )}
      </div>
    </>
  );
}
