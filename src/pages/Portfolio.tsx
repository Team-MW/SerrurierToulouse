import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Lock, ShieldCheck, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    const projects = [
        {
            title: "Changement complet serrure 3 points",
            category: "Sécurisation",
            description: "Installation d'une serrure FICHET 3 points A2P** pour sécuriser un appartement en rez-de-chaussée.",
            image: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2070&auto=format&fit=crop",
            tag: "Résidentiel"
        },
        {
            title: "Blindage porte d'entrée",
            category: "Blindage",
            description: "Pose d'un bloc-porte blindé certifié pour une maison individuelle.",
            image: "https://images.unsplash.com/photo-1558002038-1091a166111c?q=80&w=2070&auto=format&fit=crop",
            tag: "Maison"
        },
        {
            title: "Ouverture porte claquée",
            category: "Dépannage",
            description: "Intervention rapide pour une ouverture fine sans destruction de la serrure.",
            image: "https://images.unsplash.com/photo-1622372738946-b8db23ef4e57?q=80&w=2070&auto=format&fit=crop",
            tag: "Urgence"
        }
    ];

    return (
        <>
            <Helmet>
                <title>Portfolio - Réalisations Serrurier Toulouse</title>
                <meta name="description" content="Découvrez nos interventions et installations de serrurerie à Toulouse en images." />
            </Helmet>

            <section className="bg-secondary text-white py-20 relative text-center">
                <motion.h1
                    className="text-4xl font-bold mb-4"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    Nos Réalisations
                </motion.h1>
                <p className="text-gray-300 max-w-2xl mx-auto">La qualité de notre travail en images.</p>
            </section>

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
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-secondary mb-8">Pourquoi nous faire confiance ?</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center p-6 bg-gray-50 rounded-lg">
                            <ShieldCheck size={48} className="mx-auto text-primary mb-4" />
                            <h3 className="font-bold text-lg mb-2">Garantie Décennale</h3>
                            <p className="text-gray-500 text-sm">Tous nos travaux sont couverts par une assurance responsabilité civile et décennale.</p>
                        </div>
                        <div className="text-center p-6 bg-gray-50 rounded-lg">
                            <Home size={48} className="mx-auto text-primary mb-4" />
                            <h3 className="font-bold text-lg mb-2">Intervention Propre</h3>
                            <p className="text-gray-500 text-sm">Nous laissons le chantier propre après chaque intervention.</p>
                        </div>
                        <div className="text-center p-6 bg-gray-50 rounded-lg">
                            <Lock size={48} className="mx-auto text-primary mb-4" />
                            <h3 className="font-bold text-lg mb-2">Matériel Certifié</h3>
                            <p className="text-gray-500 text-sm">Utilisation exclusive de produits de grandes marques certifiées A2P.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Portfolio;
