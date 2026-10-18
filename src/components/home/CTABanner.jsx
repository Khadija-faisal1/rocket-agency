import Button from '../ui/Button'

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-night px-6 py-24 text-center text-white">
      <div aria-hidden="true" className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 100% at 50% 100%, rgba(61,139,255,.55), transparent 70%)' }} />
      <div className="relative">
        <h2 className="font-display text-4xl font-light md:text-6xl">Your vision. <span className="text-electric">Our expertise.</span></h2>
        <p className="mx-auto mt-4 max-w-md text-night-muted">Ready to bring your next big idea to life? Let's make it happen.</p>
        <div className="mt-8"><Button to="/about#contact" variant="dark">Get in touch</Button></div>
      </div>
    </section>
  )
}
