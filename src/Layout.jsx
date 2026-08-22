import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Layout() {
  return (
    <>
      <div className="bg-[#EAC79F]">
         <Navbar />
        <div className=" container 2xl:w-7xl mx-auto w-[90%] md:w-[80%] rounded-md">
         
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}
