import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import {
  faSmile,
  faFrown,
  faAngry,
  faMeh,
  faGrinStars,
  faPeace
} from '@fortawesome/free-solid-svg-icons';
import { EmotionName } from "@/types/Emotion";

export const emotionStyles: Record<EmotionName, { emoji: IconDefinition; bg: string }> = {
  [EmotionName.Happy]: { emoji: faSmile, bg: 'bg-yellow-100 dark:bg-yellow-900' },
  [EmotionName.Sad]: { emoji: faFrown, bg: 'bg-blue-100 dark:bg-blue-900' },
  [EmotionName.Angry]: { emoji: faAngry, bg: 'bg-red-100 dark:bg-red-900' },
  [EmotionName.Anxious]: { emoji: faMeh, bg: 'bg-purple-100 dark:bg-purple-900' },
  [EmotionName.Excited]: { emoji: faGrinStars, bg: 'bg-pink-100 dark:bg-pink-900' },
  [EmotionName.Calm]: { emoji: faPeace, bg: 'bg-green-100 dark:bg-green-900' },
}