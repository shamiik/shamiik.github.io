
const Activities = () => {
  const excomRoles = [
    {
      role: "Treasurer",
      org: "IEEE AUST Student Branch",
      date: "Feb 2023 - Jan 2024",
      icon: "fa-file-invoice-dollar",
      color: "text-green-600 dark:text-green-400",
      bg: "bg-green-500/10"
    },
    {
      role: "Assistant Webmaster",
      org: "IEEE AUST Student Branch",
      date: "Mar 2022 - Feb 2023",
      icon: "fa-laptop-code",
      color: "text-teal-600 dark:text-teal-400",
      bg: "bg-teal-500/10"
    },
    {
      role: "Future Champ",
      org: "IEEE AUST Student Branch",
      date: "Nov 2021 - Mar 2022",
      icon: "fa-star",
      color: "text-blue-600 dark:text-blue-400",
      bg: "bg-blue-500/10"
    }
  ];

  const volunteering = [
    {
      role: "Host & Anchor (ICCIT 2023)",
      org: "IEEE Bangladesh Section",
      date: "Dec 13 - 15, 2023",
      icon: "fa-microphone",
      color: "text-primary",
      bg: "bg-primary/10",
      desc: "26th Intl Conference on Computer and Information Technology."
    },
    {
      role: "Online Host (WIECON ECE)",
      org: "IEEE Kerala & Bangladesh Section",
      date: "Nov 25, 2023",
      icon: "fa-broadcast-tower",
      color: "text-purple-600 dark:text-purple-400",
      bg: "bg-purple-500/10",
      desc: "9th IEEE Intl Women in Engineering Conference."
    },
    {
      role: "Volunteer contributor",
      org: "Prolific Tech Solution",
      date: "Nov 2020 - Mar 2021",
      icon: "fa-hand-holding-heart",
      color: "text-orange-600 dark:text-orange-400",
      bg: "bg-orange-500/10"
    }
  ];

  return (
    <div id="activities" className="py-12 relative z-10">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-16 reveal">
          Beyond <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-500">Coding</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Group 1: Leadership & Roles */}
          <div className="space-y-6 reveal">
            <h3 className="text-xl font-bold flex items-center gap-3 text-gray-800 dark:text-gray-100 mb-6">
                <i className="fas fa-id-badge text-primary"></i>
                Leadership & Technical Roles
            </h3>
            <div className="space-y-4">
              {excomRoles.map((item, idx) => (
                <div key={idx} className="glass-water p-5 rounded-2xl flex items-center gap-5 hover:bg-white/40 dark:hover:bg-white/5 transition-all duration-300 group min-h-[100px] md:min-h-[115px]">
                  <div className={`shrink-0 w-12 h-12 ${item.bg} ${item.color} rounded-xl flex items-center justify-center text-xl group-hover:scale-110 transition-transform`}>
                    <i className={`fas ${item.icon}`}></i>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start gap-2 mb-1">
                        <div>
                            <h4 className="font-bold text-gray-800 dark:text-gray-100 leading-tight text-sm md:text-base">{item.role}</h4>
                            <p className={`text-[10px] font-bold ${item.color} mb-1 uppercase tracking-tight`}>{item.org}</p>
                        </div>
                        <span className="shrink-0 text-[9px] font-bold text-gray-500 bg-gray-100 dark:bg-white/5 px-2 py-0.5 rounded-full uppercase">
                            {item.date}
                        </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Group 2: Volunteering */}
          <div className="space-y-6 reveal delay-200">
            <h3 className="text-xl font-bold flex items-center gap-3 text-gray-800 dark:text-gray-100 mb-6">
                <i className="fas fa-hand-holding-heart text-primary"></i>
                Volunteering & Activities
            </h3>
            <div className="space-y-4">
              {volunteering.map((item, idx) => (
                <div key={idx} className="glass-water p-5 rounded-2xl flex items-center gap-5 hover:bg-white/40 dark:hover:bg-white/5 transition-all duration-300 group min-h-[100px] md:min-h-[115px]">
                  <div className={`shrink-0 w-12 h-12 ${item.bg} ${item.color} rounded-xl flex items-center justify-center text-xl group-hover:scale-110 transition-transform`}>
                    <i className={`fas ${item.icon}`}></i>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start gap-2 mb-1">
                        <div>
                            <h4 className="font-bold text-gray-800 dark:text-gray-100 leading-tight text-sm md:text-base">{item.role}</h4>
                            <p className={`text-[10px] font-bold ${item.color} mb-1 uppercase tracking-tight`}>{item.org}</p>
                        </div>
                        <span className="shrink-0 text-[9px] font-bold text-gray-500 bg-gray-100 dark:bg-white/5 px-2 py-0.5 rounded-full uppercase">
                            {item.date}
                        </span>
                    </div>
                    {item.desc && <p className="text-[10px] md:text-[11px] text-gray-500 dark:text-gray-400 leading-tight mt-1 line-clamp-2">{item.desc}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Activities;
