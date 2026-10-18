const steps = [
  ['Discover', 'We dive into your goals, audience and challenges.'],
  ['Concept', 'We explore ideas, create concepts and visual direction.'],
  ['Create', 'We design, develop and bring your vision to life.'],
  ['Launch', 'We deliver, optimise and help you grow.'],
]

export default function ProcessTeaser() {
  return (
    <section className="bg-night px-6 py-20 text-white md:px-10">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-display text-3xl font-light">From idea to <span className="text-electric">impact.</span></h2>
        <ol className="mt-10 grid gap-8 md:grid-cols-4">
          {steps.map(([t, d], i) => (
            <li key={t} className="border-t border-electric/30 pt-5">
              <span className="text-sm text-electric">0{i + 1}</span>
              <h3 className="mt-2 font-display text-xl">{t}</h3>
              <p className="mt-2 text-sm text-night-muted">{d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
