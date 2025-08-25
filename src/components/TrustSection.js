import React from "react";
import Image from "next/image";
import { assets } from "./constants/data";

const TrustSection = () => {
  return (
    // Trust
    <div className="grid grid-cols-2 lg:grid-cols-4  justify-center  items-center  mt-3 whitespace-nowrap gap-6 ">
      {/* number1 */}
      <div
        className=" flex flex-col justify-center  items-center px-16 py-3
        rounded-[19px] bg-gradient-to-b from-[#0F1621] to-[#1A1B26] "
      >
        <Image src={assets.trust1} />

        <p className="text-white">50,000+</p>
        <p className="text-[#8E8E93]">Ideas Validated</p>
      </div>
      {/* number2 */}
      <div
        className="flex flex-col justify-center  items-center px-16 py-3
        rounded-[19px] bg-gradient-to-b from-[#0F1621] to-[#1A1B26]"
      >
        <Image src={assets.trust2} />
        <p className="text-white">92%</p>
        <p className="text-[#8E8E93]">Accuracy Rate</p>
      </div>
      {/* number3 */}
      <div
        className=" flex flex-col justify-center  items-center px-16 py-3
        rounded-[19px] bg-gradient-to-b from-[#0F1621] to-[#1A1B26]"
      >
        <Image src={assets.trust3} />
        <p className="text-white">30 sec</p>
        <p className="text-[#8E8E93]">Analysis Time</p>
      </div>
      {/* number4 */}
      <div
        className="flex flex-col justify-center  items-center px-16 py-3
        rounded-[19px] border-[#20222C]  bg-gradient-to-b from-[#0F1621] to-[#1A1B26]"
      >
        <Image src={assets.trust3} />
        <p className="text-white">$2.5B+</p>
        <p className="text-[#8E8E93]">Value Created</p>
      </div>
    </div>
  );
};

export default TrustSection;
