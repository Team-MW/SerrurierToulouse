import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Scale, Shield, FileText } from 'lucide-react';
import serrurierImage from '../assets/serrurier-depaneur.jpg';

const MentionsLegales = () => {
    return (
        <>
            <Helmet>
                <title>Mentions Légales - Serrurier Toulouse</title>
                <meta name="description" content="Mentions légales du site Serrurier Toulouse. Informations sur l'éditeur, l'hébergeur et les conditions d'utilisation." />
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
                            Mentions Légales
                        </motion.h1>
                        <p className="text-gray-300 max-w-2xl mx-auto">Informations légales et réglementaires</p>
                    </div>
                </section>
            </div>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">

                    {/* Éditeur du site */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12 bg-gray-50 p-8 rounded-2xl border border-gray-100"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="bg-primary/10 p-3 rounded-full">
                                <FileText className="text-primary" size={24} />
                            </div>
                            <h2 className="text-2xl font-bold text-secondary">1. Éditeur du site</h2>
                        </div>
                        <div className="space-y-3 text-gray-700">
                            <p><strong>Raison sociale :</strong> Serrurier Toulouse</p>
                            <p><strong>Forme juridique :</strong> Entreprise individuelle</p>
                            <p><strong>Adresse :</strong> 12 Rue de la République, 31000 Toulouse, France</p>
                            <p><strong>Téléphone :</strong> <a href="tel:+33671876080" className="text-primary hover:underline">06 71 87 60 80</a></p>
                            <p><strong>Email :</strong> <a href="mailto:contact@leserruriertoulousain.com" className="text-primary hover:underline">contact@leserruriertoulousain.com</a></p>
                            <p><strong>SIRET :</strong> XXX XXX XXX XXXXX</p>
                            <p><strong>Directeur de la publication :</strong> [Nom du responsable]</p>
                        </div>
                    </motion.div>

                    {/* Hébergeur */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mb-12 bg-gray-50 p-8 rounded-2xl border border-gray-100"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="bg-primary/10 p-3 rounded-full">
                                <Shield className="text-primary" size={24} />
                            </div>
                            <h2 className="text-2xl font-bold text-secondary">2. Hébergement</h2>
                        </div>
                        <div className="space-y-3 text-gray-700">
                            <p><strong>Hébergeur :</strong> [Nom de l'hébergeur]</p>
                            <p><strong>Adresse :</strong> [Adresse de l'hébergeur]</p>
                            <p><strong>Téléphone :</strong> [Téléphone de l'hébergeur]</p>
                        </div>
                    </motion.div>

                    {/* Propriété intellectuelle */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mb-12 bg-gray-50 p-8 rounded-2xl border border-gray-100"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="bg-primary/10 p-3 rounded-full">
                                <Scale className="text-primary" size={24} />
                            </div>
                            <h2 className="text-2xl font-bold text-secondary">3. Propriété intellectuelle</h2>
                        </div>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>
                                L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle.
                                Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                            </p>
                            <p>
                                La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite
                                sauf autorisation expresse du directeur de la publication.
                            </p>
                            <p>
                                Les marques et logos figurant sur le site sont des marques déposées. Toute reproduction totale ou partielle de ces marques
                                sans autorisation préalable et écrite est strictement interdite.
                            </p>
                        </div>
                    </motion.div>

                    {/* Protection des données */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="mb-12 bg-gray-50 p-8 rounded-2xl border border-gray-100"
                    >
                        <h2 className="text-2xl font-bold text-secondary mb-6">4. Protection des données personnelles (RGPD)</h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>
                                Conformément à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée et au Règlement Général sur la Protection
                                des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.
                            </p>
                            <p>
                                Les informations recueillies sur ce site sont enregistrées dans un fichier informatisé par Serrurier Toulouse pour la gestion
                                des demandes de devis et de contact. Elles sont conservées pendant 3 ans et sont destinées uniquement à l'usage interne de l'entreprise.
                            </p>
                            <p>
                                Pour exercer vos droits, vous pouvez nous contacter par email à{' '}
                                <a href="mailto:contact@leserruriertoulousain.com" className="text-primary hover:underline font-semibold">
                                    contact@leserruriertoulousain.com
                                </a>
                                {' '}ou par courrier à l'adresse indiquée ci-dessus.
                            </p>
                        </div>
                    </motion.div>

                    {/* Cookies */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="mb-12 bg-gray-50 p-8 rounded-2xl border border-gray-100"
                    >
                        <h2 className="text-2xl font-bold text-secondary mb-6">5. Cookies</h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>
                                Ce site utilise des cookies pour améliorer l'expérience utilisateur et réaliser des statistiques de visites.
                                Un cookie est un petit fichier texte déposé sur votre ordinateur lors de la visite d'un site.
                            </p>
                            <p>
                                Vous pouvez à tout moment désactiver les cookies dans les paramètres de votre navigateur. Cependant, certaines fonctionnalités
                                du site pourraient ne plus être disponibles.
                            </p>
                        </div>
                    </motion.div>

                    {/* Responsabilité */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="mb-12 bg-gray-50 p-8 rounded-2xl border border-gray-100"
                    >
                        <h2 className="text-2xl font-bold text-secondary mb-6">6. Limitation de responsabilité</h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>
                                Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement remis à jour,
                                mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes.
                            </p>
                            <p>
                                Serrurier Toulouse ne pourra être tenu responsable des dommages directs et indirects causés au matériel de l'utilisateur,
                                lors de l'accès au site, et résultant soit de l'utilisation d'un matériel ne répondant pas aux spécifications techniques requises,
                                soit de l'apparition d'un bug ou d'une incompatibilité.
                            </p>
                        </div>
                    </motion.div>

                    {/* Droit applicable */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="mb-12 bg-gray-50 p-8 rounded-2xl border border-gray-100"
                    >
                        <h2 className="text-2xl font-bold text-secondary mb-6">7. Droit applicable et juridiction compétente</h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>
                                Les présentes mentions légales sont régies par le droit français. En cas de litige et à défaut d'accord amiable,
                                le litige sera porté devant les tribunaux français conformément aux règles de compétence en vigueur.
                            </p>
                        </div>
                    </motion.div>

                    {/* Développement */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 }}
                        className="bg-gradient-to-r from-primary/5 to-orange-50 p-8 rounded-2xl border border-primary/20"
                    >
                        <h2 className="text-2xl font-bold text-secondary mb-6">8. Conception et développement</h2>
                        <div className="space-y-3 text-gray-700">
                            <p>
                                Ce site a été conçu et développé par{' '}
                                <a
                                    href="https://microdidact.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:text-orange-600 font-bold transition-colors"
                                >
                                    Microdidact
                                </a>
                            </p>
                            <p className="text-sm text-gray-600">
                                Agence digitale spécialisée dans la création de sites web professionnels et performants.
                            </p>
                        </div>
                    </motion.div>

                    {/* Date de mise à jour */}
                    <div className="mt-12 text-center text-sm text-gray-500">
                        <p>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    </div>

                </div>
            </section>
        </>
    );
};

export default MentionsLegales;
