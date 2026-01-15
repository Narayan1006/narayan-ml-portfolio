import { Brain, Database, Activity } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-24 px-6 bg-[#0d121f]"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-white font-mono">
            <span className="text-[#00ffd5]">01.</span> ABOUT_SYSTEM
          </h2>
          <div className="flex-grow h-px bg-gray-800" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* LEFT — ABOUT TEXT */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">
              About Me
            </h3>

            <p className="text-gray-400 leading-relaxed">
              I’m a <span className="text-[#00ffd5]">B.Tech student</span> focused on
              building machine learning systems that work reliably in real-world
              scenarios — not just in notebooks.
            </p>

            <p className="text-gray-400 leading-relaxed">
              My interest lies in understanding how models learn from data,
              how to evaluate them correctly, and how to structure clean pipelines
              that are easy to debug, scale, and deploy.
            </p>

            <p className="text-gray-400 leading-relaxed">
              I enjoy working across the full ML workflow — from data preparation
              and feature engineering to model training, evaluation, and inference.
            </p>
          </div>

          {/* RIGHT — FOCUS AREAS */}
          <div className="space-y-8">

            <h3 className="text-2xl font-bold text-white">
              What I Focus On
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

              {/* Card 1 */}
              <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
                <Brain className="w-6 h-6 text-[#00ffd5] mb-4" />
                <h4 className="text-white font-bold mb-2 text-sm">
                  Model Development
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Training and tuning ML models with a focus on generalization,
                  validation, and performance metrics.
                </p>
              </div>

              {/* Card 2 */}
              <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
                <Database className="w-6 h-6 text-[#bd00ff] mb-4" />
                <h4 className="text-white font-bold mb-2 text-sm">
                  Data Pipelines
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Cleaning, transforming, and structuring data pipelines that
                  make experimentation reproducible and reliable.
                </p>
              </div>

              {/* Card 3 */}
              <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
                <Activity className="w-6 h-6 text-[#00ffd5] mb-4" />
                <h4 className="text-white font-bold mb-2 text-sm">
                  Evaluation & Metrics
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Measuring model performance using the right metrics and
                  understanding trade-offs beyond raw accuracy.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
