import { ArrowRight } from 'lucide-react'
import Button from '../ui/Button'
import TrustedBrands from '../ui/TrustedBrands'

const bgImage = '/images/hero-img.jpg'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-night text-white">
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt=""
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover object-center"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-night/90 via-night/40 to-transparent" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-night/40 via-transparent to-night" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pb-48 pt-32 md:px-10">
        <p className="animate-rise text-xs font-medium uppercase tracking-[0.3em] text-night-muted">
          3D / WEB / BRANDING / MARKETING
        </p>

        <h1 className="animate-rise mt-6 max-w-2xl font-display text-5xl font-light leading-[1.08] tracking-tight [animation-delay:120ms] md:text-7xl">
          We turn <span className="font-normal text-electric">ideas into</span> iconic digital experiences.
        </h1>

        <p className="animate-rise mt-6 max-w-md text-base leading-relaxed text-night-muted/90 [animation-delay:240ms]">
          Rocket is a creative technology agency specializing in 3D, web design, web development, branding and marketing. We help ambitious brands build what&apos;s next.
        </p>

        <div className="animate-rise mt-8 [animation-delay:360ms]">
          <Button to="/#portfolio" variant="ghost" className="inline-flex items-center gap-2">
            Explore our work <ArrowRight size={16} />
          </Button>
        </div>
      </div>

      <TrustedBrands className="absolute inset-x-0 bottom-0 z-10 mx-auto max-w-7xl px-6 pb-10 md:px-10" />
    </section>
  )
}