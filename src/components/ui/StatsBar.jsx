import useCountUp from '../../hooks/useCountUp'

function Stat({ to, label }) {
  const [ref, v] = useCountUp(to)
  return (
    <div ref={ref}>
      <dt className="font-display text-5xl font-light">{v}+</dt>
      <dd className="text-night-muted">{label}</dd>
    </div>
  )
}

export default function StatsBar({ className = '' }) {
  return (
    <dl className={`grid gap-6 ${className}`}>
      <Stat to={100} label="Projects delivered" />
      <Stat to={50} label="Happy clients" />
      <Stat to={5} label="Years of experience" />
    </dl>
  )
}
