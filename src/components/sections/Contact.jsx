import { Send } from "lucide-react";
import { useRef, useState } from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaLocationDot, FaLocationPin } from "react-icons/fa6";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formEmail = useRef();
  const [form, setForm] = useState({
    email: "",
    message: "",
  });

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if(form.email === '' && form.message === '' ){
      return alert('❌ Email dan pesan tidak boleh kosong')
    }

    emailjs
      .sendForm(
        "service_u00j1ne",
        "template_a5uyx4e",
        formEmail.current,
        "w4Ez31GXKCPYcJ0Xj",
      )
      .then(() => {
        alert("✅pesan terkirim");
      })
      .catch((err) => {
        console.log(err);
        alert("❌ Terjadi kesalahan");
      });

    setForm({
      email: "",
      message: "",
    });
    console.log(form);
  };

  // handleChange
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="Contact" className="scroll-mt-20 p-5 lg:p-10  w-full">
      <h2 className=" text-sm  lg:text-xl flex gap-5 font-semibold  items-center text-cyan-500">
        <span className="h-2 w-2 rounded-full bg-cyan-500 "></span>
        Contact
      </h2>

      <div className="p-2 lg:p-5 bg-gradient-to-b from-zinc-900 to-zinc-950 mt-5 rounded-2xl grid gap-3 grid-cols-1 md:grid-cols-2">
        <div className="py-2 px-2 lg:px-4 flex flex-col gap-2">
          <span className="flex items-center gap-5 bg-zinc-800 px-2 py-1 text-sm rounded-2xl w-fit">
            <span className=" bg-cyan-500 rounded-full">
              <Send className="p-1" />
            </span>
            Start A Project
          </span>
          <h1
            className=" text-2xl
          lg:text-4xl font-bold mt-5">
            Mari Bangun Masa Depan Digital Anda
          </h1>
          <p className="mt-5 text-sm lg:text-base">
            Isi formulir di bawah ini atau hubungi saya secara langsung untuk berdiskusi mengenai kebutuhan proyek Anda. Saya siap membantu mengubah ide Anda menjadi website yang modern, responsif, dan profesional.
          </p>

          <div className="mt-5 flex flex-wrap gap-2 ">
            <div className=" flex bg-zinc-900 gap-5 px-5 py-2 rounded-full text-sm">
              <FaWhatsapp size={20} />
              +62-821-2954-6021
            </div>
            <div className=" flex bg-zinc-900 gap-5 px-5 py-2 rounded-full text-sm">
              <FaInstagram size={20} />
              il_yaz93
            </div>
            <div className=" flex bg-zinc-900 gap-5 px-5 py-2 rounded-full text-sm">
              <FaLocationDot size={20} />
              Jawa Barat, Indonesia
            </div>
          </div>
        </div>
        <div className=" px-4 lg:px-5 py-5 lg:py-10 bg-zinc-900 rounded-2xl">
          <form
            ref={formEmail}
            onSubmit={handleSubmit}
            className="flex flex-col justify-center gap-2 text-sm lg:text-base">
            <label htmlFor="">Email :</label>
            <input
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="bg-zinc-800 rounded-lg outline-none p-2 focus:border-2 focus:border-cyan-600 transition-all duration-100 focus:shadow-lg"
              placeholder="Masukan Email"
            />
            <label htmlFor="">message :</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="bg-zinc-800 rounded-lg p-2 h-[100px] outline-none focus:border-2 focus:border-cyan-600 transition-all duration-100 focus:shadow-lg"
              placeholder="Masukan pesan"
            />
            <button className="mt-5 py-2 rounded-lg shadow-lg bg-cyan-700 hover:bg-cyan-800">
              Kirim
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
