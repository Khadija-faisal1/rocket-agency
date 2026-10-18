import { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Button from '../ui/Button'
import TrustedBrands from '../ui/TrustedBrands'

// Option 1: Put your background image in `public/bg-hero.jpg`
// Option 2: Import directly if inside `src/assets/`: import bgImage from '../../assets/hero-bg.jpg'
const bgImage = '/images/hero-img.jpg'

export default function Hero() {
  const [i, setI] = useState(0)
  const totalSlides = 4
  const go = (d) => setI((i + d + totalSlides) % totalSlides)

  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-night text-white">
      {/* Background Image Container with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt="Hero Background"
          className="h-full w-full object-cover object-center"
        />
        {/* Soft dark radial & linear gradients to keep text fully legible while matching the clean reference look */}
        <div 
          aria-hidden="true" 
          className="absolute inset-0 bg-gradient-to-r from-night/90 via-night/40 to-transparent" 
        />
        <div 
          aria-hidden="true" 
          className="absolute inset-0 bg-gradient-to-b from-night/40 via-transparent to-night" 
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pb-48 pt-32 md:px-10">
        <p className="text-xs font-medium tracking-[0.3em] text-night-muted uppercase">
          3D / WEB / BRANDING / MARKETING
        </p>

        <h1 className="mt-6 max-w-2xl font-display text-5xl font-light leading-[1.08] tracking-tight md:text-7xl">
          We turn <span className="text-electric font-normal">ideas into</span> iconic digital experiences.
        </h1>

        <p className="mt-6 max-w-md text-base leading-relaxed text-night-muted/90">
          Rocket is a creative technology agency specializing in 3D, web design, web development, branding and marketing. We help ambitious brands build what&apos;s next.
        </p>

        <div className="mt-8">
          <Button to="/#portfolio" variant="ghost" className="inline-flex items-center gap-2">
            Explore our work <ArrowRight size={16} />
          </Button>
        </div>

        {/* Slide Controls
        <div className="absolute bottom-48 right-6 flex items-center gap-3 md:right-10">
          <span className="text-sm tracking-widest text-night-muted" aria-live="polite">
            0{i + 1} / 0{totalSlides}
          </span>
          <button
            onClick={() => go(-1)}
            aria-label="Previous slide"
            className="grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-black/20 backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/10 active:scale-95"
          >
            <ArrowLeft size={16} />
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Next slide"
            className="grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-black/20 backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/10 active:scale-95"
          >
            <ArrowRight size={16} />
          </button>
        </div> */}
      </div>

      {/* Trusted Brands Footer Bar */}
      <TrustedBrands className="absolute inset-x-0 bottom-0 z-10 mx-auto max-w-7xl px-6 pb-10 md:px-10" />
    </section>
  )
}