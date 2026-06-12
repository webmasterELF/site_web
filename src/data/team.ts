import type { TeamMember } from "../types/team";

export const team: TeamMember[] = [
  {
    id: 1,
    firstName: "Marie",
    lastName: "Dupont",
    initials: "D",
    role: "Directrice pédagogique",
    description:
      "Marie accompagne les apprenants depuis plus de 10 ans dans le domaine du design graphique et de la communication visuelle. Elle supervise l'ensemble des contenus pédagogiques de l'école.",
    photo: undefined,
    alt: "Marie Dupont — Directrice pédagogique École Lafontaine",
  },
  {
    id: 2,
    firstName: "Thomas",
    lastName: "Bernard",
    initials: "B",
    role: "Formateur UI/UX Design",
    description: "Designer UI/UX avec 8 ans d'expérience en agence et en startup. Thomas enseigne la conception d'interfaces, le prototypage et les bonnes pratiques UX.",
    photo: undefined,
    alt: "Thomas Bernard — Formateur UI/UX École Lafontaine",
  },
  {
    id: 3,
    firstName: "Sophie",
    lastName: "Martin",
    initials: "M",
    role: "Formatrice Motion Design",
    description: "Spécialisée en animation et motion design, Sophie intervient sur After Effects, Premiere Pro et la narration visuelle. Elle travaille également pour des clients grands comptes.",
    photo: undefined,
    alt: "Sophie Martin — Formatrice Motion Design École Lafontaine",
  },
];
