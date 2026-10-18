import { useState } from 'react'
import { Volume2 } from 'lucide-react'

// Visual toggle. Keep your own audio logic, or drive this with `playing` / `onChange`.
export default function MusicToggle({ playing, onChange }) {
  const [internal, setInternal] = useState(true)
  const on = playing ?? internal

  const toggle = () => {
    const next = !on
    setInternal(next)
    onChange?.(next)
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={on}
      aria-label={on ? 'Turn music off' : 'Turn music on'}
      className="relative h-5 w-12 rounded-[5px] border border-white/30 bg-gradient-to-b from-[#2f4f92] to-[#14254f]
        shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_4px_10px_-4px_rgba(20,40,100,0.5)]
        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
    >
      <span
        className={`absolute top-1/2 -translate-y-1/2 text-[6px] font-medium tracking-[0.1em] text-white/80 transition-opacity ${
          on ? 'left-1.5' : 'right-1.5'
        }`}
      >
        MUSIC
      </span>
      <span
        className={`absolute left-0.5 top-0.5 grid h-3.5 w-5 place-items-center rounded-[3px] text-white
          transition-transform duration-300 ease-out motion-reduce:transition-none ${
          on
            ? 'translate-x-[22px] bg-gradient-to-b from-[#5db0ff] to-[#1f6fe0] shadow-[0_0_6px_rgba(60,150,255,0.7)]'
            : 'translate-x-0 bg-gradient-to-b from-[#8097c4] to-[#5a70a0]'
        }`}
      >
        <Volume2 size={8} strokeWidth={2.5} />
      </span>
    </button>
  )
}