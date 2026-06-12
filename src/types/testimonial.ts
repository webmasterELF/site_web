export type TestimonialFormation = "graphisme" | "espace" | "produit";

export type Testimonial = {
  id: number;
  name: string;
  avatar?: string;
  formation: TestimonialFormation;
  rating: 1 | 2 | 3 | 4 | 5;
  content: string;
  publishedAt: string;
  source?: "google" | "site" | "trustpilot";
};
