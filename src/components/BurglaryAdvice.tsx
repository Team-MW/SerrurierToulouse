
import { motion } from 'framer-motion';
import { ShieldAlert, PhoneCall, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const BurglaryAdvice = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-secondary text-3xl md:text-4xl font-bold mb-4">
                        Que faire après un cambriolage ?
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Victime d'une effraction ? Restez calme et suivez ces étapes essentielles pour votre sécurité et vos démarches.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: <ShieldAlert size={48} className="text-red-500 mb-4" />,
                            step: "1. Ne touchez à rien et Appelez la Police/Gendarmerie",
                            desc: "Il est impératif de prévenir les forces de l'ordre (17 ou 112) immédiatement. Ne touchez à rien pour préserver les éventuelles preuves (empreintes, traces d'effraction) jusqu'à leur arrivée."
                        },
                        {
                            icon: <PhoneCall size={48} className="text-primary mb-4" />,
                            step: "2. Contactez votre Serrurier pour sécuriser",
                            desc: "Une fois les forces de l'ordre passées, nous intervenons en urgence pour effectuer une fermeture provisoire ou remplacer les serrures endommagées afin de sécuriser votre domicile immédiatement."
                        },
                        {
                            icon: <FileText size={48} className="text-blue-500 mb-4" />,
                            step: "3. Déclarez le sinistre à votre Assurance",
                            desc: "Vous disposez de 2 jours ouvrés pour déclarer le cambriolage à votre assurance. Conservez notre facture, elle sera nécessaire pour votre indemnisation. Nous sommes agréés par la plupart des assurances."
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-gray-50 p-8 rounded-xl border-l-4 border-l-primary shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mb-6 shadow-sm mx-auto md:mx-0">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">{item.step}</h3>
                            <p className="text-gray-600 prominent-text leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center bg-blue-50 p-8 rounded-xl border border-blue-100">
                    <p className="text-lg text-blue-800 font-medium mb-4">
                        <span className="font-bold">Important :</span> Nous sommes habitués à travailler en relation avec les assurances pour les dossiers cambriolage.
                        Nos tarifs sont agréés et nos factures détaillées facilitent vos remboursements.
                    </p>
                    <Link to="/contact" className="inline-block bg-primary hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors shadow-lg shadow-orange-500/30">
                        Demander une sécurisation d'urgence
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default BurglaryAdvice;
