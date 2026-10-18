// One entry per case. Drop images into public/images/cases/<slug>/ using these names:
//   cover.webp (card thumbnail), hero.webp (wide banner), section-1.webp, section-2.webp,
//   section-3.webp, gallery-1.webp, gallery-2.webp, gallery-3.webp
// Missing files fall back to a gradient, so the page never breaks.
const img = (slug, name) => `/images/cases/${slug}/${name}.webp`;

const defaultSections = (client) => [
  {
    tag: "Strategy",
    title: `Shaping a future-ready ${client}`,
    body: "We aligned the project with the brand's goals through research, a clear message and a flexible structure.",
  },
  {
    tag: "Design",
    title: "Designing a distinctive visual language",
    body: "Bold shapes, consistent colour and a confident tone give every touchpoint the same recognisable voice.",
  },
  {
    tag: "Delivery",
    title: "Building a system built for growth",
    body: "Guidelines and reusable assets let every team ship with clarity and consistency.",
  },
];

const make = (c) => ({
  services: [],
  year: "2025",
  website: null,
  gradient: "from-slate-300 to-blue-200",
  ...c,
  sections: (c.sections?.length ? c.sections : defaultSections(c.client)).map(
    (s, i) => ({ ...s, image: img(c.slug, `section-${i + 1}`) }),
  ),
  images: {
    cover: img(c.slug, "cover"),
    hero: img(c.slug, "hero"),
    gallery: [1, 2, 3].map((n) => img(c.slug, `gallery-${n}`)),
  },
});

export const cases = [
  make({
    slug: "microsoft",
    client: "Microsoft",
    category: "Branding",
    headline: "The next chapter",
    accent: "for iYOU",
    overview:
      "We worked with iYOU to create a brand identity that is clear, confident and ready for what comes next. The result is a brand ecosystem that helps the team communicate with consistency.",
    services: ["Brand identity", "Visual language", "Brand guidelines"],
    gradient: "from-slate-700 to-slate-400",
    sections: [
      {
        tag: "Identity",
        title: "Shaping a future-ready identity",
        body: "iYOU's identity was rebuilt to align with its mission through a clear logo system and a flexible set of brand assets.",
      },
      {
        tag: "Visual language",
        title: "Designing a distinctive visual language",
        body: "A visual language built on bold shapes, consistent colour and a confident tone of voice.",
      },
      {
        tag: "Brand system",
        title: "Building a brand system for growth",
        body: "Visual guidelines and brand assets that let every team adopt the brand with clarity and consistency.",
      },
    ],
  }),
  make({
    slug: "cluely",
    client: "Cluely",
    category: "Web",
    headline: "A launch site",
    accent: "for Cluely",
    overview: "A fast, bold marketing site for an AI product.",
    services: ["Web design", "Development"],
    website: "https://example.com",
    gradient: "from-indigo-300 to-blue-300",
  }),
  make({
    slug: "kastle",
    client: "Kastle",
    category: "Web",
    headline: "Kastle,",
    accent: "redesigned",
    overview: "A clear product site for a security platform.",
    services: ["Web design", "Development"],
    website: "https://example.com",
    gradient: "from-sky-300 to-cyan-200",
  }),
  make({
    slug: "viture",
    client: "Viture",
    category: "Web",
    headline: "Viture",
    accent: "online store",
    overview: "Immersive product storytelling for XR glasses.",
    services: ["Web design", "Development"],
    website: "https://example.com",
    gradient: "from-fuchsia-300 to-violet-300",
  }),
  make({
    slug: "worklouder",
    client: "WorkLouder",
    category: "Web",
    headline: "WorkLouder",
    accent: "website",
    overview: "A playful, conversion-focused site for a keyboard brand.",
    services: ["Web design", "Development"],
    website: "https://example.com",
    gradient: "from-orange-300 to-amber-200",
  }),
  make({
    slug: "baskin-robbins",
    client: "Baskin Robbins",
    category: "3D",
    headline: "Baskin Robbins",
    accent: "in 3D",
    overview: "3D animation for a seasonal campaign.",
    services: ["3D animation", "CGI"],
    gradient: "from-pink-300 to-rose-200",
  }),
  make({
    slug: "iga",
    client: "IGA",
    category: "3D",
    headline: "IGA",
    accent: "3D campaign",
    overview: "Product CGI for a grocery brand.",
    services: ["3D animation", "CGI"],
    gradient: "from-red-300 to-amber-200",
  }),
  make({
    slug: "mumus-journey",
    client: "Mumu's Journey",
    category: "3D",
    headline: "Mumu's",
    accent: "Journey",
    overview: "A character-led 3D animated story.",
    services: ["3D animation", "Character design"],
    gradient: "from-teal-300 to-emerald-200",
  }),
];
export const getCase = (slug) => cases.find((c) => c.slug === slug);
