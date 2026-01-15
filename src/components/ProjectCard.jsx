import { Github } from "lucide-react";

const ProjectCard = ({ title, description, tech, link }) => {
  return (
    <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-[#00ffd5]/50 transition-colors">
      <h3 className="text-xl font-bold text-white mb-3">
        {title}
      </h3>

      <p className="text-gray-400 text-sm leading-relaxed mb-4">
        {description}
      </p>

      <p className="text-xs text-gray-500 mb-4">
        <strong>Tech:</strong> {tech}
      </p>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm text-[#00ffd5] hover:underline"
      >
        <Github className="w-4 h-4" />
        View on GitHub
      </a>
    </div>
  );
};

export default ProjectCard;
