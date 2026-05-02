/**
 * Renders the standard section heading used across all sections.
 * label  – small uppercase label above the title
 * title  – main heading with gradient accent on `highlight`
 * highlight – word(s) to colour with gradient (optional)
 */
export default function SectionHeading({ label, title, highlight }) {
  const parts = highlight
    ? title.split(highlight)
    : [title]

  return (
    <div className="mb-12 text-center">
      {label && (
        <span
          className="inline-block mb-3 px-4 py-1 rounded-full text-xs font-mono font-semibold tracking-widest uppercase"
          style={{ color: 'var(--accent)', border: '1px solid var(--accent)', opacity: 0.8 }}
        >
          {label}
        </span>
      )}
      <h2
        className="font-display font-bold text-3xl md:text-4xl"
        style={{ color: 'var(--text)' }}
      >
        {highlight ? (
          <>
            {parts[0]}
            <span className="gradient-text">{highlight}</span>
            {parts[1]}
          </>
        ) : title}
      </h2>
    </div>
  )
}
