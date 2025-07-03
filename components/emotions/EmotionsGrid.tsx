'use client'

import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { useStores } from '@/stores/StoreProvider'

const EmotionsGrid = observer(() => {
  const { userStore } = useStores()

  const emotionsList = userStore.emotionsList

  useEffect(() => {
    userStore.loadEmotionsFromStorage()
  }, [])

  return (
    <div>
      {emotionsList.length === 0 && (
        <p className="text-gray-500 dark:text-gray-400">No emotions yet</p>
      )}
      {emotionsList.map((emotion) => (
        <div key={emotion.id}>{emotion.name}</div>
      ))}
    </div>
  )
})

export default EmotionsGrid