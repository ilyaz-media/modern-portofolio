import { Routes, Route } from "react-router";
import MainLayout from "./Layout/MainLayout";
import Home from "./Pages/Home";
import DetailProject from "./Pages/DetailProject";
import ScrollToTop from "./components/UI/ScrollToTop";

export default function App() {
  return (
    <div className="font-poppins bg-zinc-950 text-white">
      <ScrollToTop/>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/detail-projects" element={<DetailProject />} />
        </Route>
      </Routes>
    </div>
  );
}
