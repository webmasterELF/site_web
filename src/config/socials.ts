export const socialsConfig = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/ecolelafontaine.fr/",
    icon: "facebook",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/ecole_design_la_fontaine/",
    icon: "instagram",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/school/ecole-design-la-fontaine/",
    icon: "linkedin",
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@design_lafontaine",
    icon: "tiktok",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/channel/UCkH6_On9UjzagFhYLoTzY3g",
    icon: "youtube",
  },
] as const;

export type SocialName = (typeof socialsConfig)[number]["name"];
