import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { scrollToElement, scrollToTop } from './SmoothScroll'

const findTarget = (hash) => document.getElementById(decodeURIComponent(hash.slice(1)))

export default function ScrollToHash() {
  const { pathname, hash, key } = useLocation()
  const lastPath = useRef(null)

  useEffect(() => {
    const onClick = (e) => {
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const a = e.target.closest?.('a[href]')
      if (!a || (a.target && a.target !== '_self') || a.hasAttribute('download')) return
      const url = new URL(a.href, window.location.href)
      if (url.origin !== window.location.origin || url.pathname !== window.location.pathname) return
      if (url.hash) scrollToElement(findTarget(url.hash))
      else scrollToTop(false)
    }
    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
  }, [])

  useEffect(() => {
    const newPage = lastPath.current !== pathname
    lastPath.current = pathname

    if (newPage) scrollToTop(true)
    else if (!hash) scrollToTop(false)

    if (!hash) return

    let frame
    let tries = 0
    const seek = () => {
      const el = findTarget(hash)
      if (el) return scrollToElement(el)
      if (tries++ < 150) frame = requestAnimationFrame(seek)
    }
    frame = requestAnimationFrame(seek)
    return () => cancelAnimationFrame(frame)
  }, [pathname, hash, key])

  return null
}