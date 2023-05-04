import React from "react";
import logo from "../images/s.png";

const Footer = () => {
  return (
    <>
      <div className="md:mt-20 mt-10 bg-[#012fa9] h-full text-white">
        <div className="w-[90%] grid grid-cols-2 sm:gap-4 md:flex sm:flex-col m-auto justify-between mt-6 py-6 items-start">
          <div className="flex flex-col md:w-[30%] lg:text-[1rem] flex-wrap text-[0.8rem] gap-2">
            <img src={logo} alt="logo" className="self-start sm:w-[2rem]"></img>
            <p>
              SaveSpace is the world largest and most secure digital savings
              service.
            </p>
            <div></div>
          </div>
          <div className="flex flex-col lg:text-[1rem] flex-wrap text-[0.8rem]">
            <p className="font-hairline mb-2">Company</p>
            <p>Career</p>
            <p>SaveSpace blog</p>
            <p>Press</p>
            <p>Our Story</p>
            <p>Contact</p>
          </div>
          <div className="flex flex-col lg:text-[1rem] flex-wrap text-[0.8rem]">
            <p className="font-hairline mb-2">Products</p>
            <p>Features</p>
            <p>Whats new</p>
            <p>Coming soon</p>
            <p>Savespace guide</p>
          </div>
          <div className="flex flex-col lg:text-[1rem] flex-wrap text-[0.8rem]">
            <p className="font-hairline mb-2">Resources</p>
            <p>Forum</p>
            <p>Savespace Community</p>
            <p>Events</p>
            <p>Accesibility</p>
          </div>
          <div className="flex flex-col lg:text-[1rem] flex-wrap text-[0.8rem]">
            <p className="font-hairline mb-2">About</p>
            <p>Support</p>
            <p>Terms of use</p>
            <p>Privacy policy</p>
            <p>FAQ</p>
          </div>
        </div>
        <p className="text-center lg:text-[1rem] flex-wrap text-[0.8rem]">
          © 2022 SaveSpace - Made with ❤️
        </p>
      </div>
    </>
  );
};

export default Footer;
