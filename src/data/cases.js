const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const isVideo = (path) =>
  typeof path === "string" && /\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(path);

export const categories = {
  Web: {
    services: ["UI/UX Research", "UI/UX Design", "Custom-Code Dev"],
    gradient: "from-blue-800 to-sky-500",
  },
  "3D": {
    services: ["Concept & Script", "3D Modelling", "Cinematic Animation"],
    gradient: "from-indigo-900 to-fuchsia-500",
  },
  Branding: {
    services: ["Brand Strategy", "Visual Identity", "Logo & Brand Book"],
    gradient: "from-slate-800 to-teal-400",
  },
};

const facts = (industry, services, timeline) => [
  { label: "Industry", value: industry },
  { label: "Services", value: services },
  { label: "Timeline", value: timeline },
];

const webStory = [
  [
    "Research",
    "Research & Strategy",
    "We studied the users and the market to define a clear direction.",
  ],
  [
    "Design",
    "Design System",
    "Clean layouts and reusable components give the site a consistent look.",
  ],
  [
    "Build",
    "Build & Launch",
    "Built to be fast, accessible and responsive on every device.",
  ],
];

const threeDStory = [
  [
    "Concept",
    "Concept & Script",
    "We shaped the idea and the story before production started.",
  ],
  [
    "Modelling",
    "3D Modelling & Texturing",
    "Detailed models and materials bring the world to life.",
  ],
  [
    "Animation",
    "Motion & Final Render",
    "Smooth motion and polished lighting deliver a cinematic result.",
  ],
];

const brandStory = [
  [
    "Strategy",
    "Brand Strategy",
    "We defined the positioning, voice and audience.",
  ],
  [
    "Identity",
    "Visual Identity",
    "A distinctive logo, colour palette and typography system.",
  ],
  [
    "Guidelines",
    "Brand Book",
    "Clear guidelines keep the brand consistent everywhere.",
  ],
];

const make = (category, client, headline, accent = "", extra = {}) => {
  const {
    images: imageOverrides = {},
    story = [],
    slug: slugOverride,
    ...rest
  } = extra;
  const slug = slugOverride ?? slugify(client);
  const base = `/images/cases/${slug}`;
  const hero = imageOverrides.hero ?? `${base}/hero.png`;

  return {
    slug,
    client,
    category,
    headline,
    accent,
    website: "",
    overview: "",
    meta: [],
    services: categories[category].services,
    gradient: categories[category].gradient,
    images: {
      gallery: [1, 2, 3].map((n) => `${base}/gallery-${n}.png`),
      ...imageOverrides,
      hero,
      cover: imageOverrides.cover ?? hero,
    },
    sections: story.map(([tag, title, body, light], i) => ({
      tag,
      light,
      title,
      body,
      images: [`${base}/section-${i + 1}.png`],
    })),
    featured: false,
    ...rest,
  };
};

export const cases = [
  make("Web", "Slash", "Slash", "Case Study", {
    featured: true,
    meta: facts("Technology", "UI/UX Design & Development", "8 Weeks"),
    overview:
      "We designed and built a modern, conversion-focused website for Slash.",
    story: webStory,
  }),
  make("Web", "Cluely", "Cluely", "Case Study", {
    featured: true,
    meta: facts("Technology", "UI/UX Design & Development", "8 Weeks"),
    overview:
      "We designed and built a modern, conversion-focused website for Cluely.",
    story: webStory,
  }),
  make("Web", "Kastle", "Kastle", "Case Study", {
    meta: facts("Technology", "UI/UX Design & Development", "8 Weeks"),
    overview:
      "We designed and built a modern, conversion-focused website for Kastle.",
    story: webStory,
  }),
  make("Web", "Viture", "Viture", "Case Study", {
    meta: facts("Consumer Tech", "UI/UX Design & Development", "8 Weeks"),
    overview:
      "We designed and built a modern, conversion-focused website for Viture.",
    story: webStory,
  }),
  make("Web", "WorkLouder", "WorkLouder", "Case Study", {
    meta: facts("Marketing", "UI/UX Design & Development", "8 Weeks"),
    overview:
      "We designed and built a modern, conversion-focused website for WorkLouder.",
    story: webStory,
  }),

  make("3D", "Baskin Robbins", "A Scoop of a World Built on", "Ice Cream", {
    featured: true,
    meta: facts(
      "Food & Beverage",
      "3D Animation & Motion Graphics",
      "10 Weeks",
    ),
    overview:
      "For Baskin-Robbins, we created a vibrant 3D animation designed to capture the playful and colourful energy of the brand through a polished cartoon-style visual experience. The animation combined expressive motion, rich colours, and detailed environments to create a world that feels joyful, dynamic, and instantly recognisable.\n\nThe result is a high-end animated experience that blends premium 3D execution with a fun and approachable personality.",
    images: {
      hero: "/images/cases/baskin-robbins/hero.gif",
    },
    story: [
      [
        "Process",
        "Cartoon Animation System",
        "We developed a stylised animation language inspired by modern cartoon production, focusing on smooth motion, expressive timing, and strong visual appeal. The goal was to create something playful while maintaining a refined and premium feel.\n\nLighting, materials, and environmental details were carefully crafted to enhance depth and colour throughout the animation. This helped create a rich and visually engaging world.\n\nThe final result delivers a polished cartoon aesthetic that feels modern, energetic, and memorable.",
        "Stylised",
      ],
      [
        "Motion",
        "Motion, Energy & Brand Personality",
        "The animation was built around movement and rhythm, using dynamic transitions and expressive motion to create a constant sense of energy. Every sequence was designed to feel fluid, responsive, and entertaining.\n\nWe focused on personality-driven animation to reinforce Baskin-Robbins' playful identity and make each moment feel lively and engaging.\n\nThe result is a colourful brand experience that feels immersive, distinctive, and highly shareable.",
      ],
      [
        "Motion",
        "Motion, Energy & Brand Personality",
        "The animation was built around movement and rhythm, using dynamic transitions and expressive motion to create a constant sense of energy. Every sequence was designed to feel fluid, responsive, and entertaining.\n\nWe focused on personality-driven animation to reinforce Baskin-Robbins' playful identity and make each moment feel lively and engaging.\n\nThe result is a colourful brand experience that feels immersive, distinctive, and highly shareable.",
      ],
    ],
  }),
  make("3D", "IGA", "IGA", "3D Animation", {
    meta: facts("Retail", "3D Animation & Motion Graphics", "10 Weeks"),
    overview: "A cinematic 3D animation created for IGA.",
    story: threeDStory,
  }),
  make("3D", "Mumu's Journey", "Mumu's Journey", "", {
    meta: facts("Entertainment", "3D Animation & Motion Graphics", "10 Weeks"),
    overview: "A cinematic 3D story created for Mumu's Journey.",
    story: threeDStory,
  }),
  make("3D", "McLaren", "The Art of Speed", "with McLaren", {
    meta: facts("Automotive", "3D Animation & Motion Graphics", "10 Weeks"),
    overview: "A cinematic 3D film created for McLaren.",
    story: threeDStory,
  }),
  make("3D", "lenovo", "Built for Everyday Creativity", "", {
    meta: facts(
      "Creativity Meets Everyday Workflow",
      "Lifestyle-Driven Product Visuals",
      "Expressive Motion & Product Interaction",
    ),
    overview:
      "We partnered with Lenovo to create a lifestyle-driven animation for the Lenovo Yoga laptop, combining playful baking-inspired storytelling with premium product presentation.The goal was to highlight the flexibility and everyday usability of the device through a warm, creative, and motion-led visual experience.The result is a polished brand film that blends product clarity with expressive and engaging storytelling.",
    story: threeDStory,
  }),
  make("3D", "Microsoft", "Designed for Modern Teams", "with Microsoft", {
    featured: true,
    meta: facts("Technology", "3D Animation & Motion Graphics", "10 Weeks"),
    overview: "A cinematic 3D animation created for Microsoft.",
    story: threeDStory,
  }),
  make("3D", "Xiaomi", "A New Era of Performance", "with Xiaomi", {
    meta: facts("Consumer Tech", "3D Animation & Motion Graphics", "10 Weeks"),
    overview: "A cinematic 3D animation created for Xiaomi.",
    story: threeDStory,
  }),

  make("Branding", "I4You", "The Next Chapter", "for I4You", {
    meta: facts("Services", "Brand Strategy & Identity", "6 Weeks"),
    overview: "We built a clear, confident brand identity for I4You.",
    story: brandStory,
  }),
  make("Branding", "Berry Babe", "The Flavor of", "The Berry Babe Brand", {
    featured: true,
    meta: facts("Food & Beverage", "Brand Strategy & Identity", "6 Weeks"),
    overview: "We built a fresh, playful brand identity for Berry Babe.",
    story: brandStory,
  }),
  make(
    "Branding",
    "Futureproof",
    "Building Tomorrow's Identity",
    "for Futurproof",
    {
      meta: facts("Technology", "Brand Strategy & Identity", "6 Weeks"),
      overview: "We built a forward-looking brand identity for Futurproof.",
      story: brandStory,
    },
  ),
  make(
    "Branding",
    "letter",
    "Building Tomorrow's Identity",
    "for Futurproof",
    {
      meta: facts("Technology", "Brand Strategy & Identity", "6 Weeks"),
      overview: "We built a forward-looking brand identity for Futurproof.",
      story: brandStory,
    },
  ),
  make(
    "Branding",
    "green",
    "Building Tomorrow's Identity",
    "for Futurproof",
    {
      meta: facts("Technology", "Brand Strategy & Identity", "6 Weeks"),
      overview: "We built a forward-looking brand identity for Futurproof.",
      story: brandStory,
    },
  ),
  make(
    "Branding",
    "Pasta Si",
    "Rooted in Purpose, More Than a Meal",
    "with Pasta Si",
    {
      meta: facts("Food & Beverage", "Brand Strategy & Identity", "6 Weeks"),
      images:{
        hero:"/images/cases/pasta-si/hero.gif"
      },
      overview: "We built a warm, purpose-led brand identity for Pasta Si.",
      story: brandStory,
    },
  ),
  make(
    "Branding",
    "Truway",
    "Designed to Say More with Less",
    "Consistency Across the Journey for Truway",
    {
      meta: facts("Services", "Brand Strategy & Identity", "6 Weeks"),
      overview: "We built a simple, consistent brand identity for Truway.",
      story: brandStory,
    },
  ),
  make("Branding", "Resurge", "The Power of Renewal", "for Resurge", {
    meta: facts("Wellness", "Brand Strategy & Identity", "6 Weeks"),
    overview: "We built an energising brand identity for Resurge.",
    story: brandStory,
  }),
  make(
    "Branding",
    "UFO Bean",
    "An Out-of-This-World Branding",
    "for UFO Bean",
    {
      featured: true,
      meta: facts("Food & Beverage", "Brand Strategy & Identity", "6 Weeks"),
      overview:
        "We built a bold, out-of-this-world brand identity for UFO Bean.",
      story: brandStory,
    },
  ),
];

export const caseTabs = ["All", ...Object.keys(categories)];
export const featuredCases = cases.filter((c) => c.featured);
export const getCase = (slug) => cases.find((c) => c.slug === slug);

export function getOtherCases(slug, limit = 8) {
  const current = getCase(slug);
  const others = cases.filter((c) => c.slug !== slug);
  const same = others.filter((c) => c.category === current?.category);
  const rest = others.filter((c) => c.category !== current?.category);
  return [...same, ...rest].slice(0, limit);
}
