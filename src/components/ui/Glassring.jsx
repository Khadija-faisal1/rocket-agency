// Pinwheel of translucent glass petals, like the 3D icons in the design.
// Give each instance on the same page a unique `id`.
export default function GlassRing({ id = 'ring', petals = 12, from = '#9bb8ff', via = '#c7b3ff', to = '#8fd0ff', spin = false, className = '' }) {
  return (
    <svg viewBox="-100 -100 200 200" aria-hidden="true" className={`${spin ? 'animate-orbit' : ''} ${className}`}>
      <defs>
        <linearGradient id={`${id}-g`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={from} /><stop offset=".5" stopColor={via} /><stop offset="1" stopColor={to} />
        </linearGradient>
        <radialGradient id={`${id}-h`} cx=".3" cy=".25" r=".8">
          <stop offset="0" stopColor="#fff" stopOpacity=".95" /><stop offset=".5" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
      </defs>
      {Array.from({ length: petals }).map((_, i) => (
        <g key={i} transform={`rotate(${(i * 360) / petals}) rotate(20 0 -50)`}>
          <ellipse cx="0" cy="-50" rx="13" ry="40" fill={`url(#${id}-g)`} fillOpacity=".62" stroke="#fff" strokeOpacity=".75" strokeWidth=".9" />
          <ellipse cx="0" cy="-50" rx="13" ry="40" fill={`url(#${id}-h)`} />
        </g>
      ))}
    </svg>
  )
}