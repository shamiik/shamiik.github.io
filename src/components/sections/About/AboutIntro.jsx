
const AboutIntro = () => {
  return (
    <div className="grid md:grid-cols-2 gap-16 items-center">
      {/* LEFT: Image Placeholder */}
      <div className="relative reveal flex justify-center">
        <div className="relative w-full max-w-md aspect-square bg-white dark:bg-cardDark rounded-2xl flex items-center justify-center text-7xl text-gray-300 dark:text-gray-600 shadow-2xl z-10 overflow-hidden group hover:transform hover:-translate-y-2 transition-transform duration-500">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 z-20 pointer-events-none"></div>
          <img src="/assets/shamik.png" alt=" " className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105" />
        </div>
      </div>

      {/* RIGHT: Content */}
      <div className="space-y-8 reveal">
        <h3 className="text-2xl font-bold">
          Turning Curiosity into <span className="text-primary">Solutions</span>.
        </h3>

        <div className="space-y-4 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
          <p>
            Shamik Dey Deepto — I’m an energetic and geeky learner with an endless desire to explore new things and push beyond my limits. I love transforming complex ideas into practical, meaningful outcomes through continuous learning and hands-on building.
          </p>
          <p>
            I’m passionate about software engineering, with a strong focus on AI/ML and cyber & network security. I enjoy writing clean, scalable code, solving challenging problems, and developing intelligent systems that are fast, reliable, and security-aware.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
          <div className="gradient-border-card">
            <div className="card-content">
              <h4 className="text-4xl font-bold text-primary">02+</h4>
              <span className="text-xs text-gray-500 dark:text-gray-400 uppercase font-bold tracking-wider mt-1">Years</span>
            </div>
          </div>
          <div className="gradient-border-card">
            <div className="card-content">
              <h4 className="text-4xl font-bold text-secondary">20+</h4>
              <span className="text-xs text-gray-500 dark:text-gray-400 uppercase font-bold tracking-wider mt-1">Projects</span>
            </div>
          </div>
          {/* <div className="gradient-border-card">
            <div className="card-content">
              <h4 className="text-4xl font-bold text-purple-500">10+</h4>
              <span className="text-xs text-gray-500 dark:text-gray-400 uppercase font-bold tracking-wider mt-1">Clients</span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AboutIntro;
