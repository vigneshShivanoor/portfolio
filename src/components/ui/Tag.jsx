/**
 * Small coloured tag / badge.
 * active — highlighted state (used for filter buttons)
 */
export default function Tag({ label, active = false, onClick }) {
  return (
    <span
      onClick={onClick}
      className="inline-block px-3 py-0.5 rounded-full text-xs font-mono font-semibold transition-all duration-200"
      style={
        active
          ? {
              background: 'var(--accent)',
              color: '#fff',
              cursor: onClick ? 'pointer' : 'default',
            }
          : {
              background: 'transparent',
              border: '1px solid var(--border)',
              color: 'var(--muted)',
              cursor: onClick ? 'pointer' : 'default',
            }
      }
    >
      {label}
    </span>
  )
}
