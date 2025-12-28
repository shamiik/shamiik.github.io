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

    const handleNavClick = (path) => {
        setMenuOpen(false);
        if (path.startsWith('#')) {
            const sectionId = path.substring(1);
            if (location.pathname === '/') {
                document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
            } else {
                navigate('/');
                setTimeout(() => {
                    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
                }, 400);
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
        <>
            {/* 1. TOP NAVBAR BAR */}
            <nav className={`fixed w-full z-[100] top-4 px-4 md:px-6 transition-all`}>
                <div className="glass-water rounded-2xl px-6 py-3 flex justify-between items-center max-w-6xl mx-auto shadow-lg border border-white/10">
                    <Link to="/" className="text-xl font-bold flex items-center gap-2" onClick={() => {setMenuOpen(false); window.scrollTo(0,0)}}>
                        <i className="fas fa-code text-primary"></i>
                        <span className="text-gray-800 dark:text-gray-100">Shamik <span className="text-primary">Deepto</span></span>
                    </Link>

                    {/* Desktop */}
                    <div className="hidden md:flex items-center gap-2">
                        {navLinks.map((link, index) => (
                            <button key={index} onClick={() => handleNavClick(link.path)} className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300">
                                {link.name}
                            </button>
                        ))}
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden flex items-center gap-3">
                        <button onClick={() => setIsDark(!isDark)} className="p-2 text-gray-600 dark:text-gray-300">
                            <i className={`fas ${isDark ? 'fa-sun' : 'fa-moon'}`}></i>
                        </button>
                        <button 
                            onClick={() => setMenuOpen(true)} 
                            className="p-2 text-gray-700 dark:text-gray-200"
                            style={{ cursor: 'pointer', WebkitTapHighlightColor: 'transparent' }}
                        >
                            <i className="fas fa-bars text-xl"></i>
                        </button>
                    </div>
                </div>
            </nav>

            {/* 2. MOBILE DRAWER - Moved outside <nav> for hit-testing stability */}
            <div 
                className={`fixed inset-0 z-[110] md:hidden transition-all duration-300 ${menuOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}
            >
                {/* Backdrop */}
                <div 
                    className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                    onClick={() => setMenuOpen(false)}
                />
                
                {/* Drawer Content */}
                <div 
                    className={`absolute top-0 right-0 h-full w-[280px] bg-white dark:bg-slate-900 shadow-2xl transition-transform duration-300 ease-out`}
                    style={{ 
                        transform: menuOpen ? 'translate3d(0, 0, 0)' : 'translate3d(100%, 0, 0)',
                        WebkitTransform: menuOpen ? 'translate3d(0, 0, 0)' : 'translate3d(100%, 0, 0)'
                    }}
                >
                    <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-800">
                        <span className="font-bold dark:text-white">Menu</span>
                        <button onClick={() => setMenuOpen(false)} className="p-2"><i className="fas fa-times text-xl dark:text-white"></i></button>
                    </div>
                    
                    <nav className="flex flex-col p-4 overflow-y-auto">
                        {navLinks.map((link, index) => (
                            <button
                                key={index}
                                onClick={() => handleNavClick(link.path)}
                                className="w-full text-left px-6 py-4 rounded-xl text-gray-700 dark:text-gray-300 font-semibold active:bg-primary/10"
                                style={{ cursor: 'pointer', touchAction: 'manipulation' }}
                            >
                                {link.name}
                            </button>
                        ))}
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Navbar;