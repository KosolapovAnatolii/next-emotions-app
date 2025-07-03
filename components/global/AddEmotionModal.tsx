'use client'

import { useState } from 'react'
import { nanoid } from 'nanoid'
import { observer } from 'mobx-react-lite'
import { useStores } from '@/stores/StoreProvider'
import { Emotion, EmotionName } from '@/types/Emotion'
import CustomButton from './CustomButton'
import { ButtonStyle, ButtonType } from '@/enums/buttons'

const EmotionModal = observer(() => {
  const [hasError, setHasError] = useState(false)
  const { userStore } = useStores()

  if (!userStore.isAddEmotionModalOpen) return null

  function addEmotion(formData: FormData) {
    setHasError(false)

    const name = formData.get('emotion') as EmotionName | null;
    const description = formData.get('description') as 'string' | null;

    if (!description || description.trim().length === 0 || !name) {
      setHasError(true)
      return;
    }

    const date = new Date().toISOString().split('T')[0]

    const newEmotion: Emotion = {
      id: nanoid(),
      name,
      description,
      date
    }

    userStore.addEmotion(newEmotion)
    userStore.closeEmotionModal()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white dark:bg-gray-800 rounded-md shadow-lg p-6 w-[90%] max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Add Emotion</h2>
        <form action={addEmotion}>
          <select
            name="emotion"
            required
            className="block w-full mb-4 p-2 rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            {Object.values(EmotionName).map((emotion) => (
              <option key={emotion} value={emotion}>
                {emotion.charAt(0).toUpperCase() + emotion.slice(1)}
              </option>
            ))}
          </select>

          <input
            type="text"
            name='description'
            className="w-full mb-4 p-2 border rounded"
            placeholder="Discribe how are you today"
          />

          {hasError && (
            <p className="text-sm text-red-600 dark:text-red-400">
              All fields are required!
            </p>
          )}

          <div className="flex justify-end gap-2">
            <CustomButton
              style={ButtonStyle.SECOND}
              handleClick={() => userStore.closeEmotionModal()}
            >
              Cancel
            </CustomButton>
            <CustomButton
              type={ButtonType.SUBMIT}
              style={ButtonStyle.PRIME}
            >
              Save
            </CustomButton>
          </div>
        </form>
      </div>
    </div>
  )
})

export default EmotionModal
