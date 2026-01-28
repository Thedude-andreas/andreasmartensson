import type { RestroomHistoryEntry } from '../types/restroom'
import { formatDistanceToNow } from '../lib/time'

interface RestroomHistoryChartProps {
  entries: RestroomHistoryEntry[]
}

const MAX_BAR_HEIGHT = 80

export function RestroomHistoryChart({ entries }: RestroomHistoryChartProps) {
  if (!entries.length) {
    return <p className="extra-note">No urine tank increases logged past 24 h.</p>
  }

  const maxDelta = Math.max(...entries.map((entry) => entry.delta)) || 1
  return (
    <div className="restroom-chart" aria-label="Urine tank increases last 24 hours">
      {entries.map((entry) => {
        const height = Math.max(3, Math.round((entry.delta / maxDelta) * MAX_BAR_HEIGHT))
        return (
          <div key={entry.timestamp} className="restroom-chart__bar" style={{ height }}>
            <span className="restroom-chart__value">+{entry.delta.toFixed(1)}%</span>
            <span className="restroom-chart__time">{formatDistanceToNow(entry.timestamp)}</span>
          </div>
        )
      })}
    </div>
  )
}
