export type FAQItem = {
  id: number;
  question: string;
  answer: string;
};

export type FAQCategory = {
  id: number;
  slug: string;
  label: string;
  items: FAQItem[];
};
