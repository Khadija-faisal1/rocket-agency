const words = ['Web Design', 'UI/UX Design', 'Branding', 'Marketing', '3D Design', 'Web Development']

function Band({ className, reverse }) {
  const row = [...words, ...words, ...words, ...words]
  return (
    <div className={`glass-dark overflow-hidden py-4 ${className}`}>
      <div className={`flex w-max animate-marquee gap-12 whitespace-nowrap font-display text-2xl font-semibold uppercase text-white/90 md:text-3xl ${reverse ? '[animation-direction:reverse]' : ''}`}>
        {row.map((w, i) => <span key={i} className="flex items-center gap-12">{w}<i className="h-2 w-2 rounded-full bg-electric" /></span>)}
      </div>
    </div>
  )
}

// Two crossing ribbons of service names.
export default function Marquee() {
  return (
    <div aria-hidden="true" className="relative h-44 overflow-hidden">
      <Band className="absolute inset-x-[-5%] top-8 -rotate-3" />
      <Band reverse className="absolute inset-x-[-5%] top-16 rotate-2 opacity-80" />
    </div>
  )
}