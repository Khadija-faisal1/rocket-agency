import { useState } from 'react'

const looks = {
  pink: { from: '#ff7eb8', to: '#c2185b' },
  blue: { from: '#8fc0ff', to: '#1d4ed8' },
  purple: { from: '#e29bff', to: '#7a1fd1' },
}

// Uses your image at /images/spheres/<variant>.webp (pink, blue, purple).
// Falls back to a CSS-drawn glossy sphere until the file exists.
export default function Sphere({ variant = 'pink', className = '', src }) {
  const [failed, setFailed] = useState(false)
  const { from, to } = looks[variant] || looks.pink

  if (!failed) {
    return (
      <img src={src || `/images/about/${variant}-ball.png`} alt="" aria-hidden="true" draggable="false" onError={() => setFailed(true)}
        className={`pointer-events-none absolute select-none animate-float object-contain ${className}`} />
    )
  }
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute rounded-full animate-float ${className}`}
      style={{
        background:
          'radial-gradient(circle at 30% 24%, rgba(255,255,255,.95) 0 5%, rgba(255,255,255,0) 20%),' +
          'radial-gradient(circle at 72% 82%, rgba(255,255,255,.3), transparent 38%),' +
          `radial-gradient(circle at 40% 35%, ${from} 0%, ${to} 100%)`,
        boxShadow: `inset -14px -20px 34px rgba(0,0,0,.28), inset 8px 10px 22px rgba(255,255,255,.35), 0 34px 60px ${to}66`,
      }} />
  )
}