import Button from '../components/ui/Button'

export default function NotFound() {
  return (
    <section className="grid min-h-screen place-items-center bg-night px-6 text-center text-white">
      <div>
        <p className="text-sm text-electric">404</p>
        <h1 className="mt-2 font-display text-5xl font-light">This page doesn't exist</h1>
        <p className="mx-auto mt-4 max-w-md text-night-muted">The link may be broken, or the page may have moved.</p>
        <div className="mt-8"><Button to="/" variant="dark">Go to home</Button></div>
      </div>
    </section>
  )
}
