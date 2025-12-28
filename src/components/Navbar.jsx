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
        window.addEventListener('scroll', handleScroll);
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

    // Optimized Navigation Logic
    const handleNavClick = (path) => {
        setMenuOpen(false);

        if (path.startsWith('#')) {
            const sectionId = path.substring(1);
            if (location.pathname === '/') {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                navigate('/');
                // Small delay to allow page transition before scrolling
                setTimeout(() => {
                    const element = document.getElementById(sectionId);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 300); 
            }
        } else {
            navigate(path);
            window.scrollTo(0, 0);
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
        <nav className={`fixed w-full z-50 top-4 transition-all duration-300`} id="navbar">
            <div className="container mx-auto px-4 md:px-6">
                <div className="glass-water rounded-2xl px-6 py-3 flex justify-between items-center max-w-6xl mx-auto shadow-lg">
                    
                    <Link to="/" className="text-xl font-heading font-bold tracking-tighter flex items-center gap-2" onClick={() => {setMenuOpen(false); window.scrollTo(0,0)}}>
                        <i className="fas fa-code text-primary text-xl"></i>
                        <span className="text-gray-800 dark:text-gray-100">Shamik <span className="text-primary">Deepto</span></span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-2">
                        <ul className="flex items-center gap-1 font-medium text-sm">
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <button
                                        onClick={() => handleNavClick(link.path)}
                                        className="nav-pill text-gray-600 dark:text-gray-300 px-4 py-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-all"
                                    >
                                        {link.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <div className="w-px h-6 bg-gray-300 dark:bg-gray-700 mx-4"></div>
                        <button onClick={toggleTheme} className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-200 dark:hover:bg-white/10 text-gray-600 dark:text-gray-300">
                            <i className={`fas ${isDark ? 'fa-sun' : 'fa-moon'}`}></i>
                        </button>
                    </div>

                    {/* Mobile Buttons - Removed onTouchEnd to prevent conflicts */}
                    <div className="md:hidden flex items-center gap-3">
                        <button 
                            onClick={toggleTheme}
                            className="w-10 h-10 flex items-center justify-center rounded-full active:bg-gray-200 dark:active:bg-white/10 text-gray-600 dark:text-gray-300 tap-highlight-transparent"
                        >
                            <i className={`fas ${isDark ? 'fa-sun' : 'fa-moon'}`}></i>
                        </button>
                        <button 
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="w-10 h-10 flex items-center justify-center text-xl text-gray-700 dark:text-gray-200 active:scale-95 transition-transform tap-highlight-transparent"
                        >
                            <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Drawer */}
            <div 
                className={`fixed inset-0 bg-black/60 z-40 md:hidden transition-opacity duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setMenuOpen(false)}
            />
            
            <div 
                className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white dark:bg-slate-900 z-50 md:hidden shadow-2xl transition-transform duration-300 ease-in-out transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                style={{ WebkitOverflowScrolling: 'touch' }}
            >
                <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-800">
                    <div className="flex items-center gap-2">
                        <i className="fas fa-code text-primary text-xl"></i>
                        <span className="text-lg font-bold dark:text-white">Menu</span>
                    </div>
                    <button onClick={() => setMenuOpen(false)} className="p-2 text-gray-500"><i className="fas fa-times text-xl"></i></button>
                </div>
                
                <nav className="flex flex-col p-4 gap-1">
                    {navLinks.map((link, index) => (
                        <button
                            key={index}
                            onClick={() => handleNavClick(link.path)}
                            className="w-full text-left px-6 py-4 rounded-xl text-gray-700 dark:text-gray-300 font-medium active:bg-primary/10 active:text-primary transition-colors tap-highlight-transparent"
                        >
                            {link.name}
                        </button>
                    ))}
                </nav>
                
                <div className="absolute bottom-8 left-0 right-0 px-6">
                    <button 
                        onClick={toggleTheme}
                        className="w-full py-4 rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center gap-3 text-gray-700 dark:text-gray-300 font-bold active:scale-95 transition-transform"
                    >
                        <i className={`fas ${isDark ? 'fa-sun' : 'fa-moon'}`}></i>
                        {isDark ? 'Switch to Light' : 'Switch to Dark'}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;