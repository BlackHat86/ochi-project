import { motion } from "framer-motion";
import React from "react";
import { FaArrowDown } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-48 pl-14">
        {["We Create", "Eye-Opening", "Presentations"].map((item, index) => (
          <div className="masker">
            <div className="w-fit flex leading-snug items-center">
              {index === 1 && (
                <div
                
                  className=" rounded-md h-[5.7vw] mb-[2.6vw] bg-cover mr-3 overflow-hidden"
                >
                  <motion.img
                    initial={{ width: 0,height:"5.7vw" }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                    alt=""
                    className="w-[9vw]"
                  />
                </div>
              )}
              <h1 className="uppercase text-[5.5vw]  leading-[5vw] transform scale-y-150 font-['Founders_Grotesk'] font-semibold">
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between border-t-[1px] border-zinc-800  mt-24 py-5 px-12">
        {[
          "For Public and private companies",
          "from the first pitch to IPO",
        ].map((item, index) => (
          <p
            className=" capitalize text-md font-light tracking-medium leading-none"
            key={index}
          >
            {item}
          </p>
        ))}
        <div className="start flex gap-1">
          <div className=" flex items-center px-5 h-[2rem] py-2 border-[1px] rounded-full border-zinc-500 font-light text-small capitalize">
            start the project
          </div>
          <div className=" -rotate-[145deg] h-auto w-fit p-2 text-[1.2rem] font-extralight border-zinc-600 border-[1px] rounded-full">
            <span className="font-lighter">
              <FaArrowDown />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
