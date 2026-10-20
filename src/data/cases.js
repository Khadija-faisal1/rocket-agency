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
      cover: imageOverrides.cover ?? `${base}/hero.png`,
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
    website: "https://www.slash.com/",
    featured: true,
    meta: facts("Technology", "UI/UX Design & Development", "8 Weeks"),
    overview:
      "Slash needed a website that explains its platform and what makes it different clearly and gives growing businesses a reason to take the next step. We built the experience around clarity and trust, so the structure moves naturally from first impression to action.\n\nThe finished site pairs a confident dark interface with crisp accents with fast, dependable performance. Content is easy to scan, motion stays subtle, and every page works comfortably from large desktop screens to small phones. The result is a confident digital presence that feels consistent with the brand and easy for the team to grow.",
    story: [
      [
        "Research",
        "Understanding Slash’s Audience",
        "We started by mapping how growing businesses discover, compare, and decide, looking closely at competitor sites and common drop-off points. These findings shaped a clear content hierarchy for Slash.\n\nWorkshops with the team turned that research into goals, priorities, and a simple sitemap. Every later design choice traces back to this foundation, which kept the project focused and the feedback loops short.",
      ],
      [
        "Design",
        "Crafting the Slash Experience",
        "The interface uses a confident dark interface with crisp accents, supported by flexible grids, expressive typography, and generous spacing. Key sections are designed as reusable components, so the site stays consistent as new pages are added.\n\nLayouts were tested early on mobile and desktop to make sure hierarchy and readability hold up everywhere. Small details such as hover states, transitions, and iconography add polish without slowing the experience down.",
      ],
      [
        "Build",
        "Development & Launch",
        "Development turned the approved designs into a fast, accessible build with clean, maintainable code. Pages load quickly, images are optimised, and interactions respond smoothly on modern browsers and devices.\n\nBefore launch we tested across screen sizes, checked accessibility basics, and prepared the site for easy content updates. Slash now has a flexible foundation that is ready to grow with the business.",
      ],
    ],
  }),

  make("Web", "Cluely", "Cluely", "Case Study", {
    website: "https://cluely.com/",
    featured: true,
    meta: facts("Technology", "UI/UX Design & Development", "8 Weeks"),
    overview:
      "Cluely needed a website that explains its AI assistant clearly and gives professionals and students a reason to take the next step. We built the experience around instant understanding, so the structure moves naturally from first impression to action.\n\nThe finished site pairs a sleek, modern interface with soft gradients with fast, dependable performance. Content is easy to scan, motion stays subtle, and every page works comfortably from large desktop screens to small phones. The result is a confident digital presence that feels consistent with the brand and easy for the team to grow.",
    story: [
      [
        "Research",
        "Understanding Cluely’s Audience",
        "We started by mapping how professionals and students discover, compare, and decide, looking closely at competitor sites and common drop-off points. These findings shaped a clear content hierarchy for Cluely.\n\nWorkshops with the team turned that research into goals, priorities, and a simple sitemap. Every later design choice traces back to this foundation, which kept the project focused and the feedback loops short.",
      ],
      [
        "Design",
        "Crafting the Cluely Experience",
        "The interface uses a sleek, modern interface with soft gradients, supported by flexible grids, expressive typography, and generous spacing. Key sections are designed as reusable components, so the site stays consistent as new pages are added.\n\nLayouts were tested early on mobile and desktop to make sure hierarchy and readability hold up everywhere. Small details such as hover states, transitions, and iconography add polish without slowing the experience down.",
      ],
      [
        "Build",
        "Development & Launch",
        "Development turned the approved designs into a fast, accessible build with clean, maintainable code. Pages load quickly, images are optimised, and interactions respond smoothly on modern browsers and devices.\n\nBefore launch we tested across screen sizes, checked accessibility basics, and prepared the site for easy content updates. Cluely now has a flexible foundation that is ready to grow with the business.",
      ],
    ],
  }),

  make("Web", "Kastle", "Kastle", "Case Study", {
    website: "https://www.kastle.ai/",
    meta: facts("Technology", "UI/UX Design & Development", "8 Weeks"),
    overview:
      "Kastle needed a website that explains its services clearly and gives business customers a reason to take the next step. We built the experience around reliability and simplicity, so the structure moves naturally from first impression to action.\n\nThe finished site pairs clean layouts with a calm, professional palette with fast, dependable performance. Content is easy to scan, motion stays subtle, and every page works comfortably from large desktop screens to small phones. The result is a confident digital presence that feels consistent with the brand and easy for the team to grow.",
    story: [
      [
        "Research",
        "Understanding Kastle’s Audience",
        "We started by mapping how business customers discover, compare, and decide, looking closely at competitor sites and common drop-off points. These findings shaped a clear content hierarchy for Kastle.\n\nWorkshops with the team turned that research into goals, priorities, and a simple sitemap. Every later design choice traces back to this foundation, which kept the project focused and the feedback loops short.",
      ],
      [
        "Design",
        "Crafting the Kastle Experience",
        "The interface uses clean layouts with a calm, professional palette, supported by flexible grids, expressive typography, and generous spacing. Key sections are designed as reusable components, so the site stays consistent as new pages are added.\n\nLayouts were tested early on mobile and desktop to make sure hierarchy and readability hold up everywhere. Small details such as hover states, transitions, and iconography add polish without slowing the experience down.",
      ],
      [
        "Build",
        "Development & Launch",
        "Development turned the approved designs into a fast, accessible build with clean, maintainable code. Pages load quickly, images are optimised, and interactions respond smoothly on modern browsers and devices.\n\nBefore launch we tested across screen sizes, checked accessibility basics, and prepared the site for easy content updates. Kastle now has a flexible foundation that is ready to grow with the business.",
      ],
    ],
  }),

  make("Web", "Viture", "Viture", "Case Study", {
    website: "https://www.viture.com/luma/luma",
    meta: facts("Consumer Tech", "UI/UX Design & Development", "8 Weeks"),
    overview:
      "Viture needed a website that explains its immersive display products clearly and gives gamers and creators a reason to take the next step. We built the experience around immersion and product detail, so the structure moves naturally from first impression to action.\n\nThe finished site pairs bold visuals with rich product imagery with fast, dependable performance. Content is easy to scan, motion stays subtle, and every page works comfortably from large desktop screens to small phones. The result is a confident digital presence that feels consistent with the brand and easy for the team to grow.",
    story: [
      [
        "Research",
        "Understanding Viture’s Audience",
        "We started by mapping how gamers and creators discover, compare, and decide, looking closely at competitor sites and common drop-off points. These findings shaped a clear content hierarchy for Viture.\n\nWorkshops with the team turned that research into goals, priorities, and a simple sitemap. Every later design choice traces back to this foundation, which kept the project focused and the feedback loops short.",
      ],
      [
        "Design",
        "Crafting the Viture Experience",
        "The interface uses bold visuals with rich product imagery, supported by flexible grids, expressive typography, and generous spacing. Key sections are designed as reusable components, so the site stays consistent as new pages are added.\n\nLayouts were tested early on mobile and desktop to make sure hierarchy and readability hold up everywhere. Small details such as hover states, transitions, and iconography add polish without slowing the experience down.",
      ],
      [
        "Build",
        "Development & Launch",
        "Development turned the approved designs into a fast, accessible build with clean, maintainable code. Pages load quickly, images are optimised, and interactions respond smoothly on modern browsers and devices.\n\nBefore launch we tested across screen sizes, checked accessibility basics, and prepared the site for easy content updates. Viture now has a flexible foundation that is ready to grow with the business.",
      ],
    ],
  }),

  make("Web", "WorkLouder", "WorkLouder", "Case Study", {
    website: "https://worklouder.cc/",
    meta: facts("Marketing", "UI/UX Design & Development", "8 Weeks"),
    overview:
      "WorkLouder needed a website that explains its marketing services clearly and gives brands that want to grow a reason to take the next step. We built the experience around results and credibility, so the structure moves naturally from first impression to action.\n\nThe finished site pairs energetic typography with vibrant colour accents with fast, dependable performance. Content is easy to scan, motion stays subtle, and every page works comfortably from large desktop screens to small phones. The result is a confident digital presence that feels consistent with the brand and easy for the team to grow.",
    story: [
      [
        "Research",
        "Understanding WorkLouder’s Audience",
        "We started by mapping how brands that want to grow discover, compare, and decide, looking closely at competitor sites and common drop-off points. These findings shaped a clear content hierarchy for WorkLouder.\n\nWorkshops with the team turned that research into goals, priorities, and a simple sitemap. Every later design choice traces back to this foundation, which kept the project focused and the feedback loops short.",
      ],
      [
        "Design",
        "Crafting the WorkLouder Experience",
        "The interface uses energetic typography with vibrant colour accents, supported by flexible grids, expressive typography, and generous spacing. Key sections are designed as reusable components, so the site stays consistent as new pages are added.\n\nLayouts were tested early on mobile and desktop to make sure hierarchy and readability hold up everywhere. Small details such as hover states, transitions, and iconography add polish without slowing the experience down.",
      ],
      [
        "Build",
        "Development & Launch",
        "Development turned the approved designs into a fast, accessible build with clean, maintainable code. Pages load quickly, images are optimised, and interactions respond smoothly on modern browsers and devices.\n\nBefore launch we tested across screen sizes, checked accessibility basics, and prepared the site for easy content updates. WorkLouder now has a flexible foundation that is ready to grow with the business.",
      ],
    ],
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
      "For IGA, we created a bright and inviting 3D film that turns everyday grocery moments into a story worth watching. Every scene is composed around a clean, stylised supermarket world, with lighting, colour, and camera moves chosen to keep the main subject clear and memorable.\n\nFrom the first frame to the final render, the direction balances warm detail with clear product focus with a steady, cinematic pace. The finished piece gives IGA a polished, flexible asset that works across campaigns, social channels, and presentations, and it leaves room for future chapters of the same visual world.",
    story: [
      [
        "Concept",
        "Shaping the IGA Story",
        "The project began with a short creative brief and a set of mood references that defined colour, atmosphere, and pacing. We then wrote a script and storyboard that follow everyday grocery moments from the opening shot to the closing frame.\n\nEarly animatics let us test timing and composition before heavy production started, so the team could agree on the direction with confidence and avoid costly changes later.",
      ],
      [
        "Modelling",
        "Building the World",
        "Hero assets were modelled with careful attention to proportion, edge detail, and surface quality, then textured with materials that react naturally to light. A clean, stylised supermarket world was assembled around them to give every shot depth and a believable sense of scale.\n\nSupporting props and background elements were kept intentionally simple, so they add richness without competing with the main subject. The result is a world that feels crafted, tidy, and easy to read.",
      ],
      [
        "Animation",
        "Motion, Lighting & Final Render",
        "Camera moves, timing, and transitions were animated to guide the eye through each scene with a clear rhythm. Lighting and reflections were refined shot by shot so key details stay sharp and the mood stays consistent.\n\nThe final render and colour grade bring everything together into a clean, cinematic finish, delivered in the formats IGA needs for launch and for future reuse.",
      ],
    ],
  }),

  make("3D", "Mumu's Journey", "Mumu's Journey", "", {
    meta: facts("Entertainment", "3D Animation & Motion Graphics", "10 Weeks"),
    overview:
      "For Mumu's Journey, we created a warm and imaginative 3D film that turns a small character’s adventure into a story worth watching. Every scene is composed around layered, storybook-style environments, with lighting, colour, and camera moves chosen to keep the main subject clear and memorable.\n\nFrom the first frame to the final render, the direction balances gentle emotion with playful discovery with a steady, cinematic pace. The finished piece gives Mumu's Journey a polished, flexible asset that works across campaigns, social channels, and presentations, and it leaves room for future chapters of the same visual world.",
    story: [
      [
        "Concept",
        "Shaping the Mumu's Journey Story",
        "The project began with a short creative brief and a set of mood references that defined colour, atmosphere, and pacing. We then wrote a script and storyboard that follow a small character’s adventure from the opening shot to the closing frame.\n\nEarly animatics let us test timing and composition before heavy production started, so the team could agree on the direction with confidence and avoid costly changes later.",
      ],
      [
        "Modelling",
        "Building the World",
        "Hero assets were modelled with careful attention to proportion, edge detail, and surface quality, then textured with materials that react naturally to light. Layered, storybook-style environments was assembled around them to give every shot depth and a believable sense of scale.\n\nSupporting props and background elements were kept intentionally simple, so they add richness without competing with the main subject. The result is a world that feels crafted, tidy, and easy to read.",
      ],
      [
        "Animation",
        "Motion, Lighting & Final Render",
        "Camera moves, timing, and transitions were animated to guide the eye through each scene with a clear rhythm. Lighting and reflections were refined shot by shot so key details stay sharp and the mood stays consistent.\n\nThe final render and colour grade bring everything together into a clean, cinematic finish, delivered in the formats Mumu's Journey needs for launch and for future reuse.",
      ],
    ],
  }),

  make("3D", "McLaren", "The Art of Speed", "with McLaren", {
    meta: facts("Automotive", "3D Animation & Motion Graphics", "10 Weeks"),
    overview:
      "For McLaren, we created a sleek and dramatic 3D film that turns speed and precision into a story worth watching. Every scene is composed around a controlled studio with sweeping reflections, with lighting, colour, and camera moves chosen to keep the main subject clear and memorable.\n\nFrom the first frame to the final render, the direction balances raw power with refined detail with a steady, cinematic pace. The finished piece gives McLaren a polished, flexible asset that works across campaigns, social channels, and presentations, and it leaves room for future chapters of the same visual world.",
    story: [
      [
        "Concept",
        "Shaping the McLaren Story",
        "The project began with a short creative brief and a set of mood references that defined colour, atmosphere, and pacing. We then wrote a script and storyboard that follow speed and precision from the opening shot to the closing frame.\n\nEarly animatics let us test timing and composition before heavy production started, so the team could agree on the direction with confidence and avoid costly changes later.",
      ],
      [
        "Modelling",
        "Building the World",
        "Hero assets were modelled with careful attention to proportion, edge detail, and surface quality, then textured with materials that react naturally to light. A controlled studio with sweeping reflections was assembled around them to give every shot depth and a believable sense of scale.\n\nSupporting props and background elements were kept intentionally simple, so they add richness without competing with the main subject. The result is a world that feels crafted, tidy, and easy to read.",
      ],
      [
        "Animation",
        "Motion, Lighting & Final Render",
        "Camera moves, timing, and transitions were animated to guide the eye through each scene with a clear rhythm. Lighting and reflections were refined shot by shot so key details stay sharp and the mood stays consistent.\n\nThe final render and colour grade bring everything together into a clean, cinematic finish, delivered in the formats McLaren needs for launch and for future reuse.",
      ],
    ],
  }),


  make("3D", "Lenovo", "Built for Everyday Creativity", "", {
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
      "For Microsoft, we created a clean and optimistic 3D film that turns modern teamwork into a story worth watching. Every scene is composed around bright, minimal workspaces, with lighting, colour, and camera moves chosen to keep the main subject clear and memorable.\n\nFrom the first frame to the final render, the direction balances human warmth with technical precision with a steady, cinematic pace. The finished piece gives Microsoft a polished, flexible asset that works across campaigns, social channels, and presentations, and it leaves room for future chapters of the same visual world.",
    story: [
      [
        "Concept",
        "Shaping the Microsoft Story",
        "The project began with a short creative brief and a set of mood references that defined colour, atmosphere, and pacing. We then wrote a script and storyboard that follow modern teamwork from the opening shot to the closing frame.\n\nEarly animatics let us test timing and composition before heavy production started, so the team could agree on the direction with confidence and avoid costly changes later.",
      ],
      [
        "Modelling",
        "Building the World",
        "Hero assets were modelled with careful attention to proportion, edge detail, and surface quality, then textured with materials that react naturally to light. Bright, minimal workspaces was assembled around them to give every shot depth and a believable sense of scale.\n\nSupporting props and background elements were kept intentionally simple, so they add richness without competing with the main subject. The result is a world that feels crafted, tidy, and easy to read.",
      ],
      [
        "Animation",
        "Motion, Lighting & Final Render",
        "Camera moves, timing, and transitions were animated to guide the eye through each scene with a clear rhythm. Lighting and reflections were refined shot by shot so key details stay sharp and the mood stays consistent.\n\nThe final render and colour grade bring everything together into a clean, cinematic finish, delivered in the formats Microsoft needs for launch and for future reuse.",
      ],
    ],
  }),

  make("3D", "Xiaomi", "A New Era of Performance", "with Xiaomi", {
    meta: facts("Consumer Tech", "3D Animation & Motion Graphics", "10 Weeks"),
    overview:
      "For Xiaomi, we created a crisp and energetic 3D film that turns next-generation performance into a story worth watching. Every scene is composed around a high-contrast tech stage with sharp light, with lighting, colour, and camera moves chosen to keep the main subject clear and memorable.\n\nFrom the first frame to the final render, the direction balances bold motion with fine product detail with a steady, cinematic pace. The finished piece gives Xiaomi a polished, flexible asset that works across campaigns, social channels, and presentations, and it leaves room for future chapters of the same visual world.",
    story: [
      [
        "Concept",
        "Shaping the Xiaomi Story",
        "The project began with a short creative brief and a set of mood references that defined colour, atmosphere, and pacing. We then wrote a script and storyboard that follow next-generation performance from the opening shot to the closing frame.\n\nEarly animatics let us test timing and composition before heavy production started, so the team could agree on the direction with confidence and avoid costly changes later.",
      ],
      [
        "Modelling",
        "Building the World",
        "Hero assets were modelled with careful attention to proportion, edge detail, and surface quality, then textured with materials that react naturally to light. A high-contrast tech stage with sharp light was assembled around them to give every shot depth and a believable sense of scale.\n\nSupporting props and background elements were kept intentionally simple, so they add richness without competing with the main subject. The result is a world that feels crafted, tidy, and easy to read.",
      ],
      [
        "Animation",
        "Motion, Lighting & Final Render",
        "Camera moves, timing, and transitions were animated to guide the eye through each scene with a clear rhythm. Lighting and reflections were refined shot by shot so key details stay sharp and the mood stays consistent.\n\nThe final render and colour grade bring everything together into a clean, cinematic finish, delivered in the formats Xiaomi needs for launch and for future reuse.",
      ],
    ],
  }),

  make("Branding", "I4You", "The Next Chapter", "for I4You", {
    meta: facts("Services", "Brand Strategy & Identity", "6 Weeks"),
    overview:
      "I4You came to us looking for an identity that feels confident and approachable and is easy to recognise at a glance. We started with the brand’s purpose and audience, then built a visual system around a simple, friendly letterform.\n\nThe final identity brings together a distinctive logo, a bright, balanced colour palette, and a clear typographic voice. It works equally well on websites, social media, and printed materials, giving I4You a consistent presence wherever people meet the brand and a solid base to build on as it grows.",
    story: [
      [
        "Strategy",
        "Defining the I4You Brand",
        "We began with interviews and a review of the market to understand what makes I4You different. Key values, audience needs, and tone of voice were distilled into a short brand platform.\n\nThat platform became the filter for every creative decision, from early ideas to the final colour choices, and kept the whole team aligned on what the brand should feel like.",
      ],
      [
        "Identity",
        "Designing a Distinctive Visual System",
        "The visual identity centres on a simple, friendly letterform. Logo options were explored, refined, and tested at small and large sizes before one clear direction was chosen.\n\nA bright, balanced colour palette and a considered type pairing complete the system, giving the brand a recognisable look that stays flexible across different formats and applications.",
      ],
      [
        "Guidelines",
        "Bringing the Brand Together",
        "A concise brand book explains how to use the logo, colours, typography, and supporting graphics, with simple dos and don’ts for everyday work.\n\nTemplates and sample applications for websites, social media, and printed materials show the system in action, so the I4You team can launch confidently and keep every touchpoint consistent as the brand grows.",
      ],
    ],
  }),

  make("Branding", "Berry Babe", "The Flavor of", "The Berry Babe Brand", {
    featured: true,
    meta: facts("Food & Beverage", "Brand Strategy & Identity", "6 Weeks"),
    overview:
      "Berry Babe came to us looking for an identity that feels fresh and playful and is easy to recognise at a glance. We started with the brand’s purpose and audience, then built a visual system around juicy, hand-drawn berry shapes.\n\nThe final identity brings together a distinctive logo, vivid berry tones, and a clear typographic voice. It works equally well on packaging, menus, and social content, giving Berry Babe a consistent presence wherever people meet the brand and a solid base to build on as it grows.",
    story: [
      [
        "Strategy",
        "Defining the Berry Babe Brand",
        "We began with interviews and a review of the market to understand what makes Berry Babe different. Key values, audience needs, and tone of voice were distilled into a short brand platform.\n\nThat platform became the filter for every creative decision, from early ideas to the final colour choices, and kept the whole team aligned on what the brand should feel like.",
      ],
      [
        "Identity",
        "Designing a Distinctive Visual System",
        "The visual identity centres on juicy, hand-drawn berry shapes. Logo options were explored, refined, and tested at small and large sizes before one clear direction was chosen.\n\nVivid berry tones and a considered type pairing complete the system, giving the brand a recognisable look that stays flexible across different formats and applications.",
      ],
      [
        "Guidelines",
        "Bringing the Brand Together",
        "A concise brand book explains how to use the logo, colours, typography, and supporting graphics, with simple dos and don’ts for everyday work.\n\nTemplates and sample applications for packaging, menus, and social content show the system in action, so the Berry Babe team can launch confidently and keep every touchpoint consistent as the brand grows.",
      ],
    ],
  }),

  make("Branding", "Futureproof", "Building Tomorrow's Identity", "for Futureproof", {
    meta: facts("Technology", "Brand Strategy & Identity", "6 Weeks"),
    overview:
      "Futureproof came to us looking for an identity that feels modern and reliable and is easy to recognise at a glance. We started with the brand’s purpose and audience, then built a visual system around a clean geometric mark.\n\nThe final identity brings together a distinctive logo, a cool, forward-looking palette, and a clear typographic voice. It works equally well on product interfaces, presentations, and websites, giving Futureproof a consistent presence wherever people meet the brand and a solid base to build on as it grows.",
    story: [
      [
        "Strategy",
        "Defining the Futureproof Brand",
        "We began with interviews and a review of the market to understand what makes Futureproof different. Key values, audience needs, and tone of voice were distilled into a short brand platform.\n\nThat platform became the filter for every creative decision, from early ideas to the final colour choices, and kept the whole team aligned on what the brand should feel like.",
      ],
      [
        "Identity",
        "Designing a Distinctive Visual System",
        "The visual identity centres on a clean geometric mark. Logo options were explored, refined, and tested at small and large sizes before one clear direction was chosen.\n\nA cool, forward-looking palette and a considered type pairing complete the system, giving the brand a recognisable look that stays flexible across different formats and applications.",
      ],
      [
        "Guidelines",
        "Bringing the Brand Together",
        "A concise brand book explains how to use the logo, colours, typography, and supporting graphics, with simple dos and don’ts for everyday work.\n\nTemplates and sample applications for product interfaces, presentations, and websites show the system in action, so the Futureproof team can launch confidently and keep every touchpoint consistent as the brand grows.",
      ],
    ],
  }),

  make("Branding", "Letter", "A Clear Identity for a Modern Brand", "Visual Identity", {
    meta: facts("Design", "Brand Strategy & Identity", "6 Weeks"),
    overview:
      "Letter came to us looking for an identity that feels refined and minimal and is easy to recognise at a glance. We started with the brand’s purpose and audience, then built a visual system around expressive typography and generous spacing.\n\nThe final identity brings together a distinctive logo, a restrained neutral palette, and a clear typographic voice. It works equally well on stationery, digital layouts, and printed pieces, giving Letter a consistent presence wherever people meet the brand and a solid base to build on as it grows.",
    story: [
      [
        "Strategy",
        "Defining the Letter Brand",
        "We began with interviews and a review of the market to understand what makes Letter different. Key values, audience needs, and tone of voice were distilled into a short brand platform.\n\nThat platform became the filter for every creative decision, from early ideas to the final colour choices, and kept the whole team aligned on what the brand should feel like.",
      ],
      [
        "Identity",
        "Designing a Distinctive Visual System",
        "The visual identity centres on expressive typography and generous spacing. Logo options were explored, refined, and tested at small and large sizes before one clear direction was chosen.\n\nA restrained neutral palette and a considered type pairing complete the system, giving the brand a recognisable look that stays flexible across different formats and applications.",
      ],
      [
        "Guidelines",
        "Bringing the Brand Together",
        "A concise brand book explains how to use the logo, colours, typography, and supporting graphics, with simple dos and don’ts for everyday work.\n\nTemplates and sample applications for stationery, digital layouts, and printed pieces show the system in action, so the Letter team can launch confidently and keep every touchpoint consistent as the brand grows.",
      ],
    ],
  }),

  make("Branding", "Green", "A Fresh Perspective on Identity", "Brand Design", {
    meta: facts("Lifestyle", "Brand Strategy & Identity", "6 Weeks"),
    overview:
      "Green came to us looking for an identity that feels fresh and balanced and is easy to recognise at a glance. We started with the brand’s purpose and audience, then built a visual system around organic shapes with a natural rhythm.\n\nThe final identity brings together a distinctive logo, layered green tones, and a clear typographic voice. It works equally well on packaging, signage, and digital channels, giving Green a consistent presence wherever people meet the brand and a solid base to build on as it grows.",
    story: [
      [
        "Strategy",
        "Defining the Green Brand",
        "We began with interviews and a review of the market to understand what makes Green different. Key values, audience needs, and tone of voice were distilled into a short brand platform.\n\nThat platform became the filter for every creative decision, from early ideas to the final colour choices, and kept the whole team aligned on what the brand should feel like.",
      ],
      [
        "Identity",
        "Designing a Distinctive Visual System",
        "The visual identity centres on organic shapes with a natural rhythm. Logo options were explored, refined, and tested at small and large sizes before one clear direction was chosen.\n\nLayered green tones and a considered type pairing complete the system, giving the brand a recognisable look that stays flexible across different formats and applications.",
      ],
      [
        "Guidelines",
        "Bringing the Brand Together",
        "A concise brand book explains how to use the logo, colours, typography, and supporting graphics, with simple dos and don’ts for everyday work.\n\nTemplates and sample applications for packaging, signage, and digital channels show the system in action, so the Green team can launch confidently and keep every touchpoint consistent as the brand grows.",
      ],
    ],
  }),

  make("Branding", "Pasta Si", "Rooted in Purpose, More Than a Meal", "with Pasta Si", {
    meta: facts("Food & Beverage", "Brand Strategy & Identity", "6 Weeks"),
    images: {
      hero: "/images/cases/pasta-si/hero.gif",
      cover: "/images/cases/pasta-si/hero.gif",
    },
    overview:
      "Pasta Si came to us looking for an identity that feels warm and welcoming and is easy to recognise at a glance. We started with the brand’s purpose and audience, then built a visual system around hand-crafted lettering and food-led details.\n\nThe final identity brings together a distinctive logo, warm, appetising colours, and a clear typographic voice. It works equally well on menus, packaging, and in-store signage, giving Pasta Si a consistent presence wherever people meet the brand and a solid base to build on as it grows.",
    story: [
      [
        "Strategy",
        "Defining the Pasta Si Brand",
        "We began with interviews and a review of the market to understand what makes Pasta Si different. Key values, audience needs, and tone of voice were distilled into a short brand platform.\n\nThat platform became the filter for every creative decision, from early ideas to the final colour choices, and kept the whole team aligned on what the brand should feel like.",
      ],
      [
        "Identity",
        "Designing a Distinctive Visual System",
        "The visual identity centres on hand-crafted lettering and food-led details. Logo options were explored, refined, and tested at small and large sizes before one clear direction was chosen.\n\nWarm, appetising colours and a considered type pairing complete the system, giving the brand a recognisable look that stays flexible across different formats and applications.",
      ],
      [
        "Guidelines",
        "Bringing the Brand Together",
        "A concise brand book explains how to use the logo, colours, typography, and supporting graphics, with simple dos and don’ts for everyday work.\n\nTemplates and sample applications for menus, packaging, and in-store signage show the system in action, so the Pasta Si team can launch confidently and keep every touchpoint consistent as the brand grows.",
      ],
    ],
  }),

  make("Branding", "Truway", "Designed to Say More with Less", "Consistency Across the Journey for Truway", {
    meta: facts("Services", "Brand Strategy & Identity", "6 Weeks"),
    overview:
      "Truway came to us looking for an identity that feels clear and trustworthy and is easy to recognise at a glance. We started with the brand’s purpose and audience, then built a visual system around a minimal mark on a strong grid.\n\nThe final identity brings together a distinctive logo, a calm, confident palette, and a clear typographic voice. It works equally well on customer communications, apps, and print, giving Truway a consistent presence wherever people meet the brand and a solid base to build on as it grows.",
    story: [
      [
        "Strategy",
        "Defining the Truway Brand",
        "We began with interviews and a review of the market to understand what makes Truway different. Key values, audience needs, and tone of voice were distilled into a short brand platform.\n\nThat platform became the filter for every creative decision, from early ideas to the final colour choices, and kept the whole team aligned on what the brand should feel like.",
      ],
      [
        "Identity",
        "Designing a Distinctive Visual System",
        "The visual identity centres on a minimal mark on a strong grid. Logo options were explored, refined, and tested at small and large sizes before one clear direction was chosen.\n\nA calm, confident palette and a considered type pairing complete the system, giving the brand a recognisable look that stays flexible across different formats and applications.",
      ],
      [
        "Guidelines",
        "Bringing the Brand Together",
        "A concise brand book explains how to use the logo, colours, typography, and supporting graphics, with simple dos and don’ts for everyday work.\n\nTemplates and sample applications for customer communications, apps, and print show the system in action, so the Truway team can launch confidently and keep every touchpoint consistent as the brand grows.",
      ],
    ],
  }),

  make("Branding", "Resurge", "The Power of Renewal", "for Resurge", {
    meta: facts("Wellness", "Brand Strategy & Identity", "6 Weeks"),
    overview:
      "Resurge came to us looking for an identity that feels energetic and optimistic and is easy to recognise at a glance. We started with the brand’s purpose and audience, then built a visual system around dynamic shapes that suggest upward movement.\n\nThe final identity brings together a distinctive logo, bold, uplifting colours, and a clear typographic voice. It works equally well on digital campaigns, merchandise, and packaging, giving Resurge a consistent presence wherever people meet the brand and a solid base to build on as it grows.",
    story: [
      [
        "Strategy",
        "Defining the Resurge Brand",
        "We began with interviews and a review of the market to understand what makes Resurge different. Key values, audience needs, and tone of voice were distilled into a short brand platform.\n\nThat platform became the filter for every creative decision, from early ideas to the final colour choices, and kept the whole team aligned on what the brand should feel like.",
      ],
      [
        "Identity",
        "Designing a Distinctive Visual System",
        "The visual identity centres on dynamic shapes that suggest upward movement. Logo options were explored, refined, and tested at small and large sizes before one clear direction was chosen.\n\nBold, uplifting colours and a considered type pairing complete the system, giving the brand a recognisable look that stays flexible across different formats and applications.",
      ],
      [
        "Guidelines",
        "Bringing the Brand Together",
        "A concise brand book explains how to use the logo, colours, typography, and supporting graphics, with simple dos and don’ts for everyday work.\n\nTemplates and sample applications for digital campaigns, merchandise, and packaging show the system in action, so the Resurge team can launch confidently and keep every touchpoint consistent as the brand grows.",
      ],
    ],
  }),

  make("Branding", "UFO Bean", "An Out-of-This-World Branding", "for UFO Bean", {
    featured: true,
    meta: facts("Food & Beverage", "Brand Strategy & Identity", "6 Weeks"),
    overview:
      "UFO Bean came to us looking for an identity that feels bold and playful and is easy to recognise at a glance. We started with the brand’s purpose and audience, then built a visual system around a quirky, saucer-inspired mark.\n\nThe final identity brings together a distinctive logo, high-contrast, space-inspired colours, and a clear typographic voice. It works equally well on cups, packaging, and social media, giving UFO Bean a consistent presence wherever people meet the brand and a solid base to build on as it grows.",
    story: [
      [
        "Strategy",
        "Defining the UFO Bean Brand",
        "We began with interviews and a review of the market to understand what makes UFO Bean different. Key values, audience needs, and tone of voice were distilled into a short brand platform.\n\nThat platform became the filter for every creative decision, from early ideas to the final colour choices, and kept the whole team aligned on what the brand should feel like.",
      ],
      [
        "Identity",
        "Designing a Distinctive Visual System",
        "The visual identity centres on a quirky, saucer-inspired mark. Logo options were explored, refined, and tested at small and large sizes before one clear direction was chosen.\n\nHigh-contrast, space-inspired colours and a considered type pairing complete the system, giving the brand a recognisable look that stays flexible across different formats and applications.",
      ],
      [
        "Guidelines",
        "Bringing the Brand Together",
        "A concise brand book explains how to use the logo, colours, typography, and supporting graphics, with simple dos and don’ts for everyday work.\n\nTemplates and sample applications for cups, packaging, and social media show the system in action, so the UFO Bean team can launch confidently and keep every touchpoint consistent as the brand grows.",
      ],
    ],
  }),
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