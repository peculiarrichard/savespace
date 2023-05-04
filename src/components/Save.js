import React from "react";
import wallet from "../images/wallet-add.png";

const Save = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row w-[90%] m-auto justify-between mt-10 md:mt-20 md:gap-8 mb-4">
        <div className="flex flex-col items-start w-full md:w-1/2 justify-evenly gap-4">
          <h2 className=" text-[1.5rem] xl:text-[2.5rem] capitalize font-hairline sm:text-center">
            SaveSpace, Your all in one savings application.
          </h2>
          <ul className="list-disc list-inside text-justify sm:text-justify lg:text-[1rem] flex-wrap text-[0.8rem]">
            <li>
              SaveSpace allows you to track your transactions quick and easily.
            </li>
            <li>
              SaveSpace products and services are complete and varies in all
              segments according to users needs.
            </li>
            <li>
              User friendly and easy navigation savings and investment mobile
              app.
            </li>
          </ul>
          <button className="sm:self-center bg-blue2 mb-4 text-white p-2 rounded-lg lg:text-[1rem] text-[0.8rem] w-[8rem] md:w-[10rem] hover:shadow-3xl hover:scale-105 duration-300">
            Try for free
          </button>
        </div>
        <div className="flex flex-col md:w-1/2 lg:w-2/5 shadow-2xl p-3 gap-4 ">
          <div className="flex justify-between">
            <h3 className="lg:text-[0.7rem] text-[0.5rem] xl:text-[0.9rem] font-hairline">
              Recent transactions
            </h3>
            <p className="lg:text-[0.7rem] text-[0.5rem] xl:text-[0.9rem] text-blue2">
              See all
            </p>
          </div>
          <div className="flex gap-6 justify-center items-center md:text-sm">
            <img src={wallet}></img>
            <div className="flex flex-col">
              <p className="font-hairline md:text-[0.8rem]">Autosave</p>
              <p className="text-justify lg:text-[0.7rem] text-[0.5rem] xl:text-[0.9rem]">
                Your monthly autosave of ₦10,000 was deducted from your kuda
                bank.{" "}
              </p>
            </div>
            <p className="place-self-end lg:text-[0.5rem] text-[0.4rem] xl:text-[0.7rem]">
              30 Jun 2022
            </p>
          </div>
          <div className="flex gap-6 justify-center items-center ">
            <img src={wallet}></img>
            <div className="flex flex-col">
              <p className="font-hairline md:text-[0.8rem]">Withdraw</p>
              <p className="text-justify lg:text-[0.7rem] text-[0.5rem] xl:text-[0.9rem]">
                You withdrew ₦5,000 out of your personal savings today.
              </p>
            </div>
            <p className="place-self-end lg:text-[0.5rem] text-[0.4rem] xl:text-[0.7rem]">
              30 Jun 2022
            </p>
          </div>
          <div className="flex gap-6 justify-center items-center md:text-sm">
            <img src={wallet}></img>
            <div className="flex flex-col">
              <p className="font-hairline md:text-[0.8rem]">Autosave</p>
              <p className="text-justify lg:text-[0.7rem] text-[0.5rem] xl:text-[0.9rem]">
                Your weekly autosave of ₦2,000 was deducted from your kuda bank
                card.{" "}
              </p>
            </div>
            <p className="place-self-end lg:text-[0.5rem] text-[0.4rem] xl:text-[0.7rem]">
              30 Jun 2022
            </p>
          </div>
          <div className="flex gap-6 justify-center items-center md:text-sm">
            <img src={wallet}></img>
            <div className="flex flex-col">
              <p className="font-hairline md:text-[0.8rem]">Thrift</p>
              <p className="text-justify lg:text-[0.7rem] text-[0.5rem] xl:text-[0.9rem]">
                ₦50,000 was added to Ajo kiko from your personal savings.{" "}
              </p>
            </div>
            <p className="place-self-end lg:text-[0.5rem] text-[0.4rem] xl:text-[0.7rem]">
              30 Jun 2022
            </p>
          </div>
          <div className="flex gap-6 justify-center items-center md:text-sm">
            <img src={wallet}></img>
            <div className="flex flex-col">
              <p className="font-hairline md:text-[0.8rem]">Savelock</p>
              <p className="text-justify lg:text-[0.7rem] text-[0.5rem] xl:text-[0.9rem]">
                You added ₦100,000 to Safelock from your UBA bank card.{" "}
              </p>
            </div>
            <p className="place-self-end lg:text-[0.5rem] text-[0.4rem] xl:text-[0.7rem]">
              30 Jun 2022
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Save;
