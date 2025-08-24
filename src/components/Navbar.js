"use client";

import { React, useState } from "react";
import Image from "next/image";
import { assets } from "./constants/data.js";
import Link from "next/link";
import { navs } from "./constants/data.js";
function Navbar() {
  const [visible, setVisible] = useState(false);

  return (
    <nav
      className=" flex  justify-between items-center  py-4 lg:py-6 rounded-2xl
     border border-[#F2F2F7]  px-4 text-white bg-[#0C0911] "
    >
      {/* nav left*/}
      <div className="flex justify-center items-center whitespace-nowrap gap-1 pl-3 md:pl-0">
        <Image src={assets.logo} alt="Logo" />
        <h1 className="text-sm md:text-lg lg:text-2xl">Idea Validator</h1>
      </div>
      {/* nav center */}
      <div className="flex items-center gap-2 md:gap-4 lg:gap-8 w-full md:w-auto bg-[#0C0911]   ">
        <ul className="hidden md:flex items-center gap-5 xl:gap-8 ">
          {navs.map((item, index) => (
            <li key={index}>
              <Link
                href={item.link}
                className="text-white/80 hover:text-white transition"
              >
                {item.titlt}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* nav right */}
      <div className="flex items-center  gap-2 lg:gap-4  ">
        <div className="md:hidden" onClick={() => setVisible(!visible)}>
          <Image
            src={visible ? assets.cross_icon : assets.menu_icon}
            alt="menu"
            className="w-6 h-6"
          />
        </div>

        <Link
          href="/"
          className="rounded-lg  whitespace-nowrap tracking-tight leading-5 text-xs lg:text-base p-2.5 gap-2.5 
             hover:bg-white/10 transition"
        >
          Sign In
        </Link>
        <div
          className="flex items-center  justify-center whitespace-nowrap mr-5 md:mr-0 px-3 py-2 gap-1.5 rounded-lg tracking-tight 
             bg-gradient-to-r from-[#3F1480] to-[#A43D83] "
        >
          <Image
            src={assets.TryFree}
            alt="Try Free"
            className="w-4 h-4 md:w-6 md:h-6"
          />
          <Link href="/" className="text-sm lg:text-base">
            Try Free
          </Link>
        </div>
      </div>

      <div className="md:hidden" onClick={() => setVisible(!visible)}>
        <Image
          src={assets.menu}
          alt="menu"
          className={`min-w-7 flex-initial ${visible ? "hidden" : "block"}`}
        />
        <div
          className={`absolute top-0 right-7  bottom-0 overflow-hidden whitespace-nowrap
              bg-[#0C0911] border-1 transition-all  border-white rounded-lg
              ${visible ? "w-40 h-screen p-6 mt-22" : "w-0 h-0 p-0 "}`}
        >
            <Image
          src={assets.cross}
          alt="menu"
          className={`min-w-7 flex-initial  ${!visible ? "hidden" : "block"}`}
        />
          <ul className="flex flex-col items-center justify-center gap-5  mt-5  ">
            {navs.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.link}
                  className="text-white/80 hover:text-white transition text-sm"
                >
                  {item.titlt}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
