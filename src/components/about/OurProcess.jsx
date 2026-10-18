// Giant "OUR PROCESS" headline. Drop a transparent-black collage at
// public/images/process-text-bg.webp to fill the letters like the design.
export default function OurProcess() {
  return (
    <section aria-labelledby="process-title" className="overflow-hidden bg-bg px-4 pb-24 pt-20 text-center">
      <h2 id="process-title" className="select-none font-heavy text-[11.5vw] font-extrabold uppercase leading-[1.15] tracking-tight text-transparent"
        style={{
          backgroundImage:
            "url('/images/about/process-text-bg.png'), radial-gradient(circle at 16% 62%, #4a6bff 0, #2f4cff 5%, transparent 9%), radial-gradient(circle at 83% 60%, #1c64ff 0, #7fe0ff 7%, transparent 13%), linear-gradient(#0c0d1d, #0c0d1d)",
          backgroundSize: 'cover', backgroundPosition: 'center', WebkitBackgroundClip: 'text', backgroundClip: 'text',
        }}>
        Our Process
      </h2>
    </section>
  )
}