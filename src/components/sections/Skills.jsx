import { FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

export default function Skills() {

  return (
    <section id="Skills" className=" scroll-mt-20 mt-10 p-5 lg:p-10 w-full text-start min-h-[50vh]">
      <h2 className=" text-sm lg:text-xl font-semibold text-start flex items-center gap-5 text-cyan-500">
        <span className="h-2  w-2 rounded-full bg-cyan-500"></span>
        Skills
      </h2>

      <h1 className="text-xl lg:text-3xl font-semibold mt-5">
        Keahlian yang saya <span className="text-cyan-500">Kuasai</span>
      </h1>

      <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-5 md:w-[90%]">

        <div className="p-5 bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-lg shadow-lg flex flex-col justify-center items-center">
            <FaHtml5 size={40} className="text-orange-500"/>
            <p>Html 5</p>
        </div>
        <div className="p-5 bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-lg shadow-lg flex flex-col justify-center items-center">
            <FaCss3 size={40} className="text-blue-500"/>
            <p>Css 3</p>
        </div>
        <div className="p-5 bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-lg shadow-lg flex flex-col justify-center items-center">
            <FaJs size={40} className="text-yellow-400"/>
            <p>JS</p>
        </div>
        <div className="p-5 bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-lg shadow-lg flex flex-col justify-center items-center">
            <FaReact size={40} className="text-cyan-500"/>
            <p>React.js</p>
        </div>
        <div className="p-5 bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-lg shadow-lg flex flex-col justify-center items-center">
            <SiTailwindcss size={40} className="text-teal-600"/>
            <p>Tailwind.css</p>
        </div>
      </div>
    </section>
  );
}
