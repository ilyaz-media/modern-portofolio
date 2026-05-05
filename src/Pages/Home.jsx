import Hero from "../components/sections/Hero";
import Projects from "../components/sections/Projects";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Goals from "../components/sections/Goals";

export default function Home() {
  return (
    <div className="min-h-screen lg:flex items-center flex-col bg-zinc-950 ">
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Goals />
    </div>
  );
}
