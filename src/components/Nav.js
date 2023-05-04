import React from "react";
import logo from "../images/mainlogo.png";
import { useState } from "react";

const Nav = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  const closeNavbar = () => {
    setActive(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-nav">
      <div className="flex md:h-28 sm:pb-2 md:px-4 sticky w-full justify-around items-center lg:gap-24 md:gap-16 lg:text-sm md:text-[0.8rem] sm:block rounded-b-3xl shadow-xl font-thin">
        <div className="flex justify-between my-2 mx-4">
          <a href="#" className="">
            <img src={logo} alt="logo" className="w-16 md:flex sm:mt-2"></img>
          </a>
          <button className="md:hidden" onClick={handleClick}>
            {active ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="#0247FE"
                className="bi bi-x"
                viewBox="0 0 16 16">
                {" "}
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />{" "}
              </svg>
            ) : (
              <svg
                className="w-8 h-8"
                fill="#0247FE"
                stroke="#0247FE"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        <div
          className={`${
            active
              ? "flex h-full text-center justify-start text-sm w-full flex-col mt-6"
              : "hidden"
          } md:flex sm:gap-8 lg:gap-8 md:gap-4`}>
          <a href="#" onClick={closeNavbar} className="">
            Home
          </a>
          <a href="#" onClick={closeNavbar} className="">
            Save
          </a>
          <a href="#" onClick={closeNavbar} className="">
            Business
          </a>
          <a href="/blog" onClick={closeNavbar} className="">
            Blog
          </a>
          <a href="#" onClick={closeNavbar} className="">
            Contact Us
          </a>
          <a href="#" onClick={closeNavbar}>
            <button className="border-blue2 border-2 text-blue2 w-1/2 p-4 rounded-3xl md:hidden hover:border-green hover:shadow-3xl hover:scale-105 duration-300">
              Login
            </button>
          </a>

          <a href="#" onClick={closeNavbar}>
            <button className="bg-blue2 text-white w-[80%] p-4 rounded-3xl md:hidden hover:border-green hover:shadow-3xl hover:scale-105 duration-300">
              Create Free Account
            </button>
          </a>
        </div>
        <div className="gap-2 flex justify-self-end">
          <a href="#">
            <button className="h-[3rem] border text-blue2 border-blue2 p-2 rounded-lg sm:hidden hover:border-green hover:shadow-3xl hover:scale-105 duration-300">
              Login
            </button>
          </a>
          <a href="#" onClick={closeNavbar}>
            <button className=" bg-blue2 h-[3rem] text-white wrap p-2 rounded-lg sm:hidden hover:border-green hover:shadow-3xl hover:scale-105 duration-300">
              Create Free Account
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
