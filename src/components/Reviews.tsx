import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const reviews = [
    {
        name: "Laura R",
        date: "24/06/2025",
        rating: 5,
        text: "Un grand merci à Dylan. Il est venu me changer une vitre. Travail propre, efficace et soigné. Professionnel et super sympas ! je recommande vivement."
    },
    {
        name: "Mathieu Airaudo",
        date: "23/06/2025",
        rating: 5,
        text: "Arrivé en même pas 30 minutes, super sympa et très efficace je recommande !"
    },
    {
        name: "Mathieu CHAZEAU",
        date: "05/06/2025",
        rating: 5,
        text: "Serrurier au top, réactif, et travail bien fait. Artisan de confiance, nous gardons soigneusement ses coordonnées."
    },
    {
        name: "Uzades Uziel",
        date: "05/06/2025",
        rating: 5,
        text: "Entreprise, très efficasse, rapide avec prix très corrects. Merci beaucoup pour l intérêt de votre intervention et pose de matériel."
    },
    {
        name: "Nicolas P",
        date: "20/05/2025",
        rating: 5,
        text: "Si vous cherchez un serrurier qui ne casse pas la porte pour une porte claquée avec une clé dans la serrure à l intérieur de l appartement qui vous empêche d'inserer votre clé depuis l extérieur , alors je vous recommande le serrurier toulousain. Ouverture de la porte avec une feuille plastifiée. Simple et efficace ! Merci beaucoup 😃"
    },
    {
        name: "Blaise Jean Pierre",
        date: "05/05/2025",
        rating: 5,
        text: "Très satisfait du service ! Rapide et efficace + les prix très correct. Je recommande les yeux fermés . Merci pour la réactivité"
    }
];

const Reviews = () => {
    return (
        <section className="py-24 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-2">Avis Clients</h2>
                    <h3 className="text-4xl font-bold text-secondary mb-4 flex items-center justify-center gap-3">
                        Certifié par <span className="text-blue-600">Google</span>
                        <div className="flex text-yellow-500">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={24} fill="currentColor" />
                            ))}
                        </div>
                    </h3>
                    <p className="text-gray-500 max-w-2xl mx-auto">Découvrez les retours de nos clients satisfaits à Toulouse.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 relative group"
                        >
                            <Quote className="absolute top-6 right-6 text-primary/10 group-hover:text-primary/20 transition-colors" size={40} />

                            <div className="flex items-center gap-1 text-yellow-400 mb-4">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} size={16} fill="currentColor" />
                                ))}
                            </div>

                            <p className="text-gray-600 mb-6 italic leading-relaxed min-h-[80px]">"{review.text}"</p>

                            <div className="flex items-center gap-4 mt-auto border-t border-gray-100 pt-4">
                                <div className="w-10 h-10 bg-gradient-to-br from-primary to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-bold text-secondary text-sm">{review.name}</p>
                                    <p className="text-xs text-gray-400 flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block"></span>
                                        {review.date}
                                    </p>
                                </div>
                                <div className="ml-auto">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="w-5 h-5 opacity-70 grayscale group-hover:grayscale-0 transition-all" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <a
                        href="https://www.google.com/search?q=serrurier+toulouse"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-secondary font-bold hover:text-primary transition-colors border-b-2 border-primary/20 hover:border-primary pb-1"
                    >
                        Voir tous les avis sur Google <Star size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
