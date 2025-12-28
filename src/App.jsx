import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Background from './components/Background';
import CustomCursor from './components/CustomCursor';
import ScrollToTopButton from './components/ScrollToTopButton';
import useScrollReveal from './hooks/useScrollReveal';

// Pages
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ResearchPage from './pages/ResearchPage';

// Scroll To Top Component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    // Only scroll to top if not Hash navigation
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);
  return null;
};

function AppContent() {
  // Initialize Scroll Reveal Logic (Runs on route change or mount)
  // We might need to re-trigger it on location change
  const location = useLocation();
  useScrollReveal(); 

  useEffect(() => {
    // ==========================================
    // SECURITY (Disable Right Click & DevTools)
    // ==========================================
    const handleContextMenu = (e) => e.preventDefault();
    const handleKeyDown = (e) => {
      if (e.key === 'F12') e.preventDefault();
      if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) e.preventDefault();
      if (e.ctrlKey && (e.key === 'u' || e.key === 'U')) e.preventDefault();
    };
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Re-run scroll reveal on route change (hacky but effective for this scale)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => { 
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });
    
    // Tiny delay to ensure DOM is ready
    setTimeout(() => {
        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }, 100);

    return () => observer.disconnect();
  }, [location.pathname]);


  return (
    <div className="bg-gray-50 text-gray-800 dark:bg-dark dark:text-gray-100 transition-colors duration-300 relative overflow-x-hidden selection:bg-primary selection:text-white min-h-screen flex flex-col">
      <ScrollToTop />
      
      {/* Background & Cursor */}
      <CustomCursor />
      <ScrollToTopButton />
      <Background />
      
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/research" element={<ResearchPage />} />
        </Routes>
      </main>

      {/* Footer (Copyright) - Contact is now inside Pages */}
      <Footer />
      
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
