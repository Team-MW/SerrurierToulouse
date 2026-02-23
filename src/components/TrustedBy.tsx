
import { motion } from 'framer-motion';
import partner1 from '../assets/logopartenaire.jpeg';
import partner2 from '../assets/logopartenaire.webp';
import partner3 from '../assets/logopartenaire2.png';
import partner4 from '../assets/logopartenaire3.png';

const TrustedBy = () => {
    const partners = [
        { src: partner1, alt: "Orchestra" },
        { src: partner2, alt: "Maison du Monde" },
        { src: partner3, alt: "Maison Ranger" },
        { src: partner4, alt: "Et bien d'autres..." },
    ];

    // Duplicate enough times to ensure smooth scrolling on large screens
    // 4 items * 4 duplicates = 16 items.
    const carouselItems = [...partners, ...partners, ...partners, ...partners];

    return (
        <section className="py-10 md:py-20 bg-white border-y border-gray-100 overflow-hidden relative">
            <div className="container mx-auto px-4 mb-12 text-center">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">Ils nous ont fait confiance</h3>
                <p className="text-gray-500">Des partenaires et clients satisfaits</p>
            </div>

            <div className="relative w-full overflow-hidden">
                {/* Gradient Masks for a premium fade effect */}
                <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointers-events-none"></div>
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointers-events-none"></div>

                <motion.div
                    className="flex items-center gap-8 md:gap-12 w-max"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30,
                            ease: "linear",
                        },
                    }}
                >
                    {/* Render the items twice to create the infinite loop effect seamlessly */}
                    {[...carouselItems, ...carouselItems].map((partner, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-32 h-24 md:w-48 md:h-32 bg-white rounded-xl flex items-center justify-center p-4 md:p-6 border border-gray-100 shadow-sm hover:translate-y-[-4px] hover:shadow-md transition-all duration-300"
                        >
                            <img
                                src={partner.src}
                                alt={partner.alt}
                                className="w-full h-full object-contain"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TrustedBy;
