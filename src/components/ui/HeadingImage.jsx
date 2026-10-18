import { useState } from 'react'
import Inflated from './Inflated'

// WEB / 3D / MARKETING headings: your image, or the CSS bubble text as fallback.
export default function HeadingImage({ src, text, className = 'text-5xl md:text-7xl' }) {
  const [failed, setFailed] = useState(false)
  if (failed) return <Inflated text={text} className={className} />
  return (
    <img src={src} alt={text} loading="lazy" draggable="false" onError={() => setFailed(true)}
      className="h-14 w-auto select-none drop-shadow-[0_14px_28px_rgba(255,70,150,.4)] md:h-24" />
  )
}