import { useEffect, useRef, useState } from 'react'

// Background music. Default OFF; browsers only allow audio after a click.
export default function useMusic(src = '/audio/ambient.mp3') {
  const audio = useRef(null)
  const [on, setOn] = useState(false)

  useEffect(() => {
    audio.current = new Audio(src)
    audio.current.loop = true
    audio.current.volume = 0.4
    return () => audio.current?.pause()
  }, [src])

  const toggle = () => {
    const a = audio.current
    if (!a) return
    if (on) { a.pause(); setOn(false) }
    else a.play().then(() => setOn(true)).catch(() => setOn(false))
  }
  return { on, toggle }
}
