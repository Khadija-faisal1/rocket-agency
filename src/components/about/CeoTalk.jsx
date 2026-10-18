import { useState } from 'react'
import Tag from '../ui/Tag'
import Media from '../ui/Media'
import Button from '../ui/Button'
import NeonShards from '../ui/NeonShards'
import { ceo, assets } from '../../data/about'

export default function CeoTalk() {
  const [neonFailed, setNeonFailed] = useState(false)
  return (
    <section className="relative overflow-hidden px-6 py-20 text-white md:px-10">
      {/* neon glass panels on the right (your image), faded into the page */}
      {neonFailed ? (
        <NeonShards className="-right-10 top-1/4 hidden h-72 w-72 md:block" />
      ) : (
        <img src={assets.neon} alt="" aria-hidden="true" draggable="false" onError={() => setNeonFailed(true)}
          className="pointer-events-none absolute right-0 top-38 hidden h-[50%] w-[28%] select-none object-cover object-center opacity-75 mix-blend-screen [mask-image:radial-gradient(ellipse_70%_65%_at_85%_45%,#000_30%,transparent_75%)] md:block" />
      )}

      <div className="relative mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-[1fr_1.1fr]">
        <figure className="mx-auto w-full max-w-sm">
          <div className="glass-card relative aspect-[4/5] overflow-hidden rounded-3xl p-2">
            <div className="absolute inset-2 overflow-hidden rounded-2xl">
              <Media src={ceo.src} alt={ceo.name} gradient="from-slate-700 to-slate-900" className="h-full w-full object-top" />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-night/60 via-transparent to-transparent" />
            </div>
          </div>
          <figcaption className="mt-5 text-center text-[11px] font-medium uppercase italic leading-relaxed tracking-wide text-white/85">“{ceo.quote}”</figcaption>
        </figure>

        <div>
          <Tag dark className="!text-pink">{ceo.tag}</Tag>
          <h2 className="mt-4 font-display text-3xl w-60 font-medium uppercase leading-tight tracking-wide">{ceo.heading}</h2>
          <p className="mt-5 text-xl font-medium uppercase tracking-normal">{ceo.name}</p>
          <p className="mt-1 text-[12px] uppercase tracking-[0.08em] text-white/55">{ceo.role}</p>
          {ceo.paragraphs.map((p) => <p key={p} className="mt-1 w-76 text-[13px] text-white">{p}</p>)}
          <div className="mt-7 flex items-center gap-6">
            <Button to="/about#contact" className="!px-5 !py-2.5 text-sm">{ceo.cta}</Button>
            <a href="#" className="text-xs uppercase tracking-[0.18em] text-pink transition hover:text-white">{ceo.link} →</a>
          </div>
        </div>
      </div>
    </section>
  )
}