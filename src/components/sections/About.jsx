import { Download } from "lucide-react";

export default function About() {
  return (
    <div id="About" className=" w-full p-5 lg:p-10 mt-10">
      <h2 className="text-xl font-semibold flex gap-5 text-cyan-500 items-center">
        <span className="h-2 w-2 rounded-full bg-cyan-500 "></span>
        About Me
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
        <div className=" p-3">
          <h1 className="text-xl lg:text-3xl font-semibold leading-tight">
            Merancang solusi digital <br /> yang{" "}
            <span className="text-cyan-500">sederhana</span> dan{" "}
            <span className="text-cyan-500">efektif.</span>
          </h1>

          <p className="mt-5 lg:mt-10 text-sm lg:text-base leading-7 lg:pr-2">
            Saya adalah seorang UI UX Designer yang berfokus pada pembuatan antarmuka yan bersih, intuitif, dan berorientasi pada pengguna. Dengan pengalaman dalam berbagai proyek digital, saya membantu brand mewujudkan ide menjadi produk yang berdampak.
          </p>
          <button className="flex gap-5 mt-10 text-xs lg:text-base px-5 py-3 bg-cyan-700 text-xs rounded-lg shadow-lg">Download CV <Download/></button>
        </div>
        <div className="p-2 lg:p-5">
            <div className="rounded-lg text-xs lg:text-base py-5 gap-5 p-2 lg:p-10 bg-zinc-900 flex flex-col justify-between border border-slate-600 h-full">
                <div className="flex  gap-2">
                    <span className="w-24 text-gray-300">Nama :</span>
                    <p>Ilyas</p>
                </div>
                <div className="flex gap-2 ">
                    <span className="w-24 text-gray-300">Email :</span>
                    <p>Ilyassyamsudin388@gmail.com</p>
                </div>
                <div className="flex  gap-2">
                    <span className="w-24 text-gray-300">Location :</span>
                    <p>Jawa Barat, Indonesia</p>
                </div>
                <div className="flex gap-2 ">
                    <span className="w-24 text-gray-300">Status :</span>
                    <p className="text-green-500">Freelance & Remote Available</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
