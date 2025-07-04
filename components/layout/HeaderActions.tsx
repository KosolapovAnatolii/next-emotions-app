'use client'

import { ButtonStyle } from "@/enums/buttons"
import CustomButton from "@/components/global/CustomButton"
import Link from 'next/link'

export default function HeaderActions() {
  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className="flex flex-col md:flex-row gap-2 mt-4 md:mt-0">
      <CustomButton style={ButtonStyle.PRIME} handleClick={toggleTheme}>
        Toggle Theme
      </CustomButton>
      <Link
        href='/stats'
        className='bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded hover:opacity-90 transition'
      >
        Go to stats
      </Link>
    </div>
  )
}