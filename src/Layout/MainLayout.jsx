import { Outlet } from "react-router";
import Sidebar from "../components/UI/Sidebar";
import Navbar from "../components/UI/Navbar";
import Footer from "../components/UI/Footer";
import { useState } from "react";

export default function MainLayout() {
  const [openBar, setOpenBar] = useState(false);
  return (
    <div>
      <Navbar openBar={openBar} setOpenBar={setOpenBar} />
      <div className="flex ">
        <Sidebar openBar={openBar} setOpenBar={setOpenBar} />
        <main
          className={`flex-1 lg:ml-[15%]`}
          onClick={() => setOpenBar(false)}>
          {openBar && <div className="fixed inset-0 bg-black/50 z-10"></div>}
          <Outlet />
         <Footer/>
        </main>
      </div>
    </div>
  );
}
