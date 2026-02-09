import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, ShieldCheck, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import serrurierImage from '../assets/zones-hero.png';

// Principales villes et communes du département 31 (Haute-Garonne)
const zones = [
    { code: "31000", name: "Toulouse Centre" },
    { code: "31100", name: "Toulouse" },
    { code: "31120", name: "Portet-sur-Garonne" },
    { code: "31140", name: "Aucamville" },
    { code: "31150", name: "Bruguières" },
    { code: "31170", name: "Tournefeuille" },
    { code: "31200", name: "Toulouse Minimes" },
    { code: "31240", name: "L'Union" },
    { code: "31270", name: "Cugnaux" },
    { code: "31300", name: "Toulouse Saint-Cyprien" },
    { code: "31320", name: "Castanet-Tolosan" },
    { code: "31400", name: "Toulouse Rangueil" },
    { code: "31500", name: "Toulouse Purpan" },
    { code: "31520", name: "Ramonville-Saint-Agne" },
    { code: "31600", name: "Muret" },
    { code: "31650", name: "Saint-Orens-de-Gameville" },
    { code: "31670", name: "Labège" },
    { code: "31700", name: "Blagnac" },
    { code: "31750", name: "Escalquens" },
    { code: "31770", name: "Colomiers" },
    { code: "31830", name: "Plaisance-du-Touch" },
    { code: "31850", name: "Beaupuy" },
    { code: "31860", name: "Pins-Justaret" },
    { code: "31400", name: "Balma" },
    { code: "31200", name: "Castelginest" },
    { code: "31140", name: "Launaguet" },
    { code: "31700", name: "Beauzelle" },
    { code: "31700", name: "Cornebarrieu" },
    { code: "31170", name: "Tournefeuille" },
    { code: "31120", name: "Roques" },
    { code: "31600", name: "Seysses" },
    { code: "31470", name: "Fonsorbes" },
    { code: "31470", name: "Saint-Lys" },
    { code: "31270", name: "Villeneuve-Tolosane" },
    { code: "31790", name: "Saint-Jory" },
    { code: "31650", name: "Auzeville-Tolosane" },
    { code: "31660", name: "Bessières" },
    { code: "31180", name: "Rouffiac-Tolosan" },
    { code: "31200", name: "Fenouillet" },
    { code: "31540", name: "Saint-Félix-Lauragais" },
    { code: "31450", name: "Montgiscard" },
    { code: "31390", name: "Carbonne" },
    { code: "31800", name: "Saint-Gaudens" },
    { code: "31410", name: "Noé" },
    { code: "31620", name: "Fronton" },
    { code: "31560", name: "Nailloux" },
    { code: "31290", name: "Villefranche-de-Lauragais" }
];

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
                <title>Serrurier Toulouse & Haute-Garonne (31) - Intervention Rapide dans 47 Communes</title>
                <meta name="description" content="Serrurier professionnel intervenant dans tout le département 31 : Toulouse, Colomiers, Blagnac, Muret, Tournefeuille, Balma... Dépannage 24/7 en 30 min. Devis gratuit." />
                <meta name="keywords" content="serrurier toulouse, serrurier 31, serrurier haute-garonne, serrurier colomiers, serrurier blagnac, serrurier muret, dépannage serrurerie toulouse" />
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
                            Serrurier dans tout le département 31
                        </motion.h1>
                        <p className="text-gray-300 max-w-2xl mx-auto">
                            Intervention rapide dans 47 communes de la Haute-Garonne. Service disponible 24h/24 et 7j/7.
                        </p>
                    </div>
                </section>
            </div>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <h2 className="text-3xl font-bold text-secondary mb-6">Serrurier disponible partout en Haute-Garonne</h2>
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
                                <strong className="text-secondary">47 communes</strong> du département de la Haute-Garonne (31) couvertes par notre service de serrurerie professionnelle.
                            </p>
                            <div className="bg-white p-4 rounded-lg border border-primary/20">
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    <strong className="text-primary">Zone prioritaire :</strong> Toulouse et agglomération (Colomiers, Blagnac, Tournefeuille, Balma, L'Union, Ramonville, Muret)
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Liste des zones */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-secondary mb-8 text-center">Toutes nos zones d'intervention</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {zones.map((zone, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: index * 0.02 }}
                                    className="bg-white border border-gray-200 rounded-lg p-4 hover:border-primary hover:shadow-md transition-all duration-300"
                                >
                                    <div className="flex items-start gap-3">
                                        <MapPin size={18} className="text-primary mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="font-semibold text-secondary text-sm">{zone.name}</p>
                                            <p className="text-xs text-gray-500">{zone.code}</p>
                                        </div>
                                    </div>
                                </motion.div>
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
