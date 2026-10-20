import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ArrowRight } from 'lucide-react'
import Logo from '../ui/Logo'
import MusicToggle from './MusicToggle'
import useActiveSection from '../../hooks/useActiveSection'
import { startScroll, stopScroll } from '../../lib/SmoothScroll'

const ICON_LOGO = '/images/logo-icon.png'

const links = [
  { label: 'Home', to: '/', match: '' },
  { label: 'Services', to: '/#services', match: 'services' },
  { label: 'Case Studies', to: '/#portfolio', match: 'portfolio' },
  { label: 'About Us', to: '/about', match: 'about' },
  { label: 'Contact Us', to: '/about#contact', match: 'contact' },
]

const glass =
  'border border-white/50 bg-gradient-to-b from-white/30 to-white/10 backdrop-blur-md ' +
  'shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_8px_24px_-8px_rgba(70,120,190,0.25)]'

const glassLight =
  'border border-white bg-white/80 backdrop-blur-md ' +
  'shadow-[inset_0_1px_0_#fff,0_8px_24px_-12px_rgba(20,34,107,0.25)]'

const linkBase =
  'rounded-lg px-4 py-2 font-display text-[13px] font-normal tracking-wide transition-colors duration-200 ' +
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ' +
  'motion-reduce:transition-none'

const linkIdle = 'text-white/85 hover:bg-white/20 hover:text-white'
const linkIdleLight = 'text-navy/70 hover:bg-white hover:text-navy'
const linkActiveLight =
  'border border-white/40 bg-gradient-to-b from-[#4f96dc] to-[#3b82c4] text-white ' +
  'shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]'
const linkActive =
  'border border-white/60 bg-gradient-to-b from-[#a9cff7] to-[#7db3ec] text-white ' +
  'shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]'

export default function Navbar() {
  const { pathname, hash, key } = useLocation()
  const [open, setOpen] = useState(false)
  const spy = useActiveSection(pathname === '/' ? ['services', 'portfolio'] : ['contact'])
  const isAbout = pathname === '/about'
  const onLight = pathname.startsWith('/case')
  const surface = onLight ? glassLight : glass

  const current =
    isAbout ? (spy === 'contact' || hash === '#contact' ? 'contact' : 'about')
    : pathname === '/' ? spy
    : onLight ? 'portfolio'
    : null
  const isActive = (l) => current === l.match && !(l.match === '' && pathname !== '/')

  useEffect(() => setOpen(false), [pathname, hash, key])

  useEffect(() => {
    if (open) stopScroll()
    else startScroll()
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      startScroll()
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <header className="absolute inset-x-0 top-0 z-50 px-4 pt-4 font-display md:px-10">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between">
        {isAbout ? <Logo src={ICON_LOGO} className="h-10 w-10" /> : <Logo tone="light" />}

        <nav
          aria-label="Main"
          className={`${surface} absolute left-1/2 hidden -translate-x-1/2 items-center gap-0.5 rounded-xl p-1 md:flex`}
        >
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              aria-current={isActive(l) ? 'page' : undefined}
              className={`${linkBase} ${isActive(l) ? (onLight ? linkActiveLight : linkActive) : (onLight ? linkIdleLight : linkIdle)}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <MusicToggle />
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className={`${surface} grid h-10 w-10 place-items-center rounded-lg md:hidden ${onLight ? 'text-navy' : 'text-white'}`}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-0 -z-10 bg-night/[0.97] px-6 pt-28 md:hidden"
      >
        <nav aria-label="Mobile" className="flex flex-col gap-2">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              onClick={() => { startScroll(); setOpen(false) }}
              className={`rounded-xl px-4 py-4 font-display text-3xl font-light ${isActive(l) ? 'text-electric' : 'text-white'}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/about#contact"
          onClick={() => { startScroll(); setOpen(false) }}
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-sky px-6 py-3 font-medium text-white"
        >
          Request a call <ArrowRight size={16} />
        </Link>
      </div>
    </header>
  )
}