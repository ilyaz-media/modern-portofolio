import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar({ setOpenBar, openBar }) {
  return (
    <nav className="flex gap-5 px-5 py-3 items-center lg:hidden fixed w-full bg-zinc-950 z-10">
      <button onClick={() => setOpenBar(!openBar)}>
        {openBar ? <FaTimes /> : <FaBars />}
      </button>
      <div className="font-semibold text-xl">Ilyas Project</div>
    </nav>
  );
}
