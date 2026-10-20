import { Link, useParams } from 'react-router-dom'
import { MotionConfig, motion, useScroll, useSpring } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { getCase } from '../data/cases'
import { assets } from '../data/about'
import ImageText from '../components/ui/ImageText'
import Tag from '../components/ui/Tag'
import Sphere from '../components/ui/Sphere'
import OtherProjects from '../components/case/OtherProjects'
import CreateSection from '../components/case/CreateSection'

const ease = [0.22, 1, 0.36, 1]

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

const paragraphs = (text = '') => text.split('\n\n').filter(Boolean)

function SectionTitle({ light, bold, id, className = '' }) {
  return (
    <h2 id={id} className={`font-display text-2xl text-navy md:text-3xl ${className}`}>
      <span className="font-light">{light}</span> <span className="font-medium">{bold}</span>
    </h2>
  )
}

function SmartMedia({ src, alt, className = '' }) {
  if (!src) return null

  const isVideo = typeof src === 'string' && /\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(src)

  if (isVideo) {
    return (
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        aria-label={alt}
        className={`object-cover ${className}`}
      />
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={`object-cover ${className}`}
    />
  )
}

export default function CaseStudy() {
  const { slug } = useParams()
  const c = getCase(slug)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 })

  if (!c) return (
    <section className="mesh-dark grid min-h-screen place-items-center px-6 text-center text-white">
      <div>
        <h1 className="font-display text-4xl">Case study not found</h1>
        <Link to="/#portfolio" className="mt-4 inline-block text-electric">Back to portfolio</Link>
      </div>
    </section>
  )

  const meta = c.meta?.length
    ? c.meta
    : [
        { label: 'Category', value: c.category },
        ...(c.services?.length ? [{ label: 'Services', value: c.services.join(' · ') }] : []),
      ]
  const metaCols = { 1: 'grid-cols-1', 2: 'grid-cols-2', 3: 'grid-cols-3', 4: 'grid-cols-4' }[meta.length] ?? 'grid-cols-3'

  return (
    <MotionConfig reducedMotion="user">
      <motion.div aria-hidden="true" style={{ scaleX: progress }} className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-sky to-pink" />

      <article className="relative overflow-x-clip bg-bg text-ink">
        <header className="relative bg-[linear-gradient(180deg,#a9c6ee_0%,#cde0f9_30%,#f6f9ff_72%)] px-6 pb-28 pt-36 text-center md:px-10">
          <div aria-hidden="true" className="rays pointer-events-none absolute inset-y-0 right-0 w-3/4 opacity-40" />
          <Sphere className="-right-10 top-[44rem] z-0 h-36 w-36 md:h-40 md:w-40" variant="blue" />

          <div className="relative mx-auto max-w-5xl">
            <motion.div {...onLoad(0)}>
              <Tag>{c.client} {c.category} case study</Tag>
            </motion.div>

            <motion.h1
              {...onLoad(0.08)}
              className="mx-auto mt-6 max-w-xl text-balance font-display font-medium uppercase leading-[1.1] tracking-tight text-navy md:text-5xl lg:text-4xl"
            >
              {c.headline} {c.accent && <span className="text-pink">{c.accent}</span>}
            </motion.h1>

            <motion.div {...onLoad(0.24)} className="relative mx-auto mt-12 max-w-4xl rounded-[28px] border border-white/90 bg-white/50 p-1.5 shadow-[0_28px_50px_-30px_rgba(20,34,107,0.35)]">
              <div className="relative overflow-hidden rounded-3xl">
                <SmartMedia
                  src={c.images.hero}
                  alt={`${c.client} hero`}
                  className="aspect-[4/3] w-full md:aspect-[2.1/1]"
                />

                <dl className={`absolute inset-x-2 bottom-2 grid divide-x divide-white/25 overflow-hidden rounded-2xl border border-white/40 bg-white/15 text-center text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.45)] backdrop-blur-2xl [text-shadow:0_1px_10px_rgba(0,0,0,0.35)] md:inset-x-3 md:bottom-3 ${metaCols}`}>
                  {meta.map((m) => (
                    <div key={m.label} className="flex flex-col-reverse px-2 py-3 md:px-4 md:py-3.5">
                      <dt className="mt-0.5 text-[9px] uppercase tracking-[0.14em] text-white/80 md:text-[11px] md:tracking-[0.16em]">{m.label}</dt>
                      <dd className="font-display text-[11px] font-medium leading-tight md:text-base">{m.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </motion.div>

            {c.website && (
              <motion.div {...onLoad(0.32)} className="mt-8">
                <a
                  href={c.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 font-display text-base font-medium text-pink underline-offset-4 transition-colors hover:underline md:text-lg"
                >
                  Visit website
                  <ArrowUpRight
                    size={20}
                    strokeWidth={2.25}
                    className="text-pink transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </motion.div>
            )}
          </div>
        </header>

        {c.overview && (
          <section aria-labelledby="overview" className="relative -mt-12 z-20 px-6 md:px-10">
            <Sphere className="-left-12 top-1/2 z-0 h-36 w-36 -translate-y-1/2 md:h-40 md:w-40" />
            <motion.div
              {...onScroll}
              className="relative z-10 mx-auto max-w-2xl rounded-3xl border border-white/90 bg-white/75 px-8 pb-12 pt-14 text-center shadow-[inset_0_1px_0_#fff,0_24px_48px_-30px_rgba(20,34,107,0.3)] backdrop-blur-xl md:px-12"
            >
              <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                <Tag>Project overview</Tag>
              </div>
              <SectionTitle id="overview" light="Project" bold="Overview" />
              <div className="mt-6">
                {paragraphs(c.overview).map((p) => (
                  <p key={p.slice(0, 24)} className="mb-4 text-base leading-7 text-muted last:mb-0 md:text-lg md:leading-8">{p}</p>
                ))}
              </div>
            </motion.div>
          </section>
        )}

        {c.sections?.length > 0 && (
          <div className="mt-32 grid gap-24 md:mt-40 md:gap-32">
            {c.sections.map((s, i) => {
              const mediaItems = s.images ?? (s.image ? [s.image] : s.media ? [s.media] : [])
              const title = [s.light, s.title].filter(Boolean).join(' ')
              return (
                <motion.section key={`${i}-${title}`} {...onScroll} className="grid items-center gap-y-10 lg:grid-cols-[1.2fr_1fr]">
                  <div className="px-6 md:px-12 lg:pl-[max(3rem,calc((100vw-80rem)/2+3rem))] lg:pr-12">
                    <Tag>{s.tag}</Tag>
                    <h3 className="mt-5 font-display text-3xl text-navy md:text-4xl">
                      {s.light && <span className="font-light">{s.light} </span>}
                      <span className="font-medium">{s.title}</span>
                    </h3>
                    <div className="mt-6 max-w-lg">
                      {paragraphs(s.body).map((p) => (
                        <p key={p.slice(0, 24)} className="mb-4 text-base leading-7 text-muted last:mb-0 md:text-lg md:leading-8">{p}</p>
                      ))}
                    </div>
                  </div>

                  <div className="grid w-full gap-6 overflow-hidden lg:w-[92%] lg:justify-self-end lg:rounded-l-[2rem]">
                    {mediaItems.map((src, n) => (
                      <SmartMedia
                        key={`${n}-${src}`}
                        src={src}
                        alt={`${title} ${n + 1}`}
                        className="aspect-[4/3] w-full rounded-2xl lg:aspect-[16/10] lg:rounded-none"
                      />
                    ))}
                  </div>
                </motion.section>
              )
            })}
          </div>
        )}

        {c.images?.gallery?.length > 0 && (
          <section aria-labelledby="gallery" className="mt-32 md:mt-40">
            <motion.div {...onScroll} className="px-6 text-center">
              <Tag>Project gallery</Tag>
              <SectionTitle id="gallery" light="Project" bold="Gallery" className="mt-5" />
            </motion.div>

            <div className="mx-auto mt-12 grid max-w-7xl gap-4 px-6 sm:grid-cols-3 md:px-10">
              {c.images.gallery.slice(0, 6).map((g, n) => (
                <motion.div
                  key={`${n}-${g}`}
                  {...onScroll}
                  transition={{ duration: 0.7, delay: n * 0.08, ease }}
                  className="group relative aspect-square overflow-hidden rounded-2xl shadow-md"
                >
                  <SmartMedia
                    src={g}
                    alt={`${c.client} gallery ${n + 1}`}
                    className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </motion.div>
              ))}
            </div>
          </section>
        )}

        <div className="relative mt-32 md:mt-44">
          <ImageText src={assets.projectsText} className="text-[9.5vw]">Other Projects</ImageText>
        </div>
        <div className="h-16" />
      </article>

      <div className="mesh-dark relative">
        <OtherProjects currentSlug={c.slug} />
        <CreateSection />
      </div>
    </MotionConfig>
  )
}