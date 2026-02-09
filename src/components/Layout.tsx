import { Outlet, Link, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquareText } from 'lucide-react';

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50 text-secondary font-sans antialiased overflow-x-hidden">
            <Header />

            <main className="flex-grow">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={useLocation().pathname}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Outlet />
                    </motion.div>
                </AnimatePresence>
            </main>

            <Footer />

            {/* Floating CTA Button */}
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="fixed bottom-6 right-6 z-40"
            >
                <Link
                    to="/contact"
                    className="bg-primary text-white p-4 rounded-full shadow-2xl shadow-orange-500/40 hover:bg-orange-600 transition-all duration-300 flex items-center justify-center gap-2 group"
                    role="button"
                    aria-label="Demander un devis"
                >
                    <MessageSquareText size={24} className="group-hover:rotate-12 transition-transform" />
                    <span className="font-bold hidden md:inline-block pr-2">Demander un devis</span>
                </Link>
            </motion.div>
        </div>
    );
};

export default Layout;
