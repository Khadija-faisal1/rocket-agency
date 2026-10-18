const brands = [
  "/images/coca-cola.png",
  "/images/mercedes.png",
  "/images/prada.png",
  "/images/BMW-1.png",
  "/images/nike.png",
  "/images/victoria-secret.png",
];
// Replace the text with exported SVG logos (use <img alt="Coca-Cola" />).
export default function TrustedBrands({ className = "" }) {
  return (
    <div className={className}>
      <p className="text-[11px] tracking-[0.3em] text-night-muted">
        TRUSTED BY GLOBAL BRANDS
      </p>
      <ul className="mt-5 flex flex-wrap items-center justify-between gap-x-8 gap-y-3 font-display text-lg text-white/90">
        {brands.map((b) => (
          // <li key={b}>{b}</li>
          <li className="w-16 h-16">
            <img
              className="w-full h-full object-cover invert"
              src={b}
              alt=""
            />
          </li>
        ))}
        <li className="text-sm text-white">& more</li>
      </ul>
    </div>
  );
}
