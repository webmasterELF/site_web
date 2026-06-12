import type { FAQCategory } from "../types/faq";

export const faq: FAQCategory[] = [
  {
    id: 1,
    slug: "admission",
    label: "Admission",
    items: [
      {
        id: 101,
        question: "Quels sont les prérequis pour intégrer une formation ?",
        answer:
          "Nos formations sont accessibles à tous les profils, débutants comme confirmés. Certaines formations avancées peuvent nécessiter des bases en design. Les prérequis spécifiques sont précisés sur chaque page de formation.",
      },
      {
        id: 102,
        question: "Comment s'inscrire à une formation ?",
        answer: "L'inscription se fait directement en ligne sur notre site. Après validation de votre commande, vous recevez un accès à votre espace apprenant sous 24h.",
      },
      {
        id: 103,
        question: "Y a-t-il une limite d'âge pour s'inscrire ?",
        answer: "Aucune limite d'âge n'est imposée. Nos formations s'adressent aussi bien aux jeunes adultes qu'aux personnes en reconversion professionnelle.",
      },
      {
        id: 104,
        question: "Puis-je m'inscrire à tout moment dans l'année ?",
        answer: "Oui, nos formations sont disponibles en accès continu. Vous pouvez démarrer à la date de votre choix, sans attendre une rentrée spécifique.",
      },
    ],
  },
  {
    id: 2,
    slug: "financement",
    label: "Financement",
    items: [
      {
        id: 201,
        question: "Puis-je financer ma formation avec mon CPF ?",
        answer: "Oui, certaines de nos formations sont éligibles au CPF. Vous pouvez vérifier votre solde et effectuer votre demande directement sur Mon Compte Formation.",
      },
      {
        id: 202,
        question: "Mon employeur peut-il financer ma formation via un OPCO ?",
        answer: "Absolument. Si vous êtes salarié, votre OPCO peut prendre en charge tout ou partie du coût de la formation. Contactez-nous pour obtenir un devis et les documents nécessaires.",
      },
      {
        id: 203,
        question: "Le paiement en plusieurs fois est-il possible ?",
        answer: "Oui, nous proposons un paiement en plusieurs fois sans frais. Les modalités sont précisées lors de la commande. N'hésitez pas à nous contacter pour un arrangement personnalisé.",
      },
      {
        id: 204,
        question: "Existe-t-il des aides pour les demandeurs d'emploi ?",
        answer: "Les demandeurs d'emploi peuvent bénéficier de financements via Pôle Emploi (AIF) ou leur Conseil Régional. Nous vous accompagnons dans les démarches sur demande.",
      },
    ],
  },
  {
    id: 3,
    slug: "pedagogie",
    label: "Pédagogie",
    items: [
      {
        id: 301,
        question: "Comment se déroulent les formations à distance ?",
        answer:
          "Les formations sont 100% en ligne et accessibles depuis votre espace apprenant. Elles comprennent des vidéos, des exercices pratiques, des ressources téléchargeables et un suivi personnalisé.",
      },
      {
        id: 302,
        question: "Ai-je accès aux contenus à vie ?",
        answer: "Oui, une fois inscrit vous bénéficiez d'un accès illimité aux contenus de votre formation, y compris les futures mises à jour.",
      },
      {
        id: 303,
        question: "Un formateur est-il disponible pour répondre à mes questions ?",
        answer: "Oui, chaque formation est encadrée par un formateur dédié. Vous pouvez poser vos questions via la messagerie de votre espace apprenant et obtenir une réponse sous 48h ouvrées.",
      },
      {
        id: 304,
        question: "Quels outils sont nécessaires pour suivre les formations ?",
        answer: "Un ordinateur avec une connexion internet suffit pour la majorité des formations. Les logiciels nécessaires (Adobe, Figma...) sont précisés sur chaque page de formation.",
      },
    ],
  },
  {
    id: 4,
    slug: "certification",
    label: "Certification",
    items: [
      {
        id: 401,
        question: "Les formations débouchent-elles sur un diplôme reconnu ?",
        answer: "Certaines formations mènent à des titres reconnus par l'État ou enregistrés au RNCP. Le niveau de reconnaissance est précisé sur chaque page de formation.",
      },
      {
        id: 402,
        question: "Comment se déroule l'évaluation finale ?",
        answer: "L'évaluation prend la forme d'un projet final ou d'un examen en ligne selon la formation. Les critères d'évaluation sont communiqués dès le début du parcours.",
      },
      {
        id: 403,
        question: "Que se passe-t-il si je n'obtiens pas ma certification ?",
        answer: "En cas d'échec, vous pouvez repasser l'évaluation. Les modalités de rattrapage sont définies dans le règlement de chaque formation.",
      },
    ],
  },
  {
    id: 5,
    slug: "debouches",
    label: "Débouchés",
    items: [
      {
        id: 501,
        question: "Quels métiers puis-je exercer après une formation ?",
        answer: "Selon la formation suivie, vous pouvez viser des postes de graphiste, designer UI/UX, motion designer, directeur artistique, web designer ou encore illustrateur.",
      },
      {
        id: 502,
        question: "Puis-je travailler en freelance après ma formation ?",
        answer:
          "Oui, nos formations préparent aussi bien à l'emploi salarié qu'à l'activité freelance. Nous abordons les aspects pratiques du métier incluant la gestion de clients et la tarification.",
      },
      {
        id: 503,
        question: "L'école propose-t-elle un accompagnement à l'insertion professionnelle ?",
        answer: "Nous mettons à disposition des ressources pour faciliter votre insertion : conseils pour le portfolio, préparation aux entretiens et accès à notre réseau de partenaires.",
      },
    ],
  },
];
