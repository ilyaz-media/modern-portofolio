import { Send } from "lucide-react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaLocationDot, FaLocationPin } from "react-icons/fa6";

export default function Contact() {
  return (
    <section id="Contact" className="scroll-mt-20 p-5 lg:p-10  w-full">
      <h2 className=" text-sm  lg:text-xl flex gap-5 font-semibold  items-center text-cyan-500">
        <span className="h-2 w-2 rounded-full bg-cyan-500 "></span>
        Contact
      </h2>

      <div className="p-5 bg-gradient-to-b from-zinc-900 to-zinc-950 mt-5 rounded-2xl grid gap-3 grid-cols-1 lg:grid-cols-2">
        <div className="py-2 px-4 flex flex-col gap-2">
          <span className="flex items-center gap-5 bg-zinc-800 px-2 py-1 text-sm rounded-2xl w-fit">
            <span className=" bg-cyan-500 rounded-full">
              <Send className="p-1" />
            </span>
            Start A Project
          </span>
          <h1
            className="
          text-4xl font-bold mt-5">
            Let's Build Your Digital Future
          </h1>
          <p className="mt-5 text-sm lg:text-base">
            Ready to launch your next project ? Fill out the form below or reach
            out directly to start a conversation about your business needs and
            how we can help you grow.
          </p>

          <div className="mt-5 flex flex-wrap gap-2 ">
            <div className=" flex bg-zinc-900 gap-5 px-5 py-2 rounded-full text-sm">
              <FaWhatsapp size={20} />
              +62-821-2954-6021
            </div>
            <div className=" flex bg-zinc-900 gap-5 px-5 py-2 rounded-full text-sm">
              <FaInstagram size={20} />
              demonkite_93
            </div>
            <div className=" flex bg-zinc-900 gap-5 px-5 py-2 rounded-full text-sm">
              <FaLocationDot size={20} />
              Jawa Barat, Indonesia
            </div>
          </div>
        </div>
        <div className="px-5 py-10 bg-zinc-900 rounded-2xl">
            <form action="" className="flex flex-col gap-2">
                <label htmlFor="">Email :</label>
                <input type="text" className="bg-zinc-800 rounded-lg outline-none p-2 focus:border focus:border-cyan-600 transition-all duration-100 focus:shadow-lg" placeholder="Masukan Email" />
                <label htmlFor="">message :</label>
                <textarea className="bg-zinc-800 rounded-lg p-2 h-[100px] outline-none focus:border-2 focus:border-cyan-600 transition-all duration-100 focus:shadow-lg" placeholder="Masukan pesan" />
                <button className="mt-5 py-2 rounded-lg shadow-lg bg-cyan-700">Kirim</button>
            </form>
        </div>
      </div>
    </section>
  );
}
