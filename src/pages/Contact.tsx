import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Shield } from 'lucide-react';
import serrurierImage from '../assets/contact-hero.png';

import { useEffect, useRef } from 'react';

const Contact = () => {
    const formContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://form.jotform.com/jsform/253384764001353";
        script.async = true;

        if (formContainerRef.current) {
            formContainerRef.current.appendChild(script);
        }

        return () => {
            if (formContainerRef.current) {
                formContainerRef.current.innerHTML = '';
            }
        };
    }, []);

    return (
        <>
            <Helmet>
                <title>Contact Serrurier Toulouse | Devis Gratuit & Dépannage Urgent 24/7</title>
                <meta name="description" content="Contactez notre serrurier à Toulouse pour un dépannage urgent ou un devis gratuit. Disponible 24/7 au 06 71 87 60 80. Protection RGPD de vos données personnelles." />
                <meta name="keywords" content="contact serrurier toulouse, devis serrurerie, dépannage urgent, serrurier 24/7, RGPD" />
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
                            Contactez-nous
                        </motion.h1>
                        <p className="text-gray-300 max-w-2xl mx-auto">Une urgence ? Appelez-nous directement. Pour un projet, remplissez le formulaire.</p>
                    </div>
                </section>
            </div>

            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16">

                        {/* Contact Info */}
                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="space-y-8"
                        >
                            <h2 className="text-2xl font-bold text-secondary mb-6">Informations</h2>

                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                                <div className="bg-primary/10 p-3 rounded-full">
                                    <Phone className="text-primary w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-secondary text-lg">Téléphone (Urgence 24/7)</h3>
                                    <p className="text-gray-500 mb-2">Disponible jour et nuit, week-end inclus.</p>
                                    <a href="tel:+33671876080" className="text-2xl font-bold text-primary hover:text-orange-600 transition-colors">06 71 87 60 80</a>
                                </div>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                                <div className="bg-primary/10 p-3 rounded-full">
                                    <MapPin className="text-primary w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-secondary text-lg">Adresse</h3>
                                    <p className="text-gray-500">12 Rue de la République<br />31000 Toulouse, France</p>
                                </div>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                                <div className="bg-primary/10 p-3 rounded-full">
                                    <Mail className="text-primary w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-secondary text-lg">Email</h3>
                                    <p className="text-gray-500 mb-2">Réponse sous 24h pour les devis.</p>
                                    <a href="mailto:contact@leserruriertoulousain.com" className="font-medium text-secondary hover:text-primary transition-colors">contact@leserruriertoulousain.com</a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ x: 20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
                        >
                            <h2 className="text-2xl font-bold text-secondary mb-6">Demander un Devis Gratuit</h2>
                            <div ref={formContainerRef} className="w-full min-h-[500px]"></div>
                        </motion.div>

                    </div>

                    {/* Section RGPD et Protection des Données */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-16 max-w-4xl mx-auto"
                    >
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100">
                            <h3 className="text-2xl font-bold text-secondary mb-6 flex items-center gap-3">
                                <Shield className="text-primary" size={28} />
                                Protection de vos Données Personnelles
                            </h3>
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p>
                                    <strong className="text-secondary">Conformité RGPD :</strong> Vos données personnelles sont traitées conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés du 6 janvier 1978 modifiée.
                                </p>
                                <div className="grid md:grid-cols-2 gap-6 mt-6">
                                    <div className="bg-white p-4 rounded-lg">
                                        <h4 className="font-bold text-secondary mb-2">📋 Finalité du traitement</h4>
                                        <p className="text-sm">Les informations collectées via ce formulaire sont utilisées uniquement pour traiter votre demande de devis ou de dépannage.</p>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg">
                                        <h4 className="font-bold text-secondary mb-2">⏱️ Conservation des données</h4>
                                        <p className="text-sm">Vos données sont conservées pendant 3 ans maximum, conformément aux recommandations de la CNIL.</p>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg">
                                        <h4 className="font-bold text-secondary mb-2">🔒 Sécurité</h4>
                                        <p className="text-sm">Nous mettons en œuvre toutes les mesures techniques et organisationnelles pour protéger vos données contre tout accès non autorisé.</p>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg">
                                        <h4 className="font-bold text-secondary mb-2">✅ Vos droits</h4>
                                        <p className="text-sm">Vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition. Contactez-nous à contact@leserruriertoulousain.com</p>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600 mt-6 italic">
                                    En soumettant ce formulaire, vous acceptez que vos données soient utilisées pour répondre à votre demande. Aucune donnée ne sera transmise à des tiers sans votre consentement explicite.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Map Placeholder */}
            <section className="h-96 w-full bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-bold text-xl">
                    <MapPin size={48} className="mb-2" />
                    Carte Google Maps Intégrée ici
                </div>
                {/* In real app, embed Google Map iframe here */}
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46212.18968953187!2d1.4110363!3d43.6044622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebb6fec7552ff%3A0x406f69c2f411030!2sToulouse!5e0!3m2!1sen!2sfr!4v1709477000000!5m2!1sen!2sfr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Map Toulouse"
                ></iframe>
            </section>
        </>
    );
};

export default Contact;
