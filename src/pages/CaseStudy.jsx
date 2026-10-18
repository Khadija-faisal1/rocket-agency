import { Link, useParams } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { getCase } from '../data/cases'
import { assets } from '../data/about'
import ImageText from '../components/ui/ImageText'
import Media from '../components/ui/Media'
import Tag from '../components/ui/Tag'
import Button from '../components/ui/Button'
import Sphere from '../components/ui/Sphere'
import GlassOrb from '../components/ui/GlassOrb'
import OtherProjects from '../components/case/OtherProjects'
import CreateSection from '../components/case/CreateSection'

export default function CaseStudy() {
  const { slug } = useParams()
  const c = getCase(slug)

  if (!c) return (
    <section className="mesh-dark grid min-h-screen place-items-center px-6 text-center text-white">
      <div><h1 className="font-display text-4xl">Case study not found</h1><Link to="/#portfolio" className="mt-4 inline-block text-electric">Back to portfolio</Link></div>
    </section>
  )

  return (
    <>
      <article className="mesh-light relative overflow-hidden text-ink">
        {/* Hero */}
        <header className="relative px-6 pb-16 pt-36 text-center md:px-10">
          <GlassOrb className="left-1/2 top-16 h-[420px] w-[560px] max-w-[90vw] -translate-x-1/2 opacity-60 blur-sm" />
          <Sphere className="-left-12 top-80 h-36 w-36 md:left-6" />
          <Sphere className="-right-10 top-48 h-32 w-32 md:right-10" variant="blue" />

          <div className="relative">
            <Tag>{c.category} case study</Tag>
            <h1 className="mx-auto mt-6 max-w-4xl font-display text-4xl font-semibold uppercase leading-[1.05] tracking-tight text-navy md:text-6xl">
              {c.headline} <span className="text-gradient block">{c.accent}</span>
            </h1>
            {c.website && <div className="mt-8"><Button href={c.website}>Visit website <ArrowUpRight size={16} /></Button></div>}
          </div>

          <div className="glass relative mx-auto mt-14 max-w-6xl rounded-[2rem] p-3">
            <Media src={c.images.hero} alt={`${c.client} hero`} gradient={c.gradient} className="aspect-[16/8] w-full rounded-3xl" />
          </div>
        </header>

        {/* Overview */}
        <section aria-labelledby="overview" className="relative px-6 md:px-10">
          <div className="glass mx-auto max-w-xl rounded-3xl p-8 text-center">
            <h2 id="overview" className="font-display text-xl font-medium text-navy">Project overview</h2>
            <p className="mt-3 text-muted">{c.overview}</p>
            {c.services.length > 0 && (
              <ul className="mt-5 flex flex-wrap justify-center gap-2">
                {c.services.map((s) => <li key={s} className="rounded-full border border-white bg-white/70 px-3 py-1 text-sm text-sky-deep">{s}</li>)}
              </ul>
            )}
          </div>
        </section>

        {/* Alternating story sections */}
        <div className="relative mx-auto mt-28 grid max-w-6xl gap-28 px-6 md:px-10">
          {c.sections.map((s, i) => (
            <section key={s.title} className="grid items-center gap-10 md:grid-cols-2">
              <div className={i % 2 ? 'md:order-2' : ''}>
                <Tag>{s.tag}</Tag>
                <h3 className="mt-4 font-display text-2xl font-medium text-navy md:text-3xl">{s.title}</h3>
                <p className="mt-4 max-w-md text-muted">{s.body}</p>
              </div>
              <div className="glass rounded-[2rem] p-2.5">
                <Media src={s.image} alt={s.title} gradient={c.gradient} className="aspect-[4/3] w-full rounded-3xl" />
              </div>
            </section>
          ))}
        </div>

        {/* Gallery */}
        <section aria-labelledby="gallery" className="relative mx-auto mt-28 max-w-6xl px-6 md:px-10">
          <div className="text-center"><Tag>Project gallery</Tag><h2 id="gallery" className="sr-only">Project gallery</h2></div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {c.images.gallery.map((g, n) => (
              <div key={n} className={`glass rounded-3xl p-2 ${n === 1 ? 'sm:-translate-y-6' : ''}`}>
                <Media src={g} alt={`${c.client} gallery ${n + 1}`} gradient={c.gradient} className="aspect-square w-full rounded-2xl" />
              </div>
            ))}
          </div>
        </section>

        <div className="relative mt-28"><ImageText src={assets.projectsText} className="text-[9.5vw]">Other Projects</ImageText></div>
        <div className="h-16" />
      </article>

      {/* Dark closing block */}
      <div className="mesh-dark relative">
        <OtherProjects currentSlug={c.slug} />
        <CreateSection />
      </div>
    </>
  )
}