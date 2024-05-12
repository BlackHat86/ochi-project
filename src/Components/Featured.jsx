import { easeIn, motion, useAnimation } from "framer-motion";

import React from "react";

const Featured = () => {
    const cards=[useAnimation(),useAnimation()];

    const handleHover=(index)=>{
          cards[index].start({y:0})
    }
    const handleHoverEnd=(index)=>{
          cards[index].start({y:"100%"})
    }

  return (
    <div className="w-full py-24 ">
      <div className="w-full ">
        <h1 className='text-6xl font-["Neue_Montreal"] border-b-[1px] border-zinc-700 pb-10  px-14'>
          Featured projects
        </h1>
        <div className="cards flex justify-center gap-5 pt-20 px-14">
          <motion.div
            onHoverStart={()=>handleHover(0)}
            onHoverEnd={()=>handleHoverEnd(0)}
            
            className="relative  cardcontainer  w-[45vw] h-[80vh] "
          >
            <h1 className="absolute flex overflow-hidden text-8xl leading-none font-semibold left-full top-1/2 -translate-x-1/2 -translate-y-1/2 tracking-tighter z-50 text-[#CDEA68] ">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{
                    ease: [0.22, 1, 0.36, 1],
                    delay: index * 0.06,
                  }}
                  className="inline-block translate-y-full"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card  w-full h-full rounded-2xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png"
                alt=""
              />
            </div>
          </motion.div>

          <motion.div
          onHoverStart={()=>handleHover(1)}
          onHoverEnd={()=>handleHoverEnd(1)}
           
            className=" relative cardcontainer  w-[45vw] h-[80vh] "
          >
            <h1 className="absolute flex overflow-hidden text-8xl leading-none font-semibold right-full top-1/2 translate-x-1/2 -translate-y-1/2 tracking-tighter  z-50  text-[#CDEA68] ">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                  className="inline-block  translate-y-full"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card border-zinc-800 border-[1px] w-full h-full rounded-2xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg"
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
