export type NavChild = {
  name: string;
  slug: string;
  description?: string;
};

export type NavItem = {
  name: string;
  slug?: string;
  children?: NavChild[];
};

export const navConfig: NavItem[] = [
  {
    name: "Formations",
    children: [
      {
        name: "Formation Graphisme",
        slug: "/formations/graphisme",
        description: "Maîtrisez les fondamentaux du design graphique",
      },
      {
        name: "Formation Espace",
        slug: "/formations/espace",
        description: "Concevez des espaces de vie et professionnels",
      },
      {
        name: "Formation Produit",
        slug: "/formations/produit",
        description: "Créez des objets du quotidien",
      },
    ],
  },
  {
    name: "L'École",
    children: [
      {
        name: "Qui sommes-nous",
        slug: "/ecole/qui-sommes-nous",
      },
      {
        name: "Avis d'élèves",
        slug: "/ecole/avis-eleves",
      },
      {
        name: "Financement",
        slug: "/ecole/financement",
      },
    ],
  },
  {
    name: "Admission",
    slug: "/candidature",
  },
  {
    name: "Portes Ouvertes & Lives",
    slug: "/evenement",
  },
];
