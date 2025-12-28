const publicationsData = [
  {
    title: "Leakage-Safe Multi-View Graph Construction for Robust Intrusion Detection in Edge-IIoT Networks",
    authors: "Shamik Dey, Adnan Quaium",
    venue: "Proceedings of the 12th International Conference on Next Generation",
    year: "2025",
    type: "Conference",
    link: "https://doi.org/10.1145/3777555.3777572"
  },
  {
    title: "A Modified VGG19-Based Framework for Accurate and Interpretable Real-Time Bone Fracture Detection",
    authors: "ME Haque, A Fahim, Shamik Dey, SA Jahan, SM Islam, S Rokoni, MS Morshed",
    venue: "arXiv preprint arXiv:2508.03739",
    year: "2025",
    type: "Preprint",
    link: "#",
    citations: 3
  },
  {
    title: "Optimized Approaches to Malware Detection: A Study of Machine Learning and Deep Learning Techniques",
    authors: "A Fahim, Shamik Dey, MN Absur, MK Siam, MT Huque, JJ Godhuli",
    venue: "2025 IEEE 14th International Conference on Communication Systems and Network",
    year: "2025",
    type: "IEEE",
    link: "#",
    citations: 2
  },
  {
    title: "Exploring the Potential of Machine Learning for EV Energy Demand Forecasting in Bangladesh",
    authors: "H Tabassum, MF Amin, MNI Jony, FMM Haque, Shamik Dey, Adnan Quaium",
    venue: "2025 International Conference on Electrical, Computer and Communication",
    year: "2025",
    type: "Conference",
    link: "#"
  },
  {
    title: "Improving Urban Mobility in Dhaka: Machine Learning-Based Traffic Prediction",
    authors: "SM Mozumder, TA Nishat, BH Bhuiyan, MR Khan, Shamik Dey, Adnan Quaium",
    venue: "2025 International Conference on Electrical, Computer and Communication",
    year: "2025",
    type: "Conference",
    link: "#"
  },
  {
    title: "Short Paper: Predicting and Analyzing EV Energy Consumption in Bangladesh: A Machine Learning Approach",
    authors: "FMM Haque, H Tabassum, MF Amin, MNI Jony, Shamik Dey, Adnan Quaium",
    venue: "Proceedings of the 11th International Conference on Networking, Systems, and",
    year: "2024",
    type: "Conference",
    link: "#"
  }
];

const Research = () => {
  return (
    <section id="publications" className="py-24 relative z-10 bg-white/50 dark:bg-transparent">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-16 reveal">
          Research & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Publications</span>
        </h2>

        <div className="space-y-4">
          {publicationsData.map((pub, index) => (
            <a 
              key={index} 
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`block p-6 rounded-xl border border-transparent hover:border-primary/20 hover:bg-white/40 dark:hover:bg-white/5 transition-all duration-300 group reveal ${index > 0 ? `delay-${Math.min(index * 100, 500)}` : ''}`}
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-3 text-xs">
                    <span className={`px-2 py-0.5 font-bold uppercase tracking-wider rounded text-white ${pub.type === 'IEEE' ? 'bg-blue-600' : pub.type === 'Preprint' ? 'bg-green-600' : 'bg-primary'}`}>
                      {pub.type}
                    </span>
                    <span className="text-gray-500 font-mono">{pub.year}</span>
                    {pub.citations > 0 && (
                        <span className="text-gray-400 flex items-center gap-1">
                            <i className="fas fa-quote-right"></i> {pub.citations}
                        </span>
                    )}
                  </div>
                  
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-100 group-hover:text-primary transition-colors leading-tight">
                    {pub.title}
                  </h3>
                  
                  <div className="flex flex-col gap-1">
                    <p className="text-sm text-gray-500 dark:text-gray-400 italic line-clamp-1">
                        {pub.venue}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                        {pub.authors.split('Shamik Dey').map((part, i, arr) => (
                            <span key={i}>
                                {part}
                                {i < arr.length - 1 && <span className="font-bold text-gray-900 dark:text-white">Shamik Dey</span>}
                            </span>
                        ))}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 text-gray-300 group-hover:text-primary transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1">
                    <i className="fas fa-arrow-up-right-from-square text-xl"></i>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
