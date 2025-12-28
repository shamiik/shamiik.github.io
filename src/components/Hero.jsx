import { useEffect, useState } from 'react';

const Hero = () => {
  const [text, setText] = useState('');
  const roles = ["Software Engineer", "Researcher", "Tech Savvy"];
  
  useEffect(() => {
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timer;

    const type = () => {
      const currentRole = roles[roleIndex];
      
      if (isDeleting) {
        setText(currentRole.substring(0, charIndex - 1));
        charIndex--;
      } else {
        setText(currentRole.substring(0, charIndex + 1));
        charIndex++;
      }

      let speed = isDeleting ? 50 : 100;

      if (!isDeleting && charIndex === currentRole.length) {
        speed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 500;
      }

      timer = setTimeout(type, speed);
    };

    type();

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-24 md:pt-0 relative z-10 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT: Text */}
          <div className="text-center md:text-left space-y-8 order-2 md:order-1 relative z-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full border border-primary/20 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Available for Work
            </div>

            <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight animate-fade-in-up delay-100">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Shamik Deepto</span>
            </h1>

            <div className="text-2xl md:text-3xl font-light text-gray-500 dark:text-gray-400 h-10 flex justify-center md:justify-start items-center gap-2 animate-fade-in-up delay-200">
              <span>{text}</span><span className="w-1 h-8 bg-primary animate-pulse"></span>
            </div>

            <p className="max-w-lg mx-auto md:mx-0 text-lg text-gray-600 dark:text-gray-400 animate-fade-in-up delay-300 leading-relaxed">
              AI/ML • Cyber & Network Security • Data Science
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 animate-fade-in-up delay-400">
              <a href="#projects" className="px-8 py-3.5 rounded-full bg-primary text-white font-semibold hover:bg-indigo-600 hover:shadow-lg hover:shadow-primary/40 transition-all transform hover:-translate-y-1">
                View Projects
              </a>

              <a href="assets/cv.pdf" download className="glass-water px-8 py-3.5 rounded-full text-gray-700 dark:text-gray-200 font-medium hover:text-primary dark:hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all flex items-center gap-2 group transform hover:-translate-y-1">
                Download CV
                <i className="fas fa-arrow-down group-hover:translate-y-1 transition-transform text-xs opacity-70"></i>
              </a>
            </div>

            <div className="flex justify-center md:justify-start gap-5 pt-4 animate-fade-in-up delay-500">
              <a href="https://github.com/shamiik" target="_blank" rel="noopener noreferrer" className="glass-water social-glass github group">
                <i className="fab fa-github transition-transform group-hover:scale-110"></i>
              </a>
              <a href="https://www.linkedin.com/in/shamikdey/" target="_blank" rel="noopener noreferrer" className="glass-water social-glass linkedin group">
                <i className="fab fa-linkedin-in transition-transform group-hover:scale-110"></i>
              </a>
              <a href="https://x.com/shamikdeepto" target="_blank" rel="noopener noreferrer" className="glass-water social-glass twitter group">
                <i className="fab fa-x-twitter transition-transform group-hover:scale-110"></i>
              </a>
              <a href="mailto:shamikdey7@gmail.com" className="glass-water social-glass email group">
                <i className="fas fa-envelope transition-transform group-hover:scale-110"></i>
              </a>
            </div>
          </div>

          {/* RIGHT: Redesigned Organic Outline Orbit */}
          <div className="relative flex justify-center items-center order-1 md:order-2 h-[450px] animate-fade-in-up delay-200">
            <div className="orbit-container relative w-[350px] h-[350px] md:w-[450px] md:h-[450px] flex justify-center items-center">
              
              {/* --- NEW STYLE: ORGANIC GLOWING OUTLINES --- */}
              {/* Outer Miscellaneous Outlines */}
              <div className="absolute w-full h-full outline-blob opacity-40" style={{ animationDuration: '12s' }}></div>
              <div className="absolute w-[90%] h-[90%] outline-blob outline-blob-secondary opacity-30" style={{ animationDuration: '18s', animationDirection: 'reverse', rotate: '45deg' }}></div>
              <div className="absolute w-[110%] h-[110%] outline-blob opacity-10" style={{ animationDuration: '25s', rotate: '-30deg' }}></div>

              {/* Inner Organic Shapes (Around Profile) */}
              <div className="absolute w-64 h-64 outline-blob border-primary/40 opacity-50" style={{ animationDuration: '8s', rotate: '15deg' }}></div>
              <div className="absolute w-72 h-72 outline-blob outline-blob-secondary opacity-20" style={{ animationDuration: '14s', animationDirection: 'reverse' }}></div>

              {/* Central Glow (Very Soft) */}
              <div className="absolute w-64 h-64 bg-primary/5 rounded-full blur-[100px]"></div>

              {/* Floating Tech Icons On Miscellaneous Organic Paths */}
              
              {/* ICON 1: JAVASCRIPT (CHANGE ICON HERE) */}
              <div className="absolute animate-orbit-1">
                <div className="w-10 h-10 bg-white/5 dark:bg-cardDark/40 backdrop-blur-md rounded-xl shadow-lg flex items-center justify-center border border-primary/10 hover:scale-125 transition-transform group cursor-pointer overflow-hidden">
                  <div className="absolute inset-0 bg-yellow-500/5 group-hover:bg-yellow-500/20 transition-colors"></div>
                  <i className="fab fa-js text-yellow-500 relative z-10 group-hover:animate-pulse"></i>
                </div>
              </div>

              {/* ICON 2: PYTHON (CHANGE ICON HERE) */}
              <div className="absolute animate-orbit-2">
                <div className="w-10 h-10 bg-white/5 dark:bg-cardDark/40 backdrop-blur-md rounded-xl shadow-lg flex items-center justify-center border border-primary/10 hover:scale-125 transition-transform group cursor-pointer overflow-hidden">
                  <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/20 transition-colors"></div>
                  <i className="fab fa-python text-primary relative z-10"></i>
                </div>
              </div>

              {/* ICON 3: BRAIN/AI (CHANGE ICON HERE) */}
              <div className="absolute animate-orbit-3">
                <div className="w-10 h-10 bg-white/5 dark:bg-cardDark/40 backdrop-blur-md rounded-xl shadow-lg flex items-center justify-center border border-primary/10 hover:scale-125 transition-transform group cursor-pointer overflow-hidden">
                  <div className="absolute inset-0 bg-purple-500/5 group-hover:bg-purple-500/20 transition-colors"></div>
                  <i className="fas fa-brain text-purple-500 relative z-10"></i>
                </div>
              </div>

              {/* Profile Image with Inner Glow */}
              <div className="relative z-10 w-48 h-48 md:w-56 md:h-56 p-1.5 flex items-center justify-center transition-all duration-700">
                  {/* Organic Frame for Image */}
                  <div className="absolute inset-0 outline-blob border-primary/30 animate-pulse"></div>
                  <div className="w-full h-full profile-blob overflow-hidden border-2 border-white/10 shadow-2xl">
                    <img 
                      src="/assets/shamik.jpeg" 
                      alt="Profile" 
                      className="w-full h-full object-cover object-[55%_20%] hover:scale-110 transition-transform duration-700" 
                    />
                  </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
