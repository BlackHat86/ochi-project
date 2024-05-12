import React from 'react'
import { GoDotFill } from "react-icons/go";
import "../assets/asset2.jpg"

const About = () => {
  return (
   <div data-scroll data-scroll-section data-scroll-speed="-.1" className='w-full   bg-[#CDEA68] rounded-tl-3xl text-[#212121]  rounded-tr-3xl'>
        <h1 className='py-24 px-12 tracking-tight font-["Neue_Montreal"] leading-none text-[4vw]  w-[88vw]'>Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple</h1>
        <div className='flex  px-12 border-t-[1px]  py-3 pb-[1vw] border-[#a1b562]'>
            <div className='w-1/2 px-3 flex gap-5 flex-col'>
                <h1 className='text-[#212121] text-6xl tracking-tight'>Our approach:</h1>
                <button className='text-white flex items-center gap-4 py-4 px-[2.5vw] bg-[#212121] text-1xl w-fit rounded-full px-5'>READ MORE <GoDotFill /> </button>

            </div>
            <div className='w-1/2 '>
                <div className=' mt-2  bg-cover rounded-md overflow-hidden  w-[45vw] h-[30vw]'><img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" /></div>
            </div>
        </div>
   </div>
  )
}

export default About