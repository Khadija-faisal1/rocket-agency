import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Lenis from 'lenis'

export default function SmoothScroll() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.15,
      anchors: true,
      autoRaf: true,
    })

    window.__rocketLenis = lenis
    return () => {
      if (window.__rocketLenis === lenis) delete window.__rocketLenis
      lenis.destroy()
    }
  }, [])

  useEffect(() => {
    const lenis = window.__rocketLenis
    if (hash) {
      const frame = requestAnimationFrame(() => {
        const target = document.querySelector(decodeURIComponent(hash))
        if (target) {
          if (window.__rocketLenis) window.__rocketLenis.scrollTo(target, { offset: -12 })
          else target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      })
      return () => cancelAnimationFrame(frame)
    }
    if (lenis) lenis.scrollTo(0, { immediate: true })
    else window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname, hash])

  return null
}
