import { Briefcase, FolderOpen, Send } from "lucide-react";
import { FaFolder, FaPhone } from "react-icons/fa";
import img from "../../assets/1.png";
import "./hero.css";
import { VscVscode } from "react-icons/vsc";
import { SiVitess, SiVitest } from "react-icons/si";

export default function Hero() {
  // const stats = [
  //   {
  //     count: "10+",
  //     ket: "Projects Completed",
  //     icon: Briefcase,
  //   },

  // ];
  return (
    <section
      id="Home"
      className="scroll-mt-20 min-h-screen mt-10 lg:mt-0 flex flex-col justify-center bg-zinc-950 w-full   p-3   lg:p-10">
      <div className="grid grid-cols-1  md:grid-cols-2 gap-5 h-full">
        {/* left */}
        <div className="p-2 flex  flex-col  justify-center gap-2 lg:gap-5  ">
          <p className="flex items-center gap-3 w-fit bg-zinc-900  rounded-3xl py-2  px-5 text-xs md:text-base text-gray-100">
            <span className="bg-cyan-500  h-2 w-2 rounded-full" /> Available for
            work
          </p>
          <h1 className=" text-4xl md:text-5xl lg:text-7xl  font-semibold">
            Hi, I'm Ilyas
          </h1>
          <h2 className="text-3xl lg:text-5xl text-cyan-600 font-semibold">
            {" "}
            Frontend Developer
          </h2>
          <p className=" font-light text-xs lg:text-base leading-normal ">
            Saya merancang pengalaman digital yang <br /> bermakna, estetis, dan
            berfokus pada pengguna.
          </p>

          <div className="flex gap-5 mt-5 text-xs lg:text-base">
            <button className="flex gap-2 lg:gap-5 bg-cyan-700 text-white items-center px-5 py-2 bg-cyan-60 rounded-lg shadow-lg">
              Hubungi Saya <Send />
            </button>
            <button className="px-5 py-3  text-white rounded-lg shadow-lg flex gap-2 lg:gap-5 items-center">
              Lihat proyek <FolderOpen />
            </button>
          </div>
        </div>
        {/* right */}
        <div className="backImg  flex justify-center relative items-center mt-10 lg:mt-0">
          <img src={img} className="h-[300px] md:h-[300px] lg:h-[450px]" alt="" />
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-0   z-[-1]">
            <path
              fill="#06B6D4"
              d="M43.9,-68.4C55.1,-61.2,61.2,-45.9,68.2,-31C75.3,-16.1,83.3,-1.5,80.1,10.6C76.9,22.6,62.4,32.1,51,42.8C39.6,53.5,31.2,65.5,19.4,71.4C7.6,77.3,-7.5,77.2,-23.1,74.6C-38.7,71.9,-54.9,66.7,-65.8,56C-76.7,45.2,-82.5,28.9,-79.6,14.6C-76.7,0.3,-65.2,-12.1,-56.7,-23.9C-48.3,-35.8,-42.9,-47.1,-34,-55.3C-25,-63.6,-12.5,-68.8,1.9,-71.8C16.4,-74.8,32.7,-75.6,43.9,-68.4Z"
              transform="translate(100 100)"
            />
          </svg>
          <div className="">
            <VscVscode className="absolute rotate-[-30deg] left-[15%] lg:left-[15%] text-4xl lg:text-5xl text-blue-500 bg-zinc-900 p-2 rounded-lg shadow-lg" />
          </div>

          <div className="">
            <SiVitess className="absolute rotate-[10deg] right-[15%]  lg:right-[15%] text-4xl lg:text-5xl text-purple-500 bg-zinc-900 p-2 rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
      {/* stats */}
      {/* <div className="p-5 bg-zinc-900 rounded-3xl w-fit border border-zinc-800 mt-5">
        <div className="grid lg:grid-cols-1 gap-10">
          {stats.map((item) => {
            const Icon = item.icon;
            return (
              <div className="flex items-center gap-3">
                <Icon size={40} />
                <div>
                  <h1 className="text-4xl font-semibold">{item.count}</h1>
                  <p className="text-sm font-light">{item.ket}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div> */}
    </section>
  );
}
