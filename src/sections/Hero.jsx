import Typewriter from "../components/Typewriter";
import TrainingSimulation from "../components/TrainingSimulation";

import { Cpu, Github } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6"
    >
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT — TEXT */}
        <div className="space-y-6">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00ffd5]/5 border border-[#00ffd5]/20 text-[#00ffd5] text-xs font-mono">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ffd5] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00ffd5]"></span>
            </span>
            Model Training in Progress
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight">
            Narayan <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ffd5] to-[#bd00ff]">
              Singh
            </span>
          </h1>

          {/* Subtitle */}
          <p className="font-mono text-lg text-gray-400">
  <span className="text-[#00ffd5]">{">"}</span>{" "}
  <Typewriter text="Training models. Evaluating metrics. Deploying ML." />
</p>


          {/* Description */}
          <p className="max-w-lg text-gray-400 leading-relaxed">
            I build machine learning systems end-to-end — from data pipelines and
            model training to evaluation and deployment-ready code.
          </p>

          {/* CTA */}
          <div className="flex gap-4 pt-4">
            <a
  href="#projects"
  className="px-6 py-3 bg-[#00ffd5] text-black font-bold rounded flex items-center gap-2 hover:bg-[#00ffd5]/90 transition-transform hover:scale-105"
>
  <Cpu className="w-5 h-5" />
  View Projects
</a>

           <a
  href="https://github.com/Narayan1006"
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-3 border border-gray-700 text-white rounded flex items-center gap-2 hover:border-[#00ffd5] transition-colors"
>
  <Github className="w-5 h-5" />
  GitHub
</a>

          </div>
        </div>

        <div className="hidden lg:flex items-center justify-center">
  <div className="w-full p-6 border border-gray-800 rounded-xl bg-white/5 shadow-2xl">
    <div className="mb-3 text-gray-500 font-mono text-xs">
      training_log.py
    </div>
    <TrainingSimulation />
  </div>
</div>

      </div>
    </section>
  );
};

export default Hero;
