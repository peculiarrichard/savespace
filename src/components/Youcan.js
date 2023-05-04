import React from "react";
import woman from "../images/contemplating-woman.png";

const Youcan = () => {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row w-[90%] m-auto justify-between sm:items-center mt-10 md:mt-20 ">
        <img
          src={woman}
          alt="woman"
          className="md:w-[19rem] lg:w-[21rem] xl:w-[26rem]"></img>
        <div className="flex flex-col items-start justify-evenly w-full md:w-1/2 gap-4">
          <h2 className=" text-[1.5rem] xl:text-[2.5rem] capitalize font-hairline sm:text-center">
            What else can you do with SaveSpace?
          </h2>
          <ul className="list-disc list-inside text-justify sm:text-justify lg:text-[1rem] flex-wrap text-[0.8rem]">
            <li>
              Are you scared of participating in ajo, esusu or adashe? SaveSpace
              allows you participate in thrift worry free.
            </li>
            <li>
              Accept payments from all banks. Several features on the app ensure
              maximum guarantee and transparency.
            </li>
            <li>
              SaveSpace allows you to invest your money in different industries,
              with mouth watering ROI.
            </li>
          </ul>
          <button className="sm:self-center bg-blue2 mb-4 text-white p-2 rounded-lg lg:text-[1rem] text-[0.8rem] w-[8rem] md:w-[10rem] hover:shadow-3xl hover:scale-105 duration-300">
            Learn more
          </button>
        </div>
      </div>
    </>
  );
};

export default Youcan;
