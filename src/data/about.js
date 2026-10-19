// All About page copy and image paths live here. Edit text, swap images, done.
// Images go in public/images/about/ as .webp. Missing files show a gradient.
const img = (n) => `/images/about/${n}`;

export const hero = {
  tag: "About us",
  title: "Solutions built for",
  accent: "growth",
  stats: [
    ["1000+", "Successful Projects"],
    ["25+", "Industries Strengthened"],
    ["100+", "Passionate Experts"],
  ],
};

// Mosaic tiles: collage-1.webp ... collage-10.webp
const t = (n, gradient, alt = "") => ({
  src: img(`collage-${n}`),
  gradient,
  alt,
});
export const collage = {
  top: [
    t(1, "from-emerald-900 to-amber-600"),
    t(2, "from-sky-900 to-slate-300"),
    t(3, "from-slate-400 to-slate-100"),
  ],
  car: t(4, "from-orange-900 to-slate-900"),
  ui: t(5, "from-fuchsia-200 to-sky-100"),
  city: t(6, "from-slate-700 to-sky-400"),
  berry: t(7, "from-rose-400 to-sky-300"),
  bread: t(8, "from-amber-700 to-orange-400"),
  minis: [
    t(9, "from-orange-300 to-indigo-900"),
    t(10, "from-sky-300 to-amber-300"),
    t(11, "from-indigo-700 to-blue-400"),
  ],
};

export const story = {
  tag: "About us",
  title: "Our",
  accent: "Story",
  lead: "We don't just build projects - we craft experiences that people remember.",
  body: "We are a team of 158 passionate experts that combine UI/UX, branding, 3D, development, and marketing to create work that stands out. Every project is approached with creative strategies, ensuring it not only looks great but also achieves real results. Our approach is to create practical solutions that solve problems and help brands grow in meaningful ways.",
};

export const expertise = {
  tag: "Our services",
  title: "Our",
  accent: "Expertise Areas",
  items: [
    {
      label: "Website Services",
      process: "web",
      src: img("expertise-1.png"),
      gradient: "from-sky-300 to-blue-200",
    },
    {
      label: "3D Animations",
      process: "3d",
      src: img("expertise-2.png"),
      gradient: "from-teal-300 to-cyan-100",
    },
    {
      label: "Branding",
      process: "web",
      src: img("expertise-3.png"),
      gradient: "from-orange-300 to-amber-100",
    },
    {
      label: "Marketing",
      process: "marketing",
      src: img("expertise-4.png"),
      gradient: "from-fuchsia-300 to-violet-200",
    },
  ],
};

// Certification badges (placeholder names). Positions are % of the stage.
export const certifications = {
  tag: "Certifications",
  title: "Our Certifications",
  badges: [
    {
      label: "Google Partner",
      sub: "Premier badge",
      x: 16,
      y: 20,
      r: -12,
      color: "#4285f4",
    },
    {
      label: "Meta Business Partner",
      sub: "Marketing",
      x: 50,
      y: 6,
      r: 8,
      color: "#1877f2",
    },
    {
      label: "Adobe Certified",
      sub: "Professional",
      x: 70,
      y: 18,
      r: 10,
      color: "#fa0f00",
    },
    {
      label: "AWS Certified",
      sub: "Cloud practitioner",
      x: 74,
      y: 46,
      r: -8,
      color: "#ff9900",
    },
    {
      label: "HubSpot Academy",
      sub: "Inbound marketing",
      x: 12,
      y: 50,
      r: 10,
      color: "#ff7a59",
    },
    {
      label: "Awwwards",
      sub: "Honorable mention",
      x: 22,
      y: 76,
      r: -6,
      color: "#222",
    },
    {
      label: "Webflow Partner",
      sub: "Expert",
      x: 62,
      y: 78,
      r: 8,
      color: "#4353ff",
    },
  ],
};

// Placeholder copy. Replace with the CEO's real words. Photo: ceo.webp
export const ceo = {
  tag: "CEO message",
  heading: "A word from our CEO",
  name: "Didar Hiwa-Namam",
  role: "Founder and CEO, Rocket Agency",
  quote:
    "No-one is the best at everything, but everyone is the best at something",
  paragraphs: [
    "I started Rocket Agency with a simple goal: help talented people do what they love, and help clients get the visuals and experiences their brands deserve.",
    "Now, with more than 100 team members, we are proud to deliver hundreds of multi-award-winning websites, 3D experiences, and digital projects that move industries forward.",
  ],
  cta: "Contact me",
  link: "Read more",
  src: "/images/ceo-pic.png",
};

// Five project cards (images: public/images/projects/project-1.webp ... project-5.webp)
const pr = (n) => `/images/about/other-project-${n}.png`
export const projects = [
  { title: 'UFO Bean', tags: ['Branding'], src: pr(6), to: '/case/ufo-bean', gradient: 'from-rose-800 to-fuchsia-950' },
  { title: 'Baskin Robbins', tags: ['3d'], src: pr(2), to: '/case/baskin-robbins', gradient: 'from-fuchsia-800 to-blue-950' },
  { title: 'Pasta Si', tags: ['Branding'], src: pr(3), to: '/case/pasta-si', gradient: 'from-blue-800 to-slate-950' },
  { title: 'Cluely', tags: ['Web'], src: pr(4), to: '/case/cluely', gradient: 'from-indigo-800 to-slate-950' },
  { title: 'Lenovo', tags: ['3d'], src: pr(1), to: '/case/lenovo', gradient: 'from-sky-800 to-indigo-950' },
]

// Shared image paths
export const assets = {
  certR: '/images/our-certifications-photoroom.png', // 3D "R"
  arrows: '/images/about/arrow.png',               // two neon cursor arrows on black
  neon: '/images/about/footer-shape-1.png',                    // neon glass panels on black (footer + CEO)
  ring: '/images/illustator-contact-section.png',    // contact section ring (transparent PNG)
  rocket: '/images/contact-rocket-removebg.png',               // footer rocket icon
  processText: '/images/process-text-bg.webp',       // fills the giant OUR PROCESS letters
  projectsText: '/images/project-text.png',    // fills the giant OTHER PROJECTS letters
}
