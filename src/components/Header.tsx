import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);

    // Close menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Accueil', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header className="sticky top-0 z-50 bg-transparent shadow-sm border-b border-transparent transition-all duration-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2">
                        <img src="/logo.png" alt="Serrurier Toulouse Logo" className="h-12 w-auto" />
                        <div className="flex flex-col">
                            <span className="text-xl font-bold font-sans tracking-tight text-white leading-none">Serrurier</span>
                            <span className="text-xs font-bold text-primary tracking-widest uppercase leading-none">Toulouse</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8 items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`text-sm font-semibold uppercase tracking-wide transition-colors duration-300 hover:text-primary ${location.pathname === link.path ? 'text-primary' : 'text-white'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a
                            href="tel:+33671876080"
                            className="bg-primary text-white px-5 py-2.5 rounded-full font-bold shadow-lg hover:bg-orange-600 transition-all duration-300 flex items-center gap-2 transform hover:scale-105"
                        >
                            <Phone size={18} />
                            <span>06 71 87 60 80</span>
                        </a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden p-2 text-white hover:text-primary transition-colors focus:outline-none"
                        aria-label="Menu"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                            onClick={toggleMenu}
                            className="fixed inset-0 bg-black z-40 md:hidden"
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed right-0 top-0 h-full w-[80%] max-w-sm bg-white z-50 shadow-2xl overflow-y-auto"
                        >
                            <div className="p-6 flex flex-col h-full">
                                <div className="flex justify-between items-center mb-8">
                                    <span className="text-xl font-bold text-secondary">Menu</span>
                                    <button onClick={toggleMenu} className="p-2 text-gray-500 hover:text-primary">
                                        <X size={24} />
                                    </button>
                                </div>

                                <nav className="flex flex-col space-y-6 flex-grow">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.path}
                                            to={link.path}
                                            className={`text-lg font-medium border-b border-gray-100 pb-2 ${location.pathname === link.path ? 'text-primary border-primary' : 'text-gray-700'
                                                }`}
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </nav>

                                <div className="mt-auto pt-8">
                                    <a
                                        href="tel:+33671876080"
                                        className="w-full bg-primary text-white py-4 rounded-lg font-bold text-center shadow-md flex justify-center items-center gap-2 mb-4"
                                    >
                                        <Phone size={20} />
                                        URGENCE 24/7
                                    </a>
                                    <p className="text-center text-gray-400 text-xs">Based in Toulouse, France</p>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
