/**
 * Skeleton card — shown while GitHub repos are loading.
 */
export default function SkeletonCard() {
  return (
    <div
      className="rounded-2xl p-5 animate-pulse"
      style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
    >
      <div className="h-4 w-2/3 rounded mb-3" style={{ background: 'var(--border)' }} />
      <div className="h-3 w-full rounded mb-2" style={{ background: 'var(--border)' }} />
      <div className="h-3 w-4/5 rounded mb-4" style={{ background: 'var(--border)' }} />
      <div className="flex gap-2">
        {[1, 2, 3].map(i => (
          <div key={i} className="h-5 w-14 rounded-full" style={{ background: 'var(--border)' }} />
        ))}
      </div>
    </div>
  )
}
