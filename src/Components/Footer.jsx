import React from "react";

const Footer = () => {
  return (
    <div className="flex gap-5 w-full h-screen bg-zinc-900  py-14 px-14">
      <div className="w-1/2 h-[40vw]">
        <h1 className="text-[6vw] scale-y-125 font-bold tracking-tighter    ">
          EYE-
        </h1>
        <h1 className="text-[6vw] scale-y-125 font-bold tracking-tighter leading-[5vw] ">
          OPENING
        </h1>
        {/* {["EYE-","OPENING"].map((item,index)=><h1 className='text-[6vw] scale-y-125 font-bold tracking-tighter  '>{item}</h1>)} */}
      </div>
      <div className="w-1/2 h-[40vw] mr-6">
        <h1 className="text-[6vw] scale-y-125 font-bold tracking-tighter mb-5 ">
          PRESENTATIONS
        </h1>
        <div className="flex flex-col mb-5">
          <h1 className="mb-5 text-[1.15vw]">S:</h1>
          {["Instagram", "Behance", "Facebook", "Linkedin"].map(
            (item, index) => (
              <span className=" text-[1.15vw]  border-b-[0.1px] w-max m-[1px] font-extralight">
                {item}
              </span>
            )
          )}
        </div>

        <div className="flex gap-[28vw] mb-5">
          <div className="w-1/2">
            <h1 className="mb-5 text-[1.15vw]">L:</h1>
            <div className="flex flex-col">
              {["202-1965 W 4th Ave", "Vancouver,Canada"].map((item, index) => (
                <span className=" text-[1.15vw]  border-b-[0.1px] w-max m-[1px] font-extralight">
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-5 flex flex-col">
              {["30 Chukarina St", "Lviv,Ukraine"].map((item, index) => (
                <span className=" text-[1.15vw]  border-b-[0.1px] w-max m-[1px] font-extralight">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="w-1/2">
            <h1 className="mb-5 text-[1.15vw]">M:</h1>
            <div className="flex flex-col">
              {["Home","Services","Our work","About us","Insights","Contact us"].map((item, index) => (
                <span className=" text-[1.15vw]  border-b-[0.1px] w-max m-[1px] font-extralight">
                  {item}
                </span>
              ))}
            </div>
            
          </div>
        </div>
        <div className="flex flex-col mb-5">
          <h1 className="mb-5 text-[1.15vw]">E:</h1>
          <span className=" text-[1.15vw]  border-b-[0.1px] w-max m-[1px] font-extralight">
            hello@ochi.design
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
