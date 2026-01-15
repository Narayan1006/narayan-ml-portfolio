import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 px-6 bg-[#0d121f]">
      <div className="max-w-6xl mx-auto">

        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-white font-mono">
            <span className="text-[#00ffd5]">03.</span> PROJECTS
          </h2>
          <div className="flex-grow h-px bg-gray-800" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <ProjectCard
            title="Netflix EDA"
            description="Exploratory Data Analysis on Netflix titles to uncover trends in content type, release year, genres, and audience ratings."
            tech="Python, Pandas, Seaborn"
            link="https://github.com/Narayan1006/Netflix-EDA_NarayanSingh"
          />

          <ProjectCard
            title="Student Placement Readiness Prediction"
            description="End-to-end machine learning project to predict student placement readiness based on academic performance, skills, and experience, with an interactive Streamlit app."
            tech="Python, Scikit-learn, Pandas, Streamlit"
            link="https://github.com/Narayan1006/student-placement-readiness-ml"
          />

          <ProjectCard
            title="Zomato Cost Prediction"
            description="Regression-based ML project to predict the average cost for two people at restaurants using Zomato dataset."
            tech="Python, Pandas, Scikit-learn"
            link="https://github.com/Narayan1006/zomato-cost-prediction"
          />

        </div>
      </div>
    </section>
  );
};

export default Projects;
