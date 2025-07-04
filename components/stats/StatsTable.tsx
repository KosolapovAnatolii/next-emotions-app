'use client'
import { observer } from 'mobx-react-lite'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { EmotionName } from '@/types/Emotion'
import { useStores } from '@/stores/StoreProvider'
import { useEffect, useMemo, useState } from 'react'
import { filterByDate } from '@/helpers/statsFilter'
import { emotionStyles } from '@/helpers/emotionCardStyle'

const filterOptions = [
  { label: 'All time', value: 'all' },
  { label: 'Today', value: 'today' },
  { label: 'Last 7 days', value: 'week' },
  { label: 'Last 30 days', value: 'month' },
]

const StatsTable = observer(() => {
  const { userStore } = useStores()
  const [dateFilter, setDateFilter] = useState('all')

  const filteredEmotions = useMemo(() => {
    return userStore.emotionsList.filter(emotion => filterByDate(emotion.date, dateFilter))
  }, [userStore.emotionsList, dateFilter]) 

  const total = filteredEmotions.length

  const stats = Object.values(EmotionName).map((emotion) => {
    const count = filteredEmotions.filter(e => e.name === emotion).length
    const percent = total > 0 ? ((count / total) * 100).toFixed(1) : '0.0'
    return { emotion, count, percent }
  })

  useEffect(() => {
    userStore.loadEmotionsFromStorage()
  }, [userStore])

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Emotion Statistics</h1>

      <select
        className="bg-white mb-4 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded px-3 py-1 text-sm text-gray-800 dark:text-white"
        value={dateFilter}
        onChange={e => setDateFilter(e.target.value)}
      >
        {filterOptions.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      <div className="overflow-x-auto rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">Icon</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">Emotion</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">Count</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">%</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-100 dark:divide-gray-800">
            {stats.map(({ emotion, count, percent }) => (
              <tr key={emotion}>
                <td className="px-4 py-3 text-gray-700 dark:text-gray-200">
                  <FontAwesomeIcon icon={emotionStyles[emotion].emoji} className="text-lg text-orange-500" />
                </td>
                <td className="px-4 py-3 capitalize text-sm text-gray-700 dark:text-gray-200">{emotion}</td>
                <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-200">{count}</td>
                <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-200">{percent}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
})

export default StatsTable