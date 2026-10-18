import { useEffect, useRef, useState } from 'react'
import { Play, X } from 'lucide-react'

// Put your file at public/videos/showreel.mp4 (or change `src`).
export default function Showreel({ src = '/videos/showreel.mp4' }) {
  const [open, setOpen] = useState(false)
  const closeRef = useRef(null)

  useEffect(() => {
    if (!open) return
    closeRef.current?.focus()
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey) }
  }, [open])

  return (
    <>
      <button onClick={() => setOpen(true)} aria-label="Play showreel"
        className="group relative block aspect-video w-full overflow-hidden rounded-2xl ring-1 ring-electric/40 shadow-[0_0_40px_rgba(61,139,255,.25)]"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 70% 55%, rgba(255,170,80,.5), transparent 60%), linear-gradient(135deg,#0a1230,#1a2f66)' }}>
        <span className="absolute left-4 top-3 text-xs tracking-[0.25em] text-white/90">SHOWREEL</span>
        <span className="absolute right-4 top-3 text-xs text-white/90">01:24</span>
        <span className="absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-electric bg-night/40 text-white shadow-[0_0_30px_rgba(61,139,255,.6)] transition group-hover:scale-105">
          <Play size={30} fill="currentColor" />
        </span>
      </button>

      {open && (
        <div role="dialog" aria-modal="true" aria-label="Showreel" className="fixed inset-0 z-[60] grid place-items-center bg-black/85 p-4" onClick={() => setOpen(false)}>
          <button ref={closeRef} onClick={() => setOpen(false)} aria-label="Close showreel" className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full bg-white/15 text-white"><X size={20} /></button>
          <video src={src} controls autoPlay playsInline className="max-h-[85vh] w-full max-w-5xl rounded-xl bg-black" onClick={(e) => e.stopPropagation()}>
            Your browser can't play this video.
          </video>
        </div>
      )}
    </>
  )
}
