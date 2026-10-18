export const SITE = {
  name: "Rocket",
  calendlyUrl: "https://calendly.com/your-handle/discovery-call",
  email: "hello@rocketagency.com",
};

export const ROUTES = {
  home: "/",
  about: "/about",
  caseStudy: (slug = ":slug") => `/portfolio/${slug}`,
  thankYou: "/thank-you",
};

export const NAV_ITEMS = [
  { label: "Home", to: "/", hash: "#hero" },
  { label: "Our Services", to: "/", hash: "#services" },
  { label: "Our Portfolio", to: "/", hash: "#portfolio" },
  { label: "About Us", to: "/about" },
  { label: "Contact Us", to: "/", hash: "#contact" },
];

export const SOCIAL_LINKS = [
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Behance", href: "#" },
  { label: "YouTube", href: "#" },
];

export const STATS = [
  { value: "100+", label: "Projects delivered" },
  { value: "50+", label: "Happy clients" },
  { value: "5+", label: "Years of experience" },
];

export const BRANDS = [
  "Coca-Cola",
  "Mercedes-Benz",
  "Prada",
  "BMW",
  "Nike",
  "Victoria's Secret",
];