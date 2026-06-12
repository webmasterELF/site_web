import type { SEOMeta } from "./seo";

export type ArticleCategory = {
  id: number;
  name: string;
  slug: string;
};

export type ArticleAuthor = {
  id: number;
  name: string;
  avatar?: string;
  bio?: string;
};

export type Article = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  thumbnail: string;
  thumbnailAlt: string;
  author: ArticleAuthor;
  categories: ArticleCategory[];
  tags?: string[];
  readingTime?: number;
  seo: SEOMeta;
  publishedAt: string;
  updatedAt: string;
};
