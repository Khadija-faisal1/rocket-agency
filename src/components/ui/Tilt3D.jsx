import { useRef, useState } from 'react'

// 3D showpiece: slow spin + gentle bob + tilts toward the pointer, with a glow
// and floor shadow for depth. `fallback` shows if the image is missing.
export default function Tilt3D({ src, alt = '', fallback, className = '' }) {
  const box = useRef(null)
  const [failed, setFailed] = useState(false)

  const move = (e) => {
    const r = box.current.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    box.current.style.setProperty('--rx', `${(-y * 22).toFixed(1)}deg`)
    box.current.style.setProperty('--ry', `${(x * 26).toFixed(1)}deg`)
  }
  const leave = () => { box.current.style.setProperty('--rx', '0deg'); box.current.style.setProperty('--ry', '0deg') }

  return (
    <div ref={box} onPointerMove={move} onPointerLeave={leave} className={`relative mx-auto w-64 md:w-80 [perspective:900px] ${className}`}>
      <div aria-hidden="true" className="absolute inset-[10%] animate-pulse rounded-full bg-[#6a7dff]/30 blur-3xl" />
      <div aria-hidden="true" className="absolute -bottom-4 left-1/2 h-5 w-3/5 -translate-x-1/2 rounded-full bg-black/70 blur-xl" />
      <div className="relative transition-transform duration-300 ease-out [transform-style:preserve-3d]" style={{ transform: 'rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg))' }}>
        <div className="animate-float [transform-style:preserve-3d]">
          {failed || !src ? fallback : (
            <>
              {/* stacked, dimmed copies behind the ring give it thickness */}
              {[-26, -14].map((z) => (
                <img key={z} src={src} alt="" aria-hidden="true" draggable="false" className="absolute inset-0 h-full w-full animate-spin-slow select-none object-contain opacity-30 brightness-50 blur-[1px]" style={{ transform: `translateZ(${z}px)` }} />
              ))}
              <img src={src} alt={alt} draggable="false" onError={() => setFailed(true)}
                className="relative h-full w-full animate-spin-slow select-none object-contain drop-shadow-[0_24px_50px_rgba(110,130,255,.5)]" />
            </>
          )}
        </div>
      </div>
    </div>
  )
}