import { useEffect, useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTimes } from "react-icons/fa";

export default function Sidebar({ openBar, setOpenBar }) {
  const [activeLink, setActiveLink] = useState("Home");
  const menu = ["Home", "Projects", "About", "Skills", "Goals", "Contact"];
  return (
    <div
      className={`transition-all duration-200 fixed ${openBar ? "left-0" : "-left-full"} md:left-0  z-20 w-[200px] text-gray-200  bg-zinc-900 text-white h-screen flex flex-col justify-between p-5 pb-10`}>
      <button
        className="absolute  md:hidden left-[100%] top-[0%]  bg-red-600 p-3"
        onClick={() => setOpenBar(!openBar)}>
        <FaTimes />
      </button>
      <div className="flex flex-col gap-10">
        <div className="text-xl font-bold  pt-10">Ilyas <span className="text-cyan-500">Project</span></div>


        {/* links */}
        <div className="flex flex-col gap-5 lg:py-8">
          {menu.map((item) => {
            return (
              <a
                href={`#${item}`}
                onClick={() => setActiveLink(item)}
                className={`${activeLink === item ? "text-cyan-500 rounded-l-lg rounded-r-2xl bg-zinc-800 h-[50px]" : "text-white"} flex gap-5 items-center text-sm lg:text-base  `}>
                {activeLink === item && <span className="w-2 h-12 rounded-lg bg-cyan-500"></span> }
                {item}
              </a>
            );
          })}
        </div>

      </div>
      {/* footer */}
      <div className="flex flex-col gap-5 p-2 ">
        <div className="flex gap-2">
          <FaLinkedin size={30} />
          <FaGithub size={30} />
          <FaInstagram size={30} />
        </div>
        <div>
          <p className="text-xs font-light">
            @2026 Ilyas samsudin All rights reserved.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
