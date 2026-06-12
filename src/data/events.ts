import type { Event } from "../types";

export const events: Event[] = [
  {
    id: 1,
    slug: "jpo-juin-2025",
    title: "Journée Portes Ouvertes — Juin 2025",
    type: "jpo",
    status: "upcoming",
    shortDescription: "Découvrez nos formations design en direct et échangez avec notre équipe pédagogique.",
    description:
      "Rejoignez-nous pour notre Journée Portes Ouvertes en ligne. Présentation de toutes nos formations, témoignages d'étudiants, questions/réponses avec nos conseillers. Un moment idéal pour faire le bon choix.",
    thumbnail: undefined,
    alt: "Journée Portes Ouvertes Ecole Lafontaine Juin 2025",
    date: "2025-06-15T14:00:00",
    dateEnd: "2025-06-15T16:00:00",
    duration: "2h",
    isOnline: true,
    isFree: true,
    registrationUrl: "https://calendly.com/ecole-lafontaine/jpo-juin-2025",
    replayUrl: undefined,
    seo: {
      title: "JPO Juin 2025 — Journée Portes Ouvertes en ligne | École Lafontaine",
      description: "Participez à notre JPO en ligne le 15 juin 2025. Découvrez nos formations design à distance et échangez avec notre équipe.",
      ogImage: undefined,
    },
  },
  {
    id: 2,
    slug: "jpo-avril-2025",
    title: "Journée Portes Ouvertes — Avril 2025",
    type: "jpo",
    status: "past",
    shortDescription: "Replay disponible — Retrouvez notre JPO d'avril 2025 en intégralité sur YouTube.",
    description: "Vous avez raté notre JPO d'avril ? Pas de panique. Retrouvez le replay complet sur YouTube : présentation des formations, témoignages étudiants et session questions/réponses.",
    thumbnail: undefined,
    alt: "Replay JPO Avril 2025 Ecole Lafontaine",
    date: "2025-04-10T14:00:00",
    dateEnd: "2025-04-10T16:00:00",
    duration: "2h",
    isOnline: true,
    isFree: true,
    registrationUrl: undefined,
    replayUrl: "https://www.youtube.com/watch?v=REPLACE_ID",
    seo: {
      title: "Replay JPO Avril 2025 | École Lafontaine",
      description: "Regardez le replay de notre Journée Portes Ouvertes d'avril 2025. Formations design à distance présentées en détail.",
      ogImage: undefined,
    },
  },
  {
    id: 3,
    slug: "jpo-septembre-2025",
    title: "Journée Portes Ouvertes — Septembre 2025",
    type: "jpo",
    status: "upcoming",
    shortDescription: "Rentrée 2025 — Venez découvrir nos formations et poser toutes vos questions.",
    description:
      "À l'occasion de la rentrée, l'École Lafontaine organise une nouvelle JPO en ligne. Formations présentées, conseils d'orientation, financement et modalités d'inscription. Inscrivez-vous dès maintenant.",
    thumbnail: undefined,
    alt: "Journée Portes Ouvertes Ecole Lafontaine Septembre 2025",
    date: "2025-09-10T14:00:00",
    dateEnd: "2025-09-10T16:00:00",
    duration: "2h",
    isOnline: true,
    isFree: true,
    registrationUrl: "https://calendly.com/ecole-lafontaine/jpo-septembre-2025",
    replayUrl: undefined,
    seo: {
      title: "JPO Septembre 2025 — Rentrée | École Lafontaine",
      description: "Participez à notre JPO de rentrée le 10 septembre 2025. Découvrez nos formations design et préparez votre inscription.",
      ogImage: undefined,
    },
  },
];

// Helpers
export const getEventBySlug = (slug: string): Event | undefined => events.find((e) => e.slug === slug);

export const getUpcomingEvents = (): Event[] => events.filter((e) => e.status === "upcoming");

export const getPastEvents = (): Event[] => events.filter((e) => e.status === "past");

export const getEventReplays = (): Event[] => events.filter((e) => e.status === "past" && e.replayUrl !== undefined);
