import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { cases, featuredCases, caseTabs } from '../../data/cases'
import Media from '../ui/Media'

const ease = [0.22, 1, 0.36, 1]

export default function FeaturedWork() {
  const [tab, setTab] = useState('All')
  const list = tab === 'All' ? featuredCases : cases.filter((c) => c.category === tab)

  return (
    <section id="portfolio" className="relative overflow-hidden bg-[#06080e] px-6 py-24 text-white md:px-10 md:py-32">
      {/* Subtle dot grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px] opacity-25"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.35em] text-blue-400/80">Selected work</p>
            <h2 className="font-display text-4xl font-light leading-tight text-white md:text-5xl lg:text-6xl">
              Turning ideas into <br className="hidden sm:inline" />
              <span className="font-normal text-blue-400">iconic experiences.</span>
            </h2>
          </div>

          {/* Category tabs */}
          <div role="tablist" aria-label="Filter work by category" className="flex w-fit gap-1 rounded-full border border-white/15 bg-white/[0.04] p-1 backdrop-blur-md">
            {caseTabs.map((t) => (
              <button
                key={t}
                role="tab"
                aria-selected={tab === t}
                onClick={() => setTab(t)}
                className={`relative rounded-full px-4 py-2 text-xs font-medium uppercase tracking-wider transition-colors duration-200 ${
                  tab === t ? 'text-white' : 'text-white/55 hover:text-white'
                }`}
              >
                {tab === t && (
                  <motion.span
                    layoutId="work-tab"
                    transition={{ type: 'spring', stiffness: 400, damping: 36 }}
                    className="absolute inset-0 rounded-full border border-white/25 bg-white/10"
                  />
                )}
                <span className="relative">{t}</span>
              </button>
            ))}
          </div>
        </div>

        <motion.div key={tab} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((c, i) => (
            <motion.div
              key={c.slug}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05, ease }}
            >
              <Link
                to={`/case/${c.slug}`}
                className="group relative flex aspect-[16/10] w-full flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-6 transition duration-500 hover:-translate-y-1 hover:border-blue-400/40 hover:shadow-[0_15px_35px_-10px_rgba(59,130,246,0.3)]"
              >
                <Media
                  src={c.images.cover}
                  alt={`${c.client} case study`}
                  gradient={c.gradient}
                  className="absolute inset-0 h-full w-full transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/60" />

                <span className="relative z-10 font-display text-xl font-semibold tracking-wide text-white drop-shadow-md">
                  {c.client}
                </span>

                <div className="relative z-10 flex items-center justify-between pt-4">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-slate-300">{c.category}</span>
                  <span className="grid h-8 w-8 place-items-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur-sm transition duration-300 group-hover:border-blue-400 group-hover:bg-blue-500">
                    <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}