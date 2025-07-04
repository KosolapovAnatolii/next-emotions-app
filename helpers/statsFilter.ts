export function filterByDate(emotionDate: string, filter: string) {
  const date = new Date(emotionDate)
  const now = new Date()

  switch (filter) {
    case 'today': {
      return (
        date.getDate() === now.getDate() &&
        date.getMonth() === now.getMonth() &&
        date.getFullYear() === now.getFullYear()
      )
    }
    case 'week': {
      const sevenDaysAgo = new Date()
      sevenDaysAgo.setDate(now.getDate() - 7)
      return date >= sevenDaysAgo
    }
    case 'month': {
      const thirtyDaysAgo = new Date()
      thirtyDaysAgo.setDate(now.getDate() - 30)
      return date >= thirtyDaysAgo
    }
    default:
      return true
  }
}
