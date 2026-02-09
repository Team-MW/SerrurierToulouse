import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Lock, ShieldCheck, Home, Award, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import serrurierImage from '../assets/portfolio-hero.png';
import serrurierTravailleImage from '../assets/serrurier-travaille-sur-porte.jpg';
import blindagePorteImage from '../assets/blindage-porte-entree.png';
import ouverturePorteImage from '../assets/ouverture-porte-claquee.png';

const Portfolio = () => {
    const projects = [
        {
            title: "Changement complet serrure 3 points",
            category: "Sécurisation",
            description: "Installation d'une serrure FICHET 3 points A2P** pour sécuriser un appartement en rez-de-chaussée.",
            image: serrurierTravailleImage,
            tag: "Résidentiel",
            technique: "Pose selon norme NF P26-301, avec renforcement de l'huisserie et respect des cotes de sécurité."
        },
        {
            title: "Blindage porte d'entrée",
            category: "Blindage",
            description: "Pose d'un bloc-porte blindé certifié pour une maison individuelle.",
            image: blindagePorteImage,
            tag: "Maison",
            technique: "Installation conforme au Code de la Construction, certification A2P BP3, résistance 15 minutes."
        },
        {
            title: "Ouverture porte claquée",
            category: "Dépannage",
            description: "Intervention rapide pour une ouverture fine sans destruction de la serrure.",
            image: ouverturePorteImage,
            tag: "Urgence",
            technique: "Technique d'ouverture fine par manipulation du pêne, préservation totale du mécanisme."
        }
    ];

    return (
        <>
            <Helmet>
                <title>Portfolio - Réalisations Serrurier Toulouse | Installations Certifiées A2P</title>
                <meta name="description" content="Découvrez nos interventions et installations de serrurerie à Toulouse : blindages certifiés, serrures A2P, dépannages d'urgence. Travaux conformes aux normes en vigueur." />
                <meta name="keywords" content="réalisations serrurier, blindage porte toulouse, installation serrure A2P, travaux serrurerie" />
            </Helmet>

            {/* Hero Section Wrapper - extends behind navbar */}
            <div className="relative -mt-20">
                {/* Background Image - starts from very top */}
                <img
                    src={serrurierImage}
                    alt="Serrurier professionnel au travail"
                    className="absolute top-0 left-0 w-full h-[350px] object-cover z-0"
                />
                {/* Background Overlay */}
                <div className="absolute top-0 left-0 w-full h-[350px] bg-gradient-to-r from-secondary via-secondary opacity-70 z-10"></div>

                <section className="relative text-white py-20 pt-32 text-center">
                    <div className="container mx-auto px-4 z-10 relative">
                        <motion.h1
                            className="text-4xl font-bold mb-4"
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            Nos Réalisations
                        </motion.h1>
                        <p className="text-gray-300 max-w-2xl mx-auto">La qualité de notre travail en images.</p>
                    </div>
                </section>
            </div>

            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <img src={project.image} alt={project.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                        <Link to="/contact" className="bg-white text-secondary font-bold px-6 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            Demander un devis
                                        </Link>
                                    </div>
                                    <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                                        {project.category}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 block">{project.tag}</span>
                                    <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                                    <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded">
                                        <p className="text-xs text-gray-700">
                                            <strong className="text-green-700">🔧 Technique :</strong> {project.technique}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section Garanties et Assurances */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-3xl font-bold text-secondary mb-4">Nos Garanties Professionnelles</h2>
                            <p className="text-gray-600">Conformité légale et protection maximale</p>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-center p-6 bg-gray-50 rounded-lg"
                            >
                                <ShieldCheck size={48} className="mx-auto text-primary mb-4" />
                                <h3 className="font-bold text-lg mb-2">Garantie Décennale</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    Tous nos travaux sont couverts par une assurance responsabilité civile et décennale conformément à la loi Spinetta du 4 janvier 1978.
                                </p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-center p-6 bg-gray-50 rounded-lg"
                            >
                                <Home size={48} className="mx-auto text-primary mb-4" />
                                <h3 className="font-bold text-lg mb-2">Intervention Propre</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    Nous laissons le chantier propre après chaque intervention. Protection des sols et évacuation des déchets selon les normes environnementales.
                                </p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-center p-6 bg-gray-50 rounded-lg"
                            >
                                <Lock size={48} className="mx-auto text-primary mb-4" />
                                <h3 className="font-bold text-lg mb-2">Matériel Certifié</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    Utilisation exclusive de produits de grandes marques certifiées A2P et conformes aux normes européennes EN 12209 et EN 1303.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Conformité Réglementaire */}
            <section className="py-20 bg-gradient-to-br from-blue-50 to-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <Award size={48} className="mx-auto text-primary mb-4" />
                            <h2 className="text-3xl font-bold text-secondary mb-4">Conformité Réglementaire</h2>
                            <p className="text-gray-600">Nos installations respectent strictement le cadre légal</p>
                        </motion.div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <div className="space-y-6">
                                {[
                                    {
                                        title: "Code de la Construction et de l'Habitation",
                                        desc: "Respect des articles R111-1 à R111-14 relatifs à la sécurité des bâtiments d'habitation."
                                    },
                                    {
                                        title: "Norme NF P26-301",
                                        desc: "Application stricte de la norme française pour la pose des serrures et fermetures de portes."
                                    },
                                    {
                                        title: "Arrêté du 7 août 2015",
                                        desc: "Conformité totale avec la réglementation sur les prestations de dépannage d'urgence : devis obligatoire, tarifs affichés, facture détaillée."
                                    },
                                    {
                                        title: "Règlement Copropriété",
                                        desc: "Respect des règlements de copropriété et obtention des autorisations nécessaires pour les travaux en parties communes."
                                    },
                                    {
                                        title: "Assurance Habitation",
                                        desc: "Nos installations répondent aux exigences des compagnies d'assurance pour la garantie vol et effraction."
                                    }
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start gap-4 pb-6 border-b border-gray-100 last:border-0"
                                    >
                                        <CheckCircle2 className="text-green-500 flex-shrink-0 mt-1" size={20} />
                                        <div>
                                            <h4 className="font-bold text-secondary mb-2">{item.title}</h4>
                                            <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Portfolio;
