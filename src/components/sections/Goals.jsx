import { Code, Globe, Laptop, Rocket, Target } from "lucide-react";
import "./goals.css";

export default function Goals() {
  const data = [
    {
      judul: "Menjadi FrontEnd Developer",
      ket: "Terus berkembang sebagai frontend developer dan membangun pengalaman web yang berdampak.",
      icon: Code,
    },
    {
      judul: "Membangun Aplikasi Web Nyata",
      ket: "Membuat aplikasi yang modern, responsif, dan mudah digunakan untuk menyelesaikan berbagai masalah.",
      icon: Laptop,
    },
    {
      judul: "Meningkatkan Skill",
      ket: "Terus belajar dan mengasah kemampuan di React, Next.js, TypeScript, dan UI/UX.",
      icon: Rocket,
    },
    {
      judul: "Bekerja Secara Remote",
      ket: "Terbuka untuk bekerja remote dan berkolaburasi dengan berbagai orang dari seluruh dunia.",
      icon: Globe,
    },
  ];

  return (
    <section id="Goals" className="min-h-screen scroll-mt-20 w-full p-5 lg:p-10">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-5 mt-5 lg:mt-10">
        <div className=" flex flex-col gap-2 lg:gap-5">
          <h2 className="text-sm lg:text-xl font-semibold flex gap-5 items-center text-cyan-500">
            <span className="h-2 w-2 bg-cyan-500 rounded-full"></span>
            Goals
          </h2>
          <h1 className=" text-4xl lg:text-6xl font-semibold">
            My <span className="text-white">Goals</span>
          </h1>
          <span className="w-[150px] rounded-full bg-cyan-500 h-2"></span>
          <p className=" lg:leading-7 mt-5 text-xs lg:text-base lg:mt-10">
            Saya belajar, membangun, dan berkembang. Berikut beberapa tujuan
            yang mendorong saya ke depan
          </p>
        </div>
        {/* grid */}
        <div className=" backgroundGrid p-2 lg:p-5 grid grid-cols-1 md:grid-cols-2 gap-5">
          {data.map((item) => {
            const Icon = item.icon;
            return (
              <div className="bg-zinc-900 rounded-lg shadow-lg py-5 px-8 flex  bg-gradient-to-b from-zinc-900 to-zinc-950 flex-col gap-2">
                <div className="p-3 bg-zinc-800 w-fit rounded-2xl">
                  <Icon size={40} className=" text-cyan-500 bg-zinc-800 " />
                </div>
                <h2 className="text-2xl font-semibold">{item.judul}</h2>
                <p className="text-sm">{item.ket}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
