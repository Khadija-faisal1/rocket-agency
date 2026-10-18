import { ArrowRight, Box, Monitor, Code2, Star, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'

const servicesData = [
  {
    id: '01',
    title: '3D & CGI',
    description: 'Photorealistic, cinematic and story-driven 3D visuals that bring your ideas to life.',
    icon: Box,
  },
  {
    id: '02',
    title: 'Web Design',
    description: 'Modern, immersive and conversion-focused web experiences.',
    icon: Monitor,
  },
  {
    id: '03',
    title: 'Web Development',
    description: 'Fast, scalable and future-proof solutions for your digital presence.',
    icon: Code2,
  },
  {
    id: '04',
    title: 'Branding',
    description: 'Distinctive identities that build trust and create lasting impact.',
    icon: Star,
  },
  {
    id: '05',
    title: 'Marketing',
    description: 'Creative campaigns that generate real and measurable growth.',
    icon: TrendingUp,
  },
]

export default function ServicesGridSection() {
  return (
    <section className="relative overflow-hidden bg-[#070a12] px-6 py-28 text-white md:px-10">
      {/* Background Subtle Pattern & Curved Ambient Light Ring */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Subtle background 'R' grid pattern opacity */}
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px] opacity-20" />
        {/* Top curved neon lens-flare glow */}
        <div className="absolute top-0 left-1/2 h-[1px] w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-400/60 to-transparent shadow-[0_0_25px_4px_rgba(96,165,250,0.5)]" />
        {/* Bottom orbital accent glow */}
        <div className="absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mb-16 grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-blue-400/80 font-semibold mb-4">
              OUR SERVICES
            </p>
            <h2 className="font-display text-4xl font-light leading-[1.1] text-white md:text-6xl">
              Full spectrum <br />
              <span className="text-blue-400 font-normal">creative</span> solutions.
            </h2>
          </div>

          <div className="lg:pb-2">
            <p className="text-sm leading-relaxed text-slate-400 max-w-md">
              From breathtaking 3D visuals to high-performing web experiences, we combine creativity and technology to create lasting impact.
            </p>
          </div>
        </div>

        {/* 5-Column Glassmorphic Cards Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {servicesData.map((service, idx) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition-all duration-300 hover:border-blue-400/40 hover:bg-white/[0.06] hover:shadow-[0_10px_30px_-10px_rgba(59,130,246,0.3)] hover:-translate-y-1"
              >
                {/* Top Icon & Text */}
                <div>
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-blue-300 group-hover:scale-110 group-hover:text-blue-400 transition-all duration-300">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>

                  <h3 className="font-display text-lg font-medium text-white mb-3">
                    {service.title}
                  </h3>

                  <p className="text-xs leading-relaxed text-slate-400">
                    {service.description}
                  </p>
                </div>

                {/* Card Footer: Number & Arrow */}
                <div className="mt-12 flex items-center justify-between border-t border-white/5 pt-4 text-xs text-slate-500 transition-colors duration-300 group-hover:text-blue-300">
                  <span className="font-mono">{service.id}</span>
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}