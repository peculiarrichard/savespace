import React from "react";
import chart from "../images/chart.png";
import boy from "../images/boy-image.png";

const Focused = () => {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row-reverse w-[90%] m-auto justify-between sm:items-center mt-10 md:mt-20 sm:gap-4">
        <img
          src={chart}
          alt="chart"
          className="md:w-[19rem] lg:w-[21rem] xl:w-[26rem]"></img>
        <div className="flex flex-col items-start justify-evenly w-full md:w-1/2 gap-4">
          <h2 className=" text-[1.5rem] xl:text-[2.5rem] capitalize font-hairline sm:text-center">
            Stay Focused on Your Financial Goals
          </h2>
          <p className="text-justify sm:text-justify lg:text-[1rem] flex-wrap text-[0.8rem]">
            Improve your financial goals with custom goals that keep you going.
            Save for a home, gadgets, car, education, conquer debt and be on
            your way to financial indepence.
          </p>
          <div className="flex gap-4">
            <img src={boy} alt="boy" className="rounded-full self-start"></img>
            <div className="flex flex-col gap-2">
              <p className="text-justify sm:text-justify lg:text-[1rem] flex-wrap text-[0.8rem]">
                “SaveSpace helped me reduce my spending habit. I needed money
                for my house rent so I started saving with SaveSpace, I was able
                to save with discipline.”
              </p>
              <p className="text-justify sm:text-justify lg:text-[1rem] flex-wrap text-[0.8rem] font-hairline">
                Ade Lola - Student{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Focused;
