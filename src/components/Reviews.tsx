import { Star, Quote, ExternalLink } from 'lucide-react';
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
        text: "Si vous cherchez un serrurier qui ne casse pas la porte pour une porte claquée, je vous recommande le serrurier toulousain. Simple et efficace ! Merci beaucoup 😃"
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
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-4">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                            alt="Google"
                            className="w-5 h-5"
                        />
                        <span className="text-sm font-semibold text-gray-700">Avis Google Certifiés</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
                        Ce que disent nos clients
                    </h2>

                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={28} fill="#FCD34D" className="text-yellow-400" />
                            ))}
                        </div>
                        <span className="text-2xl font-bold text-secondary">5.0</span>
                        <span className="text-gray-500">sur Google</span>
                    </div>

                    <p className="text-gray-600">
                        Plus de 150 avis clients vérifiés témoignent de notre expertise et notre réactivité
                    </p>
                </motion.div>

                {/* Reviews Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:border-primary/30 hover:shadow-lg transition-all duration-300 flex flex-col h-full"
                        >
                            {/* Header with stars and date */}
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex gap-0.5">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} size={16} fill="#FCD34D" className="text-yellow-400" />
                                    ))}
                                </div>
                                <span className="text-xs text-gray-400 flex-shrink-0">{review.date}</span>
                            </div>

                            {/* Review Text */}
                            <div className="flex-grow mb-5">
                                <Quote className="text-primary/20 mb-2" size={20} />
                                <p className="text-gray-700 text-sm leading-relaxed min-h-[100px]">
                                    {review.text}
                                </p>
                            </div>

                            {/* Author */}
                            <div className="flex items-center gap-3 pt-4 border-t border-gray-100 mt-auto">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-orange-600 flex items-center justify-center text-white font-bold shadow-sm flex-shrink-0">
                                    {review.name.charAt(0)}
                                </div>
                                <div className="flex-grow min-w-0">
                                    <p className="font-semibold text-secondary text-sm truncate">{review.name}</p>
                                    <p className="text-xs text-gray-500 whitespace-nowrap">Client vérifié</p>
                                </div>
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                                    alt="Google"
                                    className="w-4 h-4 opacity-50 flex-shrink-0"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <a
                        href="https://www.google.com/search?q=serrurier+toulouse"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-white border-2 border-gray-200 hover:border-primary text-secondary hover:text-primary font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                            alt="Google"
                            className="w-5 h-5"
                        />
                        Voir tous nos avis sur Google
                        <ExternalLink size={16} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Reviews;
