import { Mail, MapPin, PhoneCall, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-secondary text-white pt-16 pb-8">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand & Description */}
                    <div className="space-y-4">
                        <Link to="/" className="flex items-center gap-2 mb-4">
                            <img src="/logo.png" alt="Serrurier Toulouse Logo" className="h-12 w-auto bg-white rounded-full p-1" />
                            <div className="flex flex-col">
                                <span className="text-2xl font-bold text-white leading-none">Serrurier</span>
                                <span className="text-sm font-bold text-primary tracking-widest uppercase leading-none">Toulouse</span>
                            </div>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Votre partenaire de confiance pour tous vos besoins en serrurerie à Toulouse et ses environs.
                            Service professionnel et réactif depuis plus de 10 ans.
                        </p>
                        <div className="flex items-center gap-2 text-primary">
                            <Clock size={18} />
                            <span className="text-sm font-semibold">Disponible 24h/24 et 7j/7</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white">Navigation</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="/" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                                    Accueil
                                </a>
                            </li>
                            <li>
                                <a href="/services" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                                    Nos Services
                                </a>
                            </li>
                            <li>
                                <a href="/portfolio" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                                    Réalisations
                                </a>
                            </li>
                            <li>
                                <a href="/zones-intervention" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                                    Zones d'Intervention
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a href="/mentions-legales" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                                    Mentions Légales
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white">Contactez-nous</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-primary mt-1 flex-shrink-0" size={20} />
                                <div>
                                    <p className="text-gray-400 text-sm">12 Rue de la République</p>
                                    <p className="text-gray-400 text-sm">31000 Toulouse, France</p>
                                </div>
                            </li>
                            <li className="flex items-center gap-3">
                                <PhoneCall className="text-primary flex-shrink-0" size={20} />
                                <a href="tel:+33671876080" className="text-gray-400 hover:text-white transition-colors text-lg font-semibold">
                                    06 71 87 60 80
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-primary flex-shrink-0" size={20} />
                                <a href="mailto:contact@leserruriertoulousain.com" className="text-gray-400 hover:text-white transition-colors text-sm break-all">
                                    contact@leserruriertoulousain.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <p className="text-gray-500">
                            &copy; {new Date().getFullYear()} Serrurier Toulouse. Tous droits réservés.
                        </p>
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
                    <div className="flex gap-6">
                        <a href="/mentions-legales" className="text-gray-500 hover:text-white transition-colors">
                            Mentions légales
                        </a>
                        <a href="/contact" className="text-gray-500 hover:text-white transition-colors">
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
