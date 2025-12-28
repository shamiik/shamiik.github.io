
const Contact = () => {
  const socialLinks = [
    { name: 'Email', icon: 'fas fa-envelope', url: 'mailto:shamikdey7@gmail.com', color: 'hover:text-red-500', groupColor: 'hover:bg-red-500/10 hover:border-red-500/50' },
    { name: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/shamiik', color: 'hover:text-[#333] dark:hover:text-white', groupColor: 'hover:bg-[#333]/10 hover:border-[#333]/50' },
    { name: 'LinkedIn', icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/shamikdey/', color: 'hover:text-[#0077b5]', groupColor: 'hover:bg-[#0077b5]/10 hover:border-[#0077b5]/50' },
    { name: 'X', icon: 'fab fa-x-twitter', url: 'https://x.com/shamikdeepto', color: 'hover:text-[#000] dark:hover:text-white', groupColor: 'hover:bg-[#000]/10 hover:border-[#000]/50' },
    { name: 'Google Scholar', icon: 'fas fa-graduation-cap', url: 'https://scholar.google.com/citations?user=A8TmS5oAAAAJ&hl=en', color: 'hover:text-[#4285f4]', groupColor: 'hover:bg-[#4285f4]/10 hover:border-[#4285f4]/50' },
  ];

  return (
    <section id="contact" className="py-24 relative z-10 bg-white/50 dark:bg-transparent">
        <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 reveal">
                Get in <span className="text-primary">Touch</span>
            </h2>
            
            <p className="text-gray-600 dark:text-gray-400 mb-12 max-w-xl mx-auto reveal leading-relaxed">
              I’m always interested in discussing research opportunities, collaborations, new projects, creative ideas, or AI-related topics. Feel free to reach out to me through any of the channels below.
            </p>

            <div className="flex flex-wrap justify-center gap-6 reveal delay-100">
                {socialLinks.map((link, index) => (
                    <a 
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-14 h-14 rounded-2xl glass-water flex items-center justify-center text-xl text-gray-500 dark:text-gray-400 transition-all duration-300 group hover:-translate-y-2 ${link.groupColor}`}
                        title={link.name}
                    >
                        <i className={`${link.icon} ${link.color} transition-colors`}></i>
                    </a>
                ))}
            </div>
            
             <div className="mt-12 text-sm text-gray-500 dark:text-gray-600 reveal delay-200 flex items-center justify-center gap-2">
                <i className="fas fa-map-marker-alt"></i> Dhaka, Bangladesh
            </div>
        </div>
    </section>
  );
};

export default Contact;
