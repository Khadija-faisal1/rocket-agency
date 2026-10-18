import { useState } from 'react'
import GlassRing from '../ui/GlassRing'

const looks = [
  { petals: 14, from: '#3b5bff', via: '#7a8bff', to: '#c6d0ff' },
  { petals: 7, from: '#1c64ff', via: '#25a9ff', to: '#7fe0ff' },
  { petals: 9, from: '#1a1f4d', via: '#5d6fd6', to: '#b8a4ff' },
  { petals: 6, from: '#2b2f6b', via: '#8f9cf0', to: '#d9d0ff' },
  { petals: 12, from: '#2236ff', via: '#8b5cf6', to: '#ff7ad0' },
  { petals: 8, from: '#33427a', via: '#7fa0ff', to: '#e8d9ff' },
]

// Your image: public/images/about/step-N.webp. Put `group` on the parent <li> for the hover lift.
export default function StepIcon({ n }) {
  const [failed, setFailed] = useState(false)
  const lift = 'transition duration-500 ease-out group-hover:-translate-y-2 group-hover:scale-105'
  return (
    <div className="relative grid h-44 w-44 place-items-center">
      <span aria-hidden="true" className="absolute inset-7 rounded-full bg-electric/20 blur-3xl transition duration-500 group-hover:bg-electric/30" />
      {failed ? (
        <GlassRing id={`step-${n}`} {...looks[(n - 1) % looks.length]} className={`relative h-36 w-36 drop-shadow-[0_14px_30px_rgba(90,120,255,.5)] ${lift}`} />
      ) : (
        <img src={`/images/about/step-${n}.webp`} alt="" width="160" height="160" loading="lazy" decoding="async" draggable="false" onError={() => setFailed(true)}
          className={`relative h-40 w-40 select-none object-contain drop-shadow-[0_18px_30px_rgba(70,100,255,.45)] ${lift}`} />
      )}
    </div>
  )
}