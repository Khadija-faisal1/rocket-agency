import Button from '../ui/Button'
import StatsBar from '../ui/StatsBar'
import aboutBgImage from '/images/about-teaser-bg.jpg'

export default function AboutTeaser() {
  return (
    <section
      className="relative px-6 pt-24 pb-32 text-white md:px-10 md:pt-32"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${aboutBgImage})`, // Add a dark overlay to ensure text readability
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Container to center content, matching max-w of your other sections */}
      <div className="mx-auto max-w-7xl">
        {/* Subtle, tiny, tracked-out subtitle - matching modern design style */}
        <p className="text-xs uppercase tracking-[0.4em] text-night-muted mb-6">ABOUT US</p>

        {/* Main content grid, positioning text and stats around the central graphic */}
        <div className="relative z-10 grid items-end gap-12 md:grid-cols-[1.5fr_1fr] md:gap-x-20">
          
          {/* Left Column: Heading and Text */}
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl font-light leading-[1.1] text-neutral-100 md:text-5xl lg:text-6xl">
              More than a studio. We're your{' '}
              <span className="text-electric">creative growth partner.</span>
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-night-muted">
              We combine technology, creativity, and strategy to help brands stand
              out, connect, and grow. Our team of artists, designers, developers
              and marketers work together to deliver world-class experiences —
              from concept to campaign.
            </p>
            {/* Call to action button */}
            <div className="mt-12">
              <Button to="/about" variant="dark" className="inline-flex items-center gap-2">
                Our story →
              </Button>
            </div>
          </div>

          {/* Right Column: StatsBar (Positioned over th right-side of the central 'R' area in desktop) */}
          <div className="flex items-center justify-end md:justify-start">
            <StatsBar
              className="border-l-2 border-electric/40 pl-8 space-y-4" // Use spaced items with border accent
            />
          </div>
        </div>
      </div>
    </section>
  )
}