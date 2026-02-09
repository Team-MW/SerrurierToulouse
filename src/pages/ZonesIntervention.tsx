import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, ShieldCheck, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import serrurierImage from '../assets/zones-hero.png';

const zones = [
    { code: "31000", name: "Toulouse Centre" },
    { code: "31120", name: "Toulouse Portet-sur-Garonne" },
    { code: "31200", name: "Toulouse Nord / Minimes" },
    { code: "31260", name: "Toulouse Salvetat-Saint-Gilles" },
    { code: "31270", name: "Toulouse Cugnaux / Villeneuve-Tolosane" },
    { code: "31300", name: "Toulouse Saint-Cyprien / Arènes" },
    { code: "31320", name: "Toulouse Castanet-Tolosan" },
    { code: "31400", name: "Toulouse Rangueil / Saint-Agne" },
    { code: "31470", name: "Toulouse Fonsorbes / Saint-Lys" },
    { code: "31520", name: "Toulouse Ramonville-Saint-Agne" },
    { code: "31600", name: "Toulouse Muret / Seysses" },
    { code: "31670", name: "Toulouse Labège" },
    { code: "31700", name: "Toulouse Blagnac / Beauzelle" },
    { code: "31770", name: "Toulouse Colomiers" },
    { code: "31800", name: "Toulouse Saint-Gaudens" },
    { code: "31830", name: "Toulouse Plaisance-du-Touch" },
    { code: "31860", name: "Toulouse Pins-Justaret" }
];

const ZonesIntervention = () => {
    return (
        <>
            <Helmet>
                <title>Zones d'Intervention Serrurier Toulouse & Haute-Garonne - Dépannage 24/7</title>
                <meta name="description" content="Intervention de serrurerie rapide sur Toulouse (31000, 31200, 31300, 31400, 31500) et ses alentours. Disponible 24h/24 et 7j/7 dans toute la Haute-Garonne pour ouverture de porte et sécurisation." />
            </Helmet>

            {/* Hero Section Wrapper - extends behind navbar */}
            <div className="relative -mt-20">
                {/* Background Image - starts from very top */}
                <img
                    src={serrurierImage}
                    alt="Serrurier professionnel au travail"
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
                            Zones d'Intervention Serrurier Toulouse
                        </motion.h1>
                        <p className="text-gray-300 max-w-2xl mx-auto">
                            Notre équipe de serruriers qualifiés intervient rapidement dans tous les quartiers de Toulouse et les communes de la Haute-Garonne.
                        </p>
                    </div>
                </section>
            </div>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <h2 className="text-3xl font-bold text-secondary mb-6">Serrurier disponible partout à Toulouse</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Que vous habitiez au centre-ville, aux Minimes, à Saint-Cyprien ou dans les communes limitrophes comme Blagnac, Colomiers ou Balma, nous vous garantissons une intervention rapide.
                                Nos techniciens sont géolocalisés pour arriver chez vous en moins de 30 minutes en cas d'urgence.
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3">
                                    <Clock className="text-primary" />
                                    <span>Intervention en 30 minutes max</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <ShieldCheck className="text-primary" />
                                    <span>Disponible 24h/24 et 7j/7</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <MapPin className="text-primary" />
                                    <span>Couverture complète de l'agglomération</span>
                                </li>
                            </ul>
                            <a href="tel:+33671876080" className="inline-flex items-center gap-2 bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors shadow-lg">
                                <Phone size={20} />
                                Appeler maintenant : 06 71 87 60 80
                            </a>
                        </div>
                        <div className="bg-gray-100 p-2 rounded-lg rotate-2 hover:rotate-0 transition-transform duration-500 shadow-xl">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92419.86657956897!2d1.3628026723233856!3d43.60067645802524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebb6fec7552ff%3A0x406f69c2f411030!2sToulouse!5e0!3m2!1sfr!2sfr!4v1709910000000!5m2!1sfr!2sfr"
                                width="100%"
                                height="400"
                                style={{ border: 0, borderRadius: '0.5rem' }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Carte d'intervention Toulouse"
                            ></iframe>
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold text-secondary mb-8 text-center border-t border-gray-100 pt-12">Liste des zones couvertes (Codes Postaux)</h3>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {zones.map((zone, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-gray-50 hover:bg-white p-4 rounded-lg border border-gray-200 hover:border-primary/50 transition-all hover:shadow-md group"
                            >
                                <Link to="/contact" className="flex flex-col h-full justify-between">
                                    <span className="font-bold text-lg text-secondary group-hover:text-primary transition-colors">{zone.code}</span>
                                    <span className="text-sm text-gray-500">{zone.name}</span>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16 bg-blue-50 p-8 rounded-2xl text-center border border-blue-100">
                        <h4 className="text-xl font-bold text-blue-900 mb-2">Votre quartier n'est pas dans la liste ?</h4>
                        <p className="text-blue-700 mb-6">Pas d'inquiétude, nous intervenons probablement quand même. Appelez-nous pour confirmer.</p>
                        <a href="tel:+33671876080" className="inline-block bg-white text-blue-600 font-bold py-2 px-6 rounded-full border border-blue-200 hover:bg-blue-600 hover:text-white transition-all">
                            Vérifier mon éligibilité
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ZonesIntervention;
