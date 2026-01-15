import ParticleNetwork from "./components/ParticleNetwork";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0a0e17] text-gray-300 overflow-x-hidden">
      <ParticleNetwork />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
