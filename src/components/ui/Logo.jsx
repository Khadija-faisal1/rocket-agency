import { Link } from 'react-router-dom'

// Default = your existing logo. Pass `src` + `className` to swap it (e.g. the icon on /about).
// tone="dark" turns a white logo into a dark one so it stays visible on light pages (case studies).
export default function Logo({
  src = '/images/logo-icon.png',
  className = 'h-10 w-50',
  tone = 'light',
}) {
  return (
    <Link to="/" aria-label="Rocket Agency home" className={`flex items-center gap-2 ${className}`}>
      <img
        className={`h-full w-full object-contain transition ${tone === 'dark' ? 'brightness-0 opacity-90' : ''}`}
        src={src}
        alt=""
      />
    </Link>
  )
}