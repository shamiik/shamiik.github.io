import AboutIntro from './About/AboutIntro';
import Skills from './About/Skills';
import Education from './About/Education';
import Activities from './About/Activities';
import Awards from './About/Awards';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative z-10 bg-white/50 dark:bg-transparent">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16 reveal">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Me</span>
        </h2>
        
        <AboutIntro />
        
        {/* Logical grouping as requested: Skills + Education + Activities + Awards */}
        <div className="mt-16 space-y-12">
            <Skills />
            <Education />
            <Activities />
            <Awards />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
