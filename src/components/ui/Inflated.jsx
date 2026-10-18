// Glossy pink bubble lettering. Replace with an exported image if you prefer.
export default function Inflated({ text, className = '' }) {
  return <span data-text={text} className={`inflated ${className}`}>{text}</span>
}