import Button from '../components/ui/Button'

export default function ThankYou() {
  return (
    <section className="grid min-h-screen place-items-center bg-night px-6 text-center text-white">
      <div>
        <h1 className="font-display text-5xl font-light md:text-6xl">Thank you. <span className="text-electric">We'll call you soon.</span></h1>
        <p className="mx-auto mt-4 max-w-md text-night-muted">We received your request and will reply within one business day.</p>
        <div className="mt-8"><Button to="/" variant="dark">Back to home</Button></div>
      </div>
    </section>
  )
}
