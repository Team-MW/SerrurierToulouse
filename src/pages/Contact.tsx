import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Merci ! Votre demande a été envoyée. Nous vous contacterons rapidement.");
    };

    return (
        <>
            <Helmet>
                <title>Contact Urgent - Serrurier Toulouse</title>
                <meta name="description" content="Contactez notre serrurier à Toulouse pour un dépannage urgent ou un devis gratuit. Disponible 24/7 au 06 71 87 60 80." />
            </Helmet>

            <section className="bg-secondary text-white py-20 relative text-center">
                <motion.h1
                    className="text-4xl font-bold mb-4"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    Contactez-nous
                </motion.h1>
                <p className="text-gray-300 max-w-2xl mx-auto">Une urgence ? Appelez-nous directement. Pour un projet, remplissez le formulaire.</p>
            </section>

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
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Nom complet</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Votre nom" required />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
                                        <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="06 12 34 56 78" required />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                    <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="votre@email.com" required />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Sujet</label>
                                    <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all">
                                        <option>Urgence - Porte claquée/fermée</option>
                                        <option>Changement de serrure</option>
                                        <option>Blindage de porte</option>
                                        <option>Autre demande</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                    <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Décrivez votre problème..." required></textarea>
                                </div>
                                <button type="submit" className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20 flex justify-center items-center gap-2">
                                    <Send size={20} />
                                    Envoyer ma demande
                                </button>
                            </form>
                        </motion.div>

                    </div>
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
