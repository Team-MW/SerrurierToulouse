import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import serrurierTravaille from '../assets/serrurier-travaille-sur-porte.jpg';

const BurglaryAdvice = () => {
    return (
        <section className="py-12 md:py-24 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10 md:mb-16"
                >
                    <h2 className="text-secondary text-2xl md:text-4xl font-bold mb-4">
                        Que faire après un cambriolage ?
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Victime d'une effraction ? Restez calme et suivez ces étapes essentielles pour votre sécurité et vos démarches.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                    {[
                        {
                            image: "https://images.unsplash.com/photo-1542382156909-9ae37b3f56fd?auto=format&fit=crop&q=80&w=800",
                            step: "1. Appelez la Police / Gendarmerie",
                            desc: "Ne touchez à rien ! Appelez immédiatement le 17 ou le 112. Les forces de l'ordre doivent constater l'effraction et relever les empreintes avant toute intervention."
                        },
                        {
                            image: serrurierTravaille,
                            step: "2. Sécurisation Immédiate",
                            desc: "Contactez-nous pour une fermeture provisoire ou un remplacement de serrure. Nous intervenons en urgence pour sécuriser votre habitation et vous rassurer."
                        },
                        {
                            image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
                            step: "3. Déclaration Assurance",
                            desc: "Portez plainte au commissariat et contactez votre assurance sous 2 jours ouvré. Nos factures détaillées et agréées facilitent votre remboursement intégral."
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-100"
                        >
                            <div className="h-48 overflow-hidden relative">
                                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply z-10"></div>
                                <img
                                    src={item.image}
                                    alt={item.step}
                                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-0 left-0 bg-primary text-white font-bold px-3 py-1 rounded-br-lg z-20">
                                    Étape {index + 1}
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-3">{item.step}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-8 md:mt-12 text-center bg-blue-50 p-6 md:p-8 rounded-xl border border-blue-100">
                    <p className="text-lg text-blue-800 font-medium mb-4">
                        <span className="font-bold">Important :</span> Nous sommes habitués à travailler en relation avec les assurances pour les dossiers cambriolage.
                        Nos tarifs sont agréés et nos factures détaillées facilitent vos remboursements.
                    </p>
                    <Link to="/contact" className="w-full md:w-auto inline-block bg-primary hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors shadow-lg shadow-orange-500/30">
                        Demander une sécurisation d'urgence
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default BurglaryAdvice;
