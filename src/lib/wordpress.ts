import type { WPPage } from "../types/wordpress";

const WP_API = import.meta.env.PUBLIC_WP_API;

export async function getArticles() {
  const res = await fetch(`${WP_API}/posts?_embed&per_page=100`);
  if (!res.ok) throw new Error("Erreur fetch articles WordPress");
  return res.json();
}

export async function getArticleBySlug(slug: string) {
  const res = await fetch(`${WP_API}/posts?slug=${slug}&_embed`);
  if (!res.ok) throw new Error("Erreur fetch article WordPress");
  const data = await res.json();
  return data[0] ?? null;
}

export async function getPages(): Promise<WPPage[]> {
  const res = await fetch(`${WP_API}/pages?per_page=100&_embed`);
  if (!res.ok) throw new Error("Erreur fetch pages WP");
  return res.json();
}
