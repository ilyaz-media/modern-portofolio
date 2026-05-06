import { ArrowLeft, ArrowUpRight, Send } from "lucide-react";
import project1 from "../assets/projects/1.png";
import project2 from "../assets/projects/2.png";
import { Link } from "react-router";

export default function DetailProject() {
  const data = [
    {
      title: "Web Portofolio",
      ket: "ilyas samsudin",
      img: project1,
      tech: ["react", "tailwind", "framer-motion"],
    },
    {
      title: "Ecommers Website",
      ket: "ilyas samsudin",
      img: project2,
      tech: ["react", "tailwind", "framer-motion"],
    },
    {
      title: "Web Portofolio",
      ket: "ilyas samsudin",
      img: project1,
      tech: ["react", "tailwind", "framer-motion"],
    },
    {
      title: "Web Portofolio",
      ket: "ilyas samsudin",
      img: project1,
      tech: ["react", "tailwind", "framer-motion"],
    },
    {
      title: "Web Portofolio",
      ket: "ilyas samsudin",
      img: project1,
      tech: ["react", "tailwind", "framer-motion"],
    },
  ];

  return (
    <div className="min-h-screen p-5 lg:p-10 mt-10 lg:mt-0">
     <div className="p-2 bg-zinc-900 w-fit">
      <a href="/#home">
      <ArrowLeft/>
      </a>

     </div>
      <h2 className=" mt-3 text-xl text-cyan-600 font-semibold flex gap-5 items-center text">
        <span className="h-2 w-2 bg-cyan-500 rounded-full "></span>
        Detail Project
      </h2>

      <div className="grid grid-cols-1  lg:grid-cols-3 gap-3 mt-5 lg:mt-10">
        {data.map((item) => {
          return (
            <div className="p-2 shadow-lg rounded-xl bg-zinc-900">
              <img
                src={item.img}
                className="h-[200px] w-full object-cover"
                alt=""
              />
              <div className="p-3 flex justify-between items-center">
                {/* left */}
                <div>
                  <h1 className="text-xl font-semibold">{item.title}</h1>
                  <p className="text-sm font-light">{item.ket}</p>
                  <div className="flex gap-2 flex-wrap  py-2 text-white ">
                    {item.tech.map((i) => {
                      return (
                        <span className="text-xs bg-zinc-800 p-1 rounded-2xl">
                          {i}
                        </span>
                      );
                    })}
                  </div>
                </div>
                {/* right */}
                <div className="p-2 h-fit rounded-full  flex items-center bg-cyan-600">
                    <ArrowUpRight className="p-2 " size={40}/>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* bottom */}
       <div className=" py-5 px-10 bg-zinc-900 mt-5 rounded-xl flex-col lg:flex-row flex justify-between gap-5 lg:items-center">
        {/* left */}
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="bg-cyan-600 p-2 rounded-full w-fit">
            <Send className="p-2" size={40} />
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="font-semibold">Punya proyek menarik ?</h2>
            <p className="text-xs">
              Saya siap membantu mewujudkan ide Anda menjadi solusi digital yang
              berdampak.
            </p>
          </div>
        </div>
        {/* right */}
        <button className="px-5 py-2 bg-cyan-700 text-xs lg:text-base rounded-lg shadow-lg w-fit">
          {" "}
          Hubungi Saya
        </button>
      </div>
    </div>
  );
}
