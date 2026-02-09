import { Github, Twitter, Facebook, Mail, MapPin, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="bg-secondary text-white pt-16 pb-8">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link to="/" className="flex items-center gap-2 mb-4">
                            <img src="/logo.png" alt="Serrurier Toulouse Logo" className="h-10 w-auto bg-white rounded-full p-1" />
                            <div className="flex flex-col">
                                <span className="text-xl font-bold text-white leading-none">Serrurier</span>
                                <span className="text-xs font-bold text-primary tracking-widest uppercase leading-none">Toulouse</span>
                            </div>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Votre partenaire de confiance pour tous vos besoins en serrurerie à Toulouse et ses environs. Disponible 24h/24 et 7j/7 pour les urgences.
                        </p>
                        <div className="flex space-x-4 pt-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors duration-300">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors duration-300">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors duration-300">
                                <Github size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 border-b border-primary/30 pb-2 inline-block">Navigation</h3>
                        <ul className="space-y-3 text-gray-400 hover:text-white transition-colors">
                            <li><a href="/" className="hover:text-primary transition-colors">Accueil</a></li>
                            <li><a href="/services" className="hover:text-primary transition-colors">Nos Services</a></li>
                            <li><a href="/portfolio" className="hover:text-primary transition-colors">Réalisations</a></li>
                            <li><a href="/contact" className="hover:text-primary transition-colors">Contact</a></li>
                            <li><a href="/mentions-legales" className="hover:text-primary transition-colors">Mentions Légales</a></li>
                            <li><a href="/zones-intervention" className="hover:text-primary transition-colors">Zones d'Intervention</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 border-b border-primary/30 pb-2 inline-block">Contactez-nous</h3>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-primary mt-1 flex-shrink-0" size={18} />
                                <span>12 Rue de la République,<br />31000 Toulouse, France</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <PhoneCall className="text-primary flex-shrink-0" size={18} />
                                <a href="tel:+33671876080" className="hover:text-white transition-colors">06 71 87 60 80</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-primary flex-shrink-0" size={18} />
                                <a href="mailto:contact@leserruriertoulousain.com" className="hover:text-white transition-colors">contact@leserruriertoulousain.com</a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 border-b border-primary/30 pb-2 inline-block">Newsletter</h3>
                        <p className="text-gray-400 text-sm mb-4">Inscrivez-vous pour recevoir nos conseils sécurité et promotions.</p>
                        <form className="flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder="Votre email"
                                className="bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                            />
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-primary text-white font-semibold py-3 px-4 rounded hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20"
                            >
                                S'abonner
                            </motion.button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <p>&copy; {new Date().getFullYear()} Serrurier Toulouse. Tous droits réservés.</p>
                        <p className="text-xs text-gray-600">
                            Développé par{' '}
                            <a
                                href="https://microdidact.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:text-orange-400 transition-colors font-semibold"
                            >
                                Microdidact
                            </a>
                        </p>
                    </div>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="/mentions-legales" className="hover:text-white transition-colors">Mentions légales</a>
                        <a href="#" className="hover:text-white transition-colors">Conditions</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
