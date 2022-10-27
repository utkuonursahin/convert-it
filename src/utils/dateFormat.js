//Returns a date string in YYYY-MM-DD format
export default function dateFormat(day=1) {
  const now = Date.now()
  const DAY_TIMESTAMP = 1000 * 60 * 60 * 24
  return new Date(now - (day*DAY_TIMESTAMP)).toISOString().split('T')[0]
}