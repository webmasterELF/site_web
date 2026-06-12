import type { SEOMeta } from "./seo";

export type EventType = "jpo" | "webinaire" | "atelier" | "autre";

export type EventStatus = "upcoming" | "live" | "past";

export type Event = {
  id: number;
  slug: string;
  title: string;
  type: EventType;
  status: EventStatus;
  description: string;
  shortDescription: string;
  thumbnail?: string;
  alt?: string;
  date: string; // ISO 8601 : "2025-06-15T14:00:00"
  dateEnd?: string;
  duration?: string;
  isOnline: boolean;
  isFree: boolean;
  price?: number;
  registrationUrl?: string;
  replayUrl?: string; // URL YouTube une fois l'événement terminé
  seo: SEOMeta;
};
