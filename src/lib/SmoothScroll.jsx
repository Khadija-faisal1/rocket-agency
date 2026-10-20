import { useEffect } from 'react'
import Lenis from 'lenis'

let instance = null

const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t))

export const stopScroll = () => instance?.stop()
export const startScroll = () => instance?.start()

export function scrollToTop(immediate = false) {
  if (instance) instance.scrollTo(0, { immediate, duration: 1.3, easing: easeOutExpo })
  else window.scrollTo({ top: 0, behavior: immediate ? 'auto' : 'smooth' })
}

export function scrollToElement(el) {
  if (!el) return false
  const offset = -(parseFloat(getComputedStyle(el).scrollMarginTop) || 0)
  if (instance) instance.scrollTo(el, { offset, duration: 1.4, easing: easeOutExpo })
  else el.scrollIntoView({ behavior: 'smooth' })
  return true
}

export default function SmoothScroll() {
  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const lenis = new Lenis({
      duration: 1.1,
      easing: easeOutExpo,
      smoothWheel: true,
      wheelMultiplier: 1,
      anchors: false,
    })
    instance = lenis

    let frame = requestAnimationFrame(function loop(time) {
      lenis.raf(time)
      frame = requestAnimationFrame(loop)
    })

    return () => {
      cancelAnimationFrame(frame)
      lenis.destroy()
      instance = null
    }
  }, [])

  return null
}