import { Link } from 'react-router-dom'

export default function Logo({
  src = '/images/logo.png',
  className = 'h-10 w-50',
}) {
  return (
    <Link to="/" aria-label="Rocket Agency home" className={`flex items-center gap-2 ${className}`}>
      <img className="h-full w-full object-contain" src={src} alt="" />
    </Link>
  )
}