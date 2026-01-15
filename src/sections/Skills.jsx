import SkillBadge from "../components/SkillBadge";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-white font-mono">
            <span className="text-[#00ffd5]">02.</span> SKILL_STACK
          </h2>
          <div className="flex-grow h-px bg-gray-800" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* LEFT — ML & DATA */}
          {/* LEFT — ML & DATA */}
<div className="space-y-6">
  <h3 className="text-xl font-bold text-white">
    Machine Learning & Data
  </h3>

  <div className="space-y-2">
    <SkillBadge name="Python" level={4} />
    <SkillBadge name="Pandas" level={4} />
    <SkillBadge name="NumPy" level={3} />
    <SkillBadge name="Scikit-learn (Basics)" level={3} />
    <SkillBadge name="Data Cleaning & EDA" level={4} />
  </div>
</div>

{/* RIGHT — ENGINEERING */}
<div className="space-y-6">
  <h3 className="text-xl font-bold text-white">
    Engineering Basics
  </h3>

  <div className="space-y-2">
    <SkillBadge name="Git / GitHub (Basics)" level={3} />
    <SkillBadge name="SQL (Basic Queries)" level={3} />
  </div>
</div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
