
const Experience = () => {
  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16 reveal">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Experience</span>
        </h2>

        <div className="relative border-l-2 border-primary/30 ml-4 md:ml-6 space-y-12">
          {/* Experience Item 1 */}
          <div className="relative pl-8 md:pl-12 reveal group">
            <div className="absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-primary border-4 border-gray-50 dark:border-[#020617] shadow-[0_0_10px_rgba(99,102,241,0.6)] group-hover:scale-125 transition-transform duration-300"></div>
            <div className="glass-water p-8 rounded-2xl border border-gray-200 dark:border-white/5 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-2">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 group-hover:text-primary transition-colors">
                  Software Engineer
                </h3>
                <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 rounded-full">
                  Jun'2025 - Present
                </span>
              </div>
              <div className="text-lg font-semibold text-secondary mb-4 flex items-center gap-2">
                <i className="fas fa-building"></i> Sincos Automation Technologies Ltd.
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Currently developing an OEE (Overall Equipment Effectiveness) software system from scratch, with a primary focus on the frontend. Building a complete OEE dashboard and multiple reporting pages using Angular and Tailwind CSS, ensuring a responsive, scalable, and user-friendly experience for performance monitoring and analytics.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs font-semibold px-2 py-1 bg-gray-100 dark:bg-white/5 rounded text-gray-500 dark:text-gray-400">Angular</span>
                <span className="text-xs font-semibold px-2 py-1 bg-gray-100 dark:bg-white/5 rounded text-gray-500 dark:text-gray-400">Tailwind CSS</span>
                
              </div>
            </div>
          </div>

          {/* Experience Item 2 */}
          <div className="relative pl-8 md:pl-12 reveal group delay-100">
            <div className="absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-secondary border-4 border-gray-50 dark:border-[#020617] shadow-[0_0_10px_rgba(14,165,233,0.6)] group-hover:scale-125 transition-transform duration-300"></div>
            <div className="glass-water p-8 rounded-2xl border border-gray-200 dark:border-white/5 hover:border-secondary/30 transition-all duration-300 hover:-translate-y-1">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-2">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 group-hover:text-secondary transition-colors">
                  Jr. Software Engineer
                </h3>
                <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider text-secondary bg-secondary/10 rounded-full">
                  Jan'2024 - Jun'2025
                </span>
              </div>
              <div className="text-lg font-semibold text-secondary mb-4 flex items-center gap-2">
                <i className="fas fa-layer-group"></i> Sincos Automation Technologies Ltd.
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                As a Junior Software Engineer, I worked on diverse projects including WordPress website development, OEE (Overall Equipment Effectiveness) software design, and a voltage anomaly detection system. These experiences strengthened my ability to build practical solutions, collaborate with teams, and deliver reliable, high-quality software.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs font-semibold px-2 py-1 bg-gray-100 dark:bg-white/5 rounded text-gray-500 dark:text-gray-400">WordPress</span>
                <span className="text-xs font-semibold px-2 py-1 bg-gray-100 dark:bg-white/5 rounded text-gray-500 dark:text-gray-400">UI/UX Design</span>
                
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
