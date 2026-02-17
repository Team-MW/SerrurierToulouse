
export const cityData: Record<string, {
    name: string;
    slug: string;
    zip: string;
    description: string;
    seoTitle: string;
    seoDesc: string;
    content: string;
    faq: { question: string; answer: string }[];
}> = {
    "toulouse": {
        name: "Toulouse",
        slug: "toulouse",
        zip: "31000",
        seoTitle: "Serrurier Toulouse 31000 - Dépannage Urgence & Installation 24/7",
        seoDesc: "Besoin d'un serrurier à Toulouse ? Intervention en 30 min pour ouverture de porte, changement de serrure et sécurisation. Artisan agréé assurances.",
        description: "Capitale de l'Occitanie, Toulouse est au cœur de notre zone d'intervention. Nos équipes quadrillent la ville rose pour intervenir en un temps record, du Capitole à Compans-Caffarelli, en passant par Saint-Cyprien et les Carmes.",
        content: "Nos artisans serruriers à Toulouse sont disponibles jour et nuit pour répondre à toutes vos urgences. Que vous soyez bloqué sur le pas de votre porte rue Alsace-Lorraine ou que vous ayez besoin de sécuriser votre commerce aux Minimes, nous sommes là. Nous connaissons parfaitement les spécificités des architectures toulousaines, des vieilles portes en bois du centre historique aux systèmes modernes des résidences récentes.",
        faq: [
            { question: "Quel est le délai d'intervention au centre-ville de Toulouse ?", answer: "Nos serruriers à moto interviennent en moins de 30 minutes, même aux heures de pointe." },
            { question: "Intervenez-vous le dimanche à Toulouse ?", answer: "Oui, notre service est opérationnel 24h/24 et 7j/7, dimanches et jours fériés inclus." },
            { question: "Vos tarifs sont-ils agréés par les assurances ?", answer: "Absolument, nous travaillons avec les grilles tarifaires des principales assurances (Macif, Axa, Allianz...) pour faciliter vos remboursements." }
        ]
    },
    "cugnaux": {
        name: "Cugnaux",
        slug: "cugnaux",
        zip: "31270",
        seoTitle: "Serrurier Cugnaux 31270 - Artisan Local Dépannage Rapide",
        seoDesc: "Serrurier expert à Cugnaux. Ouverture de porte, blindage et urgence serrurerie. Devis gratuit et intervention rapide sur 31270.",
        description: "Située au sud-ouest de Toulouse, Cugnaux est l'une de nos zones prioritaires. Nous intervenons rapidement auprès des Cugnams, que ce soit pour des pavillons ou des appartements.",
        content: "À Cugnaux, la sécurité de votre domicile est notre priorité. Nos techniciens interviennent couramment pour l'installation de serrures haute sécurité A2P dans les quartiers résidentiels. Victime d'un cambriolage ou d'une tentative d'effraction ? Nous sécurisons votre domicile dans l'heure suivant votre appel.",
        faq: [
            { question: "Faites-vous des devis gratuits à Cugnaux ?", answer: "Oui, le déplacement et le devis sont gratuits pour toute demande d'installation." },
            { question: "Installez-vous des portes blindées à Cugnaux ?", answer: "Oui, nous proposons une large gamme de portes blindées certifiées (Picard, Tordjman...) adaptées aux maisons et appartements." }
        ]
    },
    "villeneuve-tolosane": {
        name: "Villeneuve-Tolosane",
        slug: "villeneuve-tolosane",
        zip: "31270",
        seoTitle: "Serrurier Villeneuve-Tolosane - Dépannage 24/24 Serrurerie",
        seoDesc: "Urgence serrurerie à Villeneuve-Tolosane ? Votre artisan local intervient pour ouvrir votre porte ou changer votre serrure. Prix transparents.",
        description: "Nous assurons une permanence serrurerie à Villeneuve-Tolosane. Proximité et réactivité sont nos maîtres-mots pour servir les Villeneuvois.",
        content: "Pour tous vos besoins en serrurerie à Villeneuve-Tolosane, faites appel à un expert local. Nous réalisons l'ouverture de portes claquées sans dégâts, le remplacement de cylindres après perte de clés, et la pose de verrous supplémentaires pour renforcer votre sécurité.",
        faq: [
            { question: "Je suis enfermé dehors à Villeneuve-Tolosane, que faire ?", answer: "Appelez-nous immédiatement. Ne tentez pas de forcer la serrure, vous risqueriez d'aggraver la situation. Nous arrivons rapidement." },
            { question: "Acceptez-vous les paiements par carte bancaire ?", answer: "Oui, tous nos artisans sont équipés de terminaux de paiement pour votre confort." }
        ]
    },
    "frouzins": {
        name: "Frouzins",
        slug: "frouzins",
        zip: "31270",
        seoTitle: "Serrurier Frouzins 31270 - Expert Sécurité & Ouverture de Porte",
        seoDesc: "Serrurier à Frouzins : intervention efficace et soignée. Porte bloquée, serrure cassée ? Contactez votre artisan de proximité.",
        description: "Intervention rapide garantie à Frouzins. Nos serruriers sont basés à proximité pour vous dépanner dans les plus brefs délais.",
        content: "Habitants de Frouzins, ne restez pas bloqués devant chez vous. Notre équipe mobile couvre toute la commune. Nous sommes spécialisés dans les interventions d'urgence mais aussi dans la rénovation de systèmes de fermeture (volets roulants, grilles défensives).",
        faq: [
            { question: "Quel est le prix d'une ouverture de porte à Frouzins ?", answer: "Nos tarifs sont fixes et annoncés avant intervention. Une ouverture de porte claquée simple commence à partir de tarifs très compétitifs." },
            { question: "Pouvez-vous remplacer une serrure Fichet à Frouzins ?", answer: "Oui, nous sommes habilités à intervenir sur toutes les grandes marques de haute sécurité." }
        ]
    },
    "plaisance-du-touch": {
        name: "Plaisance-du-Touch",
        slug: "plaisance-du-touch",
        zip: "31830",
        seoTitle: "Serrurier Plaisance-du-Touch - Dépannage Urgent 31830",
        seoDesc: "Serrurier sérieux à Plaisance-du-Touch. Ouverture porte, changement cylindre. Service de qualité agréé assurances.",
        description: "À l'ouest de Toulouse, Plaisance-du-Touch bénéficie de notre couverture complète. Sécurisation de villas et appartements.",
        content: "Nous accompagnons les résidents de Plaisance-du-Touch dans la sécurisation de leur habitat. Au-delà du dépannage, nous réalisons des audits de sécurité gratuits pour identifier les points faibles de votre maison (portes de garage, accès arrière, baies vitrées).",
        faq: [
            { question: "Intervenez-vous aux alentours de Plaisance-du-Touch ?", answer: "Oui, nous couvrons Plaisance et toutes les communes limitrophes." },
            { question: "Le devis est-il obligatoire ?", answer: "Oui, conformément à la loi, nous vous présentons un devis détaillé avant tout début de travaux." }
        ]
    },
    "saint-simon": {
        name: "Saint-Simon",
        slug: "saint-simon",
        zip: "31100",
        seoTitle: "Serrurier Toulouse Saint-Simon - Artisan Quartier 31100",
        seoDesc: "Votre serrurier de quartier à Saint-Simon. Rapidité et confiance pour tous travaux de serrurerie et vitrerie.",
        description: "Le quartier de Saint-Simon et ses environs sont desservis quotidiennement par nos équipes mobiles.",
        content: "Serrurier de proximité à Saint-Simon, nous connaissons bien ce quartier résidentiel. Nous y intervenons souvent pour la pose de serrures 3 points et le blindage de portes d'entrée, assurant ainsi la tranquillité des familles.",
        faq: [
            { question: "Combien de temps pour changer une serrure à Saint-Simon ?", answer: "Si nous avons le modèle en stock (ce qui est le cas pour 90% des serrures), le remplacement est immédiat." },
            { question: "Garanti sur les pièces ?", answer: "Oui, toutes nos serrures installées sont garanties pièces et main d'œuvre." }
        ]
    },
    "leysses": { // Correction from user input "seisse" likely "Seysses"
        name: "Seysses",
        slug: "seysses",
        zip: "31600",
        seoTitle: "Serrurier Seysses 31600 - Intervention Rapide Domicile",
        seoDesc: "Dépannage serrurerie à Seysses. Artisan qualifié pour ouverture de porte et sécurisation après cambriolage.",
        description: "Nous intervenons à Seysses pour tous types de dépannages serrurerie, du simple cylindre à la porte blindée.",
        content: "À Seysses, comptez sur notre réactivité. Une clé cassée dans la serrure ? Une serrure grippée ? Nos artisans disposent de l'outillage spécifique (extracteurs de clés, lubrifiants pro) pour résoudre votre problème sans forcément tout remplacer.",
        faq: [
            { question: "Intervenez-vous le soir à Seysses ?", answer: "Oui, nous assurons une astreinte de nuit pour les urgences." },
            { question: "Posez-vous des verrous de sécurité ?", answer: "Oui, c'est une solution économique et efficace que nous installons fréquemment." }
        ]
    },
    "blagnac": {
        name: "Blagnac",
        slug: "blagnac",
        zip: "31700",
        seoTitle: "Serrurier Blagnac 31700 - Proche Aéroport & Centre",
        seoDesc: "Serrurier réactif à Blagnac. Particuliers et professionnels. Ouverture porte, rideaux métalliques, coffres-forts.",
        description: "Zone économique majeure et résidentielle, Blagnac est au cœur de notre activité. Intervention rapide garantie.",
        content: "Nous servons aussi bien les particuliers du vieux Blagnac que les entreprises de la zone aéroportuaire. Nos compétences s'étendent au déblocage de rideaux métalliques de magasins et à la gestion d'organigrammes de clés pour les bureaux.",
        faq: [
            { question: "Intervenez-vous pour les entreprises à Blagnac ?", answer: "Oui, nous avons une offre dédiée aux professionnels (bureaux, commerces, entrepôts)." },
            { question: "Délai d'intervention à Blagnac ?", answer: "Environ 20 à 30 minutes selon la circulation." }
        ]
    },
    "colomiers": {
        name: "Colomiers",
        slug: "colomiers",
        zip: "31770",
        seoTitle: "Serrurier Colomiers 31770 - Artisan Confiance & Prix Juste",
        seoDesc: "Besoin d'un serrurier à Colomiers ? Service 24/7. Ouverture fine, changement serrure toutes marques. Devis clair.",
        description: "Deuxième ville de Haute-Garonne, Colomiers est couverte intégralement par nos artisans serruriers.",
        content: "À Colomiers, nous nous engageons sur la qualité. Que vous habitiez en centre-ville ou dans les zones pavillonnaires, notre niveau de service reste le même : excellence, propreté du chantier et pédagogie sur les travaux effectués.",
        faq: [
            { question: "Remplacez-vous les vitres cassées à Colomiers ?", answer: "Oui, nous proposons également un service de vitrerie et mise en sécurité provisoire." },
            { question: "Les devis sont-ils gratuits ?", answer: "Oui, totalement gratuits et sans engagement." }
        ]
    },
    "tournefeuille": {
        name: "Tournefeuille",
        slug: "tournefeuille",
        zip: "31170",
        seoTitle: "Serrurier Tournefeuille 31170 - Dépannage Urgent",
        seoDesc: "Votre serrurier à Tournefeuille. Disponible jour et nuit pour tout problème de serrure, porte ou volet roulant.",
        description: "Tournefeuille et ses quartiers résidentiels sont parfaitement connus de nos techniciens. Sécurité maximale garantie.",
        content: "Protéger votre foyer à Tournefeuille est notre mission. Nous installons des portes blindées Tordjman et Picard, références en la matière. Nous intervenons également pour l'entretien et la réparation de vos serrures actuelles pour prolonger leur durée de vie.",
        faq: [
            { question: "Posez-vous des alarmes à Tournefeuille ?", answer: "Nous pouvons vous conseiller sur des systèmes de sécurité complémentaires à nos serrures." },
            { question: "Puis-je prendre rendez-vous pour un samedi ?", answer: "Bien sûr, nous nous adaptons à votre emploi du temps." }
        ]
    }
};
