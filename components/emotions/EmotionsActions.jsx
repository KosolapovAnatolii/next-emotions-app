'use client'

import { observer } from 'mobx-react-lite'
import { useStores } from '@/stores/StoreProvider'
import { ButtonStyle } from "@/enums/buttons"
import CustomButton from "@/components/global/CustomButton"

const EmotionsActions = observer(() => {
  const { userStore } = useStores()

  return (
  <div className="self-end flex flex-col md:flex-row gap-2">
    <CustomButton style={ButtonStyle.PRIME} handleClick={() => userStore.openEmotionModal()}>
      Add  new emotion
    </CustomButton>
    <CustomButton style={ButtonStyle.SECOND} handleClick={() => userStore.clearEmotionsList()}>
      Clear all emotions
    </CustomButton>
  </div>
  )
})

export default EmotionsActions