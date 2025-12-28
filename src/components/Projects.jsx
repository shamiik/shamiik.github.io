import { useState } from 'react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projectsData = [
    {
      title: "AI Analytics Dashboard",
      desc: "Real-time data visualization dashboard using React & D3.js. Features dark mode and analytics.",
      tags: ["React", "Python", "AI"],
      category: "ai",
      link: "#"
    },
    {
      title: "E-Commerce Platform",
      desc: "Full-stack shopping application with Stripe payment integration and admin panel.",
      tags: ["Node.js", "Express", "MongoDB"],
      category: "web",
      link: "#"
    },
    {
      title: "Fitness Tracker App",
      desc: "Cross-platform mobile app to track daily fitness activities and nutrition plans.",
      tags: ["Flutter", "Firebase", "Dart"],
      category: "mobile",
      link: "#"
    },
    {
      title: "Portfolio v1",
      desc: "Minimalist portfolio website built with semantic HTML and CSS Grid layouts.",
      tags: ["HTML", "CSS", "JS"],
      category: "web",
      link: "#"
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-gray-50/50 dark:bg-black/20 relative z-10">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 reveal">
          Featured <span className="text-primary">Projects</span>
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12 reveal">
          {['all', 'web', 'ai'].map((cat) => (
            <button
              key={cat}
              className={`filter-btn px-6 py-2 rounded-full border border-gray-300 dark:border-gray-700 hover:border-primary hover:text-primary transition-all text-sm font-medium ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div id="projects-grid" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-cardDark rounded-2xl p-6 border border-gray-100 dark:border-white/5 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 reveal flex flex-col active"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-gray-50 dark:bg-white/5 rounded-xl text-2xl text-primary">
                  <i className="fas fa-folder"></i>
                </div>
                <a href={project.link} className="text-gray-400 hover:text-primary transition-colors text-lg">
                  <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed line-clamp-3">{project.desc}</p>
              <div className="flex gap-2 flex-wrap mt-auto">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-xs font-bold px-3 py-1 bg-primary/10 text-primary rounded-lg uppercase tracking-wide">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
