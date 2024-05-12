import { motion } from "framer-motion";
import React from "react";

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className="py-16  w-full bg-[#004043] rounded-tl-3xl rounded-tr-3xl">
      <div className=" border-b-2 border-t-2 flex mt-16  overflow-hidden whitespace-nowrap border-zinc-300">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", duration: 20, repeat: Infinity }}
          className='text-[27vw] pr-20 tracking-tighter  leading-none font-["Founders_Grotesk"] pt-8 -mb-[7vw] font-semibold '
        >
          WE ARE OCHI
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", duration: 20, repeat: Infinity }}
          className='text-[27vw] pr-20 tracking-tighter leading-none font-["Founders_Grotesk"] pt-8 -mb-[7vw] font-semibold'
        >
          WE ARE OCHI
        </motion.h1>
        "{" "}
      </div>
    </div>
  );
};

export default Marquee;
