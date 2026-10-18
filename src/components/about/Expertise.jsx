import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Tag from '../ui/Tag'
import Media from '../ui/Media'
import { expertise } from '../../data/about'

export default function Expertise() {
  return (
    <section className="relative overflow-hidden bg-bg px-3 pb-12 pt-6 text-center md:px-4">
      <div aria-hidden="true" className="absolute left-1/2 top-40 h-[420px] w-[70%] -translate-x-1/2 rounded-full bg-glow/40 blur-3xl" />
      <div className="relative">
        <Tag>{expertise.tag}</Tag>
        <h2 className="mt-4 font-display text-2xl text-navy"><span className="font-light">{expertise.title}</span> <span className="font-semibold">{expertise.accent}</span></h2>
        <ul className="mx-auto mt-10 grid max-w-[1400px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {expertise.items.map((e) => (
            <li key={e.label}>
              <Link to={`/about#process-${e.process}`} aria-label={`${e.label}: see our process`}
                className="group relative block aspect-square overflow-hidden rounded-xl ring-1 ring-white/80 shadow-[0_14px_40px_rgba(110,150,230,.28)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_26px_60px_rgba(90,130,240,.42)]">
                <Media src={e.src} alt={e.label} label={e.label} gradient={e.gradient}
                  className="absolute inset-0 h-full w-full transition duration-700 ease-out group-hover:scale-[1.04]" />
                <span aria-hidden="true" className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition duration-700 group-hover:translate-x-full" />
                <span className="absolute inset-x-3 bottom-3 flex translate-y-3 items-center justify-between rounded-lg border border-white/60 bg-white/55 px-3 py-2 text-xs font-medium text-navy opacity-0 backdrop-blur-xl transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  See our process <ArrowRight size={14} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}