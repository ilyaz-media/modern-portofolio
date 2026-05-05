import { Send } from "lucide-react";
import project1 from "../../assets/projects/1.png";
import project2 from "../../assets/projects/2.png";
import "./projects.css";

export default function Projects() {
  const data = [
    {
      title: "Web Portofolio",
      ket: "ilyas samsudin",
      img: project1,
    },
    {
      title: "Ecommers Website",
      ket: "ilyas samsudin",
      img: project2,
    },
    {
      title: "Web Portofolio",
      ket: "ilyas samsudin",
      img: project1,
    },
  ];

  return (
    <div id="Projects" className=" scroll-mt-50 text-start w-full mt-10 lg:mt-0 p-5 lg:p-10 border-t border-slate-800">
      <div className="flex justify-between items-center">
        <h2 className="flex text-sm text-cyan-500 lg:text-xl gap-5 font-semibold items-center">
          {" "}
          <span className="h-2 w-2 rounded-full bg-cyan-600"></span> Project
          Created
        </h2>
        <a href="#" className="text-xs lg:text-base lg:block text-slate-300">
          Lihat selengkapnya
        </a>
      </div>
      <div className="grid grid-cols-1  lg:grid-cols-3 gap-3 mt-10">
        {data.map((item) => {
          return (
            <div className="p-2 shadow-lg rounded-2xl bg-zinc-900">
              <img
                src={item.img}
                className="h-[200px] w-full object-cover"
                alt=""
              />
              <div className="p-3">
                <h1 className="text-xl font-semibold">{item.title}</h1>
                <p className="text-sm font-light">{item.ket}</p>
              </div>
            </div>
          );
        })}
      </div>

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
