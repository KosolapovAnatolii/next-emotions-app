'use client'

import { observer } from 'mobx-react-lite'
import { useStores } from '@/stores/StoreProvider'
import { ButtonStyle } from "@/enums/buttons"
import CustomButton from "@/components/global/CustomButton"

const HeaderActions = observer(() => {
  const { userStore } = useStores()

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark')
  }

  return (
  <div className="flex flex-col md:flex-row gap-2 mt-4 md:mt-0">
    <CustomButton style={ButtonStyle.PRIME} handleClick={toggleTheme}>
      Toggle Theme
    </CustomButton>
    <CustomButton style={ButtonStyle.SECOND} handleClick={() => userStore.openEmotionModal()}>
      Add  new emotion
    </CustomButton>
  </div>
  )
})

export default HeaderActions