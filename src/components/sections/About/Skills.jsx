
const Skills = () => {
  const categories = [
    {
      title: "Development",
      color: "text-primary", // Indigo #6366f1
      tagBg: "bg-indigo-500/10 dark:bg-indigo-500/20",
      tagText: "text-indigo-600 dark:text-indigo-300",
      skills: ["Python", "JavaScript", "React JS", "Tailwind", "Bootstrap", "Fast API"]
    },
    {
      title: "AI/ML & Data",
      color: "text-secondary", // Sky Blue #0ea5e9
      tagBg: "bg-sky-500/10 dark:bg-sky-500/20",
      tagText: "text-sky-600 dark:text-sky-300",
      skills: ["PyTorch", "TensorFlow", "LangChain", "OpenCV", "PostgreSQL", "MongoDB"]
    },
    {
      title: "Engineering",
      color: "text-emerald-500",
      tagBg: "bg-emerald-500/10 dark:bg-emerald-500/20",
      tagText: "text-emerald-600 dark:text-emerald-300",
      skills: ["Arduino", "Innovus", "Quartus", "PSpice", "AutoCAD", "Virtuoso", "Proteus"]
    },
    {
      title: "Cloud & Tools",
      color: "text-gray-500 dark:text-gray-400",
      tagBg: "bg-gray-500/10 dark:bg-white/10",
      tagText: "text-gray-600 dark:text-gray-300",
      skills: ["AWS", "Docker", "Git", "MS PowerPoint", "Google-Suite"]
    }
  ];

  return (
    <div id="skills" className="py-12 relative z-10">   
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-16 reveal">
        Technical <span className="text-primary">Skills</span>
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, idx) => (
          <div 
            key={idx} 
            className="p-6 glass-water rounded-2xl border border-gray-100 dark:border-white/5 shadow-lg reveal transition-all duration-300 hover:-translate-y-1 hover:border-primary/20"
            style={{ transitionDelay: `${idx * 100}ms` }}
          >
            <h3 className={`text-xl font-bold mb-6 text-center ${cat.color}`}>
              {cat.title}
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {cat.skills.map((skill, sIdx) => (
                <span 
                  key={sIdx} 
                  className={`px-3 py-1.5 ${cat.tagBg} ${cat.tagText} rounded-lg text-xs font-bold uppercase tracking-tight transition-all duration-300 hover:scale-110 shadow-sm`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
