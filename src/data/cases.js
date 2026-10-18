// src/data/cases.js
// ONE list for every case study. `category` is the only thing that decides whether a case
// shows up as Web, 3D or Branding: in the home "Selected work" section, on its own page
// (/case/:slug) and in the "Other Projects" carousel at the bottom of every case page.

const slugify = (s) =>
  s.toLowerCase().replace(/['’]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

// Chips + fallback gradient (Tailwind classes, same format your Media component already uses) per category (the chips match the Figma "Other Projects" cards).
export const categories = {
  Web: {
    services: ['UI/UX Research', 'UI/UX Design', 'Custom-Code Dev'],
    gradient: 'from-blue-800 to-sky-500',
  },
  '3D': {
    services: ['Concept & Script', '3D Modelling', 'Cinematic Animation'],
    gradient: 'from-indigo-900 to-fuchsia-500',
  },
  Branding: {
    services: ['Brand Strategy', 'Visual Identity', 'Logo & Brand Book'],
    gradient: 'from-slate-800 to-teal-400',
  },
}

// headline = first line of the page title, accent = the gradient second line.
// Everything else is optional: fill it in from Figma when you have it (see bottom of file).
const make = (category, client, headline, accent = '', extra = {}) => {
  const slug = extra.slug ?? slugify(client)
  const hero = `/images/cases/${slug}/hero.jpg`
  return {
    slug,
    client,
    category,
    headline,
    accent,
    website: '', // empty = "Visit website" button is hidden
    overview: '', // use \n\n between paragraphs
    meta: [], // facts row under the hero image: [{ label, value }] (Industry, Services, Timeline...)
    services: categories[category].services,
    gradient: categories[category].gradient,
    images: {
      hero,
      cover: hero, // card thumbnail; point it at /images/cases/<slug>/cover.jpg if you want a separate crop
      gallery: [1, 2, 3].map((n) => `/images/cases/${slug}/gallery-${n}.jpg`),
    },
    sections: [], // alternating story blocks: { tag, title, body, images: [..several] }  (or a single `image`)
    featured: false, // true = appears in the "All" tab on the home page
    ...extra,
  }
}

export const cases = [
  /* ---------------- WEB ---------------- */
  // Figma gave only the client names here: replace headline/accent with the real titles.
  make('Web', 'Slash', 'Slash', 'Case Study', { featured: true }),
  make('Web', 'Cluely', 'Cluely', 'Case Study', { featured: true }),
  make('Web', 'Kastle', 'Kastle', 'Case Study'),
  make('Web', 'Viture', 'Viture', 'Case Study'),
  make('Web', 'WorkLouder', 'WorkLouder', 'Case Study'),

  /* ---------------- 3D ---------------- */
  make('3D', 'Baskin Robbins', 'A Scoop of a World Built on', 'Ice Cream', {
    featured: true,
    meta: [
      { label: 'Industry', value: 'Food & Beverage' },
      { label: 'Services', value: '3D Animation & Motion Graphics' },
      { label: 'Timeline', value: '10 Weeks' },
    ],
    overview:
      'For Baskin-Robbins, we created a vibrant 3D animation designed to capture the playful and colourful energy of the brand through a polished cartoon-style visual experience. The animation combined expressive motion, rich colours, and detailed environments to create a world that feels joyful, dynamic, and instantly recognisable.\n\nThe result is a high-end animated experience that blends premium 3D execution with a fun and approachable personality.',
    sections: [
      {
        tag: 'Process',
        title: 'Stylised Cartoon Animation System',
        body: 'We developed a stylised animation language inspired by modern cartoon production, focusing on smooth motion, expressive timing, and strong visual appeal. The goal was to create something playful while maintaining a refined and premium feel.\n\nLighting, materials, and environmental details were carefully crafted to enhance depth and colour throughout the animation. This helped create a rich and visually engaging world.\n\nThe final result delivers a polished cartoon aesthetic that feels modern, energetic, and memorable.',
        images: ['/images/cases/baskin-robbins/section-1-a.jpg', '/images/cases/baskin-robbins/section-1-b.jpg'],
      },
      {
        tag: 'Motion',
        title: 'Motion, Energy & Brand Personality',
        body: "The animation was built around movement and rhythm, using dynamic transitions and expressive motion to create a constant sense of energy. Every sequence was designed to feel fluid, responsive, and entertaining.\n\nWe focused on personality-driven animation to reinforce Baskin-Robbins' playful identity and make each moment feel lively and engaging.\n\nThe result is a colourful brand experience that feels immersive, distinctive, and highly shareable.",
        images: ['/images/cases/baskin-robbins/section-2-a.jpg'],
      },
    ],
  }),
  make('3D', 'IGA', 'IGA', '3D Animation'),
  make('3D', "Mumu's Journey", "Mumu's Journey", ''),
  make('3D', 'McLaren', 'The Art of Speed', 'with McLaren'),
  make('3D', 'Microsoft', 'Designed for Modern Teams', 'with Microsoft', { featured: true }),
  // TODO: client name for this one is not in the list you sent
  make('3D', 'Everyday Creativity', 'Build for Everyday Creativity', '', { slug: 'everyday-creativity' }),
  make('3D', 'Xiaomi', 'A New Era of Performance', 'with Xiaomi'),

  /* ---------------- BRANDING ---------------- */
  make('Branding', 'I4You', 'The Next Chapter', 'for I4You'),
  make('Branding', 'Berry Babe', 'The Flavor of', 'The Berry Babe Brand', { featured: true }),
  make('Branding', 'Futurproof', "Building Tomorrow's Identity", 'for Futurproof'),
  make('Branding', 'Pasta Si', 'Rooted in Purpose, More Than a Meal', 'with Pasta Si'),
  make('Branding', 'Truway', 'Designed to Say More with Less', 'Consistency Across the Journey for Truway'),
  make('Branding', 'Resurge', 'The Power of Renewal', 'for Resurge'),
  make('Branding', 'UFO Bean', 'An Out-of-This-World Branding', 'for UFO Bean', { featured: true }),
]

export const caseTabs = ['All', ...Object.keys(categories)]
export const featuredCases = cases.filter((c) => c.featured)
export const getCase = (slug) => cases.find((c) => c.slug === slug)

// For the "Other Projects" carousel: same category first, then the rest, never the current one.
export function getOtherCases(slug, limit = 8) {
  const current = getCase(slug)
  const others = cases.filter((c) => c.slug !== slug)
  const same = others.filter((c) => c.category === current?.category)
  const rest = others.filter((c) => c.category !== current?.category)
  return [...same, ...rest].slice(0, limit)
}

/* ------------------------------------------------------------------
   HOW TO FILL IN A CASE (example), pass an object as the last argument:

   make('3D', 'Microsoft', 'Designed for Modern Teams', 'with Microsoft', {
     featured: true,
     website: 'https://...',
     overview: 'Paste the overview paragraph from Figma.',
     sections: [
       { tag: 'Concept', title: '...', body: '...', images: ['/images/cases/microsoft/section-1-a.jpg', '/images/cases/microsoft/section-1-b.jpg'] },
       { tag: 'Production', title: '...', body: '...', image: '/images/cases/microsoft/section-2.jpg' },
     ],
   })

   Images go in  public/images/cases/<slug>/  as hero.jpg, gallery-1.jpg, gallery-2.jpg, gallery-3.jpg
   ------------------------------------------------------------------ */