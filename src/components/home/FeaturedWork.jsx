import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

// Case studies mapped to your uploaded image assets
const featuredCases = [
  {
    slug: 'coca-cola',
    client: 'Coca-Cola',
    logo: '/images/about/other-project-1.png',
    category: '3D / CGI / CAMPAIGN',
    image: '/images/about/other-project-1.png', // Replace with your Coca-Cola bottle image path
  },
  {
    slug: 'mercedes-benz',
    client: 'Mercedes-Benz',
    logo: '/logos/mercedes.svg',
    category: '3D / FILM / BRAND',
    image: '/images/about/other-project-2.png', // Replace with your Mercedes car image path
  },
  {
    slug: 'prada',
    client: 'PRADA',
    logo: '/logos/prada.svg',
    category: '3D / CGI / BRAND',
    image: '/images/about/other-project-3.png', // Replace with your Prada fashion model image path
  },
  {
    slug: 'bmw',
    client: 'BMW',
    logo: '/logos/bmw.svg',
    category: '3D / CGI / CAMPAIGN',
    image: '/images/about/other-project-4.png', // Replace with your BMW car image path
  },
  {
    slug: 'nike',
    client: 'Nike',
    logo: '/logos/nike.svg',
    category: '3D / CGI / CAMPAIGN',
    image: '/images/about/other-project-5.png', // Replace with your Nike shoe image path
  },
  {
    slug: 'victorias-secret',
    client: "Victoria's Secret",
    logo: '/logos/victorias-secret.svg',
    category: '3D / FILM / BRAND',
    image: '/images/about/other-project-6.png', // Replace with your Victoria's Secret image path
  },
]

export default function FeaturedWork() {
  return (
    <section id="portfolio" className="relative overflow-hidden bg-[#06080e] px-6 py-24 text-white md:px-10 md:py-32">
      {/* Background Subtle Grid Texture */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px] opacity-25" 
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header Bar */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between mb-12">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-blue-400/80 font-medium mb-3">
              SELECTED WORK
            </p>
            <h2 className="font-display text-4xl font-light leading-tight md:text-5xl lg:text-6xl text-white">
              Turning ideas into <br className="hidden sm:inline" />
              <span className="text-blue-400 font-normal">iconic experiences.</span>
            </h2>
          </div>

          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-5 py-2.5 text-xs font-medium uppercase tracking-wider text-white backdrop-blur-md transition-all duration-300 hover:border-white/50 hover:bg-white/10"
          >
            View all work <ArrowRight size={14} />
          </Link>
        </div>

        {/* 6-Card Portfolio Grid (3 Columns on Desktop, 2 on Tablet) */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredCases.map((c, index) => (
            <motion.div
              key={c.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Link
                to={`/case/${c.slug}`}
                className="group relative flex aspect-[16/10] w-full flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-sm transition-all duration-500 hover:border-blue-400/40 hover:shadow-[0_15px_35px_-10px_rgba(59,130,246,0.3)] hover:-translate-y-1"
              >
                {/* Background Case Study Image */}
                <img
                  src={c.image}
                  alt={c.client}
                  className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Vignette Gradients for Legibility */}
                <div 
                  aria-hidden="true" 
                  className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/60 transition-opacity duration-300 group-hover:opacity-90" 
                />

                {/* Top Overlay: Client Brand Title / Logo */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="font-display text-xl font-semibold tracking-wide text-white drop-shadow-md">
                    {c.client}
                  </span>
                </div>

                {/* Bottom Overlay: Category Tag & Circular Arrow Button */}
                <div className="relative z-10 flex items-center justify-between pt-4">
                  <span className="text-[11px] font-mono tracking-widest text-slate-300 uppercase">
                    {c.category}
                  </span>

                  <span className="grid h-8 w-8 place-items-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur-sm transition-all duration-300 group-hover:border-blue-400 group-hover:bg-blue-500 group-hover:text-white">
                    <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}