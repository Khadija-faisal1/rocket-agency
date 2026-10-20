import { useEffect, useRef, useState } from 'react'

const VIDEO = /\.(mp4|webm|ogg|mov)(\?.*)?$/i

function LoopVideo({ src, alt, className, onError }) {
  const ref = useRef(null)

  useEffect(() => {
    const v = ref.current
    if (!v) return
    const io = new IntersectionObserver(
      ([e]) => (e.isIntersecting ? v.play().catch(() => {}) : v.pause()),
      { threshold: 0.15 },
    )
    io.observe(v)
    return () => io.disconnect()
  }, [src])

  return (
    <video
      ref={ref}
      src={src}
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={alt}
      onError={onError}
      className={`object-cover ${className}`}
    />
  )
}

export default function Media({ src, alt = '', gradient = 'from-slate-300 to-slate-100', className = '', label, priority = false }) {
  const [failed, setFailed] = useState(!src)

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt || label}
        className={`bg-gradient-to-br ${gradient} ${label ? 'flex items-center justify-center p-4 text-center font-display text-xl font-medium text-white/90' : ''} ${className}`}
      >
        {label}
      </div>
    )
  }

  if (VIDEO.test(src)) {
    return <LoopVideo src={src} alt={alt} className={className} onError={() => setFailed(true)} />
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : undefined}
      decoding="async"
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  )
}