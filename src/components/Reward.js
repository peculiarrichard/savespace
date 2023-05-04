import React from "react";
import phone from "../images/phone.png";
import cart from "../images/card-add.png";
import people from "../images/people.png";
import user from "../images/user-add.png";
import wallet from "../images/wallet-add.png";

const Reward = () => {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row w-[90%] m-auto justify-between sm:items-center mt-10 md:mt-20">
        <img
          src={phone}
          alt="phone"
          className="w-[13rem] xl:w-[21rem] md:w-[15rem] "></img>
        <div className="flex flex-col items-start justify-evenly w-full md:w-1/2 gap-4">
          <h2 className=" text-[1.5rem] xl:text-[2.5rem] capitalize font-hairline sm:text-center">
            Rewarding Your Every Step Of Financial journey
          </h2>
          <p className=" text-justify sm:text-center lg:text-[1rem] text-[0.8rem]">
            We have your back! You can count on us too. We want to give you the
            freedom of opening a save and secure savings and investment account
            with ₦0.
          </p>
          <div className="flex gap-6 justify-center items-center md:text-sm">
            <img src={user}></img>
            <p className="text-justify lg:text-[1rem] text-[0.8rem]">
              Create a SaveSpace account to get started. It’s free!!!{" "}
            </p>
          </div>
          <div className="flex gap-6 justify-center items-center md:text-sm">
            <img src={cart}></img>
            <p className="text-justify lg:text-[1rem] text-[0.8rem]">
              Link your bank account to your SaveSpace account. Don’t worry your
              details are safe with us.{" "}
            </p>
          </div>
          <div className="flex gap-6 justify-center items-center md:text-sm">
            <img src={wallet}></img>
            <p className="text-justify lg:text-[1rem] text-[0.8rem]">
              Start saving!!! You don’t have to worry about late payments, you
              can tell us to automatically save for you.{" "}
            </p>
          </div>
          <div className="flex gap-6 justify-center items-center md:text-sm">
            <img src={people}></img>
            <p className="text-justify lg:text-[1rem] text-[0.8rem]">
              Participate in thrifts (ajo, esusu and adashe) with your family
              and friends. Create a thrift plan and invite your friends to join
              you.{" "}
            </p>
          </div>
          <button className="sm:self-center bg-blue2 mb-4 text-white p-2 rounded-lg lg:text-[1rem] text-[0.8rem] w-[8rem] md:w-[10rem] hover:shadow-3xl hover:scale-105 duration-300">
            Try for free
          </button>
        </div>
      </div>
    </>
  );
};

export default Reward;
