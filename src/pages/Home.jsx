import Hero from '../components/Hero';
import AboutIntro from '../components/sections/About/AboutIntro';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div className="pt-16"> {/* Add padding-top to account for fixed navbar */}
      <Hero />
      <section className="py-24 container mx-auto px-6 max-w-5xl">
         <AboutIntro />
      </section>
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
