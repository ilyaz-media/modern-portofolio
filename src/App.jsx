import { Routes, Route } from "react-router";
import MainLayout from "./Layout/MainLayout";
import Home from "./Pages/Home";

export default function App() {
  return (
    <div className="font-poppins bg-zinc-950 text-white">
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}
