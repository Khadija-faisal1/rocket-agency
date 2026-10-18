export default function Tag({ children, dark = false, className = '' }) {
  return (
    <span className={`inline-block rounded-lg px-3 py-1.5 text-sm font-medium uppercase tracking-wide ${
      dark ? 'glass-dark text-electric' : 'border border-white bg-gradient-to-b from-white to-pink-soft text-pink shadow-[0_6px_24px_rgba(240,69,124,.2)]'
    } ${className}`}>
      {children}
    </span>
  )
}