// 12 steps in 3 groups. `id` becomes the anchor: /about#process-web, #process-3d, #process-marketing.
// Icons: public/images/about/step-1.webp ... step-12.webp (missing ones show a glass shape).
export const processGroups = [
  {
    id: "web",
    label: "WEB",
    side: "left",
    image: "/images/about/web-photoroom.png",
    steps: [
      [
        "Strategy & Discovery",
        "Exceptional digital presence is built on data and clarity, not assumptions. We begin by understanding your business, your audience, and your market through research, workshops, and data-led analysis. This allows us to define a clear direction where every design and technical decision has purpose.",
      ],
      [
        "User Flow & Design",
        "Before designing interfaces, we design experiences. Through information architecture, user flows, journey mapping, wireframing, prototyping and interaction design, we create intuitive digital ecosystems that guide users naturally from first impression to conversion.",
      ],
      [
        "Branding & Identity",
        "A strong brand is not only seen, but understood instantly. We create identities that connect strategy with design, ensuring consistency across every digital touchpoint. From positioning and visual systems to logo concepts, typography and tone, we build brands that feel clear, confident, and built to last.",
      ],
      [
        "Development & Optimization",
        "We turn ideas into fast, scalable, and reliable digital products. Through custom front-end and back-end development, CMS implementation, API integrations, and interactive experiences, we build with precision. Everything is optimized for performance, accessibility, SEO, and conversion.",
      ],
    ],
  },
  {
    id: "3d",
    label: "3D",
    side: "right",
    image: "/images/about/3d-photoroom.png",
    steps: [
      [
        "Concept & Direction",
        "Before creating visuals, we define the story they need to tell. Through concept development, storyboarding, art direction, and visual exploration, we establish a clear creative framework before production begins. This ensures every asset supports a specific objective, audience, and message.",
      ],
      [
        "Modeling & Animation",
        "Every asset is built with precision and purpose. From hard-surface modeling and product visualization to texturing, rigging, and animation, we create high-fidelity 3D content designed for both realism and impact. Motion is carefully crafted to highlight key details and guide attention. Every frame serves a purpose.",
      ],
      [
        "Lighting & Rendering",
        "Great renders are created long before the render button is pressed. Through cinematic lighting, material development, scene composition, and advanced rendering workflows, we create visuals with depth and realism. Every element is carefully balanced to achieve the desired mood and presentation quality.",
      ],
      [
        "Post Production & Delivery",
        "The final stage is where everything comes together. Through compositing, color grading, retouching, visual effects, and optimization, we refine every asset to its highest standard. Deliverables are tailored for web, advertising, social media, presentations, and large-scale displays.",
      ],
    ],
  },
  {
    id: "marketing",
    label: "MARKETING",
    side: "left",
    image: "/images/about/marketing-photoroom.png",
    steps: [
      [
        "Research & Intelligence",
        "Effective growth starts with understanding behavior, not assumptions. We analyze audience segments, competitor positioning and search demand. These insights shape our strategy, content direction, and channel allocation. Every decision is backed by evidence rather than intuition.",
      ],
      [
        "Positioning & Strategy",
        "Before launching campaigns, we define the foundation behind them. Through brand positioning, customer profiling, and market differentiation, we establish a clear strategic direction. This ensures every campaign communicates the right message to the right audience. Strong positioning creates stronger results.",
      ],
      [
        "Content & Campaigns",
        "Content performs best when it serves a clear objective. We develop creative concepts, content systems, paid campaigns, landing pages, and multi-channel marketing assets designed to work together. Every touchpoint is aligned around a unified message. The result is consistency, engagement, and conversion.",
      ],
      [
        "Partnership & Continuous Innovation",
        "The launch is just the beginning. We monitor performance, analyze user behavior, and continuously optimize campaigns, funnels, and customer journeys. By refining strategies, and adapting to evolving market demands, we ensure sustained growth and long-term success. Continuous improvement is built into everything we do.",
      ],
    ],
  },
];
