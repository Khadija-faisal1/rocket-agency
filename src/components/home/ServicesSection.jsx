import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { AnimatePresence, MotionConfig, motion } from 'framer-motion'
import { services } from '../../data/services'
import Tag from '../ui/Tag'
import Button from '../ui/Button'
import Sphere from '../ui/Sphere'
import GlassRing from '../ui/GlassRing'

const ease = [0.22, 1, 0.36, 1]

const ringStyles = {
  'uiux-research': { petals: 9, from: '#a9a4ff', via: '#d3b8ff', to: '#8fc4ff' },
  'uiux-design': { petals: 6, from: '#8fb2ff', via: '#c7a8ff', to: '#ffb1e0' },
  '3d-creation': { petals: 8, from: '#7fa0ff', via: '#9bd0ff', to: '#b6a4ff' },
  'web-development': { petals: 11, from: '#b19bff', via: '#8fb8ff', to: '#ffb6dc' },
}

/* ---------- Shared surfaces ---------- */
const pill =
  'flex items-center gap-2 whitespace-nowrap rounded-full border border-white/90 bg-white/75 px-3.5 py-2 text-sm text-ink ' +
  'shadow-[inset_0_1px_0_#fff,0_8px_24px_-10px_rgba(91,130,220,0.4)] backdrop-blur-md'

const cardBase =
  'group relative isolate min-h-[220px] rounded-3xl border border-white/80 bg-white/45 backdrop-blur-xl ' +
  'shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_12px_32px_-16px_rgba(91,130,220,0.35)] transition duration-300'

/* ---------- Orbit motion ---------- */
const stage = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 0.08 } },
  exit: { opacity: 0, transition: { duration: 0.18 } },
}
const item = {
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4, ease } },
}

function ServiceOrb({ id, active }) {
  return (
    <GlassRing
      id={`svc-${id}`}
      {...ringStyles[id]}
      className={`h-[72px] w-[72px] drop-shadow-[0_10px_18px_rgba(120,140,255,.35)] transition-transform duration-500 group-hover:scale-105 ${
        active ? 'scale-105' : ''
      }`}
    />
  )
}

function ServiceCard({ s, index, active, onSelect }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.07, ease }}
      onMouseEnter={onSelect}
      className={`${cardBase} ${active ? '-translate-y-0.5' : 'hover:-translate-y-0.5 hover:bg-white/65'}`}
    >
      {/* Active surface: one element that glides between cards */}
      {active && (
        <motion.span
          layoutId="service-active"
          aria-hidden="true"
          transition={{ type: 'spring', stiffness: 380, damping: 36 }}
          className="absolute inset-0 -z-10 rounded-3xl bg-white shadow-[inset_0_1px_0_#fff,0_0_0_1px_#d3e4ff,0_20px_44px_-14px_rgba(91,151,238,0.5)]"
        />
      )}

      <button
        type="button"
        onClick={onSelect}
        onFocus={onSelect}
        aria-pressed={active}
        className="flex h-full min-h-[220px] w-full flex-col justify-between rounded-3xl p-5 text-left"
      >
        <span className="flex items-start justify-between gap-2">
          <ServiceOrb id={s.id} active={active} />
          <span className="rounded-md bg-pink-soft px-2 py-1 text-[11px] font-medium uppercase tracking-wide text-pink">
            {s.price}
          </span>
        </span>
        <span className="block pr-11 font-display text-[17px] font-medium uppercase leading-[1.2] text-pink">
          {s.title}
        </span>
      </button>

      <Link
        to={`/about#process-${s.process}`}
        aria-label={`Learn more about ${s.title}`}
        className="group/arrow absolute bottom-4 right-4 z-10 grid h-8 w-8 place-items-center rounded-full border border-pink/20 bg-white/80 text-pink transition duration-300 hover:border-pink hover:bg-pink hover:text-white"
      >
        <ArrowRight size={16} className="transition-transform duration-300 group-hover/arrow:translate-x-0.5" />
      </Link>
    </motion.article>
  )
}

function Orbit({ service }) {
  const words = service.title.split(' ')
  const n = service.orbit.length
  const R = 39 // % of the box: where the pills sit, on the track ring
  const start = n % 2 === 0 ? -90 + 180 / n : -90

  return (
    <div className="relative mx-auto hidden aspect-square w-full max-w-[640px] md:block">
      {/* Soft halo */}
      <div
        aria-hidden="true"
        className="absolute inset-[8%] rounded-full"
        style={{ background: 'radial-gradient(circle, #fff 0%, #dcebff 35%, rgba(187,216,255,.55) 55%, transparent 72%)' }}
      />
      {/* Rings: track (pills sit on it), slow dashed ring, inner halo ring */}
      <div aria-hidden="true" className="absolute inset-[11%] rounded-full border border-glow/80" />
      <div aria-hidden="true" className="absolute inset-[22%] animate-orbit rounded-full border border-glow/80 [border-style:dashed]" />
      <div aria-hidden="true" className="absolute inset-[32%] rounded-full border border-white/80 shadow-[inset_0_0_40px_rgba(187,216,255,0.55)]" />

      <AnimatePresence mode="wait">
        <motion.div key={service.id} variants={stage} initial="hidden" animate="show" exit="exit" className="absolute inset-0">
          {/* Centre */}
          <motion.div
            variants={item}
            className="absolute inset-[34%] grid place-items-center rounded-full border border-white bg-white/70 shadow-[inset_0_1px_0_#fff,0_16px_44px_-14px_rgba(91,151,238,0.55)] backdrop-blur-xl"
          >
            <h3 className="text-center font-display text-[28px] font-semibold leading-[1.05] text-[#e6deff] [-webkit-text-stroke:2px_#b7a3ff] [paint-order:stroke_fill] drop-shadow-[0_6px_14px_rgba(140,120,255,0.3)]">
              {words.map((w) => (
                <span key={w} className="block whitespace-nowrap">{w}</span>
              ))}
            </h3>
          </motion.div>

          {/* Items, evenly spaced around the track */}
          <ul aria-label={`${service.title} includes`} className="absolute inset-0 list-none">
            {service.orbit.map((o, i) => {
              const a = ((start + (360 / n) * i) * Math.PI) / 180
              return (
                <li
                  key={o.label}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${50 + R * Math.cos(a)}%`, top: `${50 + R * Math.sin(a)}%` }}
                >
                  <motion.span variants={item} className={`${pill} transition duration-300 hover:-translate-y-0.5`}>
                    <i
                      className="h-3.5 w-3.5 shrink-0 rounded-full shadow-[0_2px_6px_rgba(0,0,0,0.18)]"
                      style={{ background: `radial-gradient(circle at 30% 30%, #fffa, ${o.color})` }}
                    />
                    {o.label}
                  </motion.span>
                </li>
              )
            })}
          </ul>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default function ServicesSection() {
  const [activeId, setActiveId] = useState(services[0].id)
  const active = services.find((s) => s.id === activeId)

  return (
    <MotionConfig reducedMotion="user">
      <section id="services" className="mesh-light relative overflow-hidden px-6 py-24 text-ink md:px-10 md:py-32">
        <div aria-hidden="true" className="absolute -right-24 top-1/3 h-[560px] w-[560px] rounded-full bg-glow/40 blur-3xl" />
        <Sphere className="-left-4 bottom-7 z-0 h-22 w-22" />

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Header: heading left, CTA aligned to its baseline on the right */}
          <motion.header
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease }}
            className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <Tag>Our Services</Tag>
              <h2 className="mt-6 max-w-3xl text-balance font-display text-4xl font-medium uppercase leading-[1.05] tracking-tight md:text-6xl">
                A conversion-based approach to web
              </h2>
            </div>
            <Button to="/about#contact">Book Now</Button>
          </motion.header>

          <div className="mt-14 grid items-center gap-12 xl:grid-cols-[5fr_6fr] xl:gap-16">
            <div role="group" aria-label="Services" className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-2">
              {services.map((s, i) => (
                <ServiceCard key={s.id} s={s} index={i} active={s.id === activeId} onSelect={() => setActiveId(s.id)} />
              ))}
            </div>

            <div>
              <Orbit service={active} />
              <ul className="flex flex-wrap gap-2 md:hidden" aria-label={`${active.title} includes`}>
                {active.orbit.map((o) => (
                  <li key={o.label} className={pill}>
                    <i
                      className="h-3.5 w-3.5 shrink-0 rounded-full"
                      style={{ background: `radial-gradient(circle at 30% 30%, #fffa, ${o.color})` }}
                    />
                    {o.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </MotionConfig>
  )
}