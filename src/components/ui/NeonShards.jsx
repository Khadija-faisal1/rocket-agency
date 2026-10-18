// Glowing blue glass rods, as seen under the footer ribbon and beside the CEO.
const rods = [
  [4, 150, -22], [10, 110, -14], [17, 170, -30], [26, 90, -8], [34, 140, 12], [43, 100, -18], [52, 160, 20],
  [61, 120, -26], [70, 175, 14], [78, 105, -10], [86, 150, 26], [94, 120, -20],
]
export default function NeonShards({ className = '' }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute overflow-hidden ${className}`}>
      {rods.map(([x, h, r], i) => (
        <span key={i} className="absolute bottom-0 block w-1.5 origin-bottom rounded-full"
          style={{
            left: `${x}%`, height: h, transform: `rotate(${r}deg)`,
            background: 'linear-gradient(180deg, transparent, #5d9bff 40%, #a8c8ff)',
            boxShadow: '0 0 18px 3px rgba(61,139,255,.65)', opacity: 0.85,
          }} />
      ))}
    </div>
  )
}