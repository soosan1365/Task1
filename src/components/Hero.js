import React from "react";
import Image from "next/image";
import { assets } from "./constants/data";

const Hero = () => {
  return (
    <div className="flex  items-center justify-center mt-28  ">
      <div className="flex flex-col justify-center items-center gap-10">
        {/* heeder */}
        <div
          className="flex justify-center items-center  border-1 rounded-4xl p-2 gap-2
                 bg-gradient-to-r from-[#331da0] to-[#9133EA] border-[#8B35EA]  "
        >
          <Image src={assets.logowhite} className="text-white w-5 h-5 " />
          <h1 className="text-white whitespace-nowrap text-sm md:text-base ">
            AI-Powered • Real-Time Analysis • 92% Accuracy
          </h1>
        </div>

        {/* content */}
        <div className="flex flex-col justify-center items-center text-center gap-4  px-20 ">
          <p className="text-white  text-2xl  md:text-4xl lg:text-6xl whitespace-nowrap ">
            Validate Your App Ideas
          </p>
          <p
            className="bg-gradient-to-r from-[#331da0] to-[#9133EA] bg-clip-text text-transparent 
                    text-2xl  md:text-4xl lg:text-6xl"
          >
            Before You Build
          </p>
          <p className="text-white/70  text-xl ">
            Get comprehensive AI-powered analysis in
            <span className="text-[#5C43E7]"> minutes </span>. Understand market
            <br /> potential, competition, and revenue opportunities before
            investing <br />
            <span className="text-[#5C43E7]">time and money</span>.
          </p>
        </div>
        {/* private  */}
        <div
          className="flex flex-col  justify-center items-center px-16  py-8   text-white gap-3
        bg-gradient-to-r from-[#0F1621] to-[#1A1B26] border-1 rounded-2xl  border-[#20222C] text-center  "
        >
          <div className="flex justify-center items-center whitespace-nowrap gap-1 md:gap-5   ">
            <Image src={assets.priv} />
            <p className=" text-xl sm:text-2xl lg:text-3xl ">
              100% Private & Confidential
            </p>
          </div>
          <p className="  text-xs lg:text-base ">
            Your ideas are encrypted, never shared, and automatically deleted
            after 30 days. We sign NDAs <br /> upon request.
          </p>
        </div>
        {/* btn */}
        <div className=" grid grid-cols-1 md:grid-cols-2 justify-center items-center p-1.5 gap-4  ">
          {/* btnLeft */}
          <button
            className=" flex text-white  py-3 px-5  rounded-xl gap-2.5
            bg-gradient-to-r from-[#3F1480] to-[#A43D83] "
          >
            <Image className="h-5" src={assets.btnLeft} />
            <p>Validate Your Idea Free</p>
          </button>
          {/* btnRight */}
          <button
            className=" flex bg-[#1D1E2F]  text-white rounded-xl border-2
           border-[#160E174D] p-3 gap-2.5 "
          >
            <Image src={assets.btnRight} />
            <p>Watch 2-Min Demo</p>
            <Image src={assets.btnRight2} />
          </button>
        </div>
        <p className="text-white/70 text-base">
          Trusted by entrepreneurs worldwide
        </p>
      </div>
    </div>
  );
};

export default Hero;
