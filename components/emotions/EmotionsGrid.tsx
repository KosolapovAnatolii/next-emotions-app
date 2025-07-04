'use client'

import { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import {
  DndContext,
  closestCenter,
  useSensor,
  useSensors,
  PointerSensor,
  DragEndEvent,
} from '@dnd-kit/core'
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import { useStores } from '@/stores/StoreProvider'
import { EmotionCard } from './EmotionCard'

const EmotionsGrid = observer(() => {
  const [isMobile, setIsMobile] = useState(false)
  const { userStore } = useStores()

  const emotionsList = userStore.emotionsList

  const sensors = useSensors(useSensor(PointerSensor))

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event

    if (over && active.id !== over.id) {
      const oldIndex = emotionsList.findIndex((e) => e.id === active.id)
      const newIndex = emotionsList.findIndex((e) => e.id === over.id)
      userStore.reorderEmotions(arrayMove(emotionsList, oldIndex, newIndex))
    }
  }

  useEffect(() => {
    userStore.loadEmotionsFromStorage()

    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)

    return () => window.removeEventListener('resize', checkIsMobile)
  }, [userStore])

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={emotionsList.map((e) => e.id)}
        strategy={verticalListSortingStrategy}
      >
        <div className="w-full h-fit grid grid-cols-1 lg:grid-cols-4 gap-4 p-4">
          {emotionsList.length === 0 && (
            <p className="text-gray-500 dark:text-gray-400">No emotions yet</p>
          )}
          {emotionsList.map((emotion) => (
            <EmotionCard
              key={emotion.id}
              emotion={emotion}
              isMobile={isMobile}
            />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  )
})

export default EmotionsGrid