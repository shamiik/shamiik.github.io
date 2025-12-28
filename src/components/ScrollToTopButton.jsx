import { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 group transition-all duration-500 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
        {/* Glowing Background Blob */}
        <div className="absolute inset-0 bg-primary/40 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Main Button Container */}
        <div className="relative w-8 h-8 md:w-10 md:h-10 bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-lg flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:-translate-y-1 overflow-hidden">
            
            {/* Gradient Border Overlay (Animated) */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-tr from-primary to-secondary mix-blend-overlay"></div>
            
            {/* Icon */}
            <i className="fas fa-arrow-up text-xs md:text-sm text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors duration-300 relative z-10"></i>
            
            {/* Shine Effect */}
            <div className="absolute -inset-full top-0 block h-full w-full -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
        </div>
    </button>
  );
};

export default ScrollToTopButton;
