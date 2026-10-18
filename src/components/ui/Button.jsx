import { Link } from 'react-router-dom'

const styles = {
  primary: 'btn-primary hover:-translate-y-0.5',
  ghost: 'glass-dark text-white hover:bg-white/10',
  dark: 'glass-dark text-white hover:-translate-y-0.5',
}

export default function Button({ to, href, variant = 'primary', className = '', children, ...rest }) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-base font-medium transition ${styles[variant]} ${className}`
  if (to) return <Link to={to} className={cls} {...rest}>{children}</Link>
  if (href) return <a href={href} className={cls} target="_blank" rel="noreferrer" {...rest}>{children}</a>
  return <button className={cls} {...rest}>{children}</button>
}