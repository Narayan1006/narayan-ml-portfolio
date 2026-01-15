const SkillBadge = ({ name, level }) => {
  return (
    <div className="flex items-center justify-between py-2 px-3 rounded hover:bg-white/5 transition-colors">
      <span className="font-mono text-sm text-gray-400">
        {name}
      </span>
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`w-1.5 h-4 rounded-sm ${
              i < level ? "bg-[#00ffd5]" : "bg-gray-800"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillBadge;
