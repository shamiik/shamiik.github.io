import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isDark, setIsDark] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDark]);

    const toggleTheme = () => setIsDark(!isDark);

    // FIXED NAVIGATION HANDLER
    const handleNavClick = (e, path) => {
        // 1. If it's a hash link (Experience, Projects, Contact)
        if (path.startsWith('#')) {
            e.preventDefault();
            const sectionId = path.substring(1);
            
            if (location.pathname === '/') {
                const element = document.getElementById(sectionId);
                if (element) {
                    setMenuOpen(false); // Close menu
                    setTimeout(() => {
                        element.scrollIntoView({ behavior: 'smooth' });
                    }, 300); // Wait for drawer to move out of the way
                }
            } else {
                setMenuOpen(false);
                navigate('/');
                setTimeout(() => {
                    const element = document.getElementById(sectionId);
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                }, 500);
            }
        } else {
            // 2. For regular routes (Home, About, Research)
            // Let the <Link> component handle the navigation, just close the menu
            setMenuOpen(false);
        }
    };

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Experience', path: '#experience' },
        { name: 'Projects', path: '#projects' },
        { name: 'Research', path: '/research' },
        { name: 'Contact', path: '#contact' },
    ];

    return (
        <nav className="fixed w-full z-50 top-4">
            <div className="container mx-auto px-4 md:px-6">
                <div className="glass-water rounded-2xl px-6 py-3 flex justify-between items-center max-w-6xl mx-auto shadow-lg border border-white/10">
                    
                    <Link to="/" className="text-xl font-bold flex items-center gap-2" onClick={() => {setMenuOpen(false); window.scrollTo(0,0)}}>
                        <i className="fas fa-code text-primary"></i>
                        <span className="text-gray-800 dark:text-gray-100">Shamik <span className="text-primary">Deepto</span></span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-2">
                        {navLinks.map((link, index) => (
                            <Link 
                                key={index} 
                                to={link.path} 
                                onClick={(e) => handleNavClick(e, link.path)}
                                className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <button onClick={toggleTheme} className="ml-4 p-2 text-gray-600 dark:text-gray-300">
                            <i className={`fas ${isDark ? 'fa-sun' : 'fa-moon'}`}></i>
                        </button>
                    </div>

                    {/* Mobile Menu Trigger */}
                    <div className="md:hidden flex items-center gap-3">
                        <button onClick={toggleTheme} className="p-2 text-gray-600 dark:text-gray-300">
                            <i className={`fas ${isDark ? 'fa-sun' : 'fa-moon'}`}></i>
                        </button>
                        <button onClick={() => setMenuOpen(true)} className="p-2 text-gray-700 dark:text-gray-200">
                            <i className="fas fa-bars text-xl"></i>
                        </button>
                    </div>
                </div>
            </div>

            {/* Backdrop: Only closes when clicking OUTSIDE the drawer */}
            {menuOpen && (
                <div 
                    className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm transition-opacity"
                    onClick={() => setMenuOpen(false)}
                />
            )}
            
            {/* Mobile Drawer */}
            <div 
                className={`fixed top-0 right-0 h-full w-[280px] bg-white dark:bg-slate-900 z-[70] shadow-2xl transition-transform duration-300 ease-in-out transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                // IMPORTANT: Stop propagation so clicks inside don't trigger the backdrop's onClick
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-800">
                    <span className="font-bold dark:text-white">Menu</span>
                    <button onClick={() => setMenuOpen(false)} className="p-2"><i className="fas fa-times text-xl dark:text-white"></i></button>
                </div>
                
                <nav className="flex flex-col p-4">
                    {navLinks.map((link, index) => (
                        <Link
                            key={index}
                            to={link.path}
                            onClick={(e) => handleNavClick(e, link.path)}
                            className="w-full text-left px-6 py-4 rounded-xl text-gray-700 dark:text-gray-300 font-medium active:bg-gray-100 dark:active:bg-gray-800"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </div>
        </nav>
    );
};

export default Navbar;