import Tag from '../ui/Tag'
import GlassRing from '../ui/GlassRing'
import Tilt3D from '../ui/Tilt3D'
import RequestCallForm from '../about/RequestCallForm'
import { assets } from '../../data/about'

export default function CreateSection() {
  return (
    <section id="contact" className="scroll-mt-20 px-6 py-24 text-white md:px-10">
      <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2">
        <div className="text-center">
          <Tag dark className="!text-pink">Contact us</Tag>
          <h2 className="mt-5 font-display text-3xl font-light uppercase leading-tight tracking-wide md:text-4xl">Let's create <br />something magical</h2>
          <Tilt3D src={assets.ring} className="mt-10 aspect-square"
            fallback={<GlassRing id="create-ring" petals={14} spin className="h-full w-full drop-shadow-[0_20px_60px_rgba(120,150,255,.55)]" />} />
        </div>
        <RequestCallForm />
      </div>
    </section>
  )
}