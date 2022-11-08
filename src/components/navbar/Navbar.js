import React from "react";

import mic from "../../assets/mic.svg";
import create from "../../assets/create.png";
import notification from "../../assets/notification.png";
import logo from "../../assets/logo.png";
import hamburger from "../../assets/hamburger.png";
import { Link } from "react-router-dom";
import Search from "./Search";
const Navbar = () => {
  return (
    // <!-- navigation -->
    <nav class="">
      <div class="  mx-auto px-5 lg:px-0 flex justify-between py-3">
        <Link to="/" className="flex items-center gap-4">
          <div>
            <img class=" w-5 h-5 " src={hamburger} alt="Learn with Sumit" />
          </div>
          <img class=" w-24" src={logo} alt="Learn with Sumit" />
        </Link>
        <div className="flex gap-3">
          <Search/>
          <div className=" lg:flex sm:hidden  hover:bg-gray-300 bg-gray-100  rounded-full ">
            <button className=" px-[13px] ">
              <img class="inline w-5 cursor-pointer " src={mic} alt="Search" />
            </button>
          </div>
        </div>
        <div className="flex gap-3 ">
          <div className="  flex ">
            <button className=" lg:block sm:hidden px-[11px] hover:bg-gray-200   rounded-full ">
              <img
                class="inline h-6  cursor-pointer"
                src={create}
                alt="Search"
              />
            </button>
          </div>
          <div className="  hover:bg-gray-200  rounded-full flex">
            <button className=" px-[11px] lg:block sm:hidden">
              <img
                class="inline h-6 cursor-pointer "
                src={notification}
                alt="Search"
              />
            </button>
          </div>
          <div className="">
            <div className="avatar ">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/192/192/people" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
