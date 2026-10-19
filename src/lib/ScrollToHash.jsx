import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Scrolls to #anchors after navigation, or to the top for plain routes.
export default function ScrollToHash() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const t = setTimeout(() => document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' }), 80)
      return () => clearTimeout(t)
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}
