import { useEffect, useMemo, useRef, useState } from 'react'
import NeonShards from '../ui/NeonShards'
import { assets } from '../../data/about'

const words = ['WEB DESIGN', 'UI UX DESIGN', 'BRANDING', 'MARKETING', '3D DESIGN', 'WEB DEVELOPMENT']
const cycleText = words.map((w) => w + '        ').join('')
const wave = (x) => 112 + 56 * Math.sin((x + 140) / 190)

// Builds a long wavy path so the text can scroll along it forever.
function buildPath() {
  let d = '', len = 0, lenAtZero = 0, px, py
  for (let x = -1800; x <= 3300; x += 20) {
    const y = wave(x)
    d += `${x === -1800 ? 'M' : 'L'}${x},${y.toFixed(1)} `
    if (px !== undefined) len += Math.hypot(x - px, y - py)
    if (x === 0) lenAtZero = len
    px = x; py = y
  }
  return { d, lenAtZero }
}

// Neon glass panels under the ribbon (your image, stretched to fill the width).
function NeonImage() {
  const [failed, setFailed] = useState(false)
  if (failed) return <NeonShards className="inset-x-0 bottom-0 h-56" />
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 opacity-90 mix-blend-screen [mask-image:linear-gradient(to_top,#000_40%,transparent)]">
      <img src={assets.neon} alt="" draggable="false" onError={() => setFailed(true)} className="h-full w-full select-none object-cover" style={{ objectPosition: '50% 64%' }} />
    </div>
  )
}

export default function WaveRibbon() {
  const { d, lenAtZero } = useMemo(buildPath, [])
  const measure = useRef(null)
  const [cycle, setCycle] = useState(1500)
  const reduce = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    const w = measure.current?.getComputedTextLength?.()
    if (w) setCycle(w)
  }, [])

  const start = lenAtZero - cycle
  return (
    <div aria-hidden="true" className="relative mt-16 h-[320px] overflow-hidden">
      <NeonImage />
      <svg viewBox="0 0 1440 250" preserveAspectRatio="xMidYMid slice" className="absolute inset-x-0 top-4 h-[250px] w-full" style={{ transform: 'perspective(900px) rotateX(14deg)' }}>
        <defs>
          <linearGradient id="band" x1="0" x2="1">
            <stop offset="0" stopColor="#101a44" /><stop offset=".5" stopColor="#1d2f78" /><stop offset="1" stopColor="#0f1740" />
          </linearGradient>
        </defs>
        <path d={d} fill="none" stroke="#5d8dff" strokeOpacity=".35" strokeWidth="96" style={{ filter: 'blur(14px)' }} />
        <path d={d} fill="none" stroke="rgba(190,215,255,.55)" strokeWidth="72" />
        <path d={d} fill="none" stroke="url(#band)" strokeWidth="68" />
        <path id="wave-path" d={d} fill="none" />
        <text ref={measure} fontSize="26" fontWeight="600" letterSpacing="2" visibility="hidden" style={{ fontFamily: 'var(--font-heavy)', whiteSpace: 'pre' }}>{cycleText}</text>
        <text fontSize="26" fontWeight="600" letterSpacing="2" fill="#fff" dy="9" style={{ fontFamily: 'var(--font-heavy)', whiteSpace: 'pre' }}>
          <textPath href="#wave-path" startOffset={start} key={cycle}>
            {cycleText.repeat(5)}
            {!reduce && <animate attributeName="startOffset" from={start} to={start - cycle} dur="38s" repeatCount="indefinite" />}
          </textPath>
        </text>
      </svg>
    </div>
  )
}