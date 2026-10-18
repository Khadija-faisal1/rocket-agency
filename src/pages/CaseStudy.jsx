import { Link, useParams } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { MotionConfig, motion, useScroll, useSpring } from 'framer-motion'
import { getCase } from '../data/cases'
import { assets } from '../data/about'
import ImageText from '../components/ui/ImageText'
import Media from '../components/ui/Media'
import Tag from '../components/ui/Tag'
import Button from '../components/ui/Button'
import Sphere from '../components/ui/Sphere'
import OtherProjects from '../components/case/OtherProjects'
import CreateSection from '../components/case/CreateSection'

const ease = [0.22, 1, 0.36, 1]

/* Entrance on load (hero) and on scroll (everything else) */
const onLoad = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease },
})
const onScroll = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease },
}

/* One quiet surface for every frame: hairline border, no glow */
const frame =
  'rounded-[28px] border border-white/90 bg-white/60 p-2 shadow-[inset_0_1px_0_#fff,0_24px_48px_-28px_rgba(20,34,107,0.28)]'

const paragraphs = (text = '') => text.split('\n\n').filter(Boolean)

function SectionTitle({ light, bold, id }) {
  return (
    <h2 id={id} className="mt-5 font-display text-3xl text-navy md:text-4xl">
      <span className="font-light">{light}</span> <span className="font-medium">{bold}</span>
    </h2>
  )
}

export default function CaseStudy() {
  const { slug } = useParams()
  const c = getCase(slug)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 })

  if (!c) return (
    <section className="mesh-dark grid min-h-screen place-items-center px-6 text-center text-white">
      <div><h1 className="font-display text-4xl">Case study not found</h1><Link to="/#portfolio" className="mt-4 inline-block text-electric">Back to portfolio</Link></div>
    </section>
  )

  // Facts row under the hero. Falls back to category + services if a case has no `meta`.
  const meta = c.meta?.length
    ? c.meta
    : [
        { label: 'Category', value: c.category },
        ...(c.services.length ? [{ label: 'Services', value: c.services.join(' · ') }] : []),
      ]
  const metaCols = { 1: 'md:grid-cols-1', 2: 'md:grid-cols-2', 3: 'md:grid-cols-3', 4: 'md:grid-cols-4' }[meta.length] ?? 'md:grid-cols-3'

  const gallery = c.images.gallery
  const bento = gallery.length === 3

  return (
    <MotionConfig reducedMotion="user">
      {/* Thin reading-progress line */}
      <motion.div aria-hidden="true" style={{ scaleX: progress }} className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-sky to-pink" />

      <article className="mesh-light relative overflow-x-clip text-ink">
        {/* ---------------- Hero ---------------- */}
        <header className="relative px-6 pb-20 pt-36 text-center md:px-10">
          <Sphere className="-left-10 top-[26rem] h-24 w-24 md:-left-6 md:h-28 md:w-28" />
          <Sphere className="-right-8 top-44 h-24 w-24 md:-right-4 md:h-28 md:w-28" variant="blue" />

          <div className="relative">
            <motion.div {...onLoad(0)}>
              <Tag>{c.client} · {c.category} case study</Tag>
            </motion.div>
            <motion.h1
              {...onLoad(0.08)}
              className="mx-auto mt-6 max-w-4xl text-balance font-display text-4xl font-semibold uppercase leading-[1.05] tracking-tight text-navy md:text-6xl"
            >
              {c.headline} <span className="text-gradient block">{c.accent}</span>
            </motion.h1>
            {c.website && (
              <motion.div {...onLoad(0.16)} className="mt-8">
                <Button href={c.website}>Visit website <ArrowUpRight size={16} /></Button>
              </motion.div>
            )}
          </div>

          <motion.div {...onLoad(0.24)} className="relative mx-auto mt-14 max-w-6xl">
            <div className={frame}>
              <Media src={c.images.hero} alt={`${c.client} hero`} gradient={c.gradient} className="aspect-[16/8] w-full rounded-3xl" />
            </div>

            {/* Facts sit below the image so they stay readable on any artwork */}
            <dl className={`mt-4 grid divide-y divide-[#dbe6fb] rounded-2xl border border-white/90 bg-white/60 text-left md:divide-x md:divide-y-0 ${metaCols}`}>
              {meta.map((m) => (
                <div key={m.label} className="px-6 py-5">
                  <dt className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted">{m.label}</dt>
                  <dd className="mt-1.5 font-display text-lg font-medium text-navy">{m.value}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </header>

        {/* ---------------- Overview ---------------- */}
        {(c.overview || c.services.length > 0) && (
          <section aria-labelledby="overview" className="relative mx-auto max-w-6xl px-6 md:px-10">
            <motion.div {...onScroll} className="grid gap-10 md:grid-cols-[1fr_1.5fr] md:gap-20">
              <div>
                <Tag>Overview</Tag>
                <SectionTitle id="overview" light="Project" bold="Overview" />
              </div>
              <div>
                {paragraphs(c.overview).map((p) => (
                  <p key={p.slice(0, 24)} className="mb-5 max-w-xl text-[15px] leading-7 text-muted last:mb-0">{p}</p>
                ))}
                {c.services.length > 0 && (
                  <ul className="mt-7 flex flex-wrap gap-2">
                    {c.services.map((s) => (
                      <li key={s} className="rounded-full border border-[#dbe6fb] bg-white/70 px-3.5 py-1.5 text-sm text-sky-deep">{s}</li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          </section>
        )}

        {/* ---------------- Story sections ---------------- */}
        {c.sections.length > 0 && (
          <div className="relative mx-auto mt-28 grid max-w-6xl gap-24 px-6 md:mt-32 md:gap-32 md:px-10">
            {c.sections.map((s, i) => {
              const imgs = s.images ?? (s.image ? [s.image] : [])
              return (
                <motion.section key={s.title} {...onScroll} className="grid items-start gap-10 md:grid-cols-12 md:gap-16">
                  {/* Text stays in view while the images scroll past */}
                  <div className={`md:sticky md:top-28 md:col-span-5 ${i % 2 ? 'md:order-2' : ''}`}>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-medium tabular-nums text-muted">{String(i + 1).padStart(2, '0')}</span>
                      <span aria-hidden="true" className="h-px w-8 bg-[#c9d8f3]" />
                      <Tag>{s.tag}</Tag>
                    </div>
                    <h3 className="mt-6 font-display text-2xl font-medium leading-tight text-navy md:text-3xl">{s.title}</h3>
                    <div className="mt-5 max-w-md">
                      {paragraphs(s.body).map((p) => (
                        <p key={p.slice(0, 24)} className="mb-4 text-[15px] leading-7 text-muted last:mb-0">{p}</p>
                      ))}
                    </div>
                  </div>
                  <div className="grid gap-5 md:col-span-7">
                    {imgs.map((src, n) => (
                      <div key={src} className={frame}>
                        <Media src={src} alt={`${s.title} ${n + 1}`} gradient={c.gradient} className="aspect-[5/4] w-full rounded-3xl" />
                      </div>
                    ))}
                  </div>
                </motion.section>
              )
            })}
          </div>
        )}

        {/* ---------------- Gallery ---------------- */}
        {gallery.length > 0 && (
          <section aria-labelledby="gallery" className="relative mx-auto mt-28 max-w-6xl px-6 md:mt-32 md:px-10">
            <motion.div {...onScroll} className="text-center">
              <Tag>Gallery</Tag>
              <SectionTitle id="gallery" light="Project" bold="Gallery" />
            </motion.div>

            <div className={`mt-12 grid gap-4 ${bento ? 'md:grid-cols-3 md:grid-rows-2' : 'sm:grid-cols-2 lg:grid-cols-3'}`}>
              {gallery.map((g, n) => (
                <motion.div
                  key={n}
                  {...onScroll}
                  transition={{ duration: 0.7, delay: n * 0.08, ease }}
                  className={`group relative overflow-hidden rounded-3xl border border-white/90 ${
                    bento && n === 0 ? 'aspect-[4/3] md:col-span-2 md:row-span-2 md:aspect-auto' : 'aspect-[4/3]'
                  }`}
                >
                  <Media
                    src={g}
                    alt={`${c.client} gallery ${n + 1}`}
                    gradient={c.gradient}
                    className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </motion.div>
              ))}
            </div>
          </section>
        )}

        <div className="relative mt-28 md:mt-32"><ImageText src={assets.projectsText} className="text-[9.5vw]">Other Projects</ImageText></div>
        <div className="h-16" />
      </article>

      {/* Dark closing block */}
      <div className="mesh-dark relative">
        <OtherProjects currentSlug={c.slug} />
        <CreateSection />
      </div>
    </MotionConfig>
  )
}