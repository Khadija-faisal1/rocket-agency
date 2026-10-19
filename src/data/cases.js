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
    "Understanding the Audience",
    "Every successful website starts with a clear understanding of its audience and purpose. We explored user expectations, industry patterns, and the brand's digital goals to establish a strong foundation. This helped shape a focused direction for the content, structure, and overall experience."
  ],
  [
    "Design",
    "Crafting the Digital Experience",
    "The design brings together thoughtful layouts, expressive typography, and a consistent visual language. Each section is organised to make information easy to explore while maintaining a natural flow between content. Responsive components and carefully balanced spacing help the experience feel polished across different screen sizes."
  ],
  [
    "Build",
    "Development & Launch",
    "The development stage transforms the design into a functional and responsive website. Interactive elements, reusable components, and structured page layouts work together to create a consistent experience. Attention to accessibility, loading performance, and usability helps prepare the website for visitors across modern devices."
  ],
];
const threeDStory = [
  [
    "Concept",
    "Building the Creative Direction",
    "The project begins with an idea that defines the mood, atmosphere, and visual identity of the final experience. We explore composition, colour, and storytelling to establish a direction that supports the brand's message. This creative foundation helps ensure that every scene feels connected to the overall concept."
  ],
  [
    "Modelling",
    "Creating Detailed 3D Worlds",
    "Models, textures, and materials are developed to give each object a distinctive appearance and believable presence. Carefully considered proportions and surface details add depth without overwhelming the composition. Lighting and environmental elements work together to create a cohesive visual world that feels intentional and visually engaging."
  ],
  [
    "Animation",
    "Motion, Lighting & Final Render",
    "Camera movements and carefully timed transitions guide the viewer through the experience. Refined lighting, material reflections, and animation timing bring energy to each scene while keeping the main subject in focus. The final render combines these elements into a polished visual presentation with a clear sense of rhythm and atmosphere."
  ],
];
const brandStory = [
  [
    "Strategy",
    "Discovering the Brand's Identity",
    "A memorable brand begins with a clear understanding of its purpose, audience, and personality. We explore the values and ideas that make the brand distinctive, using them to guide the creative direction. This foundation helps create an identity that communicates a consistent message and connects naturally with its intended audience."
  ],
  [
    "Identity",
    "Designing a Distinctive Visual System",
    "The visual identity combines typography, colour, graphic elements, and logo design into a recognisable system. Each component is selected to complement the brand's character while remaining flexible across different applications. The result is a considered visual language that balances originality, clarity, and consistency."
  ],
  [
    "Guidelines",
    "Bringing the Brand Together",
    "A cohesive brand requires a consistent approach across every customer touchpoint. Clear guidelines establish how the logo, colours, typography, and supporting graphics should be used. From digital platforms and social media to packaging and printed materials, the system helps maintain a unified and professional brand presence."
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
      "We developed a colourful 3D campaign for Baskin-Robbins, shaping the brand’s playful personality into a lively animated world. Bright environments, expressive character movement, and carefully composed product moments work together to make the experience feel joyful without losing the polish expected from a global food brand.\n\nFrom the first visual beat to the final frame, the direction balances bold colour with clear storytelling. The finished piece gives the brand a memorable, energetic way to celebrate its products and invite audiences into a world built around fun.",
    images: {
      hero: "/images/cases/baskin-robbins/hero.gif",
    },
    // images: {
    //   hero: "/images/cases/baskin-robbins/gallery-3.png",
    // },
    story: [
      [
        "Process",
        "Cartoon Animation System",
        "We established a stylised animation direction that gives the campaign its own visual rhythm. Rounded forms, expressive timing, and confident colour choices make each scene feel inviting, while controlled composition keeps the product and brand recognisable.\n\nLighting and material choices add depth to the playful environments, helping every surface feel considered rather than flat. The result is a cohesive visual world with enough detail to reward a closer look and enough clarity to communicate quickly.",
        "Stylised",
      ],
      [
        "Motion",
        "Motion, Energy & Brand Personality",
        "The motion design uses lively transitions and carefully timed reveals to keep the story moving without overwhelming the viewer. Each beat gives the product space to stand out, then carries the eye naturally into the next scene.\n\nSmall changes in pace, scale, and camera movement bring personality to the campaign and reinforce the brand’s upbeat character. Together, these choices create a finish that feels dynamic, polished, and easy to remember.",
      ],
      [
        "Experience",
        "A Cohesive Campaign Finish",
        "The final sequence brings the visual elements together through clear product framing, carefully balanced colour, and a memorable closing moment. Every transition supports the overall story, helping the audience move naturally from playful discovery to brand recognition.\n\nThe combination of expressive animation, thoughtful composition, and a consistent visual language gives the campaign a complete finish. Each scene feels connected to the same creative direction while retaining enough variety to keep the experience engaging from beginning to end.",
      ],
    ],
  }),

  make("3D", "IGA", "IGA", "3D Animation", {
    meta: facts("Retail", "3D Animation & Motion Graphics", "10 Weeks"),
    overview:
      "The IGA project explores how product-focused 3D visuals can turn everyday retail moments into a polished and engaging brand experience. Carefully composed scenes, considered lighting, and clear visual hierarchy help each featured element stand out.",
    story: threeDStory,
  }),

  make("3D", "Mumu's Journey", "Mumu's Journey", "", {
    meta: facts("Entertainment", "3D Animation & Motion Graphics", "10 Weeks"),
    overview:
      "Mumu's Journey brings a character-led story to life through expressive environments, detailed 3D assets, and carefully paced animation. Each scene contributes to a visual journey designed to feel immersive, coherent, and memorable.",
    story: threeDStory,
  }),

  make("3D", "McLaren", "The Art of Speed", "with McLaren", {
    meta: facts("Automotive", "3D Animation & Motion Graphics", "10 Weeks"),
    overview:
      "The McLaren concept celebrates precision, speed, and automotive design through cinematic product visuals. Controlled camera movement, dramatic lighting, and detailed materials place the vehicle at the centre of a refined visual experience.",
    story: threeDStory,
  }),

  make("3D", "lenovo", "Built for Everyday Creativity", "", {
    slug: "lenovo",
    meta: facts(
      "Technology",
      "Lifestyle-Driven Product Visuals",
      "Expressive Motion & Product Interaction",
    ),
    overview:
      "For Lenovo Yoga, we imagined a product film that connects everyday creativity with the flexibility of a modern laptop. A warm, baking-inspired setting gives the story a human point of view, while considered product shots keep the device’s form and versatility at the centre of the experience.\n\nThe visual direction combines tactile materials, soft lighting, and purposeful camera movement to make each interaction feel natural. Rather than treating the laptop as a static object, the film places it within a creative routine, showing how technology can move comfortably between work, ideas, and personal projects. The result is a polished, approachable piece that balances lifestyle storytelling with clear product presentation.",
    story: [
      [
        "Concept",
        "A Creative Everyday Story",
        "The concept starts with a familiar creative ritual and builds it into a visual metaphor for flexible work. A warm environment and playful details create an inviting atmosphere, while the Lenovo Yoga remains the centre of the story. Each scene was planned to feel connected to a real moment rather than a disconnected product demonstration.",
      ],
      [
        "Product",
        "Designed Around the Device",
        "Close-up framing highlights the laptop’s profile, hinge, screen, and adaptable form. Soft reflections and carefully controlled lighting help the materials read clearly without distracting from the overall composition. These product-focused moments are balanced with wider lifestyle shots so the audience understands both the design and the context in which it can be used.",
      ],
      [
        "Motion",
        "A Fluid Visual Rhythm",
        "Camera transitions and object movement guide the viewer from one creative beat to the next. The animation uses a measured pace, with brief moments of emphasis around key interactions, to keep the film engaging while allowing the product details to remain legible. The final sequence brings the story together with a confident, considered finish.",
      ],
    ],
  }),

  make("3D", "Microsoft", "Designed for Modern Teams", "with Microsoft", {
    featured: true,
    meta: facts("Technology", "3D Animation & Motion Graphics", "10 Weeks"),
    overview:
      "This Microsoft concept presents modern collaboration through a clean, cinematic 3D visual language. Balanced compositions and purposeful motion communicate connected workflows while keeping the experience approachable and visually consistent.",
    story: threeDStory,
  }),

  make("3D", "Xiaomi", "A New Era of Performance", "with Xiaomi", {
    meta: facts("Consumer Tech", "3D Animation & Motion Graphics", "10 Weeks"),
    overview:
      "The Xiaomi concept focuses on contemporary product design through crisp materials, confident lighting, and a controlled cinematic pace. The visual direction highlights performance and detail without overcrowding the frame.",
    story: threeDStory,
  }),

  make("Branding", "I4You", "The Next Chapter", "for I4You", {
    meta: facts("Services", "Brand Strategy & Identity", "6 Weeks"),
    overview:
      "The I4You identity creates a clear foundation for a growing service brand. Strategic positioning, considered typography, and a cohesive visual system help the brand communicate its value consistently across digital and printed touchpoints.",
    story: brandStory,
  }),

  make("Branding", "Berry Babe", "The Flavor of", "The Berry Babe Brand", {
    featured: true,
    meta: facts("Food & Beverage", "Brand Strategy & Identity", "6 Weeks"),
    overview:
      "Berry Babe brings a fresh and expressive personality to the food and beverage space. A playful visual direction, distinctive colour choices, and a consistent identity system help the brand feel recognisable while giving its products room to stand out.",
    story: brandStory,
  }),

  make(
    "Branding",
    "Futureproof",
    "Building Tomorrow's Identity",
    "for Futureproof",
    {
      meta: facts("Technology", "Brand Strategy & Identity", "6 Weeks"),
      overview:
        "Futureproof uses a forward-looking identity to communicate clarity, progress, and confidence. The visual system balances contemporary design choices with practical guidelines that keep the brand consistent as its audience and services grow.",
      story: brandStory,
    },
  ),

  make(
    "Branding",
    "letter",
    "A Clear Identity for a Modern Brand",
    "Visual Identity",
    {
      meta: facts("Design", "Brand Strategy & Identity", "6 Weeks"),
      overview:
        "The Letter concept explores how typography, spacing, and a restrained visual language can create a distinctive brand presence. The identity is designed to remain flexible across digital layouts and printed applications.",
      story: brandStory,
    },
  ),

  make("Branding", "green", "A Fresh Perspective on Identity", "Brand Design", {
    meta: facts("Lifestyle", "Brand Strategy & Identity", "6 Weeks"),
    overview:
      "The Green identity draws on a fresh, balanced visual direction to create a brand that feels approachable and easy to recognise. A coordinated palette, clear typography, and practical guidelines bring consistency to every touchpoint.",
    story: brandStory,
  }),

  make(
    "Branding",
    "Pasta Si",
    "Rooted in Purpose, More Than a Meal",
    "with Pasta Si",
    {
      meta: facts("Food & Beverage", "Brand Strategy & Identity", "6 Weeks"),
      images: {
        hero: "/images/cases/pasta-si/hero.gif",
      },
      overview:
        "Pasta Si builds its identity around the warmth and connection that make food meaningful. A welcoming visual language and thoughtful brand elements communicate the story while keeping the identity adaptable across menus, packaging, and digital platforms.",
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
      overview:
        "Truway uses a simple and confident identity to make its message easier to understand. Consistent typography, a purposeful palette, and a clear visual hierarchy help the brand communicate reliably across its customer journey.",
      story: brandStory,
    },
  ),

  make("Branding", "Resurge", "The Power of Renewal", "for Resurge", {
    meta: facts("Wellness", "Brand Strategy & Identity", "6 Weeks"),
    overview:
      "Resurge is shaped around renewal, momentum, and positive change. Its visual identity combines an energetic personality with a coherent system that supports clear communication across digital and brand applications.",
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
        "UFO Bean takes a bold approach to coffee branding, using a playful concept and distinctive visual language to stand apart. The identity brings together memorable brand assets, coordinated colours, and practical design rules for a consistent customer experience.",
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
