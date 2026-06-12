import type { SEOMeta } from "./seo";

export type FormationCategory = "graphisme" | "espace" | "produit" | "bien-debuter" | "autre";

export type FormationLevel = "débutant" | "intermédiaire" | "avancé";

export type FormationFinancement = {
  cpf: boolean;
  poleEmploi: boolean;
  opco: boolean;
  personnel: boolean;
};

export type Formation = {
  id: number;
  slug: string;
  title: string;
  category: FormationCategory;
  shortDescription: string;
  description: string;
  duration: string;
  level: FormationLevel;
  price: number;
  priceFormatted: string;
  thumbnail: string;
  gallery?: string[];
  financement: FormationFinancement;
  modules?: FormationModule[];
  seo: SEOMeta;
  publishedAt: string;
  updatedAt: string;
};

export type FormationModule = {
  title: string;
  description: string;
  lessons: string[];
};

export type FormationCard = {
  id: number;
  slug: string;
  title: string;
  category: FormationCategory;
  thumbnail: string;
  alt: string;
  externalUrl?: string;
};
