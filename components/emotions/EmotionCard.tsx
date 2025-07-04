import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { useSwipeable } from 'react-swipeable'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTrash
} from '@fortawesome/free-solid-svg-icons';
import { useStores } from '@/stores/StoreProvider'
import { Emotion } from '@/types/Emotion'
import clsx from 'clsx'
import { emotionStyles } from '@/helpers/emotionCardStyle'
import CustomButton from '../global/CustomButton'
import { ButtonStyle } from '@/enums/buttons';

type Props = {
  emotion: Emotion
  isMobile: boolean
}

export function EmotionCard({ emotion, isMobile }: Props) {
  const { userStore } = useStores()

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: emotion.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      if (!isMobile) return
      userStore.removeEmotion(emotion.id)
    },
    delta: 150,
    preventScrollOnSwipe: true,
    trackTouch: true,
    trackMouse: true,
  })

  const cardStyles = emotionStyles[emotion.name];

  return (
    <div
      {...(isMobile ? swipeHandlers: {})}
      ref={setNodeRef}
      {...attributes}
      
      style={style}
      className={clsx(
        'flex flex-col justify-between border h-fit min-h-[220px] rounded-lg p-4 shadow transition',
        isDragging && 'opacity-50',
        cardStyles.bg
      )}
    >
      <div {...listeners} className='flex flex-col gap-2'>
        <FontAwesomeIcon
          icon={cardStyles.emoji}
          className="text-2xl text-orange-500"
        />
        <h3 className="text-lg font-semibold capitalize text-gray-800 dark:text-white">
          {emotion.name}
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          {emotion.description}
        </p>
        <span className="text-xs text-gray-400 dark:text-gray-500">
          {emotion.date}
        </span>
      </div>
      {!isMobile && (
        <div className='self-end'>
          <CustomButton
            style={ButtonStyle.SECOND}
            handleClick={() => userStore.removeEmotion(emotion.id)}
          >
            <FontAwesomeIcon
              icon={faTrash}
              className="text-md text-black-500"
            />
          </CustomButton>
        </div>
      )}
    </div>
  )
}
