import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Shield, Key, FileCheck, Phone, AlertTriangle } from 'lucide-react';
import serrurierImage from '../assets/serrurier-depaneur.jpg';

const Services = () => {
    const services = [
        {
            title: "Ouverture de Porte",
            icon: <Key className="w-12 h-12 text-primary" />,
            description: "Porte claquée ou verrouillée, perte de clés, clé cassée dans la serrure. Intervention rapide sans dégâts.",
            features: ["Ouverture fine", "Ouverture destructive (si nécessaire)", "Remplacement immédiat"]
        },
        {
            title: "Blindage de Porte",
            icon: <Shield className="w-12 h-12 text-primary" />,
            description: "Sécurisation de votre entrée contre les effractions. Installation de blocs-portes blindés certifiés A2P.",
            features: ["Blindage pivot", "Super blindage", "Bloc-porte"]
        },
        {
            title: "Remplacement de Serrure",
            icon: <FileCheck className="w-12 h-12 text-primary" />,
            description: "Changement de cylindre ou de mécanisme complet pour renforcer la sécurité ou suite à un emménagement.",
            features: ["Toutes marques", "Serrures multipoints", "Cylindres de haute sécurité"]
        },
        {
            title: "Dépannage Urgence",
            icon: <AlertTriangle className="w-12 h-12 text-primary" />,
            description: "Disponible 24h/24 et 7j/7 pour toutes vos urgences serrurerie sur Toulouse et agglomération.",
            features: ["Intervention 30 min", "Tarifs transparents", "Agréé assurances"]
        }
    ];

    return (
        <>
            <Helmet>
                <title>Nos Services - Serrurier Toulouse</title>
                <meta name="description" content="Découvrez nos services de serrurerie : ouverture de porte, blindage, changement de serrure, dépannage d'urgence 24/7." />
            </Helmet>

            {/* Hero Section Wrapper - extends behind navbar */}
            <div className="relative -mt-20">
                {/* Background Image - starts from very top */}
                <img
                    src={serrurierImage}
                    alt="Serrurier professionnel au travail"
                    className="absolute top-0 left-0 w-full h-[400px] object-cover z-0"
                />
                {/* Background Overlay */}
                <div className="absolute top-0 left-0 w-full h-[400px] bg-gradient-to-r from-secondary via-secondary opacity-70 z-10"></div>

                <section className="relative text-white py-20 pt-32 text-center">
                    <div className="container mx-auto px-4 z-10 relative">
                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl md:text-5xl font-bold mb-6"
                        >
                            Nos Prestations Serrurerie
                        </motion.h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">Expertise, rapidité et transparence pour votre sécurité.</p>
                    </div>
                </section>
            </div>

            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col md:flex-row gap-6 items-start"
                            >
                                <div className="bg-gray-100 p-4 rounded-xl flex-shrink-0">
                                    {service.icon}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-secondary mb-3">{service.title}</h3>
                                    <p className="text-gray-600 mb-4 relaxing-loose">{service.description}</p>
                                    <ul className="space-y-2">
                                        {service.features.map((feature, i) => (
                                            <li key={i} className="flex items-center text-sm text-gray-500">
                                                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-white py-24">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-secondary mb-12">Marques Partenaires</h2>
                    <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Logos placeholders - text for now */}
                        {["Vachette", "Fichet", "Bricard", "Picard", "Abus", "Muel"].map((brand) => (
                            <span key={brand} className="text-2xl font-bold text-gray-400 uppercase tracking-widest">{brand}</span>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-primary/10">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-secondary mb-6">Besoin d'un devis personnalisé ?</h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Chaque situation est unique. Contactez-nous pour une estimation gratuite et précise.</p>
                    <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-secondary text-white font-bold py-4 px-8 rounded-lg hover:bg-secondary/90 transition-colors shadow-lg">
                        <Phone size={20} />
                        Demander un devis gratuit
                    </a>
                </div>
            </section>
        </>
    );
};

export default Services;
