import { useState } from 'react'

// Shows your image; falls back to a gradient until the file exists.
export default function Media({ src, alt = '', gradient = 'from-slate-300 to-slate-100', className = '', label }) {
  const [failed, setFailed] = useState(!src)
  if (failed) return <div role="img" aria-label={alt || label} className={`bg-gradient-to-br ${gradient} ${label ? 'flex items-center justify-center p-4 text-center font-display text-xl font-medium text-white/90' : ''} ${className}`}>{label}</div>
  return <img src={src} alt={alt} loading="lazy" decoding="async" onError={() => setFailed(true)} className={`object-cover ${className}`} />
}