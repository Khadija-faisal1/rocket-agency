import { ArrowDown } from 'lucide-react'
import Tag from '../ui/Tag'
import Sphere from '../ui/Sphere'
import { story } from '../../data/about'

export default function OurStory() {
  return (
    <section className="relative overflow-hidden bg-bg px-4 py-24 md:px-10">
      <Sphere className="-left-8 top-16 h-28 w-28" variant="blue" />
      <Sphere className="-right-6 -top-10 h-28 w-28" />

      <div className="glass relative mx-auto max-w-[430px] overflow-hidden rounded-3xl p-8 text-center">
        <div aria-hidden="true" className="absolute -right-6 -top-6 h-28 w-28 rotate-12 bg-gradient-to-br from-white to-transparent opacity-80 blur-md" />
        <Tag>{story.tag}</Tag>
        <h2 className="mt-4 font-display text-2xl text-navy"><span className="font-light">{story.title}</span> <span className="font-semibold">{story.accent}</span></h2>
        <p className="mt-4 text-[15px] leading-relaxed text-navy/85">{story.lead}</p>
        <p className="mt-4 text-[15px] leading-relaxed text-navy/85">{story.body}</p>
      </div>

      <p className="mt-14 flex flex-col items-center gap-1 text-xs uppercase tracking-wider text-pink">Scroll for more <ArrowDown size={14} /></p>
    </section>
  )
}