
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, ShieldCheck, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import serrurierImage from '../assets/zones-hero.png';
import { cityData } from '../data/citiesData';

const marques = [
    {
        name: "Vachette",
        description: "Leader français de la serrurerie depuis 1882. Spécialiste des cylindres de haute sécurité et serrures certifiées A2P."
    },
    {
        name: "Fichet",
        description: "Référence mondiale en sécurité. Portes blindées et serrures multipoints certifiées A2P*** pour une protection maximale."
    },
    {
        name: "Bricard",
        description: "Marque historique française reconnue pour ses serrures de qualité et ses systèmes de verrouillage innovants."
    },
    {
        name: "Picard",
        description: "Expert en serrures multipoints et cylindres haute sécurité. Produits certifiés A2P pour tous types de portes."
    },
    {
        name: "Abus",
        description: "Marque allemande réputée pour la robustesse de ses cadenas, serrures et systèmes de sécurité résidentiels."
    },
    {
        name: "Muel",
        description: "Fabricant français spécialisé dans les serrures en applique et à encastrer. Solutions adaptées à tous budgets."
    }
];

const ZonesIntervention = () => {
    return (
        <>
            <Helmet>
                <title>Serrurier Toulouse & Haute-Garonne (31) - Intervention Rapide</title>
                <meta name="description" content="Serrurier professionnel intervenant à Toulouse et ses environs : Cugnaux, Blagnac, Colomiers... Dépannage 24/7 en 30 min. Devis gratuit." />
                <meta name="keywords" content="serrurier toulouse, serrurier cugnaux, serrurier blagnac, serrurier colomiers, dépannage serrurerie 31" />
            </Helmet>

            {/* Hero Section Wrapper - extends behind navbar */}
            <div className="relative -mt-20">
                {/* Background Image - starts from very top */}
                <img
                    src={serrurierImage}
                    alt="Vue aérienne de Toulouse - Zone d'intervention serrurier"
                    className="absolute top-0 left-0 w-full h-[380px] object-cover z-0"
                />
                {/* Background Overlay */}
                <div className="absolute top-0 left-0 w-full h-[380px] bg-gradient-to-r from-secondary via-secondary opacity-70 z-10"></div>

                <section className="relative text-white py-20 pt-32 text-center">
                    <div className="container mx-auto px-4 z-10 relative">
                        <motion.h1
                            className="text-4xl font-bold mb-4"
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            Serrurier Haute-Garonne (31)
                        </motion.h1>
                        <p className="text-gray-300 max-w-2xl mx-auto">
                            Intervention rapide sur Toulouse et sa périphérie. Service disponible 24h/24 et 7j/7.
                        </p>
                    </div>
                </section>
            </div>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <h2 className="text-3xl font-bold text-secondary mb-6">Serrurier disponible partout autour de Toulouse</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Que vous habitiez à Toulouse centre, Colomiers, Blagnac, Muret, Tournefeuille, Balma ou toute autre commune du département 31,
                                nous vous garantissons une intervention rapide. Nos techniciens sont géolocalisés pour arriver chez vous en moins de 30 minutes en cas d'urgence.
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3">
                                    <Clock className="text-primary flex-shrink-0" />
                                    <span>Intervention en 30 minutes maximum</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <ShieldCheck className="text-primary flex-shrink-0" />
                                    <span>Disponible 24h/24 et 7j/7, jours fériés inclus</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Phone className="text-primary flex-shrink-0" />
                                    <span>Devis gratuit et transparent avant intervention</span>
                                </li>
                            </ul>
                            <Link to="/contact" className="inline-block bg-primary text-white font-bold px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors shadow-lg">
                                Demander une intervention
                            </Link>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                            <h3 className="text-xl font-bold text-secondary mb-4 flex items-center gap-2">
                                <MapPin className="text-primary" />
                                Couverture géographique
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Nous couvrons l'ensemble des communes limitrophes de Toulouse.
                            </p>
                            <div className="bg-white p-4 rounded-lg border border-primary/20">
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    <strong className="text-primary">Zone prioritaire :</strong> Toulouse et agglomération (Colomiers, Blagnac, Tournefeuille, Frouzins, Cugnaux, etc.)
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Liste des zones prioritaires avec pages dédiées */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-secondary mb-8 text-center">Nos Zones Principales d'Intervention</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {Object.values(cityData).map((city, index) => (
                                <Link
                                    key={city.slug}
                                    to={`/intervention/${city.slug}`}
                                    className="group block"
                                >
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                        className="bg-white border border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-lg transition-all duration-300 h-full flex flex-col items-center text-center"
                                    >
                                        <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                                            <MapPin size={32} className="text-primary group-hover:text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">{city.name}</h3>
                                        <p className="text-sm text-gray-500 mb-4">{city.zip}</p>
                                        <span className="text-sm font-semibold text-primary mt-auto flex items-center gap-1">
                                            Voir la zone <Clock size={14} />
                                        </span>
                                    </motion.div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Section Marques Partenaires */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-secondary mb-4 text-center">Marques Partenaires de Confiance</h2>
                        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                            Nous travaillons exclusivement avec les plus grandes marques de serrurerie pour vous garantir
                            des installations de qualité, durables et certifiées. Matériel professionnel conforme aux normes A2P.
                        </p>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {marques.map((marque, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                                >
                                    <h3 className="text-2xl font-bold text-secondary mb-3">{marque.name}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{marque.description}</p>
                                </motion.div>
                            ))}
                        </div>
                        <div className="mt-8 bg-blue-50 border-l-4 border-primary p-6 rounded-lg">
                            <p className="text-gray-700 leading-relaxed">
                                <strong className="text-secondary">Garantie qualité :</strong> Tous nos produits sont certifiés et garantis par les fabricants.
                                Nous vous conseillons sur le choix de la marque et du modèle adapté à vos besoins et votre budget.
                            </p>
                        </div>
                    </div>

                    {/* CTA Final */}
                    <div className="text-center bg-gradient-to-r from-secondary to-blue-900 text-white p-12 rounded-2xl">
                        <h3 className="text-3xl font-bold mb-4">Votre commune n'est pas listée ?</h3>
                        <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
                            Contactez-nous ! Nous intervenons également dans les communes limitrophes du département 31.
                            Un conseiller vous confirmera rapidement notre disponibilité dans votre secteur.
                        </p>
                        <a href="tel:+33671876080" className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors shadow-lg">
                            <Phone size={20} />
                            Appelez-nous : 06 71 87 60 80
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ZonesIntervention;
