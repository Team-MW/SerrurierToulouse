import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Shield, Key, FileCheck, Phone, AlertTriangle } from 'lucide-react';
import serrurierImage from '../assets/services-hero.png';

const Services = () => {
    const services = [
        {
            title: "Ouverture de Porte",
            icon: <Key className="w-12 h-12 text-primary" />,
            description: "Porte claquée ou verrouillée, perte de clés, clé cassée dans la serrure. Intervention rapide sans dégâts.",
            features: ["Ouverture fine", "Ouverture destructive (si nécessaire)", "Remplacement immédiat"],
            details: "Notre technique d'ouverture fine préserve votre serrure dans 95% des cas. Nous utilisons des outils professionnels conformes à la réglementation en vigueur et respectons les protocoles de sécurité établis par la profession."
        },
        {
            title: "Blindage de Porte",
            icon: <Shield className="w-12 h-12 text-primary" />,
            description: "Sécurisation de votre entrée contre les effractions. Installation de blocs-portes blindés certifiés A2P.",
            features: ["Blindage pivot", "Super blindage", "Bloc-porte"],
            details: "Nos installations respectent les normes A2P (Assurance Prévention Protection) BP1, BP2 ou BP3 selon votre niveau de sécurité souhaité. Conformité avec les exigences des assurances habitation."
        },
        {
            title: "Remplacement de Serrure",
            icon: <FileCheck className="w-12 h-12 text-primary" />,
            description: "Changement de cylindre ou de mécanisme complet pour renforcer la sécurité ou suite à un emménagement.",
            features: ["Toutes marques", "Serrures multipoints", "Cylindres de haute sécurité"],
            details: "Installation de serrures certifiées A2P (1, 2 ou 3 étoiles) conformes aux normes européennes EN 12209. Respect des réglementations en matière de copropriété et d'assurance."
        },
        {
            title: "Dépannage Urgence",
            icon: <AlertTriangle className="w-12 h-12 text-primary" />,
            description: "Disponible 24h/24 et 7j/7 pour toutes vos urgences serrurerie sur Toulouse et agglomération.",
            features: ["Intervention 30 min", "Tarifs transparents", "Agréé assurances"],
            details: "Service d'urgence conforme à l'arrêté du 7 août 2015 relatif aux prestations de dépannage d'urgence. Devis obligatoire avant intervention, facture détaillée conforme à la loi."
        }
    ];

    return (
        <>
            <Helmet>
                <title>Nos Services - Serrurier Toulouse | Dépannage & Installation Certifiée A2P</title>
                <meta name="description" content="Services de serrurerie professionnels à Toulouse : ouverture de porte, blindage certifié A2P, changement de serrure conforme aux normes. Intervention 24/7, agréé assurances." />
                <meta name="keywords" content="serrurier toulouse, ouverture porte, blindage A2P, serrure certifiée, dépannage urgence, normes sécurité" />
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
                                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col gap-6"
                            >
                                <div className="flex items-start gap-6">
                                    <div className="bg-gray-100 p-4 rounded-xl flex-shrink-0">
                                        {service.icon}
                                    </div>
                                    <div className="flex-grow">
                                        <h3 className="text-2xl font-bold text-secondary mb-3">{service.title}</h3>
                                        <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                                        <ul className="space-y-2 mb-4">
                                            {service.features.map((feature, i) => (
                                                <li key={i} className="flex items-center text-sm text-gray-500">
                                                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="bg-blue-50 border-l-4 border-primary p-4 rounded">
                                            <p className="text-sm text-gray-700 leading-relaxed">
                                                <strong className="text-primary">ℹ️ À savoir :</strong> {service.details}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section Normes et Certifications */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-3xl font-bold text-secondary mb-4">Normes et Certifications</h2>
                            <p className="text-gray-600">Nos interventions respectent les réglementations en vigueur</p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100"
                            >
                                <h3 className="text-xl font-bold text-secondary mb-4 flex items-center gap-2">
                                    <Shield className="text-primary" size={24} />
                                    Certification A2P
                                </h3>
                                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                                    La certification A2P (Assurance Prévention Protection) garantit la résistance des serrures aux tentatives d'effraction :
                                </p>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>• <strong>A2P* :</strong> 5 minutes de résistance</li>
                                    <li>• <strong>A2P** :</strong> 10 minutes de résistance</li>
                                    <li>• <strong>A2P*** :</strong> 15 minutes de résistance</li>
                                </ul>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl border border-orange-100"
                            >
                                <h3 className="text-xl font-bold text-secondary mb-4 flex items-center gap-2">
                                    <FileCheck className="text-primary" size={24} />
                                    Conformité Légale
                                </h3>
                                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                                    Nos prestations respectent strictement :
                                </p>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>• Arrêté du 7 août 2015 (dépannage d'urgence)</li>
                                    <li>• Norme NF EN 12209 (serrures)</li>
                                    <li>• Code de la construction (portes blindées)</li>
                                    <li>• Obligations d'assurance professionnelle</li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Conseils de Sécurité */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-3xl font-bold text-secondary mb-4">Conseils de Prévention</h2>
                            <p className="text-gray-600">Protégez votre domicile efficacement</p>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "Vérification Régulière",
                                    desc: "Testez vos serrures tous les 6 mois. Un mécanisme qui accroche peut signaler une usure ou une tentative d'effraction."
                                },
                                {
                                    title: "Clés de Sécurité",
                                    desc: "Privilégiez les cylindres à carte de propriété. Ils empêchent la reproduction non autorisée de vos clés."
                                },
                                {
                                    title: "Assurance Habitation",
                                    desc: "Vérifiez les exigences de votre assureur : serrure 3 points minimum souvent requise pour être bien couvert."
                                }
                            ].map((conseil, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                                >
                                    <h4 className="font-bold text-lg text-secondary mb-3">{conseil.title}</h4>
                                    <p className="text-sm text-gray-600 leading-relaxed">{conseil.desc}</p>
                                </motion.div>
                            ))}
                        </div>
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
