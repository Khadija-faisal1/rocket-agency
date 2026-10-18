
const fallbacks = {
  process:
    'radial-gradient(circle at 16% 62%, #4a6bff 0, #2f4cff 5%, transparent 9%), radial-gradient(circle at 83% 60%, #1c64ff 0, #7fe0ff 7%, transparent 13%), linear-gradient(#0c0d1d, #0c0d1d)',
  projects:
    'linear-gradient(100deg,#14226b 0%,#4a7cf0 30%,#ee5fa0 55%,#ffb35c 75%,#14226b 100%)',
};

export default function ImageText({
  id,
  src,
  variant = 'projects',
  className = '',
  children,
}) {
  return (
    <h2
      id={id}
      className={`select-none text-center font-heavy font-extrabold uppercase leading-[1.15] tracking-tight text-transparent ${className}`}
      style={{
        backgroundImage: `url('${src}'), ${fallbacks[variant]}`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 65%',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
      }}
    >
      {children}
    </h2>
  );
}
