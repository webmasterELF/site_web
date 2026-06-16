import type { FormationCard } from "../types/formation";

// Imports des images
import imgDesignGraphique from "../assets/formations/BACHELOR-DESIGN-GRAPHIQUE.png";
import imgDesignEspace from "../assets/formations/BACHELOR-DESIGN-ESPACE.png";
import imgDesignProduit from "../assets/formations/BACHLOR-DESIGN-PRODUIT.png";
import imgPrepaDesign from "../assets/formations/PREPA-DESIGN.png";
import imgConcepteurUI from "../assets/formations/CONCPTEUR-UI.png";
import imgGraphiste from "../assets/formations/TP-GRAPHISTE.png";
import imgDessin from "../assets/formations/formation-dessin.png";
import imgArtPlastique from "../assets/formations/ART-PLASTIQUE.png";
import imgHistoireArt from "../assets/formations/histoire-de-l_art.png";
import imgDemade from "../assets/formations/DE-MADE.png";
import imgDesignGlobal from "../assets/formations/DESIGN-GLOBALDESSIN.png";
import imgConceptionGraphique from "../assets/formations/CONCEPTION-GRAPHIQUE.png";
import imgAmenagementInterieur from "../assets/formations/amenagement-d_interieur AMENAGEMENT-D_INTERIEUR.png";
import imgDesignIndustriel from "../assets/formations/DESIGN-INDUSTRIEL.png";
import imgLogicielGraphique from "../assets/formations/LOGICIEL-GRAPHIQUE.png";
import imgLogicielEspace from "../assets/formations/LOGICIEL-ESPACED_INTERIEUR.png";
import imgLogicielModelisation from "../assets/formations/MINI-FORMATION-LOGICIELS-MODELISATION.png";
import imgHistoireDesignGraphique from "../assets/formations/Histoire-du-Design-Graphique.png";
import imgHistoireDesignEspace from "../assets/formations/Histoire-du-Design-Espace-Produitespaced_interieur.png";
import imgFormationPro from "../assets/formations/Formation-Professionnelle.png";
import imgCommMarketing from "../assets/formations/MINI-FORMATION-COMM-MARKETING.png";
import imgDeveloppement from "../assets/formations/Developpement-et-organisation-personnelle.png";
import imgCreationEntreprise from "../assets/formations/Creation-dentreprise.png";

export const formations: FormationCard[] = [
  {
    id: 1,
    slug: "design-graphique",
    title: "Formation Design Graphisme",
    category: "graphisme",
    thumbnail: imgDesignGraphique,
    alt: "Formation Design Graphisme",
    externalUrl: "https://www.ecolelafontaine.fr/formation-distance/design-graphique",
  },
  {
    id: 2,
    slug: "architecte-interieur",
    title: "Formation Architecte Intérieur",
    category: "espace",
    thumbnail: imgDesignEspace,
    alt: "Formation Architecte Intérieur",
    externalUrl: "https://www.ecolelafontaine.fr/formation-distance/architecte-interieur",
  },
  {
    id: 3,
    slug: "designer-produit",
    title: "Formation Designer Produit",
    category: "produit",
    thumbnail: imgDesignProduit,
    alt: "Formation Designer Produit",
    externalUrl: "https://www.ecolelafontaine.fr/formation-distance/designer-produit",
  },
  {
    id: 4,
    slug: "prepa-design",
    title: "Prépa Design",
    category: "bien-debuter",
    thumbnail: imgPrepaDesign,
    alt: "Prépa Design",
    externalUrl: "https://www.ecolelafontaine.fr/formation-distance/prepa-design",
  },
  {
    id: 5,
    slug: "tp-concepteur-designer-ui",
    title: "Concepteur Designer UI",
    category: "graphisme",
    thumbnail: imgConcepteurUI,
    alt: "Concepteur designer Ui",
    externalUrl: "https://www.ecolelafontaine.fr/formation-distance/design-graphique/tp-concepteur-designer-ui",
  },
  {
    id: 6,
    slug: "tp-graphiste",
    title: "Formation Graphiste",
    category: "graphisme",
    thumbnail: imgGraphiste,
    alt: "Formation Graphiste",
    externalUrl: "https://www.ecolelafontaine.fr/formation-distance/design-graphique/tp-graphiste",
  },
  {
    id: 7,
    slug: "dessin",
    title: "Formation Dessin",
    category: "bien-debuter",
    thumbnail: imgDessin,
    alt: "Formation Dessin",
    externalUrl: "https://www.ecolelafontaine.fr/formation-distance/prepa-design/dessin",
  },
  {
    id: 8,
    slug: "arts-plastiques",
    title: "Formation d'Arts Plastiques",
    category: "bien-debuter",
    thumbnail: imgArtPlastique,
    alt: "Formation d'Arts Plastiques",
    externalUrl: "https://www.ecolelafontaine.fr/formation-distance/prepa-design/arts-plastiques",
  },
  {
    id: 9,
    slug: "histoire-de-lart",
    title: "Formation Histoire de l'Art",
    category: "bien-debuter",
    thumbnail: imgHistoireArt,
    alt: "Formation Histoire de l'Art",
    externalUrl: "https://www.ecolelafontaine.fr/formation-distance/prepa-design/histoire-de-lart",
  },
  {
    id: 10,
    slug: "demade",
    title: "DEMADE Design",
    category: "autre",
    thumbnail: imgDemade,
    alt: "DEMADE Design",
    externalUrl: "https://www.ecolelafontaine.fr/formation-distance/demade",
  },
  {
    id: 11,
    slug: "designer-global",
    title: "Designer Global",
    category: "autre",
    thumbnail: imgDesignGlobal,
    alt: "Designer Global",
    externalUrl: "https://www.ecolelafontaine.fr/formation-distance/designer-global",
  },
  {
    id: 12,
    slug: "conception-graphique",
    title: "Conception Graphique",
    category: "graphisme",
    thumbnail: imgConceptionGraphique,
    alt: "Conception Graphique",
    externalUrl: "https://www.ecolelafontaine.fr/formation-distance/design-graphique/conception-graphique",
  },
  {
    id: 13,
    slug: "amenagement-interieur",
    title: "Aménagement d'intérieur",
    category: "espace",
    thumbnail: imgAmenagementInterieur,
    alt: "Aménagement d'intérieur",
    externalUrl: "https://www.ecolelafontaine.fr/formation-distance/architecte-interieur/amenagement-dinterieur",
  },
  {
    id: 14,
    slug: "designer-industriel",
    title: "Designer Industriel",
    category: "produit",
    thumbnail: imgDesignIndustriel,
    alt: "Designer Industriel",
    externalUrl: "https://www.ecolelafontaine.fr/formation-distance/designer-produit/designer-industriel",
  },
  {
    id: 15,
    slug: "logiciels-graphique",
    title: "Logiciels Graphique",
    category: "graphisme",
    thumbnail: imgLogicielGraphique,
    alt: "Logiciels Graphique",
    externalUrl: "https://www.ecolelafontaine.fr/formation-distance/design-graphique/logiciels-graphique",
  },
  {
    id: 16,
    slug: "logiciels-espace",
    title: "Logiciels Espace",
    category: "espace",
    thumbnail: imgLogicielEspace,
    alt: "Logiciels Espace",
    externalUrl: "https://www.ecolelafontaine.fr/formation-distance/architecte-interieur/logiciels-espace",
  },
  {
    id: 17,
    slug: "logiciel-modelisation",
    title: "Logiciel Produit",
    category: "produit",
    thumbnail: imgLogicielModelisation,
    alt: "Logiciel Produit",
    externalUrl: "https://www.ecolelafontaine.fr/formation-distance/designer-produit/logiciel-modelisation",
  },
  {
    id: 18,
    slug: "histoire-du-design-graphique",
    title: "Histoire du Design Graphique",
    category: "graphisme",
    thumbnail: imgHistoireDesignGraphique,
    alt: "Histoire du Design Graphique",
    externalUrl: "https://www.ecolelafontaine.fr/formation-distance/histoire-du-design-graphique",
  },
  {
    id: 19,
    slug: "histoire-du-design-espace-produit",
    title: "Histoire du Design Espace & Produit",
    category: "espace",
    thumbnail: imgHistoireDesignEspace,
    alt: "Histoire du Design Espace & Produit",
    externalUrl: "https://www.ecolelafontaine.fr/formation-distance/histoire-du-design-espace-produit",
  },
  {
    id: 20,
    slug: "formation-professionnelle",
    title: "Formation Professionnelle",
    category: "autre",
    thumbnail: imgFormationPro,
    alt: "Formation Professionnelle",
    externalUrl: "https://www.ecolelafontaine.fr/formation-distance/professionnelle",
  },
  {
    id: 21,
    slug: "communication-et-marketing",
    title: "Formation Communication et Marketing",
    category: "autre",
    thumbnail: imgCommMarketing,
    alt: "Formation Communication et Marketing",
    externalUrl: "https://www.ecolelafontaine.fr/formation-distance/communication-et-marketing",
  },
  {
    id: 22,
    slug: "developpement-organisation-personnelle",
    title: "Développement et organisation personnelle",
    category: "autre",
    thumbnail: imgDeveloppement,
    alt: "Développement et organisation personnelle",
    externalUrl: "https://www.ecolelafontaine.fr/formation-distance/developpement-et-organisation-personelle",
  },
  {
    id: 23,
    slug: "creation-entreprise",
    title: "Création d'entreprise",
    category: "autre",
    thumbnail: imgCreationEntreprise,
    alt: "Création d'entreprise",
    externalUrl: "https://www.ecolelafontaine.fr/formation-distance/creation-dentreprise",
  },
];

export const getFormationBySlug = (slug: string): FormationCard | undefined => formations.find((f) => f.slug === slug);

export const getFormationsByCategory = (category: string): FormationCard[] => formations.filter((f) => f.category === category);

export const formationCategories = [
  { label: "Graphisme", value: "graphisme" },
  { label: "Espace", value: "espace" },
  { label: "Produit", value: "produit" },
  { label: "Bien débuter", value: "bien-debuter" },
  { label: "Autre", value: "autre" },
] as const;
