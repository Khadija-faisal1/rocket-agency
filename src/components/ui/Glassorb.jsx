// Large soft glass blob that sits behind hero titles.
export default function GlassOrb({ className = '' }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute animate-float ${className}`}>
      <div className="h-full w-full" style={{
        borderRadius: '46% 54% 52% 48% / 52% 44% 56% 48%',
        background:
          'radial-gradient(circle at 30% 24%, rgba(255,255,255,.95) 0, rgba(255,255,255,0) 28%),' +
          'radial-gradient(circle at 75% 80%, rgba(255,255,255,.4), transparent 45%),' +
          'conic-gradient(from 200deg at 50% 50%, #7fa6ff, #b9a4ff, #ffb1d5, #9bd0ff, #7fa6ff)',
        boxShadow: 'inset -30px -40px 80px rgba(70,90,220,.35), inset 20px 20px 60px rgba(255,255,255,.55), 0 50px 120px rgba(100,130,255,.35)',
        filter: 'blur(1px)',
        opacity: .9,
      }} />
    </div>
  )
}