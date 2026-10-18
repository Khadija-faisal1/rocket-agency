import { useEffect, useState } from 'react'

// Returns { hidden, scrolled } so the navbar can hide on scroll down.
export default function useScrollDirection(threshold = 12) {
  const [state, setState] = useState({ hidden: false, scrolled: false })
  useEffect(() => {
    let last = window.scrollY
    let ticking = false
    const update = () => {
      const y = window.scrollY
      if (Math.abs(y - last) > threshold) {
        setState({ hidden: y > last && y > 160, scrolled: y > 20 })
        last = y
      } else setState((s) => ({ ...s, scrolled: y > 20 }))
      ticking = false
    }
    const onScroll = () => { if (!ticking) { requestAnimationFrame(update); ticking = true } }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])
  return state
}
