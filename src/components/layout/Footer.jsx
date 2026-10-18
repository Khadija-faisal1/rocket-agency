import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Rocket } from 'lucide-react'
import WaveRibbon from './WaveRibbon'
import { assets } from '../../data/about'

const nav = [
  ['Home', '/', ''],
  ['Service', '/#services', '#services'],
  ['Case studies', '/#portfolio', '#portfolio'],
  ['About us', '/about', 'about'],
  ['Contact us', '/about#contact', '#contact'],
]

export default function Footer() {
  const { pathname, hash } = useLocation()
  const [rocketFailed, setRocketFailed] = useState(false)
  const active = (key) => (key === '' ? pathname === '/' && !hash : key === 'about' ? pathname === '/about' && !hash : hash === key)

  return (
    <footer className="mesh-ink relative overflow-hidden text-white">
      <div className="mx-auto grid max-w-6xl gap-x-16 gap-y-12 px-6 pt-16 md:grid-cols-[minmax(0,1.6fr)_auto_auto] md:px-10">
        {/* heading + email */}
        <div>
          <div className="flex items-center gap-5">
            {rocketFailed ? (
              <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-[#ff9fd0] via-[#c58bff] to-[#6aa6f2] shadow-[0_12px_30px_rgba(180,110,255,.4)]"><Rocket size={28} /></span>
            ) : (
              <img src={assets.rocket} alt="" draggable="false" onError={() => setRocketFailed(true)} className="h-16 w-16 shrink-0 select-none object-contain drop-shadow-[0_10px_24px_rgba(150,110,255,.5)]" />
            )}
            <h2 className="font-display text-[22px] font-medium uppercase leading-[1.22] tracking-[0.03em] sm:text-[28px]">
              Have a cool idea?<br />Let's <span className="text-gradient">collaborate</span>
            </h2>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="mt-8 flex max-w-[420px] gap-2.5">
            <label htmlFor="footer-email" className="sr-only">Email address</label>
            <input id="footer-email" type="email" required placeholder="Enter your email"
              className="h-11 w-full rounded-lg border border-white/15 bg-gradient-to-b from-white/15 to-white/[0.04] px-4 text-sm tracking-wide text-white placeholder:text-white/55 backdrop-blur-md" />
            <button className="btn-primary h-11 shrink-0 rounded-lg px-6 text-sm font-medium tracking-wide">Send</button>
          </form>
        </div>

        {/* copyright */}
        <p className="pt-1 text-[11px] uppercase leading-relaxed tracking-[0.1em] text-white/55">© Rocket Agency {new Date().getFullYear()}</p>

        {/* nav */}
        <nav aria-label="Footer" className="flex flex-col items-start gap-1.5 md:items-end">
          {nav.map(([label, to, key]) => (
            <Link key={label} to={to} aria-current={active(key) ? 'page' : undefined}
              className={`rounded-2xl border px-3 py-1.5 text-[12px] uppercase leading-none tracking-[0.12em] transition ${active(key) ? 'border-white/45 text-white' : 'border-transparent text-white/50 hover:text-white'}`}>
              {label}
            </Link>
          ))}
        </nav>
      </div>
      <WaveRibbon />
    </footer>
  )
}