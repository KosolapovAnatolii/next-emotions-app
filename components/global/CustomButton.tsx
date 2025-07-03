import { ButtonType, ButtonStyle } from '@/enums/buttons'
import { ReactNode } from 'react'

interface ButtonProps {
  type?: ButtonType
  style: ButtonStyle
  handleClick?: () => void
  children: ReactNode
}

export default function CustomButton({
  type = ButtonType.BRUTTON,
  style,
  handleClick,
  children
} : ButtonProps) {
  const buttonClass = style === ButtonStyle.PRIME 
  ? 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded hover:opacity-90 transition'
  : 'px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition';

  return (
    <button
      className={buttonClass}
      type={type}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}