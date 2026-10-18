import { useState } from 'react'
import Tag from '../ui/Tag'
import Sphere from '../ui/Sphere'
import Inflated from '../ui/Inflated'
import { certifications as cert, assets } from '../../data/about'

// The arrows file holds two arrows side by side on black. `side` picks one;
// mix-blend-screen drops the black so only the glowing glass shows.
function Arrow({ side = 'left', className = '', delay = 0 }) {
  const [failed, setFailed] = useState(false)
  if (failed) return null
  return (
    <div aria-hidden="true" className={`cert-float pointer-events-none absolute z-30 overflow-hidden mix-blend-screen ${className}`} style={{ animation: `cert-float 6s ease-in-out ${delay}s infinite` }}>
      <img src={assets.arrows} alt="" draggable="false" onError={() => setFailed(true)}
        className={`h-full w-[200%] max-w-none select-none object-cover ${side === 'right' ? '-ml-[100%]' : ''}`} />
    </div>
  )
}

export default function Certifications() {
  const [rFailed, setRFailed] = useState(false)

  return (
    <section className="relative overflow-hidden px-4 py-20 text-center text-white md:px-10">
      <style>{`
        @keyframes cert-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes cert-r { 0%,100% { transform: translate(-50%,-50%) translateY(0) rotate(-2deg); } 50% { transform: translate(-50%,-50%) translateY(-14px) rotate(2deg); } }
        @media (prefers-reduced-motion: reduce) { .cert-float, .cert-r { animation: none !important; } }
      `}</style>

      <Tag dark className="!text-pink">{cert.tag}</Tag>
      <h2 className="mt-5 font-display text-2xl uppercase tracking-wide md:text-3xl">{cert.title}</h2>

      <div className="relative mx-auto mt-10 aspect-[4/5] w-full max-w-[960px] sm:aspect-[4/3]">
        {/* soft glow behind the R so the glass badges have something to refract */}
        <div aria-hidden="true" className="absolute left-1/2 top-1/2 h-[65%] w-[65%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ee4a8f]/25 blur-[100px]" />
        <div aria-hidden="true" className="absolute left-[30%] top-[60%] h-[35%] w-[35%] rounded-full bg-[#4353ff]/25 blur-[90px]" />

        {/* the R (image) */}
        {rFailed ? (
          <div className="cert-r absolute left-1/2 top-1/2 z-10" style={{ animation: 'cert-r 7s ease-in-out infinite' }}><Inflated text="R" className="text-[12rem] md:text-[20rem]" /></div>
        ) : (
          <img src={assets.certR} alt="Rocket Agency" draggable="false" onError={() => setRFailed(true)}
            className="cert-r absolute left-1/2 top-1/2 z-10 w-[44%] max-w-[400px] -rotate-10 select-none object-contain drop-shadow-[0_30px_60px_rgba(238,74,143,.45)]"
            style={{ animation: 'cert-r 7s ease-in-out infinite' }} />
        )}

        {/* small balls (sphere images) */}
        <Sphere variant="pink" className="left-[36%] top-[16%] z-20 h-4 w-4 md:h-6 md:w-6" />
        <Sphere variant="pink" className="left-[68%] top-[74%] z-20 h-6 w-6 md:h-9 md:w-9" />
        <Sphere variant="blue" className="left-[20%] top-[44%] z-20 h-3.5 w-3.5 md:h-5 md:w-5" />
        <Sphere variant="purple" className="left-[84%] top-[50%] z-20 h-5 w-5 md:h-7 md:w-7" />
        <Sphere variant="pink" className="left-[52%] top-[90%] z-20 h-3 w-3 md:h-4 md:w-4" />

        {/* neon cursor arrows */}
        <Arrow side="left" className="left-[5%] top-[62%] h-16 w-16 -rotate-12 md:h-28 md:w-28" />
        <Arrow side="left" className="left-[14%] top-[8%] h-10 w-10 rotate-6 md:h-16 md:w-16" delay={1.2} />
        <Arrow side="right" className="right-[5%] top-[22%] h-10 w-10 rotate-12 md:h-16 md:w-16" delay={0.6} />

        {/* brand badges: clear glass, slightly tilted in 3D */}
        {cert.badges.map((b, i) => (
          <div key={b.label} className="absolute z-20" style={{ left: `${b.x}%`, top: `${b.y}%`, transform: `translate(-50%, -50%) rotate(${b.r}deg)` }}>
            <div style={{ perspective: 700 }}>
              <div className="cert-float group relative flex origin-center scale-[.82] items-center gap-2.5 overflow-hidden rounded-2xl border border-white/30 bg-white/[0.07] px-3.5 py-2.5 text-left backdrop-blur-xl backdrop-saturate-150 transition duration-500 hover:!bg-white/[0.14] sm:scale-100 md:px-4 md:py-3"
                style={{
                  animation: `cert-float ${5 + (i % 3)}s ease-in-out ${i * 0.4}s infinite`,
                  transform: `rotateX(8deg) rotateY(${b.ry ?? 0}deg)`,
                  boxShadow: '0 14px 34px rgba(0,0,0,.32), inset 0 1px 0 rgba(255,255,255,.55), inset 0 -1px 0 rgba(255,255,255,.1), inset 1px 0 0 rgba(255,255,255,.18)',
                }}>
                {/* glass sheen: diagonal highlight + bright top edge */}
                <span aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,.42)_0%,rgba(255,255,255,.08)_32%,transparent_55%)]" />
                <span aria-hidden="true" className="pointer-events-none absolute -left-1/3 top-0 h-full w-1/3 -skew-x-12 bg-white/20 blur-md transition duration-700 group-hover:left-[120%]" />
                <span aria-hidden="true" className="relative h-2.5 w-2.5 shrink-0 rounded-full ring-2 ring-white/40"
                  style={{ background: b.color === '#222' ? '#fff' : b.color, boxShadow: `0 0 12px ${b.color === '#222' ? '#fff' : b.color}` }} />
                <span className="relative leading-tight">
                  <span className="block whitespace-nowrap text-[11px] font-medium text-white md:text-sm">{b.label}</span>
                  <span className="block whitespace-nowrap text-[9px] uppercase tracking-wider text-white/60 md:text-[10px]">{b.sub}</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}