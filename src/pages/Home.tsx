import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Clock, Key, Lock, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Reviews from '../components/Reviews';
import serrurierImage from '../assets/serrurier-hero.png';
import serrurierTravailleImage from '../assets/serrurier-travaille-sur-porte.jpg';

const Home = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const stagger = {
        visible: { transition: { staggerChildren: 0.2 } }
    };

    return (
        <>
            <Helmet>
                <title>Serrurier Toulouse - Dépannage Urgence 24/7 & Installation</title>
                <meta name="description" content="Serrurier expert à Toulouse. Intervention rapide en 30 min pour ouverture de porte, changement de serrure et sécurisation. Devis gratuit." />
            </Helmet>

            {/* Hero Section Wrapper - extends behind navbar */}
            <div className="relative -mt-20">
                {/* Background Image - starts from very top */}
                <img
                    src={serrurierImage}
                    alt="Serrurier professionnel au travail"
                    className="absolute top-0 left-0 w-full h-[calc(100vh+5rem)] object-cover z-0"
                />
                {/* Background Overlay */}
                <div className="absolute top-0 left-0 w-full h-[calc(100vh+5rem)] bg-gradient-to-r from-secondary via-secondary opacity-50 z-10"></div>

                {/* Hero Section Content */}
                <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden text-white pt-20">


                    <div className="container mx-auto px-4 z-20 relative">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={stagger}
                            className="max-w-3xl space-y-8"
                        >
                            <motion.h1
                                variants={fadeInUp}
                                className="text-5xl md:text-7xl font-bold tracking-tight leading-tight"
                            >
                                Votre Sécurité,<br />
                                <span className="text-primary">Notre Priorité.</span>
                            </motion.h1>

                            <motion.p
                                variants={fadeInUp}
                                className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl"
                            >
                                Serrurier professionnel à Toulouse. Intervention d'urgence en 30 minutes, 24h/24 et 7j/7.
                            </motion.p>

                            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 pt-4">
                                <a
                                    href="tel:+33671876080"
                                    className="bg-primary hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-orange-500/30"
                                >
                                    <Phone size={24} />
                                    06 71 87 60 80
                                </a>
                                <Link
                                    to="/contact"
                                    className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 transition-all"
                                >
                                    Demander un devis <ArrowRight size={20} />
                                </Link>
                            </motion.div>

                            <motion.div variants={fadeInUp} className="pt-8 flex items-center gap-8 text-sm font-medium text-gray-400">
                                <div className="flex items-center gap-2">
                                    <ShieldCheck className="text-primary" /> Agréé Assurances
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="text-primary" /> Intervention 30 min
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>
            </div>

            {/* Services Preview - Light Background */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-2">Nos Expertises</h2>
                        <h3 className="text-4xl font-bold text-secondary mb-4">Services de Serrurerie Professionnels</h3>
                        <p className="text-gray-500 max-w-2xl mx-auto">Nous intervenons pour tous types de problèmes, de l'ouverture de porte claquée au blindage de haute sécurité.</p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Key size={40} className="text-primary mb-4" />,
                                title: "Ouverture de Porte",
                                desc: "Porte claquée ou fermée à clé ? Ouverture fine sans dégâts dans la majorité des cas."
                            },
                            {
                                icon: <Lock size={40} className="text-primary mb-4" />,
                                title: "Changement de Serrure",
                                desc: "Remplacement de cylindres, serrures multipoints et installation de haute sécurité A2P."
                            },
                            {
                                icon: <ShieldCheck size={40} className="text-primary mb-4" />,
                                title: "Blindage de Porte",
                                desc: "Renforcement de votre porte existante ou installation d'un bloc-porte blindé sur mesure."
                            }
                        ].map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
                            >
                                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
                                    {service.icon}
                                </div>
                                <h4 className="text-xl font-bold text-secondary mb-3">{service.title}</h4>
                                <p className="text-gray-500 leading-relaxed mb-6">{service.desc}</p>
                                <Link to="/services" className="text-primary font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                                    En savoir plus <ArrowRight size={16} />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us / Value Proposition - Darker Background (Alternating) */}
            <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-800/50 skew-x-12 transform translate-x-20"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-2">Pourquoi Nous ?</h2>
                            <h3 className="text-4xl font-bold mb-6">L'Expertise et la Transparence avant tout</h3>
                            <ul className="space-y-6">
                                {[
                                    "Devis gratuit et détaillé avant toute intervention",
                                    "Tarifs agréés assurances (Macif, Maaf, Axa...)",
                                    "Artisans qualifiés et expérimentés",
                                    "Matériel de qualité (Picard, Vachette, Fichet)"
                                ].map((item, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + (i * 0.1) }}
                                        className="flex items-center gap-4 text-lg text-gray-300"
                                    >
                                        <div className="bg-primary/20 p-2 rounded-full">
                                            <ShieldCheck size={20} className="text-primary" />
                                        </div>
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>
                            <div className="mt-10">
                                <Link to="/contact" className="bg-white text-secondary font-bold px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors">
                                    Contactez-nous
                                </Link>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <div className="bg-gradient-to-tr from-primary to-orange-600 rounded-2xl p-1 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                                <img
                                    src={serrurierTravailleImage}
                                    alt="Serrurier professionnel travaillant sur une porte"
                                    loading="lazy"
                                    className="rounded-xl w-full h-[500px] object-cover filter brightness-90 contrast-110"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Testimonials - Light Background */}
            <Reviews />

            {/* Call to Action - Primary Background */}
            <section className="py-20 bg-primary">
                <div className="container mx-auto px-4 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Une urgence ? Besoin d'un conseil ?</h2>
                    <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">Nos experts sont à votre écoute pour sécuriser votre domicile ou votre commerce.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a href="tel:+33123456789" className="bg-white text-secondary font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
                            01 23 45 67 89
                        </a>
                        <Link to="/contact" className="bg-secondary/20 backdrop-blur-sm border border-white/30 text-white font-bold px-8 py-4 rounded-lg hover:bg-secondary/40 transition-colors">
                            Nous écrire
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
