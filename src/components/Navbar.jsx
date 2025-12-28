import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isDark, setIsDark] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle Theme Toggle
    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDark]);

    const toggleTheme = () => setIsDark(!isDark);

    // Navigation Handler
    const handleNavClick = (e, path) => {
        e.preventDefault();
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
                setTimeout(() => {
                    const element = document.getElementById(sectionId);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 100);
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
        <nav className={`fixed w-full z-50 top-4 transition-all duration-300 ${scrolled ? '' : ''}`} id="navbar">
            <div className="container mx-auto px-4 md:px-6">
                {/* The Glass Container */}
                <div className="glass-water rounded-2xl px-6 py-3 flex justify-between items-center max-w-6xl mx-auto">
                    
                    {/* Logo */}
                    <Link to="/" className="text-xl font-heading font-bold tracking-tighter hover:text-primary transition-colors flex items-center gap-2 group" onClick={() => window.scrollTo(0,0)}>
                        <i className="fas fa-code text-primary text-xl animate-pulse"></i>
                        <span className="text-gray-800 dark:text-gray-100">Shamik <span className="text-primary">Deepto</span></span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-2">
                        <ul className="flex items-center gap-1 font-medium text-sm">
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.path}
                                        onClick={(e) => handleNavClick(e, link.path)}
                                        className="nav-pill text-gray-600 dark:text-gray-300 cursor-pointer block"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        
                        {/* Divider */}
                        <div className="w-px h-6 bg-gray-300 dark:bg-gray-700 mx-4"></div>

                        {/* Theme Toggle */}
                        <button 
                            onClick={toggleTheme}
                             className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-colors text-gray-600 dark:text-gray-300"
                        >
                            <i className={`fas ${isDark ? 'fa-sun' : 'fa-moon'}`}></i>
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-3">
                        <button 
                            onClick={toggleTheme}
                            onTouchEnd={(e) => {
                                e.preventDefault();
                                toggleTheme();
                            }}
                            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-colors text-gray-600 dark:text-gray-300"
                            style={{ touchAction: 'manipulation' }}
                        >
                            <i className={`fas ${isDark ? 'fa-sun' : 'fa-moon'}`}></i>
                        </button>
                        <button 
                            onClick={() => setMenuOpen(!menuOpen)}
                            onTouchEnd={(e) => {
                                e.preventDefault();
                                setMenuOpen(!menuOpen);
                            }}
                            className="text-xl text-gray-700 dark:text-gray-200 focus:outline-none"
                            style={{ touchAction: 'manipulation' }}
                        >
                            <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Drawer - Simplified for iOS Performance */}
            <>
                {/* Backdrop */}
                {menuOpen && (
                    <div 
                        className="fixed inset-0 bg-black/60 z-40 md:hidden"
                        onTouchStart={(e) => {
                            e.stopPropagation();
                            setMenuOpen(false);
                        }}
                        onClick={() => setMenuOpen(false)}
                    />
                )}
                
                {/* Drawer */}
                <div 
                    className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white dark:bg-dark z-50 md:hidden shadow-2xl"
                    style={{
                        transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
                        transition: 'transform 0.2s ease-out',
                        WebkitTransform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
                        WebkitTransition: 'transform 0.2s ease-out'
                    }}
                >
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
                        <div className="flex items-center gap-2">
                            <i className="fas fa-code text-primary text-xl"></i>
                            <span className="text-lg font-heading font-bold text-gray-800 dark:text-gray-100">
                                Menu
                            </span>
                        </div>
                        <button 
                            onTouchStart={(e) => {
                                e.stopPropagation();
                                setMenuOpen(false);
                            }}
                            onClick={() => setMenuOpen(false)}
                            className="w-10 h-10 flex items-center justify-center rounded-full text-gray-600 dark:text-gray-300"
                        >
                            <i className="fas fa-times text-xl"></i>
                        </button>
                    </div>
                    
                    {/* Navigation Links */}
                    <nav className="flex flex-col p-6 gap-2">
                        {navLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.path}
                                onTouchStart={(e) => {
                                    e.stopPropagation();
                                    e.currentTarget.style.backgroundColor = 'rgba(99, 102, 241, 0.1)';
                                }}
                                onTouchEnd={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    e.currentTarget.style.backgroundColor = '';
                                    handleNavClick(e, link.path);
                                }}
                                onClick={(e) => handleNavClick(e, link.path)}
                                className="px-4 py-3 rounded-xl text-gray-700 dark:text-gray-300 font-medium flex items-center gap-3"
                            >
                                <span className="w-1 h-6 bg-primary rounded-full opacity-0"></span>
                                {link.name}
                            </a>
                        ))}
                    </nav>
                    
                    {/* Footer with Theme Toggle */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 dark:border-gray-800">
                        <button 
                            onTouchStart={(e) => {
                                e.stopPropagation();
                                toggleTheme();
                            }}
                            onClick={toggleTheme}
                            className="w-full px-4 py-3 rounded-xl glass-water flex items-center justify-center gap-3 text-gray-700 dark:text-gray-300 font-medium"
                        >
                            <i className={`fas ${isDark ? 'fa-sun' : 'fa-moon'} text-lg`}></i>
                            {isDark ? 'Light Mode' : 'Dark Mode'}
                        </button>
                    </div>
                </div>
            </>
        </nav>
    );
};

export default Navbar;
