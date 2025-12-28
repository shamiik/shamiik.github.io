
const Awards = () => {
  return (
    <div id="awards" className="py-12 relative z-10">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 reveal">
          Honors & <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Awards</span>
        </h2>

        <div className="space-y-4 reveal">
           {/* Minimalist Award Card */}
           <div className="group block p-6 rounded-xl border border-gray-200 dark:border-white/5 bg-white/50 dark:bg-white/5 hover:bg-white/80 dark:hover:bg-white/10 hover:border-yellow-500/30 transition-all duration-300">
              <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                 {/* Icon Box */}
                 <div className="shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-yellow-400/20 to-orange-500/20 text-yellow-600 dark:text-yellow-400 flex items-center justify-center text-2xl group-hover:scale-105 transition-transform duration-300">
                    <i className="fas fa-trophy"></i>
                 </div>

                 {/* Content */}
                 <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2 mb-1">
                        <span className="px-2 py-0.5 text-xs font-bold uppercase tracking-wider text-yellow-700 dark:text-yellow-300 bg-yellow-400/20 rounded">
                            Champion
                        </span>
                        {/* <span className="text-sm text-gray-500">2023</span> */}
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
                        Undergrad Thesis Contest
                    </h3>
                    
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                        IEEE Student Led Conference, IEEE Bangladesh Section
                    </p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
