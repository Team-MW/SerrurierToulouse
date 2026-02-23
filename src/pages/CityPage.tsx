
import { useParams, Navigate, Link } from 'react-router-dom';
import { cityData } from '../data/citiesData';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Phone, ArrowRight, MapPin, CheckCircle, Clock, ShieldCheck } from 'lucide-react';
import serrurierImage from '../assets/zones-hero.png';
import Reviews from '../components/Reviews';

const FAQAccordion = ({ items }: { items: { question: string; answer: string }[] }) => {
    return (
        <div className="space-y-4">
            {items.map((item, index) => (
                <details key={index} className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                        <h4 className="font-bold text-gray-800 group-hover:text-primary transition-colors pr-4">{item.question}</h4>
                        <span className="text-gray-400 group-open:rotate-180 transition-transform duration-300">
                            ▼
                        </span>
                    </summary>
                    <div className="px-6 pb-6 text-gray-600 border-t border-gray-50 pt-4 leading-relaxed">
                        {item.answer}
                    </div>
                </details>
            ))}
        </div>
    );
};

const CityPage = () => {
    const { citySlug } = useParams();
    const city = Object.values(cityData).find(c => c.slug === citySlug);

    if (!city) {
        return <Navigate to="/zones-intervention" replace />;
    }

    return (
        <>
            <Helmet>
                <title>{city.seoTitle}</title>
                <meta name="description" content={city.seoDesc} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "name": city.seoTitle,
                        "image": "https://leserruriertoulousain.com/logo.png",
                        "url": `https://leserruriertoulousain.com/intervention/${city.slug}`,
                        "telephone": "+33758484477",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": city.name,
                            "postalCode": city.zip,
                            "addressCountry": "FR"
                        },
                        "openingHoursSpecification": {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                            "opens": "00:00",
                            "closes": "23:59"
                        },
                        "priceRange": "€€"
                    })
                }} />
            </Helmet>

            {/* Hero Section */}
            <div className="relative -mt-20">
                <img
                    src={serrurierImage}
                    alt={`Serrurier à ${city.name}`}
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-secondary/95 via-secondary/80 to-transparent z-10"></div>

                <section className="relative text-white py-20 pt-32 md:pt-48 container mx-auto px-4 z-20 min-h-[600px] h-auto flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl"
                    >
                        {/* Breadcrumbs */}
                        <div className="flex flex-wrap items-center gap-2 text-sm text-gray-300 mb-6 font-medium">
                            <Link to="/" className="hover:text-white transition-colors">Accueil</Link>
                            <span>/</span>
                            <Link to="/zones-intervention" className="hover:text-white transition-colors">Zones d'Intervention</Link>
                            <span>/</span>
                            <span className="text-primary">{city.name}</span>
                        </div>

                        <div className="flex items-center gap-2 mb-6 bg-white/10 backdrop-blur-md w-fit px-4 py-2 rounded-full border border-white/20">
                            <MapPin size={18} className="text-primary" />
                            <span className="text-sm font-bold uppercase tracking-wider">Intervention {city.zip}</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                            Serrurier à <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">{city.name}</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-2xl leading-relaxed font-light">
                            {city.description}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="tel:+33758484477"
                                className="bg-primary hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-orange-500/30 transform hover:-translate-y-1"
                            >
                                <Phone size={24} />
                                Urgence {city.name}
                            </a>
                            <Link
                                to="/contact"
                                className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 transition-all transform hover:-translate-y-1"
                            >
                                Devis Gratuit <ArrowRight size={20} />
                            </Link>
                        </div>
                    </motion.div>
                </section>
            </div>

            {/* Main Content */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-3 gap-16">

                        {/* Left Column: Content */}
                        <div className="lg:col-span-2">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-4xl font-bold text-secondary mb-8">
                                    Service de Serrurerie Professionnel à <span className="text-primary">{city.name}</span>
                                </h2>
                                <div className="prose prose-lg text-gray-600 leading-relaxed mb-10">
                                    <p className="text-xl font-medium text-gray-800 mb-6">
                                        Faites appel à un artisan local de confiance pour tous vos problèmes de serrurerie sur {city.name} et ses environs.
                                    </p>
                                    <p className="mb-6">{city.content}</p>
                                    <p>
                                        Notre équipe locale connaît parfaitement le secteur de {city.name} ({city.zip}).
                                        Que ce soit pour une <strong className="text-secondary">urgence</strong> ou une <strong className="text-secondary">installation programmée</strong>, nous garantissons un travail soigné, respectueux de votre domicile et conforme aux normes les plus strictes.
                                    </p>
                                </div>

                                {/* Key Benefits Grid */}
                                <div className="grid sm:grid-cols-2 gap-6 mb-12">
                                    <div className="flex items-start gap-4 bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-primary/30 transition-colors">
                                        <div className="bg-white p-3 rounded-lg shadow-sm text-primary">
                                            <Clock size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Rapidité</h4>
                                            <p className="text-sm text-gray-600">Chez vous en moins de 30 min</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-primary/30 transition-colors">
                                        <div className="bg-white p-3 rounded-lg shadow-sm text-primary">
                                            <ShieldCheck size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Confiance</h4>
                                            <p className="text-sm text-gray-600">Agréé assurances & A2P</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-primary/30 transition-colors">
                                        <div className="bg-white p-3 rounded-lg shadow-sm text-primary">
                                            <CheckCircle size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Transparence</h4>
                                            <p className="text-sm text-gray-600">Devis gratuit et détaillé</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-primary/30 transition-colors">
                                        <div className="bg-white p-3 rounded-lg shadow-sm text-primary">
                                            <MapPin size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Proximité</h4>
                                            <p className="text-sm text-gray-600">Artisan 100% local</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Map Placeholder / Visual */}
                                <div className="bg-gray-100 rounded-2xl p-4 h-64 flex items-center justify-center relative overflow-hidden group">
                                    {/* This is a visual representation since we don't have a real map API key. 
                                         Ideally, this would be an iframe or a static map image. */}
                                    <div className="absolute inset-0 opacity-10 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/Toulouse_OSM_map.png')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700"></div>
                                    <div className="relative z-10 text-center bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-md border border-gray-200">
                                        <MapPin className="mx-auto text-primary mb-2 w-10 h-10 animate-bounce" />
                                        <p className="font-bold text-secondary">Zone d'intervention active</p>
                                        <p className="text-sm text-gray-500">{city.name} ({city.zip})</p>
                                    </div>
                                </div>

                            </motion.div>
                        </div>

                        {/* Right Column: FAQ & Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 sticky top-32">
                                <h3 className="text-2xl font-bold text-secondary mb-2">Questions Fréquentes</h3>
                                <p className="text-gray-500 mb-6 text-sm">Tout savoir sur nos interventions à {city.name}</p>

                                <FAQAccordion items={city.faq} />

                                <div className="mt-8 bg-blue-600 text-white p-6 rounded-xl text-center">
                                    <p className="font-medium mb-4">Une autre question ?</p>
                                    <a href="tel:+33758484477" className="inline-block bg-white text-blue-600 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors w-full">
                                        Nous appeler
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Other Zones Links */}
            <section className="py-20 bg-gray-50 border-t border-gray-200">
                <div className="container mx-auto px-4 text-center">
                    <h3 className="text-2xl font-bold text-secondary mb-8">Interventions à proximité de {city.name}</h3>
                    <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                        {Object.values(cityData)
                            .filter(c => c.slug !== city.slug)
                            .map((c) => (
                                <Link
                                    key={c.slug}
                                    to={`/intervention/${c.slug}`}
                                    className="bg-white px-5 py-2.5 rounded-lg shadow-sm hover:shadow-md hover:text-primary hover:-translate-y-0.5 transition-all border border-gray-200 font-medium text-gray-600 text-sm"
                                >
                                    Serrurier {c.name}
                                </Link>
                            ))}
                    </div>
                </div>
            </section>

            <Reviews />
        </>
    );
};

export default CityPage;
